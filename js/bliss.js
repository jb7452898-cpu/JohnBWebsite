var txtDrw2 = document.createElement('canvas');
var txtCxt2 = txtDrw2.getContext('2d');

	txtDrw2.width= 500;
	txtDrw2.height= 500;
	
var txtCX2= txtDrw2.width/2;
var txtCY2= txtDrw2.height/2;

//txtDraw2(txtCxt2, txtCX2, txtCY2);

//////////////////////////////////////////////////////////////////////

var txtDrw = document.createElement('canvas');
var txtCxt = txtDrw.getContext('2d');

	txtDrw.width= 500;
	txtDrw.height= 500;
	
var txtCX= txtDrw.width/2;
var txtCY= txtDrw.height/2;

//txtDraw(txtCxt, txtCX, txtCY);
//////////////////////////////////////////////////////////////////////

var lensDrw = document.createElement('canvas');
var lensCxt = lensDrw.getContext('2d');

	lensDrw.width= 214;
	lensDrw.height= 214;
	
var lensCX= lensDrw.width/2;
var lensCY= lensDrw.height/2;

//////////////////////////////////////////////////////////////////////

var lensCanv = document.createElement('canvas');
var lensCxt2 = lensCanv.getContext('2d');

	lensCanv.width= 214;
	lensCanv.height= 214;
	
var lensCtrX= lensCanv.width/2;
var lensCtrY= lensCanv.height/2;

//////////////////////////////////////////////////////////////////////

var canvas2 = document.createElement('canvas'); 
var drawCxt2 = canvas2.getContext('2d');
	
	canvas2.width = 214;
	canvas2.height = 214;
	
var canvCtrX= canvas2.width/2;
var canvCtrY= canvas2.height/2;

////////////////////////////////////////////////////////////////////////
function textRender(){
	txtDraw2(txtCxt2, txtCX2, txtCY2);
	txtDraw(txtCxt, txtCX, txtCY);
}

function memCanvas(centerX, centerY){
	
	drawCxt2.save();
	drawCxt2.beginPath();
	drawCxt2.arc(canvCtrX, canvCtrY, 106, 0, 2* Math.PI, true);
	drawCxt2.clip();
	

	//drawCxt2.save();
	drawCxt2.beginPath();
	drawCxt2.arc(248, 248, 114, 0, 2* Math.PI, true);
	drawCxt2.fillStyle= "rgb(170, 210, 213)";
	drawCxt2.fill();
	
	
	drawCxt2.beginPath();
	drawCxt2.arc(canvCtrX, canvCtrY, 105, 0, 2* Math.PI, true);
	
	drawCxt2.lineWidth= 1;
    drawCxt2.strokeStyle = "rgb(224, 255, 254)";
    drawCxt2.stroke();
	
	drawCxt2.beginPath();
	drawCxt2.arc(canvCtrX, canvCtrY, 95, 0, 2* Math.PI, true);
	drawCxt2.lineWidth= 1;
    drawCxt2.strokeStyle = "rgb(224, 255, 254)";
    drawCxt2.stroke();
	
	var grad= drawCxt2.createRadialGradient(248, 248, 1, 180, 180, 300);
	grad.addColorStop(0, "rgba(224, 255, 254, 1)");
	grad.addColorStop(.31, "rgba(224, 255, 254, .3)");
	//grad.addColorStop(0.32, "rgba(224, 255, 254, .3)");
    grad.addColorStop(0.4, "rgba(220,140,10, .15)");
    grad.addColorStop(0.5, "rgba(224,40,54, .1)");
    //grad.addColorStop(0.666, "blue");
    //grd.addColorStop(.7, "purple");
    grad.addColorStop(.8, "rgba(224,255,254, 0)");
    drawCxt2.fillStyle = grad;
    drawCxt2.fillRect(0,0,214,214);
	
	
	drawCxt2.restore();
	
	
	//drawCxt2.save();  ie?
	setAnim(centerX, centerY);
	
}

function rotLens(context){

	context.clearRect(0,0, 214, 214);

	context.translate(lensCtrX, lensCtrY);
	//context.rotate(-.12);
	context.rotate(-.5);
	context.translate(-lensCtrX, -lensCtrY);
	//context.clip();
	
	context.drawImage(lensDrw, 0, 0);
		
}

