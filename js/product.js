const thumbnails = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainProductImage");

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
        mainImage.style.opacity = "0";
        setTimeout(() => {
            mainImage.src = this.src;
            mainImage.style.opacity = "1";
        }, 200);
        thumbnails.forEach((item) => {
            item.classList.remove("active-thumb");
        });
        this.classList.add("active-thumb");
    });
});

const sizeButtons = document.querySelectorAll(".size-btn");
const price = document.getElementById("productPrice");

sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        sizeButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        let oldPrice = button.dataset.size === "20" ? "499" : "999";

        price.innerHTML = `
            <span class="old-price">₹${oldPrice}</span>
            <span class="new-price">₹${button.dataset.price}</span>
        `;
    });
});

const orderBtn = document.getElementById("orderBtn");
function updateWhatsAppLink(){
    const active = document.querySelector(".size-btn.active");
    const size = active.dataset.size;
    orderBtn.href =
    `https://wa.me/917042523768?text=Hi RUHVORA! I'm interested in BLACK LOVE (${size}ml).`;
}
updateWhatsAppLink();
sizeButtons.forEach((button)=>{
    button.addEventListener("click",updateWhatsAppLink);
});

