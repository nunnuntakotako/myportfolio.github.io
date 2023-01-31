'use strict';

{
  const open = document.getElementById("open");
  const overlay = document.querySelector(".ovrelay");

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
}