function getIt () {
  $('p').on('click',function () {
    alert ('Hey!')
  });
}

function frameIt () {
  $('img').on('load',function () {
    $(this).addClass('tasty');
  });
}

function pressIt () {
  $('img').on('keydown',function () {
    $(this).addClass('tasty');
  });
}

$(document).ready(function(){

// call functions here

});
