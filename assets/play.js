//iniciando com o home.html
function start(){
  const username = document.querySelector("#username").value;

  if (username === ""){
    alert("Por favor, insira um nome para começarmos");
  }else {
    window.location.href = "play.html"}
}
//iniciando com o home.html


function PerguntaMolde(pergunta, alternativas, verdadeira) {
    this.pergunta = pergunta;
    this.alternativas = alternativas;
    this.verdadeira = verdadeira;
  }
  
  // CRIANDO AS PERGUNTAS
  const perguntas = [
    pergunta1 = new PerguntaMolde("Quem inventou a Lâmpada?", {a: "Nikola Tesla", b: "Thomas Edson", c: "Darwin", d: "Henry Ford"}, "b"),
    pergunta2 = new PerguntaMolde("Quantas linhas tem no logo do serviço de streaming de música Spotify?", {a: "2 linhas", b: "3 linhas", c: "4 linhas", d: "5 linhas"}, "b"),
    pergunta3 = new PerguntaMolde("O finlandês é uma lingua", {a: "Uralica", b: "Camita", c: "Semita", d: "Indo-europeia"}, "d"),
    pergunta4 = new PerguntaMolde("Como se chama o tempo de um verbo puro, sem tempo definido?", {a: "Pretérito", b: "Aoristo", c: "Puro", d: "imaculado"}, "b"),
    pergunta5 = new PerguntaMolde("Qual a moeda oficial do Reino Unido?", {a: "Peso", b: "Euro", c: "Libra Esterlina", d: "Franco"}, "c"),
    pergunta6 = new PerguntaMolde("Qual o menor osso do corpo humano?", {a: "Bigorna", b: "Metacarpo", c: "Martelo", d: "Estribo"}, "d"),
    pergunta7 = new PerguntaMolde("Qual o vice campeão da copa do mundo de 2018?", {a: "Inglaterra", b: "Belgica", c: "Croacia", d: "Alemanha"}, "c"),
    pergunta8 = new PerguntaMolde("Em que ano o Brasil entrou na segunda guerra mundial?", {a: "1942", b: "1940", c: "1944", d: "1937"}, "a"),
    pergunta9 = new PerguntaMolde("Quantos elementos quimicos existem na tabela periódica?", {a: "108", b: "112", c: "118", d: "111"}, "c"),
    pergunta10 = new PerguntaMolde("Qual o maior país do continente africano?", {a: "Argélia", b: "Egito", c: "Nigéria", d: "Africa do Sul"}, "c"),
    pergunta11 = new PerguntaMolde("Quem foi o primeiro presidente dos Estados Unidos?", {a: "George Washington", b: "Thomas Jefferson", c: "Abraham Lincoln", d: "Franklin D. Roosevelt"}, "a"),
    pergunta12 = new PerguntaMolde("Qual é o maior planeta do sistema solar?", {a: "Júpiter", b: "Saturno", c: "Netuno", d: "Urano"}, "a"),
    pergunta13 = new PerguntaMolde("Quem escreveu a famosa obra 'Romeu e Julieta'?", {a: "William Shakespeare", b: "Charles Dickens", c: "Jane Austen", d: "Mark Twain"}, "a"),
    pergunta14 = new PerguntaMolde("Qual é o país com a maior população do mundo?", {a: "Índia", b: "Brasil", c: "Estados Unidos", d: "China"}, "d"),
    pergunta15 = new PerguntaMolde("Qual é o maior oceano da Terra?", {a: "Oceano Atlântico", b: "Oceano Índico", c: "Oceano Pacífico", d: "Oceano Ártico"}, "c"),
    pergunta16 = new PerguntaMolde("Quem pintou a obra 'Mona Lisa'?", {a: "Vincent van Gogh", b: "Leonardo da Vinci", c: "Pablo Picasso", d: "Michelangelo"}, "b"),
    pergunta17 = new PerguntaMolde("Qual é a capital da Austrália?", {a: "Sydney", b: "Melbourne", c: "Brisbane", d: "Camberra"}, "d"),
    pergunta18 = new PerguntaMolde("Quem foi o primeiro ser humano a pisar na Lua?", {a: "Buzz Aldrin", b: "Neil Armstrong", c: "Yuri Gagarin", d: "Alan Shepard"}, "b"),
    pergunta19 = new PerguntaMolde("Qual é o maior deserto do mundo?", {a: "Deserto do Saara", b: "Deserto de Gobi", c: "Deserto de Atacama", d: "Deserto da Namíbia"}, "a"),
    pergunta20 = new PerguntaMolde("Qual é a montanha mais alta do mundo?", {a: "Monte Kilimanjaro", b: "Monte Everest", c: "Monte McKinley", d: "Monte Vinson"}, "b")
  ];
  // CRIANDO AS PERGUNTAS

  let perguntaAtualIndex = 0;

  function exibirPerguntaAtual() {
    const perguntaAtual = perguntas[perguntaAtualIndex];
    const result = document.querySelector('#result');
    result.innerHTML = `
      <h1 class="question">${perguntaAtual.pergunta}</h1>
      <div class="alternatives">
        <div class="item" onclick="selecionarItem(this, 'a')">a) ${perguntaAtual.alternativas.a}</div>
        <div class="item" onclick="selecionarItem(this, 'b')">b) ${perguntaAtual.alternativas.b}</div>
        <div class="item" onclick="selecionarItem(this, 'c')">c) ${perguntaAtual.alternativas.c}</div>
        <div class="item" onclick="selecionarItem(this, 'd')">d) ${perguntaAtual.alternativas.d}</div>
      </div>
    `;
  }
  
  function selecionarItem(elemento, alternativaSelecionada) {
    var itens = document.getElementsByClassName("item");
    for (var i = 0; i < itens.length; i++) {
      itens[i].classList.remove("selecionado");
    }
  
    elemento.classList.add("selecionado");
    const perguntaAtual = perguntas[perguntaAtualIndex];

    const exibirverdadeira = perguntaAtual.verdadeira

    if (alternativaSelecionada === perguntaAtual.verdadeira) {
        elemento.classList.add("verdadeiro");
        console.log("resposta correta")
      } else {
        elemento.classList.add("falso");
        console.log("resposta incorreta")
      }
      setTimeout(proximaPergunta, 1000);
  }

  function proximaPergunta() {
    perguntaAtualIndex++;
  
    if (perguntaAtualIndex >= perguntas.length) {
      backtohome();
    } else {
      exibirPerguntaAtual();
    }
  }
  
  exibirPerguntaAtual();
  

  function backtohome(){
    window.location.href = "index.html"
  }

  function restart(){
    window.location.href = "play.html"
  }

  document.addEventListener('DOMContentLoaded', function() {
    gsap.to('body', { opacity: 1, duration: 1 });
  });
