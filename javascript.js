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

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const navSlide=()=>
{
	burger.addEventListener('click',()=>
	{
		//toggle nav
		nav.classList.toggle('nav-active');

		//burger animation
		burger.classList.toggle('toggle');
});

}

navSlide();
