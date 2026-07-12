/* ==========================================
   Premium Memories Gallery
   Happy Birthday Guddu ❤️
========================================== */

const memories = [

{
    image:"assets/photos/01.jpg",
    title:"My Beautiful Guddu ❤️",
    text:"Every smile of yours makes my world brighter."
},

{
    image:"assets/photos/02.jpg",
    title:"My Favourite Person",
    text:"You make ordinary days feel magical."
},

{
    image:"assets/photos/03.jpg",
    title:"Forever Smile",
    text:"Your happiness is my favourite view."
},

{
    image:"assets/photos/04.jpg",
    title:"Beautiful Memories",
    text:"Every picture reminds me how lucky I am."
},

{
    image:"assets/photos/05.jpg",
    title:"Together",
    text:"The best memories always include you."
},

{
    image:"assets/photos/06.jpg",
    title:"Always Gorgeous",
    text:"You look beautiful in every moment."
},

{
    image:"assets/photos/07.jpg",
    title:"My Peace",
    text:"Home is wherever you are."
},

{
    image:"assets/photos/08.jpg",
    title:"Love",
    text:"Thank you for being part of my story."
},

{
    image:"assets/photos/09.jpg",
    title:"Princess",
    text:"Every day you inspire me."
},

{
    image:"assets/photos/10.jpg",
    title:"My Favourite Smile",
    text:"A smile that makes my heart skip a beat."
},

{
    image:"assets/photos/11.jpg",
    title:"Our Journey",
    text:"Every chapter with you is my favourite."
},

{
    image:"assets/photos/12.jpg",
    title:"Forever",
    text:"I would choose you again and again."
},

{
    image:"assets/photos/13.jpg",
    title:"Happy Birthday",
    text:"May every dream of yours come true."
}

];

const gallery = document.querySelector(".gallery");

if(gallery){

memories.forEach(photo=>{

const card=document.createElement("div");

card.className="photo-card";

card.innerHTML=`

<img src="${photo.image}" alt="Memory">

<div class="photo-overlay">

<h3>${photo.title}</h3>

<p>${photo.text}</p>

</div>

`;

gallery.appendChild(card);

});

}

/* ---------------------------
   Lightbox
---------------------------- */

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML=`

<span class="close-lightbox">&times;</span>

<img id="lightboxImage">

`;

document.body.appendChild(lightbox);

const lightboxImage=document.getElementById("lightboxImage");

document.addEventListener("click",(e)=>{

if(e.target.closest(".photo-card")){

const img=e.target.closest(".photo-card").querySelector("img");

lightbox.style.display="flex";

lightboxImage.src=img.src;

}

});

document.querySelector(".close-lightbox").onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};

/* ---------------------------
 Auto Zoom Animation
---------------------------- */

setInterval(()=>{

const cards=document.querySelectorAll(".photo-card");

cards.forEach(card=>{

card.style.transform="scale(1)";

});

if(cards.length){

const random=Math.floor(Math.random()*cards.length);

cards[random].style.transform="scale(1.03)";

}

},2500);
