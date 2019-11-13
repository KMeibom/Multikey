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
const navLinks = document.querySelectorAll('.nav-links li');

const navSlide=()=>
{
	burger.addEventListener('click',()=>
	{
		//toggle nav
		nav.classList.toggle('nav-active');

			//animate links
	navLinks.forEach((link,index)=>
	{
		if (link.style.animation)
			{
				link.style.animation='';
			}
		else
		{
		link.style.animation=`navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
		}
	});
		//burger animation
		burger.classList.toggle('toggle');
});

}

navSlide();
