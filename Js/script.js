'use script';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalForm = document.querySelector('.modal-form');
const btnCloseModal = document.querySelector('.btn-close-modal');
const btnOpenModal = document.querySelector('.btn-contact-us');
const btnSend = document.querySelector('.btn-send');
const requiredFields = [...document.querySelectorAll('.required')];

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnSend.addEventListener('click', function (e) {
  if (requiredFields.every(field => field.value !== '')) {
    e.preventDefault();
    closeModal();
    modalForm.reset();
  }
});

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////
// Smooth Scrolling
document.querySelector('.mainNavList').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('mainNavLink')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////////////////////////////////////
// Sticky Nav
// const aboutUs = document.querySelector('.aboutus');
// const nav = document.querySelector('.nav-header');
// const header = document.querySelector('.header');

// const cords = aboutUs.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY > cords.top) {
//     nav.classList.add('sticky');
//     nav.classList.add('active');
//   } else {
//     nav.classList.remove('sticky');
//     nav.classList.remove('active');
//   }
// });

////////////////////////////////////////
// Slider component
// const slider = document.querySelector('.slider');
// // slider.style.transform = 'scale(0.5)';
// const slides = document.querySelectorAll('.slide');
// slides.forEach((s, i) => (s.style.transform = `translateX(${i * 125}%)`));

// const allSlide = document.querySelectorAll('.slide');
// const btnRight = document.querySelector('.slider-btn--right');
// const btnLeft = document.querySelector('.slider-btn--left');

// let currentSlide = 0;
// const maxSlide = allSlide.length;

// const goToSlide = function (slide) {
//   allSlide.forEach(
//     (s, i) => (s.style.transform = `translateX(${125 * (i - slide)}%)`)
//   );
// };

// goToSlide(0);

// const nextSlide = function () {
//   // if (currentSlide === maxSlide - 1) currentSlide = 0;
//   // else currentSlide++;

//   if (currentSlide === 0) currentSlide = maxSlide - 1;
//   else currentSlide--;

//   goToSlide(currentSlide);
// };

// const previousSlide = function () {
//   // if (currentSlide === 0) currentSlide = maxSlide - 1;
//   // else currentSlide--;
//   if (currentSlide === maxSlide - 1) {
//     // currentSlide = 0;
//     allSlide[0].style.transform = `translateX(125%)`;
//   } else if (currentSlide === maxSlide - 1) {
//     // currentSlide = 0;
//   } else {
//     currentSlide++;
//     goToSlide(currentSlide);
//   }
// };

// btnRight.addEventListener('click', nextSlide);
// btnLeft.addEventListener('click', previousSlide);
const slides =document.querySelectorAll('.student');
const slider =document.querySelector('.students');
const btn_left =document.querySelector('.slider__btn--left');
const btn_right =document.querySelector('.slider__btn--right');
const dots_container =document.querySelector('.dots');
const slider_btn =document.querySelector('.slider__btn');

console.log(slider_btn);
let cur=0;
const max_slide=slides.length;
// slider.style.transform ='scale(0.4) translateX(100px)';
// // slider.style.overflow='visible';

const slide_movement =function(slide){
    slides.forEach((s,i) => (s.style.transform=`translateX(${100 * (i - slide)}%)`));
    // slides.forEach((p) =>  p.style. = '20rem');
}
slide_movement(0);
// slides[0].style.transform = 'translateX(-100%)'
// slides[1].style.transform = 'translateX(-200%)'
// slides[2].style.transform = 'translateX(-300%)'
// slides[3].style.transform = 'translateX(-400%)'
const right_slide =function(){
    if(cur === max_slide - 1){
        cur=0;
    }else{
        cur++;
    }
   slide_movement(cur); 
   activeDots(cur); 
}
const left_slide =function(){
    if(cur === 0){
        cur = max_slide -1;
    }
    else{
        cur--;
    }
    
    slide_movement(cur);
    activeDots(cur); 
}
btn_left.addEventListener('click', left_slide);
btn_right.addEventListener('click',right_slide);

document.addEventListener('keydown', function(e){
    // console.log(e);
    if(e.key ==='ArrowLeft') left_slide();
    e.key === 'ArrowRight' && right_slide();
});

//making the dots movements//
const createDots = function(){
    slides.forEach(function(_, i){
        dots_container.insertAdjacentHTML('beforeend',`
        <button class="dots__dot" data-slide="${i}"></button>`)
    })
};
createDots();

const activeDots = function(slide){
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}
activeDots(0);
dots_container.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
        const {slide} =e.target.dataset;
        slide_movement(slide);
        activeDots(slide);
    }
});
slider_btn.addEventListener('click', function(e){
    const clicked=e.target.closest('.slider__btn');
console.log(clicked);
    slides.forEach(sl => sl.classList.remove('hidden'));
    if(clicked.classList.contains('slider__btn')){
        clicked.classList.add('active');
    }
})

// let currentSlide = 0;
// btn_left.addEventListener('click', function(){
//     slides.forEach((slide,i)=>{
//         slide.style.transform = `translateX(${100 * (1+i-currentSlide)}%)` 
       
//         console.log(slide)
//     })
//     currentSlide++;
//     // slides.forEach(slide=>{console.log(slide)})
// });
// slides[0].style.transform = 'translateX(100%)'
// slides[1].style.transform = 'translateX(100%)'
// slides[2].style.transform = 'translateX(100%)'
// slides[3].style.transform = 'translateX(100%)'


// Play and Pause button
const playPauseCont = document.querySelector('.overview-img');
const play = document.querySelector('.play-icon');
const pause = document.querySelector('.pause-icon');


playPauseCont.addEventListener('click', function(e){
  // console.log(click)
  if (e.target.classList.contains('play-icon')) {
    // console.log(`we good`)
    e.target.classList.add('displayIcon'),
    pause.classList.add('displayIcon2')
  } else if (e.target.classList.contains('pause-icon')) {
    // console.log(`we good`)
    e.target.classList.remove('displayIcon2')
    play.classList.add('displayIcon2')
  }
  
})