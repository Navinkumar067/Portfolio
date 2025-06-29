/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });

        };
    });

    /*========== sticky navbar ==========*/
    let header=document.querySelector('.header');

    header.classList.toggle('sticky',window.scrollY > 100);

        /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
  
};


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick=()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-content h1, .about-img img', {origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin: 'right'});
ScrollReveal().reveal('.home-img img, .services_container, .portfolio-box, .contact form, .services-box', {origin: 'bottom'});

// form data capturing

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    // Create an object with the form data
    const formData = {
        name: form.name.value,
        email: form.email.value,
        number: form.number.value,
        text: form.text.value,
        message: form.message.value,
    };

    // Log the form data to the console
    console.log('Form Data submitted:', formData);

    // Reset the form fields
    form.reset();

    // Note: We are NOT using `event.preventDefault()`, so the form will submit
    // and the page will refresh as usual after this line.
});

