const contactLink = document.querySelector("#contact-link");
const contact = document.querySelector("#contact");

contactLink.addEventListener("click", () => {
    contact.scrollIntoView({behavior: "smooth"});
}) 