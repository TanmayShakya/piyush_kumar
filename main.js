function click(){
var synth = window.speechSynthesis;
var speak_data = "Hello! I am Piyush Kumar. My Achivement is I am Topper,I am Friedly To Everyone.";
// var speak_data2 = "My hobbies are I like To draw Sketches of Chracter of Anime.I like To Watch Movies.I like the Most is To Watch K-Dramas.My favorate Game Is To play Call Of Duty.I like To Watch Anime.You can Contact me at my Mobile No:- +91 84495 00330 ,I am Availabe At Whatsapp/Telegram";
var utterThis =  new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}