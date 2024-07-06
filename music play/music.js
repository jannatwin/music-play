let play= document.getElementById("play");
        
let song= document.getElementById("song");
let ctrlicon= document.getElementById("control");

song.onloadedmetadata = function(){
    play.max = song.duration;
play.value = song.currentTime;

}
function playpause(){
   if(ctrlicon.classList.contains("fa-pause")){
     song.pause();
ctrlicon.classList.remove("fa-pause");
ctrlicon.classList.add("fa-play");

   }
else{
   song.play();
 ctrlicon.classList.add("fa-pause");
ctrlicon.classList.remove("fa-play");
}
}

if(song.play()){
   setInterval(()=>{
play.value = song.currentTime;
},500);

}

play.onchange = function(){
  song.play();
   song.currentTime = play.value;
   ctrlicon.classList.add("fa-pause");
   ctrlicon.classList.remove("fa-play");
}

