const resultado = document.getElementById('resultado')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let indice = ''

    if (imc < 18.5) {
      indice = 'Abaixo do peso'
    } else if (imc < 25) {
      indice = 'Peso normal'
    } else if (imc < 30) {
      indice = 'Acima do peso'
    } else if (imc < 35) {
      indice = 'Obesidade Grau I'
    } else if (imc < 41) {
      indice = 'Obesidade Grau II'
    } else {
      indice = 'Obesidade Grau III'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${indice})`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}