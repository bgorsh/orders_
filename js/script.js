// ScrollToTop button
const scrollBtn = document.querySelector('.scrollBtn');

window.onscroll = () => {
    if (window.scrollY > 600) {
        scrollBtn.classList.remove('scrollBtn_hide');
    } else if (window.scrollY < 600) {
        scrollBtn.classList.add('scrollBtn_hide');
    }
};

scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", function() {
    const layer = document.querySelector('.hero__img');
    document.addEventListener('mousemove', (event) => {
    layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 4) + 'px,' + ((event.clientY * 0.4) / 6) + 'px, 0px)';
    })
});

document.addEventListener("DOMContentLoaded", function() {
    let layer = document.querySelector('.payment__left-block--img');
    document.addEventListener('mousemove', (event) => {
      layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 4) + 'px,' + ((event.clientY * 0.4) / 6) + 'px, 0px)';
    })
});

//Tabs in portfolio

const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsItems = document.querySelectorAll('.tab_content');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);


    tabsBtn.forEach(function(item) {
      item.classList.remove('active');
    })

    tabsItems.forEach(function(item) {
      item.classList.remove('active');
    })

    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  })
});

document.querySelector('.tabs__btn').click();

// Slider swiper in portfolio section tab Lendings

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 10,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  allowTouchMove: false, // Disable swipe movement
  on: {
    click: function () {
      // Open the hyperlink when the slide is clicked
      var clickedSlide = this.slides[this.clickedIndex];
      var hyperlink = clickedSlide.querySelector('a').getAttribute('href');
    },
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },
    // when window width is >= 375px
    375: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },
    // when window width is >= 425px
    425: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },
    // when window width is >= 1640px
    1640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    }
  }

});

// Accordeon in price section

const accordeon = document.querySelectorAll('.accord-sect');

for(item of accordeon) {
  item.addEventListener('click', function(){
      if(this.classList.contains('active')) {
          this.classList.remove('active');
      } else {
          for(el of accordeon) {
              el.classList.remove('active');
          }
          this.classList.add('active');
      }
  })
};

document.querySelector('.accord-sect').click();

// Form validate

let selector = document.querySelector("input[type='phone']");
let im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.contacts-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    mail: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    checkbox: {
      required: true,
      checked: true
    }
  }
});

// Send formData

const form = document.getElementById('form');
const msg = document.getElementById('message');

// Обработчик события отправки формы
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем стандартное поведение отправки формы

  // Получаем данные формы
  const formData = new FormData(this);

  // Отправляем данные формы на сервер с использованием функции fetch()
  fetch('/send_mail.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      form.reset(); // Очищаем поля формы
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
  });
});

// Mobile menu

const burger = document.querySelector('.header__burger-btn');
const link = document.querySelectorAll('.menu-link');
const mobMenu = document.querySelector('.menu-list');
const wrap = document.querySelector('.hero');


burger.addEventListener('click', () => {
  document.querySelector('.menu-list').classList.toggle('active')
});

wrap.onclick = function() {
  if(mobMenu.classList.contains('active')) {
    mobMenu.classList.remove('active')
  }
};

link.forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelector('.menu-list').classList.remove('active')
  })
});

// Parallax my photo

document.addEventListener("DOMContentLoaded", function() {
  const layer = document.querySelector('.hero-img');
  document.addEventListener('mousemove', (event) => {
    layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 4) + 'px,' + ((event.clientY * 0.4) / 6) + 'px, 0px)';
  })
});