// CONTADOR
function atualizarContador(){
    const inicio = new Date("2026-01-13T00:00:00");
    const agora = new Date();
    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000*60*60*24));
    const horas = Math.floor((diferenca / (1000*60*60)) % 24);
    const minutos = Math.floor((diferenca / (1000*60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("contador").innerHTML =
        dias+" dias, "+horas+" horas, "+minutos+" minutos e "+segundos+" segundos 💜";
}

setInterval(atualizarContador,1000);


// MÚSICA
function tocarMusica(){
    document.getElementById("musica").play();
}


// CARTA DIGITANDO
const texto = `Mo,

Desde aquele fim de tarde no pavilhão,
eu não imaginava que você se tornaria
a melhor parte da minha vida.

A gente se afastou.
A gente voltou.
Mas sempre foi você.

Te amo moo. 💜`;

let i = 0;

function digitar(){
    if(i < texto.length){
        document.getElementById("textoCarta").innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 40);
    }
}

digitar();


// SURPRESA FINAL
function mensagemFinal(){
    alert("Eu te amo mais do que qualquer distância. É você. Sempre você. 💜");
}


// CORAÇÕES ANIMADOS
setInterval(()=>{
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💜";
    heart.style.left = Math.random()*100+"vw";
    heart.style.fontSize = (Math.random()*20+15)+"px";
    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);

},400);