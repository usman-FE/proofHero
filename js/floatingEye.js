const closeBtn = document.querySelector('.previewCloseBtn');
const notifyEl = document.querySelector('.notification-preview-box');
const floatingEye = document.querySelector('.floating-eye');
const previewSection = document.querySelector('.previewsTop');



// Close notification preview
closeBtn.addEventListener('click', function () {
  notifyEl.style.display = "none";
})

// Show notification preview
floatingEye.addEventListener('click', function () {
  notifyEl.style.display = "block";
})

// Show floating when preview is not visible
const obsCallBack = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    console.log(entry);
    floatingEye.style.display = "flex";
    observer.unobserve(previewSection);
  }
}

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-60px',
};

const observer = new IntersectionObserver(obsCallBack, options);
observer.observe(previewSection);
