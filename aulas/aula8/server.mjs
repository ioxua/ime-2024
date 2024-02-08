import express from 'express'
import { base, lorem } from './templates.mjs'

const app = express()

const noticias = [
  { url: '/noticia1', texto: 'Notícia 1'},
  { url: '/noticia2', texto: 'Notícia 2'},
]

const gerarLinksNoticias = () => {
  let html = ''
  
  for (const noticia of noticias) {
    html += `<li><a class="dropdown-item" href="${noticia.link}">
      ${noticia.texto}
    </a></li>`
  }

  return html

  // return noticias.map(it => {
  //   return `<li><a class="dropdown-item" href="${it.link}">${it.texto}</a></li>`
  // }).join('')
  
}

app.get('/', function (req, res) {
  const html = base
    .replace('{{titulo}}', 'Portal de Notícias')
    .replace('{{tituloNoticia}}', 'Selecione uma notícia no menu superior')
    .replace('{{corpo}}', "")
    .replace('{{linksNoticias}}', gerarLinksNoticias())

  res.send(html)
})

app.get('/noticia1', function (req, res) {
  const html = base
    .replace('{{titulo}}', 'Notícia 1 - Portal de Notícias')
    .replace('{{tituloNoticia}}', 'Notícia 1')
    .replace('{{corpo}}', lorem)
    .replace('{{linksNoticias}}', gerarLinksNoticias())

  res.send(html)
})

app.get('/noticia2', function (req, res) {
  const html = base
    .replace('{{titulo}}', 'Notícia 2 - Portal de Notícias')
    .replace('{{tituloNoticia}}', 'Notícia 2')
    .replace('{{corpo}}', lorem)
    .replace('{{linksNoticias}}', gerarLinksNoticias())

  res.send(html)
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
