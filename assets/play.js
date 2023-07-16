function PerguntaMolde(pergunta, alternativas, verdadeira) {
    this.pergunta = pergunta;
    this.alternativas = alternativas;
    this.verdadeira = verdadeira;
  }
  
  // CRIANDO AS PERGUNTAS
  const pergunta1 = new PerguntaMolde("Quem inventou a Lâmpada?", {a: "Nikola Tesla", b: "Thomas Edson", c: "Darwin", d: "Henry Ford"}, "b");
  const pergunta2 = new PerguntaMolde("Quantas linhas tem no logo do serviço de streaming de música Spotify?", {a: "2 linhas", b: "3 linhas", c: "4 linhas", d: "5 linhas"}, "b");
  const pergunta3 = new PerguntaMolde("O finlandês é uma lingua", {a: "Uralica", b: "Camita", c: "Semita", d: "Indo-europeia"}, "d");
  const pergunta4 = new PerguntaMolde("Como se chama o tempo de um verbo puro, sem tempo definido?", {a: "Pretérito", b: "Aoristo", c: "Puro", d: "imaculado"}, "b");
  const pergunta5 = new PerguntaMolde("Qual a moeda oficial do Reino Unido?", {a: "Peso", b: "Euro", c: "Libra Esterlina", d: "Franco"}, "c");
  const pergunta6 = new PerguntaMolde("Qual o menor osso do corpo humano?", {a: "Bigorna", b: "Metacarpo", c: "Martelo", d: "Estribo"}, "d");
  const pergunta7 = new PerguntaMolde("Qual o vice campeão da copa do mundo de 2018?", {a: "Inglaterra", b: "Belgica", c: "Croacia", d: "Alemanha"}, "c");
  const pergunta8 = new PerguntaMolde("Em que ano o Brasil entrou na segunda guerra mundial?", {a: "1942", b: "1940", c: "1944", d: "1937"}, "a");
  const pergunta9 = new PerguntaMolde("Quantos elementos quimicos existem na tabela periódica?", {a: "108", b: "112", c: "118", d: "111"}, "c");
  const pergunta10 = new PerguntaMolde("Qual o maior país do continente africano?", {a: "Argélia", b: "Egito", c: "Nigéria", d: "Africa do Sul"}, "a");
  // CRIANDO AS PERGUNTAS

  const result = document.querySelector('#result');
  
  result.innerHTML = `<h1 class="question">${pergunta1.pergunta}</h1>
  <div class="alternatives">
    <div class="item" onclick="selecionarItem(this, 'a')">a) ${pergunta1.alternativas.a}</div>
    <div class="item" onclick="selecionarItem(this, 'b')">b) ${pergunta1.alternativas.b}</div>
    <div class="item" onclick="selecionarItem(this, 'c')">c) ${pergunta1.alternativas.c}</div>
    <div class="item" onclick="selecionarItem(this, 'd')">d) ${pergunta1.alternativas.d}</div>
  </div>`;
  
  function selecionarItem(elemento, alternativaSelecionada) {
    var itens = document.getElementsByClassName("item");
    for (var i = 0; i < itens.length; i++) {
      itens[i].classList.remove("selecionado");
    }
  
    elemento.classList.add("selecionado");

    if (alternativaSelecionada === pergunta1.verdadeira) {
        elemento.classList.add("verdadeiro");
      } else {
        elemento.classList.add("falso");
      }
  }
  
