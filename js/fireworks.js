/* ==========================================
   Premium Fireworks Engine
   Happy Birthday Guddu ❤️
========================================== */

const canvas = document.getElementById("fireworksCanvas");

if (canvas) {

const ctx = canvas.getContext("2d");

let fireworks = [];

let particles = [];

function resize(){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);

/* ------------------------
   Firework Class
-------------------------*/

class Firework{

constructor(){

this.x = Math.random() * canvas.width;

this.y = canvas.height;

this.targetY = Math.random() * canvas.height * 0.45 + 80;

this.color = [
"#FF69B4",
"#B794F4",
"#FFD700",
"#FFFFFF",
"#FFB6C1"
][Math.floor(Math.random()*5)];

this.speed = 7 + Math.random()*3;

this.exploded = false;

}

update(){

if(!this.exploded){

this.y -= this.speed;

ctx.beginPath();

ctx.arc(this.x,this.y,3,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.fill();

if(this.y<=this.targetY){

this.exploded=true;

explode(this);

}

}

}

}

/* ------------------------
   Particle
-------------------------*/

class Particle{

constructor(x,y,color){

this.x=x;

this.y=y;

this.color=color;

const angle=Math.random()*Math.PI*2;

const speed=Math.random()*5+2;

this.vx=Math.cos(angle)*speed;

this.vy=Math.sin(angle)*speed;

this.life=100;

}

update(){

this.x+=this.vx;

this.y+=this.vy;

this.vy+=0.03;

this.life--;

ctx.globalAlpha=this.life/100;

ctx.beginPath();

ctx.arc(this.x,this.y,2,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.fill();

ctx.globalAlpha=1;

}

}

/* ------------------------
   Explosion
-------------------------*/

function explode(f){

for(let i=0;i<80;i++){

particles.push(

new Particle(

f.x,

f.y,

f.color

)

);

}

}

/* ------------------------
   Animation
-------------------------*/

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

fireworks.forEach((f,index)=>{

f.update();

if(f.exploded){

fireworks.splice(index,1);

}

});

particles.forEach((p,index)=>{

p.update();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

/* ------------------------
   Public Function
-------------------------*/

window.startFireworks=function(){

const interval=setInterval(()=>{

fireworks.push(new Firework());

},400);

setTimeout(()=>{

clearInterval(interval);

showFinalOverlay();

},12000);

}

/* ------------------------
   Finale
-------------------------*/

function showFinalOverlay(){

const overlay=document.getElementById("finalOverlay");

if(overlay){

overlay.classList.add("show");

}

}

}
