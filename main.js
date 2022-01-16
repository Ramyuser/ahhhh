var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    fabric.Image.fromURL(get_image, function(Img) {
        blockimg_object = Img;
        blockimg_object.scaleToWidth(blockimg_width);
        blockimg_object.scaleToHeight(blockimg_height);
        blockimg_object.set({ top: player_y, left: player_x });
        canvas.add(blockimg_object);
    });
}


function playSound() {
    x.play();
}