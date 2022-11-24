const inputNota1 = document.getElementById("nota1");
const inputNota2 = document.getElementById("nota2");
const inputNota3 = document.getElementById("nota3");
const inputNota4 = document.getElementById("nota4");
const resultado = document.getElementById("resultado");

const calcularMedia = () => {
    const nota1 = inputNota1.value;
    const nota2 = inputNota2.value;
    const nota3 = inputNota3.value;
    const nota4 = inputNota4.value;

    const media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4;
    let conceito = "";

    const notaBoa = () => {
        resultado.innerHTML = 
        `<div id="resultado"> 
            <h2>Parabens, voce foi um otimo aluno com a média de ${media}, continue assim</h2>
        </div>`
    
        conceito = "Bom";
    }
    const notaRegular = () => {
        resultado.innerHTML = 
        `<div id="resultado"> 
            <h2>Sua nota foi ${media}, melhore</h2>
        </div>`
    
        conceito = "Regular";
    
    }
    const notaRuim = () => {
        resultado.innerHTML = 
        `<div id="resultado"> 
            <h2>Você foi um pessimo aluno com média ${media}, estude mais</h2>
        </div>`
    
        conceito = "Ruim";
    }

    if(media >= 9){
        notaBoa()
    }
    else if(media >= 7){
        notaRegular()
    }
    else{
        notaRuim()
    }

    switch(conceito){
       
        case "Bom":
            alert("Parabens, voce está de ferias e nao precisa estudar")
            break;
        case "Regular":
            alert("Tá de ferias mas passou por pouco")
            break;
        case "Ruim":
            alert("Vish, deu ruim, ta de recuperação!")
            break;
    }
}
