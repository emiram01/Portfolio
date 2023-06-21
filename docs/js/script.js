const contactBtn = document.querySelector("#contact-button");
const contact = document.querySelector("#contact");
const emailBtn = document.querySelector("#email-button");

contactBtn.addEventListener("click", () => {
    contact.scrollIntoView({behavior: "smooth"});
}) 

emailBtn.addEventListener("click", () => {
    copyToClipboard("01eramirez01@gmail.com");
})

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    .then(() => {
        showPopup();
    })
    .catch((error) => {
        console.error("Failed to copy:", error);
    });
}

function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}