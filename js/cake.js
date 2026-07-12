/* ==========================================
   Premium Birthday Cake
   Happy Birthday Guddu ❤️
========================================== */

const blowBtn = document.getElementById("blowBtn");

if(blowBtn){

blowBtn.addEventListener("click",blowCandles);

}

function blowCandles(){

const flames=document.querySelectorAll(".flame");

flames.forEach(flame=>{

flame.classList.add("off");

createSmoke(flame);

});

blowBtn.disabled=true;

blowBtn.innerHTML="🎉 Wish Made 🎉";

cakeGlow();

launchConfetti();

setTimeout(()=>{

if(typeof startFireworks==="function"){

startFireworks();

}

},1200);

setTimeout(showBirthdayMessage,1800);

}

/* -----------------------
   Smoke Animation
------------------------*/

function createSmoke(candle){

for(let i=0;i<6;i++){

const smoke=document.createElement("div");

smoke.className="smoke";

smoke.style.left=(candle.getBoundingClientRect().left+window.scrollX)+"px";

smoke.style.top=(candle.getBoundingClientRect().top+window.scrollY)+"px";

smoke.style.animationDelay=(i*0.15)+"s";

document.body.appendChild(smoke);

setTimeout(()=>{

smoke.remove();

},2500);

}

}

/* -----------------------
   Cake Glow
------------------------*/

function cakeGlow(){

const cake=document.querySelector(".cake");

cake.animate([

{

filter:"drop-shadow(0 0 0px #fff)"

},

{

filter:"drop-shadow(0 0 40px #ff8ed6)"

},

{

filter:"drop-shadow(0 0 80px #c084fc)"

},

{

filter:"drop-shadow(0 0 20px #ffffff)"

}

],{

duration:2500,

iterations:1,

fill:"forwards"

});

}

/* -----------------------
   Confetti
------------------------*/

function launchConfetti(){

const colors=[

"#FF69B4",
"#B794F4",
"#FFD700",
"#87CEFA",
"#FFFFFF"

];

for(let i=0;i<180;i++){

const conf=document.createElement("div");

conf.style.position="fixed";

conf.style.width="8px";

conf.style.height="16px";

conf.style.left=Math.random()*100+"vw";

conf.style.top="-30px";

conf.style.background=

colors[Math.floor(Math.random()*colors.length)];

conf.style.opacity="1";

conf.style.borderRadius="3px";

conf.style.pointerEvents="none";

document.body.appendChild(conf);

const x=(Math.random()*400)-200;

const y=(window.innerHeight+300);

const rotate=Math.random()*1080;

conf.animate([

{

transform:"translate(0,0) rotate(0deg)",

opacity:1

},

{

transform:`translate(${x}px,${y}px) rotate(${rotate}deg)`,

opacity:0

}

],{

duration:3500+Math.random()*2000,

easing:"cubic-bezier(.2,.8,.2,1)",

fill:"forwards"

});

setTimeout(()=>{

conf.remove();

},6000);

}

}

/* -----------------------
   Birthday Message
------------------------*/

function showBirthdayMessage(){

const message=document.createElement("div");

message.innerHTML=`

<div style="
position:fixed;
inset:0;
display:flex;
justify-content:center;
align-items:center;
background:rgba(15,0,30,.75);
backdrop-filter:blur(10px);
z-index:99999;
">

<div style="
background:rgba(255,255,255,.12);
padding:40px;
border-radius:30px;
text-align:center;
max-width:420px;
border:1px solid rgba(255,255,255,.2);
animation:popup .6s ease;
">

<h1 style="
font-family:'Great Vibes',cursive;
font-size:54px;
color:white;
">

Happy Birthday

</h1>

<h2 style="
margin-top:15px;
color:#FFD6F6;
">

Guddu ❤️

</h2>

<p style="
margin-top:20px;
line-height:1.8;
color:white;
">

May every dream you dream...

Every smile you wear...

and every wish you make...

come true.

</p>

<button id="closeWish"

style="
margin-top:25px;
padding:15px 35px;
border:none;
border-radius:40px;
font-size:16px;
background:linear-gradient(45deg,#ff69b4,#b794f4);
color:white;
cursor:pointer;
">

Continue Our Journey →

</button>

</div>

</div>

`;

document.body.appendChild(message);

document.getElementById("closeWish")
.onclick=()=>{

message.remove();

};

}
