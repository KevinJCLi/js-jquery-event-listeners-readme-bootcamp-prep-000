//define functions here

function getIt () {
  $("p").on("click", function(clicking) {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addclass("tasty");
  });
}

function pressIt () {
  $(document).on("keydown", function (pressedKey) {
    if (pressedKey.which === 71) {
      alert ("You pressed the \"g\" key.");
    }
  });
}

function submitIt () {
  $("#typing").on("submit", function () {
    alert ("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here

});