function txtDraw(drawCxt, cx,cy){

	CanvasRenderingContext2D.prototype.fillTextCircle = function(text,x,y,radius,startRotation){
	   var numDegreesPerLetter = 2*Math.PI / text.length;
	   this.save();
	   this.translate(x,y);
	   this.rotate(startRotation);
	
	   for(var i=0;i<text.length;i++){
		  this.save();
		  this.translate(radius, 0);

		  this.translate(8, -8);

		  //this.rotate(1.5)
		  this.rotate(4.5)
		  this.translate(-8, 8);          

		  this.fillText(text[i],0,0);
		  this.restore();
		  this.rotate(numDegreesPerLetter);
	   }
	   this.restore();
	}
	
	drawCxt.font= "24pt Trajan Pro Regular";	
	drawCxt.fillStyle= "rgb(224, 255, 254)";
	//drawCxt.fillTextCircle("JavaScript 1.8.5             ECMAScript            ",cx ,cy ,210, 4);
	drawCxt.fillTextCircle("PLEASE ENJOY YOUR STAY",cx ,cy ,210, 4);
	
	//rotTxt(rotLyr, x, y);	
}

function txtDraw2(drawCxt, cx, cy){

	CanvasRenderingContext2D.prototype.fillTextCircle = function(text,x,y,radius,startRotation){
	   var numDegreesPerLetter = 2*Math.PI / text.length;
	   this.save();
	   this.translate(x,y);
	   this.rotate(startRotation);
	
	   for(var i=0;i<text.length;i++){
		  this.save();
		  this.translate(radius, 0);

		  this.translate(8, -8);

		  //this.rotate(1.4)
		  this.rotate(.01)
		  this.translate(-8, 8);          

		  this.fillText(text[i],0,0);
		  this.restore();
		  this.rotate(numDegreesPerLetter);
	   }
	   this.restore();
	}
		
	drawCxt.font= '15pt Trajan Pro Regular';
	drawCxt.fillStyle= "rgb(224, 255, 254)";
	//drawCxt.fillTextCircle("Object-Oriented      Programming     ",cx ,cy ,70,4.8);
	drawCxt.fillTextCircle("|||    |||    |||    |||    ",cx ,cy ,70,4.8);

}

function lensDraw(lens){
	
	lens.fillStyle= "rgb(224, 255, 254)";
	lens.fillRect(204,107,6, 6);
	lens.fillRect(107,204,6, 6);
	lens.fillRect(4,107,6, 6);
	lens.fillRect(107,4,6, 6);
	lens.save();
	 
	for (var i=0; i<24; i++){
		
		lens.beginPath();
		lens.moveTo(lensCX, lensCY);
		lens.lineTo(166, 107);
		lens.arc(lensCX, lensCY, 83, 0, .042* Math.PI, false);
		lens.closePath();
		lens.fillStyle= "rgba(224, 255, 254, .5)";
		lens.fill();
		
		lens.translate(lensCtrX, lensCtrY);
		lens.rotate(.083* Math.PI);
		lens.translate(-lensCtrX, -lensCtrY);

	}
		
}
var tmrA;
	
var outr= new Image(212,212);
	outr.src= "imgs/out.png";

var innr= new Image(170,170);
	innr.src= "imgs/in.png";

