var perguntas = document.querySelectorAll('.pergunta');
var perguntaAtual = 0;
var respostas = {};

function proximoPergunta() {
    var inputs = perguntas[perguntaAtual].querySelectorAll('input[type="radio"]');
    var respostaSelecionada = '';
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            respostaSelecionada = inputs[i].id;
            break;
        }
    }

    if (respostaSelecionada !== '') {
        if (respostas[respostaSelecionada]) {
            respostas[respostaSelecionada]++;
        } else {
            respostas[respostaSelecionada] = 1;
        }
    }

    perguntas[perguntaAtual].classList.remove('ativa');
    perguntaAtual = (perguntaAtual + 1) % perguntas.length;
    perguntas[perguntaAtual].classList.add('ativa');

    if (perguntaAtual === 0) {
        exibirResultados();
    }
}

function voltarPergunta() {
    perguntas[perguntaAtual].classList.remove('ativa');
    perguntaAtual = (perguntaAtual - 1 + perguntas.length) % perguntas.length;
    perguntas[perguntaAtual].classList.add('ativa');
}

 //iniciando a função ao clicar no botão
 document.getElementById("btn").onclick = function(){
    //declarando 4 contadores
    var contAguia=0;
    var contLobo=0;
    var contTubarao=0;
    var contGato=0;

    //obtendo todos os radios e atribuindo para radio
    var radio = document.getElementsByClassName("pergunta");
    //percorrendo todas as posições da variavel radio
    for(var i=0; i<radio.length; i++){
        //testando os radios para ver se esta selecionado
        if(radio[i].checked){
            //testando qual o valor do radio selecionado
            //contando os radios selecionados em cada animal
            if(radio[i].value==="aguia"){
                contAguia++;
            } else if(radio[i].value==="lobo"){
                contLobo++;
            } else if(radio[i].value==="tubarao"){
                contTubarao++;
            } else if(radio[i].value==="gato"){
                contGato++;
            }
        }
    }
    //criando uma variavel resultado e atribuindo
    //texto interpolado com contadores
    var resultado = `Aguia = ${contAguia}<br>
    Tubarao = ${contTubarao}<br>
    Lobo = ${contLobo} <br>
    Gato = ${contGato}`

    document.getElementById("resultado").innerHTML = ("resultado");
 }