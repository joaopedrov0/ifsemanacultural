// o objetivo disso aqui é criar uma função que pegue uma string, quebre ela em letras e atribua a cada uma delas uma cor diferente de um ciclo pré-definido

const colorCycle = [
    '--custom-black',
    '--custom-purple',
    '--custom-blue',
    '--custom-yellow',
    '--custom-green',
    '--custom-red',
    '--custom-dark-blue',
    '--custom-dark-blue'

]

function CustomLetters(text){
    let res = ''
    let tempCycle = []
    while (tempCycle.length < text.length){
        tempCycle = tempCycle.concat(colorCycle)
    }
    for(let i=0;i<text.length;i++){
        res+= `<span style="color:var(${tempCycle[i]})">${text[i]}</span>`
    }
    return res
}

function transformAllCustom(){
    allHTML = document.querySelectorAll(".custom-text")
    for(let tag of allHTML){
        tag.innerHTML = CustomLetters(tag.innerHTML)
    }
}

transformAllCustom()