document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
        dots[i].classList.add('active');
      }
    });
    currentSlide = index;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
}

function toggleText() {
    const textBox = document.getElementById('textBox');
    const button = document.getElementById('toggleButton');

    if (textBox.style.display === 'none' || textBox.style.display === '') {
      textBox.style.display = 'block';
      button.textContent = 'Hide';
    } else {
      textBox.style.display = 'none';
      button.textContent = 'Fact';
    }
}