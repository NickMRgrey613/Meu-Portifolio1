/*======= menu icon navbar ========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


/*======= scroll sections active link ========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/*======= sticky navbar ========*/  
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*======= remove menu icon navbar when click navbar link (scroll) ========*/
menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');


};

/*======= swiper ========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*======= dark light mode ========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

/*======= scroll reveal ========*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portifolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*======  System of Gmail  =========*/
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email= document.getElementById("email");
const phone = document.getElementById("phone");
const message= document.getElementById("message");
const subject = document.getElementById("subject");

function sendEmail() {
  const bodyMessage = `Nome Completo: ${fullName.value}<br> Email: ${email.value}<br> Telefone: ${phone.value}<br> Assunto: ${message.value}<br> Texto: ${subject.value}`;
 
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mrgreyanon@gmail.com",
    Password : "94CC8991F27AB90A704BAB38AC04F23F80AE",
    To : 'mrgreyanon@gmail.com',
    From : "mrgreyanon@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
  }).then(
  message => {
      if (message == "OK") {
        Swal.fire({
          title: "Enviado!",
          text: "Mensagem enviada com sucesso!",
          icon: "aguarde..."
        });
      }
    }
  );
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    item.addEventListener("keyup", () => {
      if(item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }

      else{
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();

  sendEmail();
});