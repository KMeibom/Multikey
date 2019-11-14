var animating = false;

$('#container-kort').on('click', '.li-kort', function () {
    
    var clickedDiv = $(this).closest('div'),
        prevDiv = $("#container-kort > :first-child"),
        distance = clickedDiv.offset().top - prevDiv.offset().top;
    
    if (!clickedDiv.is(":first-child")) {
        animating = true;
        $.when(clickedDiv.animate({
           top: -distance
        }, 500),
        prevDiv.animate({
            top: distance
        }, 500)).done(function () {
            prevDiv.css('top', '0px');
            clickedDiv.css('top', '0px');
            prevDiv.insertBefore(clickedDiv);
            clickedDiv.prependTo("#container-kort");
            animating = false; 
        });
    }
	
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}