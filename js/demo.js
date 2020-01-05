// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener(
  "DOMContentLoaded",
  function() {
    particleground(document.getElementById("particles"), {
      dotColor: "#D3D3D3",
      lineColor: "#D3D3D3"
    });
    var intro = document.getElementById("intro");
    intro.style.marginTop = -intro.offsetHeight / 2 + "px";
  },
  false
);

/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
