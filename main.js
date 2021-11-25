var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var imaggee= "BirthdayImage.jpg"
function new_image()
{
	fabric.Image.fromURL(imaggee, function(img)
	{
		console.log(img)
		block_image_object= img

		block_image_object.scaleToWidth(700)
		block_image_object.scaleToHeight(510)
		block_image_object.set({
			 top:0,
			 left:0
		})
canvas.add(block_image_object)
	})
}

function playSound(){
	x.play()
}
