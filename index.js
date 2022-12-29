
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(" .drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);
  });

}


document.addEventListener("keydown",function(event)
{
   makesound(event.key);
})
function makesound(mepress)
{
     switch(mepress)
     {
       case 'f':
       var tom1=new Audio("sounds/tom-1.mp3");
       tom1.play();
       break;

      case 'a':
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case 's':
      var crash1=new Audio("sounds/crash.mp3");
      crash1.play();
      break;

      case 'd':
      var kick1=new Audio("sounds/kick-bass.mp3");
      kick1.play();
      break;

      case 'j':
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case 'k':
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      case 'l':
      var snare1=new Audio("sounds/snare.mp3");
      snare1.play();
      break;
      default:
     }
}
