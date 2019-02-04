var canvas, canvasContext;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    
    colorRect(0,0, canvas.width,canvas.height, 'black'); // shows as loading, could display message/loading/whatever
    colorText("LOADING IMAGES...", canvas.width/2, canvas.height/2, 'white');

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
