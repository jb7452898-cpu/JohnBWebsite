var b;
var r;
var hr;
var bull;

var x=0, x2=0, x3=0, x4=0, y=0, y2=0, y3=0, y4=0; 
var tempX = 0;
var tempY = 0;
var winW;
var winH;
var IE = document.all?true:false;
/////////////////////////////////////////////////document.body.clientHeight
if (!IE) document.captureEvents(Event.MOUSEMOVE)
	document.onmousemove = getMouseXY;

function windowSize() {

	  if( typeof( window.innerWidth ) == 'number' ) {
		//Non-IE
			winW = window.innerWidth;
			winH = window.innerHeight;
	  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
			winW = document.documentElement.clientWidth;
			winH = document.documentElement.clientHeight;
	  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		//IE 4 compatible
			winW = document.body.clientWidth;
			winH = document.body.clientHeight;
	  }

}

function initMouse() {
	windowSize();
	//b = document.getElementById("boxAnim");
	//r = document.getElementById("animContain");
	//hr =document.getElementById("handRail");
	//bull =document.getElementById("bulletin");
	//imgSeq= document.getElementById("blocktest");
	//bc = document.getElementById("boxContain");
	//theTimer();
	//moveIt();
}						
			


function getMouseXY(e) {
	if (IE) { // grab the x-y pos.s if browser is IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}
	else {  // grab the x-y pos.s if browser is NS
		tempX = e.pageX;
		tempY = e.pageY;
	} 
	 
	if (tempX < 0){
			tempX = 0;
		}

	var math = Math.round(winW/math);
	 
	var theCount= Math.ceil(tempX/math);
	
	//---------------display variable data
	document.Show.MouseX.value = tempX;
	document.Show3.winWidth.value= winW;
	document.Show4.Division.value= math;
	document.Show5.imgRef.value= theCount;
	document.Show6.limitMove.value= limit;
	document.Show7.winHeight.value= winH;
	document.Show8.MouseY.value = tempY;

	return true;
}

window.requestAnimFrame = (function(){
				return 	window.requestAmimationFrame		||
						window.webkitRequestAmimationFrame	||	
						window.mozRequestAmimationFrame		||
						window.oRequestAmimationFrame		||
						window.msRequestAmimationFrame		||
						function(/* function*/ callback/*, DOMElement element*/){
							window.setTimeout(callback,1000/60);
						};
				})();
							
function moveIt() {//---------	called from requestAnimationFrame{recursion}

	limit2= Math.floor(tempX/130)*-1;
	limit4= Math.floor(tempY/120)*-1; 
	x2 += (limit2 - x2) * 0.1;  //set ease
	y2 += (limit4 - y2) * 0.1;
	r.style.left = (x2+ (winW/2)) + "px";
	r.style.top = (y2+ (winH/2)) + "px"; 
	
	//requestAnimFrame(moveIt/*, b*/);
	//limit= Math.floor(tempX/40)*-1;  //panels
	//limit2= Math.floor(tempX/130)*-1; ////personel
	//limit3= Math.floor(tempX/25)*-1; //handRail
	
	//limit4= Math.floor(tempY/120)*-1; ////personel
	//limit5= Math.floor(tempY/35)*-1; //handRail
	//limit6= Math.floor(tempY/8)*-1; //panels
	
	//limit7= Math.floor(tempX/20)*-1; //bulletin
	//limit8= Math.floor(tempY/6)*-1; //bulletin
	
	//x += (limit - x) * 0.1;  //set ease
	//x2 += (limit2 - x2) * 0.1;  //set ease
	//x3 += (limit3 - x3) * 0.1;  //set ease
	//x4 += (limit7 - x4) * 0.1;  //set ease bulletin
	
	//y += (limit6 - y) * 0.1;  //set ease
	//y2 += (limit4 - y2) * 0.1;  //set ease
	//y3 += (limit5 - y3) * 0.1;  //set ease
	//y4 += (limit8 - y4) * 0.1;  //set ease bulletin
		//b.style.left = (x+ (winW/2- 520)) + "px";
		//b.style.top = (winH/2- 500) + "px"; //for animation uses 'y' 
		//r.style.left = (x2+ (winW/2)) + "px";
		//r.style.top = (y2+ (winH/2)) + "px"; 
		//hr.style.left = x3 + "px";
		//hr.style.top = (y3+winH/2+ 610) + "px";
		//bull.style.left = (x2+ (winW/2- 550)) + "px";
		//bull.style.top = (y2+ (winH/2- 420)) + "px";