var piCalc= 2* Math.PI;

		
window.onload= function(){		
  	//initMouse();/// from mousePos.js
	var canvas= document.getElementById("myCanvas");
	canvas.width= 500;
	canvas.height= 500;
    var context= canvas.getContext("2d");
    var centerX= canvas.width/ 2;
    var centerY= canvas.height/ 2;
    var radius1= 240;
	var radius2= 207;
	var radius3= 202;
	var radius4= 185;
	var radius5= 90;
	var radius6= 75;
//////////// 
	
    context.beginPath();
    context.arc(centerX, centerY, radius1, 0, piCalc, false);
	
    context.lineWidth = 2;
    context.strokeStyle= "rgb(224, 255, 254)";
    context.stroke();
//////////////	
	context.beginPath();
    context.arc(centerX, centerY, radius2, 0, 2* piCalc, false);

     context.lineWidth= 2;
     context.strokeStyle= "rgb(224, 255, 254)";
     context.stroke();
/////////////	
	context.beginPath();
    context.arc(centerX, centerY, radius3, 0, piCalc, false);

    context.lineWidth= 2;
    context.strokeStyle = "rgb(224, 255, 254)";
    context.stroke();
///////////////	
	context.beginPath();
    context.arc(centerX, centerY, radius4, 0, piCalc, false);

    context.lineWidth= 1;
    context.strokeStyle = "rgb(224, 255, 254)";
    context.stroke();
///////////////////	
	context.beginPath();
    context.arc(centerX, centerY, 109, 0, piCalc, false);
	context.closePath();
    context.lineWidth= .5;
    context.strokeStyle = "rgb(224, 255, 254)";
    context.stroke();
	
	context.beginPath();
    context.arc(centerX, centerY, 111, 0, piCalc, false);
	context.closePath();
    context.lineWidth= .5;
    context.strokeStyle = "rgb(224, 255, 254)";
    context.stroke();
//////////////////////////////////////////
	context.beginPath();
    context.arc(centerX, centerY, 91, 0, piCalc, false);
	context.closePath();
    context.lineWidth= .5;
    context.strokeStyle = "rgb(224, 255, 254)";
    context.stroke();
	
	//context.beginPath();
    context.arc(centerX, centerY, 93, 0, piCalc, false);
	context.closePath();
    context.lineWidth= .5;
    context.strokeStyle = "rgb(224, 255, 254)";
    context.stroke();
	

	
	
/////////////////////////////////////////////////////////////////////////////////////
	textRender();
	lensDraw(lensCxt);
	
	memCanvas(centerX, centerY);	

	// removed for creativeBliss.tk -----navScrollDraw();
}
//////////// draw the static nav lines
/*function navScrollDraw(){

	var lyrC= document.getElementById("layerC");
	lyrC.height= 500;
	lyrC.width= 200;
	var ctxC= lyrC.getContext("2d");
	
	ctxC.beginPath();  // arrow
	ctxC.moveTo(90,25);
	ctxC.lineTo(54,25);
	ctxC.lineTo(54,230);
	ctxC.moveTo(54,265);
	ctxC.arc(-190, 240, 245, .05*Math.PI, .5*Math.PI);
	//ctxC.lineTo(54,490);
	//ctxC.lineTo(100,490);
	////drawCxt.closePath();
	ctxC.lineWidth= 1;
	ctxC.strokeStyle= "rgb(224, 255, 254)";
	ctxC.stroke();
	
}*/



function setAnim(ctrX, ctrY){
	
	var lyrB= document.getElementById("layerB");
	lyrB.width= 500;
	lyrB.height= 500;
	var ctxB= lyrB.getContext("2d");
	
	var lyrA= document.getElementById("layerA");
	lyrA.width= 500;
	lyrA.height= 500;
	var ctxA= lyrA.getContext("2d");
	
	var lyr1= document.getElementById("layer1");
	lyr1.width= 500;
	lyr1.height= 500;
	var ctx= lyr1.getContext("2d");
	
	var lyr2= document.getElementById("layer2");//////////////eccentric
	lyr2.width= 500;
	lyr2.height= 500;
	var ctx2= lyr2.getContext("2d");
		
		
	var lyr3= document.getElementById("layer3");
	lyr3.width= 500;
	lyr3.height= 500;
	var ctx3= lyr3.getContext("2d");
	
	var lyr4= document.getElementById("layer4");
	lyr4.width= 500;
	lyr4.height= 500;
	var ctx4= lyr4.getContext("2d");
		
	
	var lyr6= document.getElementById("layer6");
	lyr6.width= 500;
	lyr6.height= 500;
	var ctx6= lyr6.getContext("2d");
	
	var lyr7= document.getElementById("layer7");
	lyr7.width= 500;
	lyr7.height= 500;
	var ctx7= lyr7.getContext("2d");
	
	ctx2.beginPath();
    ctx2.arc(250,250, 240, 0, piCalc, false);
	ctx2.clip();
	//animCircs(ctxB, ctxA, ctx, ctx2, ctx3, ctx4, lensCtx2, ctx6, ctx7, ctrX, ctrY);
	var fps = 38;
	(function animloop(){
		setTimeout(function(){ //throttle requestAnimationFrame to 20fps
						rotImgB(ctxB, ctrX, ctrY);
						rotImgA(ctxA, ctrX, ctrY);
						rotAnim1(ctx, ctrX, ctrY);
						//ctx2.clearRect(0,0,500,500);
						rotEc(ctx2, ctrX, ctrY);
						rotTxt(ctx3, ctrX, ctrY);
						rotAnim3(ctx4, ctrX, ctrY);
						rotLens(lensCxt2);
						rotTxt2(ctx6, ctrX, ctrY);
						rotAnim5(ctx7, ctrX, ctrY);
        requestAnimationFrame(animloop)
    }, ~~(1000/fps))
	
	})();


	

/*	tmrA= setInterval(function(){
		rotImgB(ctxB, ctrX, ctrY);
		rotImgA(ctxA, ctrX, ctrY);
		rotAnim1(ctx, ctrX, ctrY);
		//ctx2.clearRect(0,0,500,500);
		rotEc(ctx2, ctrX, ctrY);
		rotTxt(ctx3, ctrX, ctrY);
		rotAnim3(ctx4, ctrX, ctrY);
		rotLens(lensCxt2);
		rotTxt2(ctx6, ctrX, ctrY);
		rotAnim5(ctx7, ctrX, ctrY);
		
		
		},45);*/
		
}
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// usage:
// instead of setInterval(render, 16) ....

