function clicou(){
  const a = Number(window.prompt("Digite um número: "));
  const b = Number(window.prompt("Digite outro número:"));
  const soma = a + b;

  const p = document.querySelector("#paragrafo");

  p.innerHTML = (`A soma entre <mark>${a}</mark> e <mark>${b}</mark> é igual a <strong>${soma}<strong>!`);
}