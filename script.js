const weddingDate = new Date("April 25, 2026 19:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("countdown").innerHTML =
days + " Days " + hours + " Hours " + minutes + " Minutes";

},1000);
const openBtn = document.getElementById("openInvite");
const welcomeScreen = document.getElementById("welcomeScreen");

openBtn.addEventListener("click", function(){

welcomeScreen.classList.add("open");

setTimeout(()=>{

welcomeScreen.style.display="none";

},1600);

});
