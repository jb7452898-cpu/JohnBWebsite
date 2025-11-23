window.onscroll = function() {myFunction()};

function myFunction() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop >150) {
		var aboveFold_L= document.getElementById("leftFold");
		var aboveFold_R= document.getElementById("rightFold");
		
		aboveFold_L.className = "left_2";
		aboveFold_R.className = "right_2";
	} else {
		document.getElementById("leftFold").className = "left";
		document.getElementById("rightFold").className = "right";	
	}
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        var sideDiv= document.getElementById("gameLink");
		sideDiv.className = "test";
		//alert(sideDiv.className);
    } else {
        document.getElementById("gameLink").className = "hidden";
    }
}