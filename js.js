var pos = 0; 
var pos2 = 150;
var elem = document.getElementById("myAnimation");   
var elem2 = document.getElementById("myAnimation2");    
var forward = true;    

var position = document.getElementById("container-kort");
document.getElementById("myAnimation") = position.offsetTop;

var position2 = document.getElementById("container-kort");
document.getElementById("myAnimation2") = position.offsetTop;


function myMove() {
 if (forward){
   moveForward(); 
 }else{
   moveBack();  
 }
}
function moveForward(){
   var id = setInterval(frame, 5);
   function frame() {
       if (pos > 150) {
         clearInterval(id);
         forward=false;    
       } else {
         pos++; 
         pos2--;
         elem.style.top = pos + 'px'; 
         elem2.style.top = pos2 + 'px';  
       }
     }
} 
function moveBack(){
   var id = setInterval(frame, 5);
   function frame() {
       if (pos == 0) {
         clearInterval(id);
         forward=true;    
       } else {
         pos--; 
         pos2++;
         elem.style.top = pos + 'px'; 
         elem2.style.top = pos2 + 'px';  
       }
     }
}     