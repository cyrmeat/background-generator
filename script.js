// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);


var css = document.querySelector("h3");
var body = document.getElementById("gradient");

var s = window.getComputedStyle(body).background;
css.textContent = s.substring(17,55);
var color1_o = s.substring(43,46);
var color2_o = s.substring(48,54);

var btn1=document.getElementById('btn1');
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

color1.value = "#FF0000";
color2.value = "#FFFF00";

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function bg1(){
	//return '#'+Math.floor(Math.random()*256).toString(10);
	return '#'+Math.floor(Math.random()*0xffffff).toString(16);
};

btn1.onclick=function(){
	color1.value = bg1();
	color2.value = bg1();
    setGradient();
    console.log(color1, color2);
};
