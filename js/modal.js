// MODAL BOX
const modal = document.querySelector('.modalBox');
const insBtn = document.querySelector('.modalCloseBtn');

window.addEventListener('click', function (e) {
  const overlay = document.querySelector('.modal-backdrop');
  // Guard Clause
  if (!(modal.classList.contains('show'))) return;
  if (e.target.classList.contains('fade')) {
    insBtn.click();
  }
})