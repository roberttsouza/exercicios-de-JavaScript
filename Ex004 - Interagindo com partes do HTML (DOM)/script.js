function clicou(){
  const nome = window.prompt('Qual é o seu nome?');
  const resposta = document.querySelector('#paragrafo');
  resposta.innerHTML = `Olá, ${nome}! É um grande prazer te conhecer! 🖖`
};