// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".card, .stat-card, .profile-card, .skills span"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold:0.15
    }

);

revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});

// =========================
// ACTIVE NAVBAR LINK
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");

        }

    });

});

// =========================
// TYPING EFFECT
// =========================

const subtitle = document.querySelector(".hero h2");

if(subtitle){

    const originalText = subtitle.textContent;

    subtitle.textContent = "";

    let index = 0;

    function typeText(){

        if(index < originalText.length){

            subtitle.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeText,40);

        }

    }

    setTimeout(typeText,500);

}

// =========================
// FLOATING CURSOR GLOW
// =========================

const glow = document.createElement("div");

glow.style.position = "fixed";

glow.style.width = "300px";

glow.style.height = "300px";

glow.style.background =
"radial-gradient(circle, rgba(56,189,248,0.12), transparent 70%)";

glow.style.pointerEvents = "none";

glow.style.transform = "translate(-50%, -50%)";

glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// =========================
// HERO IMAGE FLOATING
// =========================

const profileImage = document.querySelector(".profile-img");

if(profileImage){

    let floating = 0;

    setInterval(() => {

        floating += 0.03;

        profileImage.style.transform =
            `translateY(${Math.sin(floating)*8}px)`;

    },30);

}

// =========================
// CONSOLE SIGNATURE
// =========================

console.log(
"%cPortfolio Developed by Tathagata Das",
"color:#38bdf8;font-size:18px;font-weight:bold;"
);