/* ===========================================
   Happy Birthday Guddu ❤️
   Premium Website - Part 1
   app.js
=========================================== */

const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const beginBtn = document.getElementById("beginBtn");
const floatingHearts = document.getElementById("floatingHearts");
const sparkles = document.getElementById("sparkles");
const musicBtn = document.getElementById("musicBtn");

/* Hide main content initially */
mainContent.style.display = "none";

/* ------------------------------
   Begin Journey
--------------------------------*/

beginBtn.addEventListener("click", () => {

    intro.style.opacity = "0";
    intro.style.transform = "scale(.95)";
    intro.style.transition = "1s";

    setTimeout(() => {

        intro.style.display = "none";

        mainContent.style.display = "block";
        mainContent.classList.add("fade-in");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    },900);

});

/* ------------------------------
   Scroll Reveal
--------------------------------*/

const chapters = document.querySelectorAll(".chapter");

function reveal(){

    const trigger = window.innerHeight * 0.85;

    chapters.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top<trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/* ------------------------------
   Floating Hearts
--------------------------------*/

const hearts=["❤️","💖","💕","💜"];

function createHeart(){

    const heart=document.createElement("div");

    heart.className="float-heart";

    heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.animationDuration=(6+Math.random()*6)+"s";

    floatingHearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,700);

/* ------------------------------
   Sparkles
--------------------------------*/

function sparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    sparkles.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },4000);

}

setInterval(sparkle,250);

/* ------------------------------
   Balloons
--------------------------------*/

const balloonColors=[
"#FF69B4",
"#B794F4",
"#FFB6C1",
"#C084FC",
"#FFD6F6"
];

function balloon(){

    const b=document.createElement("div");

    b.className="balloon";

    b.style.left=Math.random()*95+"vw";

    b.style.background=balloonColors[
        Math.floor(Math.random()*balloonColors.length)
    ];

    b.style.animationDuration=(10+Math.random()*8)+"s";

    document.body.appendChild(b);

    setTimeout(()=>{

        b.remove();

    },18000);

}

setInterval(balloon,2500);

/* ------------------------------
   Rose Petals
--------------------------------*/

function petal(){

    const p=document.createElement("div");

    p.className="petal";

    p.innerHTML="🌸";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(8+Math.random()*5)+"s";

    document.body.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },15000);

}

setInterval(petal,1800);

/* ------------------------------
   Butterflies
--------------------------------*/

function butterfly(){

    const b=document.createElement("div");

    b.className="butterfly";

    b.innerHTML="🦋";

    document.body.appendChild(b);

    setTimeout(()=>{

        b.remove();

    },12000);

}

setInterval(()=>{

    if(Math.random()>0.5){

        butterfly();

    }

},7000);

/* ------------------------------
   Music Button
--------------------------------*/

let playing=false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        musicBtn.innerHTML="⏸️";
        musicBtn.style.transform="scale(1.1)";

    }else{

        musicBtn.innerHTML="🎵";
        musicBtn.style.transform="scale(1)";

    }

    playing=!playing;

});

/* ------------------------------
   Mouse Glow
--------------------------------*/

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="180px";
glow.style.height="180px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle, rgba(255,255,255,.18), transparent 70%)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

});

/* ------------------------------
   Greeting
--------------------------------*/

console.log("❤️ Happy Birthday Guddu ❤️");
console.log("Made with love by Ashish");
