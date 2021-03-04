//navbar

const navBtn = document.getElementsByClassName('nav-btn')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

navBtn.addEventListener('click', () => { 
    navLinks.classList.toggle('active');
})

//contact

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const cForm = document.getElementById('c-form');
const cError = document.getElementById('c-error');

cForm.addEventListener('submit', (e) => {
    let msg = [];

    if(name.value === '')
    {
        msg.push('Please enter your name.');
    }

    if(email.value === '')
    {
        msg.push('Please enter an email address.');
    }

    if(message.value === '')
    {
        msg.push('Please enter a message.');
    }

    if(msg.length > 0)
    {
        e.preventDefault();

        if(msg.length > 2)
            msg = 'Please enter your name, email, and message.';

        else if(name.value === '' && message.value === '')
            msg = 'Please enter your name and message.'
        
        else if(name.value === '' && email.value === '')
            msg = 'Please enter your name and email address.';
            
        else if(email.value === '' && message.value === '')
            msg = 'Please enter an email address and message.';

        cError.style.color = 'darkred';
        cError.innerText = msg;
    } else {
        cError.style.color = 'darkolivegreen';
        cError.innerText = 'Email sent! I will respond as soon as possible, thank you!';
    }
})