/*(function animloop(){
	requestAnimFrame(animloop);
	
	rotImgB(ctxB, ctrX, ctrY);
	rotImgA(ctxA, ctrX, ctrY);
	rotAnim1(ctx, ctrX, ctrY);
	//ctx2.clearRect(0,0,500,500);
	rotEc(ctx2, ctrX, ctrY);
	rotTxt(ctx3, ctrX, ctrY);
	rotAnim3(ctx4, ctrX, ctrY);
	rotLens(lensCxt2);
	rotTxt2(ctx6, ctrX, ctrY);
	rotAnim5(ctx7, ctrX, ctrY);
})();*/
// place the rAF *before* the render() to assure as close to
// 60fps with the setTimeout fallback.

				
/*function animCircs(ctxB, ctxA, ctx, ctx2, ctx3, ctx4, lensCtx2, ctx6, ctx7, ctrX, ctrY){
	
		rotImgB(ctxB, ctrX, ctrY);
		rotImgA(ctxA, ctrX, ctrY);
		rotAnim1(ctx, ctrX, ctrY);
		
		rotEc(ctx2, ctrX, ctrY);
		rotTxt(ctx3, ctrX, ctrY);
		rotAnim3(ctx4, ctrX, ctrY);
		rotLens(lensCxt2);
		rotTxt2(ctx6, ctrX, ctrY);
		rotAnim5(ctx7, ctrX, ctrY);
		
		requestAnimFrame(animCircs());
}*/

	
function rotAnim1(context, cenX, cenY){
		// Clear the canvas
		context.clearRect(0, 0, 500, 500);
		
		// Move registration point to the center of the canvas
		context.translate(cenX, cenY);
		
		// Rotate 1 degree
		//context.rotate(Math.PI / 180);
		context.rotate(-.004);
		// Move registration point back to the top left corner of canvas
		context.translate(-cenX, -cenY);
		
		// Draw 
		drawAnim1(context);
		//drawAnim2(context);
}

//////////////////////////////////////////////////////////////eccentric
function rotEc(context, cenX, cenY){
		// Clear the canvas
		context.clearRect(0, 0, 500, 500);
		
		// Move registration point to the center of the canvas
		context.translate(cenX, cenY);
		
		// Rotate 1 degree
		//context.rotate(Math.PI / 180);
		context.rotate(.04);
		// Move registration point back to the top left corner of canvas
		context.translate(-cenX, -cenY);
		
		drawEc(context);/////////////////////////////////////eccentric
		
		// Draw 
		//drawAnim1(context);
		//drawEc(context);
}
// ////////////////////////////////////////////////// eccentric 
function drawEc(drawCxt){
	drawCxt.clearRect(0, 0, 500, 500);
	drawCxt.beginPath();
	drawCxt.arc(239, 239, 168, 0, piCalc, true);
	drawCxt.closePath();
	
	drawCxt.strokeStyle= "rgb(224, 255, 254)";
	drawCxt.stroke();
	drawCxt.drawImage(canvas2, 4, 4);///////////////////looking glass
	drawCxt.drawImage(lensCanv, 4, 4);///////////////////lens animation
}


function rotTxt(context, cenX, cenY){
		// Clear the canvas
		context.clearRect(0, 0, 500, 500);
		
		// Move registration point to the center of the canvas
		context.translate(cenX, cenY);
		
		// Rotate 1 degree
		context.rotate(-.001);
		// Move registration point back to the top left corner of canvas
		context.translate(-cenX, -cenY);
		
		// Draw 
		//drawAnim1(context);
		//context.drawImage(txtCanv, cenX, cenY)
		//drawTxt(context, cenX, cenY);
		context.drawImage(txtDrw, 0, 0);
}

