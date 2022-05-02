var buttonlength = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonlength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", al);
  function al() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}
document.addEventListener("keypress",function(event){
makesound(event.key);
buttonAnimation(event.key);
});
function makesound(key) {
  key=key.toLowerCase();
  switch (key) {
    case "w":
      var tom1 = new Audio(
        "/my web code/Drum Kit Starting Files/sounds/tom-1.mp3"
      );
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio(
        "/my web code/Drum Kit Starting Files/sounds/tom-2.mp3"
      );
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio(
        "/my web code/Drum Kit Starting Files/sounds/tom-3.mp3"
      );
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio(
        "/my web code/Drum Kit Starting Files/sounds/tom-4.mp3"
      );
      tom4.play();
      break;
    case "j":
      var snare = new Audio(
        "/my web code/Drum Kit Starting Files/sounds/snare.mp3"
      );
      snare.play();
      break;
    case "k":
      var crash = new Audio(
        "/my web code/Drum Kit Starting Files/sounds/crash.mp3"
      );
      crash.play();
      break;
    case "l":
      var kick_bass = new Audio(
        "/my web code/Drum Kit Starting Files/sounds/kick-bass.mp3"
      );
      kick_bass.play();
      break;
    default:
      console.log(key);
  }
}
function buttonAnimation(currentKey) {
  currentKey=currentKey.toLowerCase();
   var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
      
  }, 100);

    
}
