function clicou(){
  const recebe = window.prompt('Digite um número: ');
  const dobro = recebe * 2;
  const metade = recebe / 2;
  const res = document.querySelector("#paragrafo");
  res.innerHTML = (`O dobro de ${recebe} é ${dobro} e a metade é ${metade}!`);
};
