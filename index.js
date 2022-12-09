var numOfDrum = document.querySelectorAll(".drum").length;
for (i = 0; i < numOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    makesoundKey(this.textContent);
    makeAnnimation(this.textContent);

  })
}
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  makeAnnimation(event.key);

  })
function makesoundKey(key){
  var titel;
switch (key) {
  case 'w':
    titel = "sounds/tom-1.mp3";
    break;
  case 'a':
    titel = "sounds/tom-4.mp3";
    break;
  case 's':
    titel = "sounds/tom-2.mp3";
    break;
  case 'd':
    titel = "sounds/tom-3.mp3";
    break;
  case 'j':
    titel = "sounds/crash.mp3";
    break;
  case 'k':
    titel = "sounds/kick-bass.mp3";
    break;
  case 'l':
    titel = "sounds/snare.mp3";
    break;
}
var audio = new Audio(titel);
audio.play();
}

  function makeSound(key) {
    var titel;
      switch (key) {
        case 'w':
          titel = "sounds/tom-1.mp3";  break;
        case 'a':
          titel = "sounds/tom-4.mp3";break;
        case 's':
          titel = "sounds/tom-2.mp3";  break;
        case 'd':
          titel = "sounds/tom-3.mp3";break;
        case 'j':
          titel = "sounds/crash.mp3";break;
        case 'k':
          titel = "sounds/kick-bass.mp3";break;
        case 'l':
          titel = "sounds/snare.mp3";  break;
      }
      var audio = new Audio(titel);
      audio.play();
  }

function makeAnnimation(key){
  var element=document.querySelector("." + key);
element.classList.add("pressed");
 setTimeout(function(){
   element.classList.remove("pressed");
 },50);
 //clearTimeout(id);
}
