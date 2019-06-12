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

function pressIt() {
  $('input#typing').keydown(function(key) {
    if (key.which === 71) {
      alert("You have pressed the G key.")
    }
  });
}

function submitIt () {
  $('img').submit('load',function () {
    return('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){

// call functions here

});
