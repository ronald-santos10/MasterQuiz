function PerguntaMolde(pergunta, alternativas, verdadeira) {
    this.pergunta = pergunta;
    this.alternativas = alternativas;
  }
  
  const pergunta1 = new PerguntaMolde("Quem inventou a Lâmpada?", {a: "Nikola Tesla", b: "Thomas Edson", c: "Darwin", d: "Henry Ford"});
  
  const result = document.querySelector('#result')
  
  result.innerHTML = `<h1 class="question">${pergunta1.pergunta}</h1>
  <ul class="alternatives">
      <li>a) ${pergunta1.alternativas.a}</li>
      <li>b) ${pergunta1.alternativas.b}</li>
      <li>c) ${pergunta1.alternativas.c}</li>
      <li>d) ${pergunta1.alternativas.d}</li>
  </ul>`;