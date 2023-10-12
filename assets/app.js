'use strict';

/* SHOW MENU START */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*--validate if constant exist, menu show--*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
/*menu-hide, validate if constant exist*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
/* SHOW MENU END */

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.querySelector('.nav__menu');
  //when we click on each nav-link , we remove the show-menu class
  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*  SHADOW HEADER  */
const shadowHeader = () => {
  const header = document.querySelector('.header');
  /* when the scroll is greater than 50 viewport height , add these*/
  this.scrollY >= 50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', shadowHeader);

/* show scroll up */
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  /* when the scroll is higher than 350 vh , add the */
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/* scroll sections active link */

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector(
        '.nav__menu a[href += ' + sectionId + ']'
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*  dark light theme */

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

/* previously selected  topic(if user selected)*/
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

/* we obtain the current theme that the interface has by validation the dark-theme class.. */
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? 'ri-moon-line' : ' ri-sun-line';

/* we validate if the user previously chose a topic */
if (selectedTheme) {
  /* if the validate is fullfilled, we ask what the issue was to know if we activated or deactivated the dak*/
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    iconTheme
  );
}
/* activate /deactivate the theme manually with the button */
themeButton.addEventListener('click', () => {
  /* add or remove the dark/icon theme */
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  /* we save the theme and the current icon that the user chose */
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/* EMAIL JS */

const contactForm = document.getElementById('contact__form');
const contactMessage = document.getElementById('contact__message');

const sendEmail = (e) => {
  e.preventDefault();
  /* service ID - template id-#form-public key */
  emailjs
    .sendForm(
      /*  'service_mc0vv8o', */
      'service_20zx40b',
      /* 'template_d205fyq', */
      'template_l58g8ik',
      '#contact__form',
      /* 'tM0efmHmxKdoUNq-2', */
      'fNnH1XYM_FOUkkRkn'
    )
    .then(
      () => {
        /* show send message */
        contactMessage.textContent = 'Message sent successfully ✅';
        //remove message after five second
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
        /* clear input field */
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = 'Message not sent (error) ❌';
      }
    );
};

contactForm.addEventListener('submit', sendEmail);
