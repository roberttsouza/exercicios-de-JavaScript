
function clicou(){
  const nome = window.prompt('Qual é o nome do aluno?');
  const n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
  const n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`));
  const res = document.querySelector('section#result');

  const media = (n1+n2)/2

  res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.<br></p>`
  res.innerHTML += `<p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.<br></p>`
  res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`

  if(media >= 6){
    res.innerHTML += `A mensagem que temos é: <strong style="color:green;">Meus parabéns!</strong></p>`
  }else{
    res.innerHTML += `A mensagem que temos é: <strong style='color:red;'>Estude um pouco mais!</strong></p>`
  }
}