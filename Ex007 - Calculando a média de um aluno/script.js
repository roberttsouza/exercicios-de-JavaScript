function clicou(){
  const nome = window.prompt('Qual é o nome do aluno?');
  const n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
  const n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`));
  const media = (n1+n2)/2;

  const p = document.querySelector("#paragrafo");

  p.innerHTML = (`Calculando a média final de <mark>${nome}</mark>.<br>`);
  p.innerHTML += (`As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.<br>`);
  p.innerHTML += (`A média final será <mark>${media}</mark>.`);
};