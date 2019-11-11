var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
window.onload = move;

var kort[];

kort[0] = 'img/fitnessworld.svg';
kort[1] = 'img/rejsekort.svg'
kort[2] = 'img/føtex.svg';

kort[3] = 'img/home.svg';
kort[4] = 'img/home2.svg';
kort[5] = 'img/ucl.svg';
kort[6] = 'img/abtion.svg';

