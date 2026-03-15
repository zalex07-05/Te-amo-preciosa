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
"images/imagen7.jpeg",
"images/imagen8.jpeg",
"images/imagen9.jpeg",
"images/imagen10.jpeg",
"images/imagen11.jpeg",
"images/imagen12.jpeg",
"images/imagen13.jpeg",
"images/imagen14.jpeg",
"images/imagen15.jpeg",
"images/imagen5.jpeg",

];



let mensajes=[

"Padrisimo no?, nos vemos muy lindos juntos",
"Amo estar contigo todo el tiempo en el tecno",
"Eres lo mejor que ha pasado en mi vida sin ninguna duda",
"Es que de verdad como explicar todo lo que siento al estar a tu lado",
"Aaaaaa ame que me hayas visto jugar futbol de verdad fue muy lindo ver como te emocionabas por algo que no te gusta solo por verme jugar te amo demasiado",
"Amo cada foto tuya de verda me encantaaaa amo verte feliz siendo tu misma",
"Gracias por ser mi compañera, mi mejor amiga y el amor de mi vida",
"Amo tu carita preciosa, tu sonrisa, tus ojos, tu cabello, tu forma de ser, tu forma de amar, todo de ti me encanta",
"El sentir que estas a mi lado es la mejor sensacion del mundo, podemos ser nosotros sin miedo a nada y eso es lo que mas amo de nuestra relacion",
"Gracias por ser tan linda conmigo, por apoyarme en todo, por hacerme sentir tan especial, por amarme tanto, por ser mi todo",
"No me imagino ningun dia de mi vida sin ti, en la uni siempre estamos juntos y ahora como pareja amo sentir tu mano y tu cuerpo a mi lado",
"Eres la persona mas increible que he conocido, ademas  es que aaa eres tan preciosa desde siempre cada dia verte en la uni en las mañanas y ver lo linda que estas a diario me encanta",
"Esperar que se acaben las clases para tener nuestro tiempo juntos es lo mejor del dia, amo cada momento contigo aunque las clases se me hacen eternas, vale la pena pq al final estare contigo",
"Esa niña que amo con todo mi ser y que siempre me hace sentir tantas cosas lindas, me encanta en todo sentido te quiero en mi vida para siempre",
"Y como olvidar el momento en el que supe que estaba absolutamente enamorado de ti, cuando ame sentir tu brazo, el estar juntos, el hecho de aceptar que hay algo tan especial que aun no logro entender pero me encanta sentir, te amo demasiado y cada dia mas",
"Te amo demasiado mi niña preciosa"


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
