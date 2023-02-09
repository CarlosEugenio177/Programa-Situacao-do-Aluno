//criando referencia ao form e elementos de resposta
const form = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')


form.addEventListener('submit', (e) =>{
    e.preventDefault() // evita envio no form
    const nome = form.inNome.value // obtém os valores do 
    const nota1 = Number(form.inNota1.value)
    const nota2 = Number(form.inNota2.value)
    const nota3 = Number(form.inNota3.value)
    const nota4 = Number(form.inNota4.value)
    const media = (nota1+nota2+nota3+nota4)/ 4 //calculando media 
    resp1.innerText = `Média das notas ${media.toFixed(2)}`

    //criando condições
    if(media >= 7){
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = "green" 
    }else if (media >= 4){
        resp2.innerText = `Atenção ${nome}. Você está em exame`
        resp2.style.color = "blue"
    }else{
        resp2.innerText =`ops ${nome}...Você foi reprovado(a)`
        resp2.style.color ="red"
    }

})
