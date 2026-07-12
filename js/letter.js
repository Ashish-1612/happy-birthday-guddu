/* ==========================================
   Love Letter
   Happy Birthday Guddu ❤️
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const envelope = document.querySelector(".envelope");
    const letter = document.querySelector(".letter-paper");

    if (!envelope || !letter) return;

    let opened = false;

    envelope.addEventListener("click", () => {

        if (opened) return;

        opened = true;

        envelope.classList.add("open");

        createSparkles();

        setTimeout(() => {

            letter.classList.add("show");

            typeWriter();

            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 1000);

    });

});

/* ===========================
   Typewriter
=========================== */

function typeWriter() {

    const paragraphs = document.querySelectorAll(".letter-paper p");

    paragraphs.forEach(p => {

        const original = p.dataset.text || p.innerHTML;

        p.dataset.text = original;

        p.innerHTML = "";

        let i = 0;

        const typing = setInterval(() => {

            p.innerHTML += original.charAt(i);

            i++;

            if (i >= original.length) {

                clearInterval(typing);

            }

        }, 18);

    });

}

/* ===========================
   Sparkles
=========================== */

function createSparkles() {

    for (let i = 0; i < 35; i++) {

        const star = document.createElement("div");

        star.className = "sparkle";

        star.style.position = "fixed";
        star.style.width = "6px";
        star.style.height = "6px";
        star.style.borderRadius = "50%";

        star.style.left = (45 + Math.random() * 10) + "vw";
        star.style.top = (40 + Math.random() * 20) + "vh";

        star.style.background = [
            "#FFD700",
            "#ffffff",
            "#FFB6C1",
            "#C084FC"
        ][Math.floor(Math.random() * 4)];

        star.style.boxShadow =
            "0 0 12px " + star.style.background;

        star.style.transition = "all 1.6s ease";

        document.body.appendChild(star);

        requestAnimationFrame(() => {

            star.style.transform =
                `translate(${Math.random()*300-150}px,${Math.random()*300-150}px) scale(0)`;

            star.style.opacity = "0";

        });

        setTimeout(() => {

            star.remove();

        }, 1700);

    }

}

/* ===========================
   Floating Hearts
=========================== */

function heartBurst() {

    const hearts = ["❤️","💖","💕","💜"];

    for(let i=0;i<15;i++){

        const heart=document.createElement("div");

        heart.innerHTML=
        hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.position="fixed";

        heart.style.left="50vw";
        heart.style.top="50vh";

        heart.style.fontSize=
        (18+Math.random()*18)+"px";

        heart.style.pointerEvents="none";

        heart.style.transition="all 2s ease";

        document.body.appendChild(heart);

        requestAnimationFrame(()=>{

            const x=Math.random()*500-250;
            const y=Math.random()*500-250;

            heart.style.transform=
            `translate(${x}px,${y}px) rotate(${Math.random()*720}deg)`;

            heart.style.opacity="0";

        });

        setTimeout(()=>{

            heart.remove();

        },2000);

    }

}

/* Trigger burst when letter opens */

document.addEventListener("click",(e)=>{

    if(e.target.closest(".envelope")){

        setTimeout(heartBurst,900);

    }

});
