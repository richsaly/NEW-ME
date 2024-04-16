// typing effect

var typed = new Typed('.type', {
    strings: ['I AM A FRONTEND ENGINEER',
              'I AM A SOLUTION DEVELOPER',
              'I BUILD EASY LIFE IDEAS',
              'TECHNOLOGY IS MY LIFESTYLE'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
      loop: true
  });

//   user counter effect

  const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-count');
  const duration = 100; // Animation duration in milliseconds
  const step = Math.floor(target / duration);

  const updateCount = () => {
    const count = +counter.innerText;
    if (count < target) {
      counter.innerText = count + step;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});


// swipe effect

const swiper = new Swiper('.swiper', {
    autoplay: {
      delay:4000,
      disableOninteraction:false
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  function showSidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'flex'
}
