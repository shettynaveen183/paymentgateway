const firstHeading = document.querySelector(".first-heading");
const button = document.getElementById("button")
const nav = document.getElementById("navbar")
const timeline = new TimelineMax({ delay: 0.2 });

window.onload = () => {
    timeline.fromTo(nav, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
    if (window.innerWidth < 600) {
        firstHeading.classList.toggle("animate");
    } else {
        timeline.fromTo(firstHeading, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
        timeline.fromTo(firstsubtext, 0.5, { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
    }
    timeline.fromTo(button, 0.5, { opacity: 0 }, { opacity: 1 });
}

console.log(window.innerWidth)