function clicou(){
  const n = Number(window.prompt("Digite um número: "));

  const p = document.querySelector("#paragrafo");
  p.innerHTML = `<p>O número a ser analisado aqui será o <strong>${n}</strong><hr></p>`;
  p.innerHTML += `<p>O seu valor absoluto é ${Math.abs(n)}<br></p>`;
  p.innerHTML += `A sua parte inteira é ${Math.trunc(n)}<br></p>`;
  p.innerHTML += `O valor inteiro mais próximo é ${Math.round(n)}<br></p>`;
  p.innerHTML += `A sua raiz quadrada é ${Math.sqrt(n)}<br></p>`;
  p.innerHTML += `A sua raiz cúbica é ${Math.cbrt(n)}<br></p>`;
  p.innerHTML += `O valor de ${n}<sup>2</sup> é ${Math.pow(n, 2)}<br></p>`;
  p.innerHTML += `O valor de ${n}<sup>3</sup> é ${Math.pow(n, 3)}</p>`;

}