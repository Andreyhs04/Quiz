let caixaPergunta = document.getElementById('box');
let elementoPergunta = document.getElementById('pergunta');
let answerButtons = document.getElementById('answerButtons');
let feedback = document.getElementById('feedback');

let imgIndice = 0;
let IMAGENS = ["img/imagem1.png", "img/imagem2.png", "img/imagem3.png", "img/imagem4.png", "img/imagem5.png", ];
const IMG = document.getElementById('carrosselImagem');


let erros = 0;
let acertos = 0;

const PERGUNTAS = [
    {
        pergunta:'Vermelho + azul e igual a qual cor ?',
        respostas: [
            {texto: 'Amarelo', correta: false},
            {texto: 'Rosa', correta: false},
            {texto: 'Verde', correta: false},
            {texto: 'Violeta', correta: true}
        ]
    },

    {
        pergunta:'quantos fuso horários tem o brasil',
        respostas: [
            {texto: '4', correta: true},
            {texto: '5', correta: false},
            {texto: '1', correta: false},
            {texto: '3', correta: false}
        ]
    },

    {
        pergunta:'qual é a fórmula de pi?',
        respostas: [
            {texto: ' 3,14', correta: false},
            {texto: ' 3,14...', correta: false},
            {texto: 'A = π r²', correta: true},
            {texto: 'Sei la boy', correta: false}
        ]
    },

    {
        pergunta:'qual a fórmula da glicose?',
        respostas: [
            {texto: 'C₆H₁', correta: false},
            {texto: 'C₆H₁₂O₆', correta: true},
            {texto: '2BNh2', correta: false},
            {texto: 'ela nao tem uma formula', correta: false}
        ]
    },

    {
        pergunta:'Quais sao os fungos que indicam o bom ar?',
        respostas: [
            {texto: 'Penicillium que se alteram de cor de acordo', correta: false},
            {texto: 'Cladosporium Pela capacidade de mostrar pelo odor', correta: false},
            {texto: 'Ele nao existe', correta: false},
            {texto: 'Sao os liquens qaue possuem tal capacidade', correta: true}
        ]
    }
];

let indicePerguntaAtual = 0

function mostrarPergunta(pergunta){
    elementoPergunta.innerHTML = pergunta.pergunta;
    answerButtons.innerHTML='';
    pergunta.respostas.forEach(respostas => {
        const BOTAO = document.createElement('button');
        BOTAO.innerText = respostas.texto;
        BOTAO.classList.add('answerButton');
        BOTAO.addEventListener('click', () => selecionarResposta(respostas))
        answerButtons.appendChild(BOTAO);
    })
;}

function selecionarResposta(resposta){
    const CORRETA = resposta.correta;
    
    if(CORRETA === true){
        indicePerguntaAtual++
        feedback.innerText = ''
        acertos += 10;
        imgIndice += 1;
        carregar()
    }

    else if( erros >= 2 ){
        indicePerguntaAtual = 0
        erros = 0;
        acertos = 0;
        imgIndice = 0;
        carregar()
        mostrarPergunta(PERGUNTAS[indicePerguntaAtual])
        alert('Limite de erros atingidos')
    }

    else{
        feedback.innerText = 'Resposta incorreta!'
        feedback.style.color = 'red'
        erros += 1
    }


    
    if(indicePerguntaAtual < PERGUNTAS.length){
        mostrarPergunta(PERGUNTAS[indicePerguntaAtual]);
    }
    else{
        elementoPergunta.style.display = 'none'
        answerButtons.style.display = 'none'
        feedback.innerText = 'parabéns ' + acertos + ' pontos'
        feedback.style.color = 'green'
        

        const RECOMECO = confirm('Gostaria de recomeçar');
        if (RECOMECO === true){
            indicePerguntaAtual = 0;
            acertos = 0;
            erros = 0;
            imgIndice = 0
            mostrarPergunta(PERGUNTAS[indicePerguntaAtual])
            elementoPergunta.style.display = 'block'
            answerButtons.style.display = 'flex'
            carregar()
        }
        else{
            feedback.style.fontSize = 40 + 'px';
        }

        
}}

function carregar() {
    IMG.src = IMAGENS[imgIndice];
}

mostrarPergunta(PERGUNTAS[indicePerguntaAtual])

carregar()