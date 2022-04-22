var contactLink = document.querySelector("#contact-link");
var contact = document.querySelector("#contact");

contactLink.addEventListener("click", () => {
    contact.scrollIntoView({behavior: "smooth"});
}) 
