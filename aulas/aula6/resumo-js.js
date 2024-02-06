const meuNome = 'Yehoshua' // 'c' "string" ``
const historia = `
aspodkjaspdkoas
asdopaksdpoaskd
asdpoaskdasp
asdpokasdpokas
`
const idade = 123_000_000
const souLegal = true // false

function digaMeuNome() {
  return 'Olá, ' + nome
}

const digaDeNovo = () => {
  return `Olá, ${nome + '!'}`
}

const yehoshua = {
  nome: 'Yehoshua Oliveira',
  idade: idade,
  historia,
  // historia: historia,
  // ^- equivalente à linha anterior
}

const timeDeFutebolPreferido = null
const timeDeHockeyPreferido = undefined

const linguagensDeProgramação = ['Java', "JavaScript", `CSS` + 3]

let idadeAgora = 25
idadeAgora = idadeAgora + 1
idadeAgora += 1

console.log('Variáveis iguais? [idade, idadeAgora]', idade == idadeAgora)
console.log('Igual? [idade, idade como string]', idade == '123000000')
console.log('Estritamente igual? [idade, idade como string]', idade === '123000000')

const idadeMenorDoQue18 = idadeAgora < 18
const jaEhSenhor = idadeAgora >= 65

console.log('Menor de idade?', idadeMenorDoQue18)
console.log('Idade adulta?', !idadeMenorDoQue18 && !jaEhSenhor)
