/*
  - Construa uma aplicação de conversão de moedas. O HTML e CSS são os que você
    está vendo no browser;
  - Você poderá modificar a marcação e estilos da aplicação depois. No momento, 
    concentre-se em executar o que descreverei abaixo;
    - Quando a página for carregada: 
      - Popule os <select> com tags <option> que contém as moedas que podem ser
        convertidas. "BRL" para real brasileiro, "EUR" para euro, "USD" para 
        dollar dos Estados Unidos, etc.
      - O option selecionado por padrão no 1º <select> deve ser "USD" e o option
        no 2º <select> deve ser "BRL";
      - O parágrafo com data-js="converted-value" deve exibir o resultado da 
        conversão de 1 USD para 1 BRL;
      - Quando um novo número for inserido no input com 
        data-js="currency-one-times", o parágrafo do item acima deve atualizar 
        seu valor;
      - O parágrafo com data-js="conversion-precision" deve conter a conversão 
        apenas x1. Exemplo: 1 USD = 5.0615 BRL;
      - O conteúdo do parágrafo do item acima deve ser atualizado à cada 
        mudança nos selects;
      - O conteúdo do parágrafo data-js="converted-value" deve ser atualizado à
        cada mudança nos selects e/ou no input com data-js="currency-one-times";
      - Para que o valor contido no parágrafo do item acima não tenha mais de 
        dois dígitos após o ponto, você pode usar o método toFixed: 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    - Para obter as moedas com os valores já convertidos, use a Exchange rate 
      API: https://www.exchangerate-api.com/;
      - Para obter a key e fazer requests, você terá que fazer login e escolher
        o plano free. Seus dados de cartão de crédito não serão solicitados.
*/

const currencyOneEl = document.querySelector('[data-js="currency-one"]')
const currencyTwoEl = document.querySelector('[data-js="currency-two"]')

const getErrormessage = errorType => ({
  'unsupported-code': 'A moeda não existe em nosso banco de dados.',
  'malformed-request': 'O endpoint do seu request precisa seguir a estrutura a seguir: https://www.exchangerate-api.com/docs/standard-requests',
  'invalid-key': 'A chave da API não é válida.',
  'inative-account': 'seu endereço de e-mail não foi confirmado.',
  'quota-reached': 'Sua conta alcançou o limite de requests permitidos em seu plano atual.'
})[errorType]
const url =
  'https://v6.exchangerate-api.com/v6/d778ce79b0c4b58820882707/latest/USD'

const fetchExchangeRate = async () => {
  try {
    const response = await fetch(url)
    const exchangeRateData = await response.json()

    if (exchangeRateData.result === 'error') {
      throw new Error(getErrormessage(exchangeRateData['error-type']))
    }
  } catch (err) {
    alert(err.message)
  }
}

fetchExchangeRate()

const option = `<option>oi</option>`

currencyOneEl.innerHTML = option
currencyTwoEl.innerHTML = option

console.log(currencyOneEl, currencyTwoEl)
