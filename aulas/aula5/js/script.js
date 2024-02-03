console.log('olá, portal de notícias')

const marca = document.getElementById('marca-principal')
console.log(marca)
marca.innerText = "alguma outra coisa" 

marca.onmouseenter = function() {
  console.log('onhover:', this)
  this.classList.add('meu-hover-customizado')
}

marca.onmouseleave = function() {
  this.classList.remove('meu-hover-customizado')
}
