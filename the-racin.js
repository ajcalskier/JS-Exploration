var canvas, canvasContext;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

    loadImages();
}

function imageLoadingDoneSoStartGame() {
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

setupInput();
carReset();

}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
	 carMove();
	
	carTrackHandling();
}

// clear screen no longer needed (12.93)
/*
function clearScreen() {
	colorRect(0,0, canvas.width,canvas.height, 'black'); // clear screen
}
*/
function drawAll() {
    
    //clearScreen();
    drawTracks();
    carDraw();
    
    
}
