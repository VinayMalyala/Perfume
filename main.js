// toggle button 
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-large-line");
    });
});

// show scroll up 
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-10");
    }else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-10");
    }
}
window.addEventListener("scroll", scrollUp);

// scroll section active link 
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "hero";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");
        if(item.href.includes(current)){
            item.classList.add("active");
        }
    })
}
window.addEventListener("scroll", activeLink);

// scroll reveal animation 
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
});

sr.reveal(`.hero-big-text, .collection_top, .popular_top, .about_top, .footer_content`);
sr.reveal(`.hero_image`, {origin: "bottom", delay: 500});
sr.reveal(`.hero_content, .popular_card-3`, {origin: "bottom", delay: 1000});

sr.reveal(`.collection_card, .banner_content`, {interval: 100});

sr.reveal(`.popular_card-1, .about_image`, {origin: "left"});
sr.reveal(`.popular_card-2, .about_content`, {origin: "right"});