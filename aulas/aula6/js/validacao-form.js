const forms = document.getElementsByTagName('form')
const regexes = {
  temEspaco: /\w+ \w+/,
  email: /\w+@\w+\.\w+/,
  asd:   /\S+@\S+\.\S+/,
}

console.log('forms here:', forms)

// C++: for (int i = 0; i < N; i++) {}

// C#: foreach (var a : vetor) {}
// Java: for (Object a : vetor) {}
// for (const form of forms) {
//   console.log('for each', form)
// }

for (let i = 0; i < forms.length; i++) {
  const form = forms[i]
  // form....
  // console.log('for normal', form)
  // form.onsubmit = function() {
  //   console.log('enviei o form! 1')
  // }
  // form.addEventListener('submit', function() {
  //   console.log('enviei o form! addeventlistener')
  // })
  form.addEventListener('submit', validarForm)
}

function validarForm(e) {
  // console.log('enviei o form! addeventlistener')
  // console.log('o form enviado', this)
  // console.log('evento:', e)
  e.preventDefault()

  for (const input of this) {
    // console.log('input: ', input)

    // if (input.type === 'text') validateText(input)
    // else if (input.type === 'date') validateDate(input)
    // else if (input.type === 'email') validateEmail(input)
    
    switch (input.type) {
      case 'text': validateText(input)
      case 'date': validateDate(input)
      case 'email': validateEmail(input)
    }
  }

  // const result = this.reportValidity()
  // console.log('validity', result)
}

function validateText(input) {
  // console.log(`validando o valor: "${input.value}"`)

  const value = input.value
  const deveTerEspaco = input.dataset['nomeESobrenome'] === "true"
  console.log('minleng', input.minLength, value.length < input.minLength)

  if (input.required && value == "") {
    exibirMensagemDeErro(input, 'O campo é obrigatório')
  }
  else if (input.minLength > 0 && value.length < input.minLength) {
    // const asdasd = 'O campo deve ter ' + input.minlength + ' caracteres'
    exibirMensagemDeErro(input, `O campo deve ter ao menos ${input.minLength} caracteres`)
  }
  else if (deveTerEspaco && !regexes.temEspaco.test(input.value)) {
    exibirMensagemDeErro(input, 'Deve haver ao menos um espaço!')
  }
  else {
    exibirMensagemDeErro(input, '')
  }
}

/**
 * $('asdad').click(function () {
 *   $('sadasd').blablabla()
 * })
 * 
 * const $el1 = $('asdad')
 * const $el2 = $('sadasd')
 * 
 * $el1.click(function () {
 *   $el2.blablabla()
 * })
 */

function validateDate(input) {
  const value = input.value
  const minAsDate = new Date(input.min + 'T00:00:00')
  const valueAsDate = new Date(input.value + 'T00:00:00')

  const compareDates = isDate(minAsDate) && isDate(valueAsDate)

  if (input.required && value == "") {
    exibirMensagemDeErro(input, 'O campo é obrigatório')
  } 
  else if (input.min && input.min.length > 0 && compareDates && valueAsDate < minAsDate) {
    console.log('input min', input.min, typeof input.value, input.value)
    console.log('parsed dates', minAsDate, valueAsDate)
    exibirMensagemDeErro(input, `A data mínima deve ser ${input.min}`)
  } 
  else {
    exibirMensagemDeErro(input, '')
  }
}

function validateEmail(input) {

  const value = input.value
  console.log('email', input)

  if (input.required && value == "") {
    exibirMensagemDeErro(input, 'O email é obrigatório')
  } else if (!regexes.email.test(input.value)) {
    exibirMensagemDeErro(input, 'O email deve ter formato de email!')
  } else {
    exibirMensagemDeErro(input, '')
  }
}

function exibirMensagemDeErro(input, msg) {
  // console.log(`adicionando msg "${msg}" em`, input)

  if (!input._ioxua_msgErro) {
    var el = document.createElement('span')
    el.classList.add('msg-erro')
    input.parentNode.appendChild(el)
    input._ioxua_msgErro = el
  }

  input._ioxua_msgErro.innerText = msg
  if (msg.length > 0) {
    input.classList.add('tem-erro')
  } else { 
    input.classList.remove('tem-erro')
  }
}


/***
 * função utilitária para identificar se um objeto é realmente uma
 * instância _válida_ de Date.
 * @see https://stackoverflow.com/a/643827
 */
function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]'
}
