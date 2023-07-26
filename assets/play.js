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
  const perguntas = [];

  perguntas.push(new PerguntaMolde("Quem foi o autor da teoria da relatividade?", {a: "Isaac Newton", b: "Albert Einstein", c: "Galileu Galilei", d: "Marie Curie"}, "b"))
  perguntas.push(new PerguntaMolde("Qual é o país com a maior população do mundo?", {a: "Brasil", b: "Estados Unidos", c: "China", d: "Índia"}, "d"))
  perguntas.push(new PerguntaMolde(`Quem escreveu a peça de teatro "Romeu e Julieta"?`, {a: "William Shakespeare", b: "Charles Dickens", c: "Jane Austen", d: "Mark Twain"}, "a"))
  perguntas.push(new PerguntaMolde("Qual é o elemento químico mais abundante na crosta terrestre?", {a: "Ferro", b: "Oxigênio", c: "Carbono", d: "Silício"}, "b"))
  perguntas.push(new PerguntaMolde("Quem foi o primeiro ser humano a pisar na Lua?", {a: "Neil Armstrong", b: "Buzz Aldrin", c: "Yuri Gagarin", d: "John Glenn"}, "a"))
  perguntas.push(new PerguntaMolde("Qual é o maior planeta do sistema solar?", {a: "Terra", b: "Marte", c: "Saturno", d: "Júpiter"}, "d"))
  perguntas.push(new PerguntaMolde(`Quem pintou a famosa obra "Mona Lisa"?`, {a: "Pablo Picasso", b: "Vincent van Gogh", c: "Leonardo da Vinci", d: "Michelangelo"}, "c"))
  perguntas.push(new PerguntaMolde("Qual é a montanha mais alta do mundo?", {a: "Everest", b: "K2", c: "Aconcágua", d: "Denali"}, "a"))
  perguntas.push(new PerguntaMolde("Quem foi o primeiro presidente do Brasil?", {a: "Getúlio Vargas", b: "Juscelino Kubitschek", c: "Marechal Deodoro da Fonseca", d: "Dom Pedro I"}, "c"))
  perguntas.push(new PerguntaMolde("Qual é o livro mais vendido da história, excluindo textos religiosos?", {a: "O Pequeno Príncipe", b: "Dom Quixote", c: "Harry Potter e a Pedra Filosofal", d: "O Senhor dos Anéis: O Retorno do Rei"}, "b"))
  perguntas.push(new PerguntaMolde("Em que ano teve início a Segunda Guerra Mundial?", {a: "1914", b: "1939", c: "1945", d: "1950"}, "b"))
  perguntas.push(new PerguntaMolde("Quem foi o cientista que formulou a teoria da evolução das espécies?", {a: "Sigmund Freud", b: "Albert Einstein", c: "Charles Darwin", d: "Isaac Newton"}, "c"))
  perguntas.push(new PerguntaMolde("Qual é a velocidade da luz no vácuo?", {a: "300.000 km/s", b: "150.000 km/s", c: "200.000 km/s", d: "250.000 km/s"}, "a"))
  perguntas.push(new PerguntaMolde("Quais são os quatro elementos clássicos da natureza, de acordo com a filosofia grega antiga?", {a: "Água, Fogo, Terra e Vento", b: "Terra, Ar, Fogo e Metal", c: "Água, Ar, Terra e Madeira", d: "Terra, Fogo, Ar e Água"}, "d"))
  perguntas.push(new PerguntaMolde(`Quem escreveu a obra "1984", que descreve uma sociedade distópica?`, {a: "George Orwell", b: "Aldous Huxley", c: "Ray Bradbury", d: "H.G. Wells"}, "a"))
  perguntas.push(new PerguntaMolde(`Qual é o autor da obra "A Divina Comédia"?`, {a: "Dante Alighieri", b: "Miguel de Cervantes", c: "Giovanni Boccaccio", d: "William Shakespeare"}, "a"))
  perguntas.push(new PerguntaMolde("Quem foi o fundador da Microsoft?", {a: "Jeff Bezos", b: "Steve Jobs", c: "Bill Gates", d: "Mark Zuckerberg"}, "c"))
  perguntas.push(new PerguntaMolde("Qual é o nome da teoria que descreve a origem do universo a partir de uma grande explosão?", {a: "Teoria da Gravitação Universal", b: "Teoria da Relatividade Geral", c: "Teoria da Evolução", d: "Teoria do Big Bang"}, "d"))
  perguntas.push(new PerguntaMolde("Qual é a fórmula química da água?", {a: "H2O", b: "CO2", c: "O2", d: "NaCl"}, "a"))
  perguntas.push(new PerguntaMolde("Quem foi o líder político sul-africano que lutou contra o apartheid e se tornou o primeiro presidente negro do país?", {a: "Nelson Mandela", b: "Mahatma Gandhi", c: "Martin Luther King Jr.", d: "Malcolm X"}, "a"))
  // CRIANDO AS PERGUNTAS

  let perguntaAtualIndex = 0;
  

  function exibirPerguntaAtual() {
    const perguntaAtual = perguntas[perguntaAtualIndex];
    const result = document.querySelector('#result');
    result.innerHTML= `
      <h1 class="question">${perguntaAtual.pergunta}</h1>
      <div class="alternatives">
        <div class="item" onclick="selecionarItem(this, 'a')" data-alternativa="a">a) ${perguntaAtual.alternativas.a}</div>
        <div class="item" onclick="selecionarItem(this, 'b')" data-alternativa="b">b) ${perguntaAtual.alternativas.b}</div>
        <div class="item" onclick="selecionarItem(this, 'c')" data-alternativa="c">c) ${perguntaAtual.alternativas.c}</div>
        <div class="item" onclick="selecionarItem(this, 'd')" data-alternativa="d">d) ${perguntaAtual.alternativas.d}</div>
      </div>
    `;
  }

  let acertos = 0
  
  function selecionarItem(elemento, alternativaSelecionada) {
    var itens = document.getElementsByClassName("item");
    for (var i = 0; i < itens.length; i++) {
      itens[i].classList.remove("selecionado");
    }
  
    elemento.classList.add("selecionado");
    const perguntaAtual = perguntas[perguntaAtualIndex];
  
    if (alternativaSelecionada === perguntaAtual.verdadeira) {
      elemento.classList.add("verdadeiro");
      acertos++;
      console.log("resposta correta");
    } else {
      elemento.classList.add("falso");
      console.log("resposta incorreta");
  
      const alternativas = elemento.parentElement.getElementsByClassName("item");
      for (var i = 0; i < alternativas.length; i++) {
        if (alternativas[i].textContent.includes(perguntaAtual.verdadeira)) {
          alternativas[i].classList.add("verdadeiro");
          break;
        }
      }
    }
  
    setTimeout(proximaPergunta, 1000);
    console.log("Acertos: " + acertos + "/" + perguntas.length);
  }

  function proximaPergunta() {
    perguntaAtualIndex++;
  
    if (perguntaAtualIndex >= perguntas.length) {
      if(acertos >= (perguntas.length / 2)){
        alert("Parabéns, sua pontuação foi de " + acertos + "/" + perguntas.length)
      }else{
        alert("Tente novamente, sua pontuação foi de " + acertos + "/" + perguntas.length)
      }backtohome()
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
