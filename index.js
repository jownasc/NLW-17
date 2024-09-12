/* let metas = ['Mayk', 'alo'] 
console.log(metas[0] + " " + metas[1])
console.log(metas[1] + " " + metas[0]) 
Array

*/

//metodo
let meta = {
    value: 'Ler um livro todo mês',
    //address: 2,
    checked: true,
    /*log (info) => 
    {
        console.log(info)
    }*/
}

let metas = [
    meta,
    {
        value: "caminhar 20 minutos todos os dias",
        checked: false
    }
]

// meta.value ("Não é mais ler um livro")
// console.log(meta.value)
console.log(metas[1].value)

// function //Arrow function
const criarMeta = () => {}