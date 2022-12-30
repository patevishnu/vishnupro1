
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(" .drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
      buttonAnnimation(buttonInnerHTML);
    makesound(buttonInnerHTML);
  });

}


document.addEventListener("keydown",function(event)
{
  buttonAnnimation(event.key);
   makesound(event.key);
})
function makesound(mepress)
{
     switch(mepress)
     {
       case 'f':
       var tom1=new Audio("tom-1.mp3");
       tom1.play();
       break;

      case 'a':
      var tom2=new Audio("tom-2.mp3");
      tom2.play();
      break;

      case 's':
      var crash1=new Audio("crash.mp3");
      crash1.play();
      break;

      case 'd':
      var kick1=new Audio("kick-bass.mp3");
      kick1.play();
      break;

      case 'j':
      var tom3=new Audio("tom-3.mp3");
      tom3.play();
      break;

      case 'k':
      var tom4=new Audio("tom-4.mp3");
      tom4.play();
      break;

      case 'l':
      var snare1=new Audio("snare.mp3");
      snare1.play();
      break;
      default:
     }
}

function buttonAnnimation(currentkey)
{
         var activebutton=document.querySelector("."+currentkey);
         activebutton.classList.add("pressed");
         setTimeout(function()
       {
         activebutton.classList.remove("pressed");
       },100)
}
