function clicou(){
  const n1 = Number(window.prompt('Digite um número: '));
  const res = document.querySelector('#result')
  let tipo
  
  if(n1 % 2 == 0){
    tipo = '<strong>PAR</strong>'
  }else{
    tipo = '<strong>ÍMPAR</strong>'
  }

  res.innerHTML = `<p>O número ${n1} que foi digitado é ${tipo}!</p>`
}