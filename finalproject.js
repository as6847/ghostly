var background = document.querySelector('body');

function init(){

}

function face_change(){
	var random_number = Math.floor(Math.random() * 5);
	var ghostface = document.getElementById("ghostface");
	var face = ""
	if (random_number == 1) {
		face = "｀ヘ´";
	}
	else if (random_number == 2) {
		face = "๑`^´๑";
	}
	else if (random_number == 3) {
		face = "；ω；";
	}
	else if (random_number == 4) {
		face = "｡•́︿•̀｡";
	}
	else {
		face = "´• ω •`";
	}
	ghostface.textContent = face;
}

function random_color(){
	var random_number = Math.floor(Math.random() * 360);
	background.style.backgroundColor = "hsl(" + random_number + ", 20%, 50%)";
	background.style.transition = "all 1s";
}

function ghost_color(){
	var ghost = document.getElementById("ghost3");
	var random_number = Math.floor(Math.random() * 255);
	ghost.style.fill = "hsl(" + random_number + ", 20%, 50%)";
	ghost.style.stroke = "hsl(" + random_number + ", 20%, 30%)";
	ghost.style.transition = "all 1s";
}

function random_move(){
	var ghost = document.getElementById("ghost3");
	var ghostface = document.getElementById("ghostface");
	var random_number_x = Math.floor(Math.random() * 200);
	var random_number_y = Math.floor(Math.random() * 200);
	ghost.style.transform = "translate(" + random_number_x + "px, " + random_number_y + "px)";
	ghost.style.transition = "all 2s";
	ghostface.style.transform = "translate(" + random_number_x + "px, " + random_number_y + "px)";
	ghostface.style.transition = "all 2s";
}

function hiding(){
	var random_number = Math.random().toFixed(2);
	var ghost = document.getElementById("ghost3");
	ghost.style.opacity = random_number;
	ghost.style.transition = "all 2s";
}

function shrinkgrow(){
	var ghost = document.getElementById("ghost3");
	var ghostface = document.getElementById("ghostface");
	var random_number = Math.floor(Math.random() * 3) + 1;
	ghost.style.transform = "scale(" + random_number + ")";
	ghostface.style.transform = "scale(" + random_number + ")";
	ghost.style.transition = "all 2s";
	ghostface.style.transition = "all 2s";
}

document.getElementById("ghost3").addEventListener('click', face_change);
document.getElementById("one").addEventListener('click', random_color);
document.getElementById("two").addEventListener('click', ghost_color);
document.getElementById("three").addEventListener('click', random_move);
document.getElementById("four").addEventListener('click', hiding);
document.getElementById("five").addEventListener('click', shrinkgrow);