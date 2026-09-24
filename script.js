function entrar(){

let nome=document.getElementById("nome").value;

if(nome==""){

alert("Digite seu nome.");

return;

}

localStorage.setItem("usuario",nome);

window.location="usuario.html";

}

function sair(){

localStorage.removeItem("usuario");

window.location="index.html";

}

if(window.location.pathname.includes("usuario.html")){

let nome=localStorage.getItem("usuario");

document.getElementById("mensagem").innerHTML=

"Bem-vindo, "+nome+"!";

}

if('serviceWorker' in navigator){

navigator.serviceWorker.register('sw.js');

}

