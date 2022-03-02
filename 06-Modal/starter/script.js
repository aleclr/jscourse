'use strict';

//storiing elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonShowModal = document.querySelectorAll('.show-modal');

const modalPack = [modal, overlay];

//shows all selected objects
const hideObject = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add('hidden');
  }
};

//hides all selected objects
const showObject = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove('hidden');
  }
};

for (let i = 0; i < buttonShowModal.length; i++) {
  buttonShowModal[i].addEventListener('click', () => {
    showObject(modalPack);
  });
  buttonCloseModal.addEventListener('click', () => {
    hideObject(modalPack);
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideObject(modalPack);
  }
});
