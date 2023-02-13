var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyBg = document.querySelector("#gradient");
var css = document.querySelector("h3");
var btn = document.querySelector(".btn");


function setGradient(){
	bodyBg.style.background = `linear-gradient(to right, ${color1.value}  , ${color2.value})`;
	css.textContent = bodyBg.style.background + ";";
}

function setRandomGradient(){
	color1.value = `#${Math.floor(Math.random()*16777215).toString(16)}`;
	color2.value = `#${Math.floor(Math.random()*16777215).toString(16)}`;
	setGradient();
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
btn.addEventListener("click",setRandomGradient);
setGradient();