let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');

let image = new Image();

image.onload = function(){

    let scale = this.height / this.width;

    let height = canvas.height*scale;
    let y = (canvas.height/2) - (height/2)
    ctx.drawImage(this,0,y,canvas.width,height);

}

image.src = 'nature.jpg';