function rotTxt2(context, cenX, cenY){
		// Clear the canvas
		context.clearRect(0, 0, 500, 500);
		
		// Move registration point to the center of the canvas
		context.translate(cenX, cenY);
		
		// Rotate 1 degree
		//context.rotate(Math.PI / 180);
		context.rotate(-.015);
		// Move registration point back to the top left corner of canvas
		context.translate(-cenX, -cenY);
		
		// Draw 
		//drawAnim1(context);
		//drawTxt2(context, cenX, cenY);
		context.drawImage(txtDrw2, 0, 0);
}	

function rotAnim3(context, cenX, cenY){
		// Clear the canvas
		context.clearRect(0, 0, 500, 500);
		
		// Move registration point to the center of the canvas
		context.translate(cenX, cenY);
		
		// Rotate 1 degree
		//context.rotate(Math.PI / 180);
		context.rotate(-.01);
		// Move registration point back to the top left corner of canvas
		context.translate(-cenX, -cenY);
		
		// Draw 
		//drawAnim1(context);
		drawAnim3(context);
}


function rotAnim5(context, cenX, cenY){
		// Clear the canvas
		context.clearRect(0, 0, 500, 500);
		
		// Move registration point to the center of the canvas
		context.translate(cenX, cenY);
		
		// Rotate 1 degree
		//context.rotate(Math.PI / 180);
		context.rotate(-.03);
		// Move registration point back to the top left corner of canvas
		context.translate(-cenX, -cenY);
		
		// Draw 
		//drawAnim1(context);
		drawAnim5(context, cenX, cenY);
}

function rotImgA(context, cenX, cenY){
		// Clear the canvas
		context.clearRect(0, 0, 500, 500);
		
		// Move registration point to the center of the canvas
		context.translate(cenX, cenY);
		
		// Rotate 1 degree
		//context.rotate(Math.PI / 180);
		context.rotate(-.05);
		// Move registration point back to the top left corner of canvas
		context.translate(-cenX, -cenY);
		
		// Draw 
		//drawAnim1(context);
		//drawImg(context);
		context.drawImage(outr,cenX- 70,cenY- 70, 140, 140);
}

function rotImgB(context, cenX, cenY){
		// Clear the canvas
		context.clearRect(0, 0, 500, 500);
		
		// Move registration point to the center of the canvas
		context.translate(cenX, cenY);
		
		// Rotate 1 degree
		//context.rotate(Math.PI / 180);
		context.rotate(-.1);
		// Move registration point back to the top left corner of canvas
		context.translate(-cenX, -cenY);
		
		// Draw 
		//drawAnim1(context);
		//drawImg(context);
		context.drawImage(innr,cenX- 57,cenY- 57, 114, 114);
}


function drawAnim1(drawCxt){
		
	drawCxt.beginPath(); // circle
    drawCxt.arc(26, 250, 15, 0, piCalc, true);
	drawCxt.closePath();

    drawCxt.fillStyle = "rgb(143, 169, 176)";
    drawCxt.fill();
	
	/////////////////////////////////
	
	drawCxt.beginPath();  // arrow
	drawCxt.moveTo(488,250);
	drawCxt.lineTo(458,230);
	drawCxt.lineTo(458,270);
	drawCxt.closePath();
	drawCxt.lineWidth= 2;
	drawCxt.strokeStyle = "rgb(224, 255, 254)";
	drawCxt.stroke();
	
}

function drawAnim3(drawCxt){
	
	drawCxt.beginPath();
	drawCxt.moveTo(11,250);
	drawCxt.lineTo(42,250);
	drawCxt.moveTo(458,250);
	drawCxt.lineTo(490,250);
	drawCxt.lineWidth= 2;
	drawCxt.strokeStyle= "rgb(224, 255, 254)";
	drawCxt.stroke();
		
}

function drawAnim5(drawCxt, ctrW, ctrH){

	drawCxt.beginPath();
	drawCxt.moveTo(65, 250);
	drawCxt.lineTo(435, 250);
	drawCxt.lineWidth= 1;
	drawCxt.strokeStyle= "rgb(224, 255, 254)";
	drawCxt.stroke();
		
}
