'use strict';

{

  function header(){
    $.ajax({
      url: "inc/header.html",
      cache: false,
      success: function(html){
        document.write(html);
      }
    });
  }

  function side(){
    $.ajax({
      url: "inc/side.html",
      cache: false,
      success: function(html){
        document.write(html);
      }
    });
  }

  function footer(){
    $.ajax({
      url: "inc/footer.html",
      cache: false,
      success: function(html){
        document.write(html);
      }
    });
  }


}



{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}