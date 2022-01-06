class SliderButton{
    constructor(selector){
        this.move = this.move.bind(this);
        this.slider = document.querySelector(selector);
        this.contador = 0;

        this.start();
    }
    start(){
        /* if(!this.movimiento)return; */
        this.interval=  window.setInterval(this.move,2000);
    }

    move(){
        this.contador++;
        this.moveTo(this.contador);
    }

    moveTo(index){
        let left = index * 100;
        this.resetIndicator();
        /* document.querySelector(".controls li:nth-child("+(index+1)+")").classList.add("active");   */
        /* document.querySelectorAll(".slider2 .product").forEach(function(cont){
            cont.style.left = "-"+left+"%";
        }) */
    }

    
}

(function(){
    new SliderButton(".slider2");
}());