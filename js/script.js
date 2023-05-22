// Scroll
let scrollAwal = window.pageYOffset;
window.onscroll = function () {
  const header = document.getElementById('header');
  let scrollAkhir = window.pageYOffset;
  console.log(scrollAwal);
  console.log(scrollAkhir);

  if (scrollAwal > scrollAkhir) {
    header.classList.remove('hide-header');
  } else {
    header.classList.add('hide-header');
  }

  scrollAwal = scrollAkhir;
};


let slideIndex = 1;
showSlides(slideIndex);
  
function plusSlides(n) {
  showSlides(slideIndex += n);
}
  
function currentSlide(n) {
  showSlides(slideIndex = n);
}
  
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// ===========================================

function tampilkanGambar1() {
  document.querySelector('.card-1' ).style.display = 'inline-flex';
  document.querySelector('.lihat-lebih1').style.display = 'inline-flex';
  document.querySelector('.lihat-lebih1-1').style.display = 'inline-flex';
}
function keluar1() {
  document.querySelector(".lihat-lebih1").style.display = 'none';
  document.querySelector(".card-1").style.display = 'none';
  document.querySelector('.lihat-lebih1-1').style.display = 'none';
}

// ===========================================


function tampilkanGambar2() {
  document.querySelector('.card-2' ).style.display = 'inline-flex';
  document.querySelector('.lihat-lebih2').style.display = 'inline-flex';
  document.querySelector('.lihat-lebih2-2').style.display = 'inline-flex';
}
function keluar2() {
  document.querySelector(".lihat-lebih2-2").style.display = 'none';
  document.querySelector(".lihat-lebih2").style.display = 'none';
  document.querySelector(".card-2").style.display = 'none';
}

// ============================================

function tampilkanGambar3() {
  document.querySelector('.card-3' ).style.display = 'inline-flex';
  document.querySelector('.lihat-lebih3').style.display = 'inline-flex';
  document.querySelector('.lihat-lebih3-3').style.display = 'inline-flex';
}
function keluar3() {
  document.querySelector(".lihat-lebih3").style.display = 'none';
  document.querySelector(".card-3").style.display = 'none';
  document.querySelector(".lihat-lebih3-3").style.display = 'none';
}

// ==============================================

function tampilkanGambar4() {
  document.querySelector('.card-4' ).style.display = 'inline-flex';
  document.querySelector('.lihat-lebih4').style.display = 'inline-flex';
  document.querySelector('.lihat-lebih4-4').style.display = 'inline-flex';
}
function keluar4() {
  document.querySelector(".lihat-lebih4").style.display = 'none';
  document.querySelector(".card-4").style.display = 'none';
  document.querySelector(".lihat-lebih4-4").style.display = 'none';
}

// ==============================================

function tampilkanGambar5() {
  document.querySelector('.card-5' ).style.display = 'inline-flex';
  document.querySelector('.lihat-lebih5').style.display = 'inline-flex';
  document.querySelector('.lihat-lebih5-5').style.display = 'inline-flex';
}
function keluar5() {
  document.querySelector(".lihat-lebih5").style.display = 'none';
  document.querySelector(".card-5").style.display = 'none';
  document.querySelector(".lihat-lebih5-5").style.display = 'none';
}

// ==============================================

function tampilkanGambar6() {
  document.querySelector('.card-6' ).style.display = 'inline-flex';
  document.querySelector('.lihat-lebih6').style.display = 'inline-flex';
  document.querySelector('.lihat-lebih6-6').style.display = 'inline-flex';
}
function keluar6() {
  document.querySelector(".lihat-lebih6").style.display = 'none';
  document.querySelector(".card-6").style.display = 'none';
  document.querySelector(".lihat-lebih6-6").style.display = 'none';
}

// ==============================================

function tampilkanGambar7() {
  document.querySelector('.card-7' ).style.display = 'inline-flex';
  document.querySelector('.lihat-lebih7').style.display = 'inline-flex';
  document.querySelector('.lihat-lebih7-7').style.display = 'inline-flex';
}
function keluar7() {
  document.querySelector(".lihat-lebih7").style.display = 'none';
  document.querySelector(".card-7").style.display = 'none';
  document.querySelector(".lihat-lebih7-7").style.display = 'none';
}

// ==============================================

function tampilkanGambar8() {
  document.querySelector('.card-8' ).style.display = 'inline-flex';
  document.querySelector('.lihat-lebih8').style.display = 'inline-flex';
  document.querySelector('.lihat-lebih8-8').style.display = 'inline-flex';
}
function keluar8() {
  document.querySelector(".lihat-lebih8").style.display = 'none';
  document.querySelector(".card-8").style.display = 'none';
  document.querySelector(".lihat-lebih8-8").style.display = 'none';
}