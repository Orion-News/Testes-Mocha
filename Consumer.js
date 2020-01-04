const {
    get
} = require('axios')

const URL = `https://swapi.co/api/people`
ObterNome('r2-d2')
async function ObterNome(x){
    const url = `${URL}/?search=${x}&format=json`
    const resultado = await get(url)
    return resultado.data.results.map(mapear)
}

function mapear(item){
    return {
        nome: item.name,
        peso: item.height
    }
}

// main()
// async function main(){
//     try{
// const resultado = await ObterNome('r2-d2')


// console.log(`Resultado mapeado: `,resultado)

//     }catch(error){
//         console.error(`Berrouuuuuuu ----${error}----`)
//     }
// }
module.exports = {
    ObterNome
}

