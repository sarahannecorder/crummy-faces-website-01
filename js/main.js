
// CHANGING IMAGES FUNCTION

var faceNumber = 2;

  
function changeImage() {

  	if (faceNumber== 11) {
    faceNumber = 1;
  	
  	}
    
    var image = document.getElementById('myImage');
    image.src = "img/"+ faceNumber +".png";
    faceNumber ++;
   
          
	}

