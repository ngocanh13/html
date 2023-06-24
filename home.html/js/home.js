const exploreBtn = document.querySelector('.cta-button');
exploreBtn.addEventListener('click', () => {
  alert('Bạn đã nhấp vào nút Khám phá!');
});

const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    console.log(`Bạn đã nhấp vào ảnh ${image.alt}`);
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
