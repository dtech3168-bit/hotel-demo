// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Optional: change navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if(window.scrollY > 50) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");

  // subtle parallax for hero image
  const hero = document.querySelector(".hero");
  hero.style.backgroundPosition = `center calc(50% + ${window.scrollY * 0.15}px)`;
});


// About
const aboutTextElems = document.querySelectorAll('.animate-text');
const aboutImage = document.querySelector('.animate-image');

function animateAbout() {
  const windowHeight = window.innerHeight;

  aboutTextElems.forEach(elem => {
    const top = elem.getBoundingClientRect().top;
    if(top < windowHeight - 100) {
      elem.style.opacity = 1;
      elem.style.transform = 'translateY(0)';
    }
  });

  const imgTop = aboutImage.getBoundingClientRect().top;
  if(imgTop < windowHeight - 100) {
    aboutImage.style.opacity = 1;
    aboutImage.style.transform = 'translateY(0) scale(1)';
  }
}

window.addEventListener('scroll', animateAbout);
window.addEventListener('load', animateAbout); 



// ROOMS ANIMATION ON SCROLL
const roomCards = document.querySelectorAll('.room-card');

function revealRooms() {
  const triggerBottom = window.innerHeight / 5 * 4;

  roomCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealRooms);
revealRooms();


// GALLERY FADE-IN ON SCROLL
const galleryCards = document.querySelectorAll('.gallery-card');

function revealGallery() {
  const triggerBottom = window.innerHeight / 5 * 4;

  galleryCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealGallery);
revealGallery();

const bookingModal = document.getElementById('bookingModal');
const openBooking = document.getElementById('openBooking');
const closeBooking = document.getElementById('closeBooking');

openBooking.addEventListener('click', () => {
  bookingModal.classList.add('active');
  document.body.classList.add('modal-active');
});

closeBooking.addEventListener('click', () => {
  bookingModal.classList.remove('active');
  document.body.classList.remove('modal-active');
});

// Close modal on outside click
bookingModal.addEventListener('click', (e) => {
  if(e.target === bookingModal){
    bookingModal.classList.remove('active');
    document.body.classList.remove('modal-active');
  }
});


// CONTACT SECTION FADE-IN
const contactCards = document.querySelectorAll('.contact-card');

function revealContact() {
  const triggerBottom = window.innerHeight / 5 * 4;

  contactCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealContact);
revealContact();