import * as Components from './components/'

import { agrupaPorMaiorEMenor, eDeMaior as eMaiorDeIdade } from './modules/utils'

import pessoasMock from './mock/pessoas'

// console.log('eDeMaior', eMaiorDeIdade(10));
// console.log('eDeMaior', eMaiorDeIdade(20));

// console.log(agrupaPorMaiorEMenor(pessoasMock));

const { maiores, menores } = agrupaPorMaiorEMenor(pessoasMock)

const html = `
  ${Components.HelloWorld('Programador a bordo')}
  <h3>Maiores</h3>
  ${Components.List(maiores)}
  <h3>Menores</h3>
  ${Components.List(menores)}
`

document.querySelector('#app').innerHTML = html