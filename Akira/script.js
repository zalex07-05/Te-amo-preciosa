function abrirCarta(){

document.getElementById("envelopeContainer").style.display="none";
document.getElementById("letter").classList.remove("hidden");

corazonesFlotando();

}

let musicaIniciada = false;

function startGame(){

document.getElementById("letter").style.display="none";
document.getElementById("gameSection").classList.remove("hidden");

crearCorazon();

}



/* FOTOS */

let fotos=[

"images/imagen1.jpeg",
"images/imagen2.jpeg",
"images/imagen3.jpeg",
"images/imagen4.jpeg",
"images/imagen5.jpeg",
"images/imagen6.jpeg",
"images/imagen7.jpeg"

];



let mensajes=[

"Amo cada momento contigo ❤️",
"Contigo cada momento se vuelve especial",
"Eres lo mejor que me ha pasado",
"Quiero seguir creando recuerdos contigo",
"Gracias por ser mi compañera y mi mejor amiga",
"Cada día contigo es un regalo",
"Tu sonrisa ilumina mi mundo"

];



let contador=0;



function crearCorazon(){

let heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML='<i class="bi bi-heart-fill"></i>';

heart.style.left=Math.random()*300+"px";
heart.style.top=Math.random()*300+"px";


heart.onclick=function(){
    let music = document.getElementById("music");

if(!musicaIniciada){
    music.volume = 0.3;
    music.play();
    musicaIniciada = true;
}

document.getElementById("memoryImg").src=fotos[contador];
document.getElementById("memoryText").innerText=mensajes[contador];

contador++;

heart.remove();


if(contador>=fotos.length){

setTimeout(()=>{

document.getElementById("gameSection").style.display="none";
document.getElementById("finalMessage").classList.remove("hidden");

},1500);

}else{

setTimeout(crearCorazon,700);

}

}

document.getElementById("gameArea").appendChild(heart);

}



/* CORAZONES FLOTANDO */

function corazonesFlotando(){

setInterval(()=>{

let heart=document.createElement("div");

heart.classList.add("floating-heart");

heart.innerHTML='<i class="bi bi-heart-fill"></i>';

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*20+10)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},400);

}