const assert = require('assert')

const { 
    ObterNome
 } = require('./Consumer')

describe('descricao do teste',function (){
it('Descricao doque deve fazer', async () =>{

const esperando = [{
nome: 'R2-D2',
peso: '96'
}]

const nomeBase = `r2-d2`
const resultado = await ObterNome(nomeBase)
assert.deepEqual(resultado, esperando)

    })
})

