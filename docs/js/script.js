var contactLink = document.querySelector("#contact-link");
var contact = document.querySelector("#contact");

contactLink.addEventListener("click", () => {
    contact.scrollIntoView({behavior: "smooth"});
}) 

// $('body').on('click touchstart', () => {
//     const videoElement = document.querySelectorAll('content-box');
//     if (videoElement.playing) {
//     }
//     else {
//         videoElement.play();
//     }
// });