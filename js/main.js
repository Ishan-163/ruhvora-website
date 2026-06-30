const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

    nav.classList.toggle("active");

});

const reveals = document.querySelectorAll(
".reveal,.reveal-left,.reveal-right,.zoom"
);

function revealOnScroll(){
    reveals.forEach(item=>{
        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 100){
            item.classList.add("active");
        }
    });
}
window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
if(window.scrollY>400){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
});
topBtn.addEventListener("click",()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
});

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(function () {
        loader.classList.add("hide");
    }, 1200);
});