const images = document.querySelectorAll('img');
const imageOptions = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };

const preloadImage = (img) => {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
}

const imageObserver = new IntersectionObserver((items, io) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
            return;
        } else {
            preloadImage(item.target);
            io.unobserve(item.target);
        }
    });
}, imageOptions);

images.forEach(image => {
    imageObserver.observe(image);
});