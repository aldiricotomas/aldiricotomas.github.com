class IndexForSiblings{
    static get(el){
        let children = el.parentNode.children;

        for(var i = 0; i < children.length; i++) {
            let child = children[i];
            if(child == el){
                return i;
            }
            
        }
    };

}

class Slider{
    constructor(selector,movimiento=true){
        this.move = this.move.bind(this);
        this.moveByButton = this.moveByButton.bind(this);
        this.slider = document.querySelector(selector);
        this.interval = null;
        this.contador = 0; 
        this.itemsCount = this.slider.querySelectorAll(".slider-cont > *").length;
        this.movimiento = movimiento;
        this.start();   
        
        this.buildControls();

        this.bindEvents();
    }


    start(){
        if(!this.movimiento)return;
        this.interval=  window.setInterval(this.move,2000);
    }

    restart(){
        if(this.interval)window.clearInterval(this.interval);
        this.start();
    }
    bindEvents(){
        document.querySelectorAll(".controls li")
        .forEach(item => {
            item.addEventListener("click",this.moveByButton);
        });
    }

    moveByButton(ev){
        let index = IndexForSiblings.get(ev.currentTarget);;
        this.contador=index;
        this.moveTo(index);
        this.restart();
    }
    move(){
        this.contador++;
        console.log(this.contador);
        if(this.contador > this.itemsCount-1){
            this.contador = 0;
        }
        this.moveTo(this.contador);
    }

    moveTo(index){
        let left = index * 100;
        this.resetIndicator();
        document.querySelector(".controls li:nth-child("+(index+1)+")").classList.add("active");  
        this.slider.querySelectorAll(".slider-cont").forEach(function(cont){
            if(index==0){
                cont.style.left = "-"+(left)+"%";
            }else{
                cont.style.left = "-"+(left+1.4)+"%";
            }
        })
    }
    resetIndicator(){
        document.querySelectorAll(".controls li.active")
            .forEach(item => item.classList.remove("active"));
    }


    buildControls(){
        let c = 0;
        let tamaño = window.screen.width;
        let cant = 0;
        if(tamaño>1151){
            cant = this.itemsCount/4;
            if(c==0){
                for(let i=0;i < cant;i++){
                    let control = document.createElement("li");
                    if(i==0) control.classList.add("active");
                    document.querySelector(".controls ul").appendChild(control);
                }
            }
            
            c++;
        }
        else if(tamaño > 751){
            cant = this.itemsCount/3;
            if(c==0){
                for(let i=0;i < cant;i++){
                    let control = document.createElement("li");
                    if(i==0) control.classList.add("active");
                    document.querySelector(".controls ul").appendChild(control);
                }
            }
            c++;
        }
        else if(tamaño > 501){
            cant = this.itemsCount/2;
            if(c==0){
                for(let i=0;i < cant;i++){
                    let control = document.createElement("li");
                    if(i==0) control.classList.add("active");
                    document.querySelector(".controls ul").appendChild(control);
                }
            }
            c++;
        }
        else{
            cant = this.itemsCount/1;
            if(c==0){
                for(let i=0;i < cant;i++){
                    let control = document.createElement("li");
                    if(i==0) control.classList.add("active");
                    document.querySelector(".controls ul").appendChild(control);
                }
            }
            c++;
        }        
    }
}


(function(){
    new Slider(".slider",false);
    window.addEventListener("resize", updateControls(),true);
    shadows();
}());

function updateControls(){
    let c = 0;
    let tamaño = window.screen.width;
    let cant = 0;
    let itemsCount = Slider.itemsCount;
    console.log(tamaño);
    if(tamaño>1151){
        cant = itemsCount/4;
        if(c==0){
            for(let i=0;i < cant;i++){
                let control = document.createElement("li");
                if(i==0) control.classList.add("active");
                document.querySelector(".controls ul").appendChild(control);
            }
        }
        
        c++;
    }
    else if(tamaño > 751){
        cant = itemsCount/3;
        if(c==0){
            for(let i=0;i < cant;i++){
                let control = document.createElement("li");
                if(i==0) control.classList.add("active");
                document.querySelector(".controls ul").appendChild(control);
            }
        }
        c++;
    }
    else if(tamaño > 501){
        cant = itemsCount/2;
        if(c==0){
            for(let i=0;i < cant;i++){
                let control = document.createElement("li");
                if(i==0) control.classList.add("active");
                document.querySelector(".controls ul").appendChild(control);
            }
        }
        c++;
    }
    else{
        cant = itemsCount/1;
        if(c==0){
            for(let i=0;i < cant;i++){
                let control = document.createElement("li");
                if(i==0) control.classList.add("active");
                document.querySelector(".controls ul").appendChild(control);
            }
        }
        c++;
    }        
}


/* function moveSlider(){
    let productos = document.querySelectorAll('.product');
    console.log
}
 */
/* function moveTo(){
    setTimeout(function(){
        let productos = document.querySelectorAll('.product');
        for(let i = 0;i<productos.length;i++){
            if(){

            }
        }
    },10000);
    } */
function shadows(){
    let productos = document.querySelectorAll('.product');
    productos.forEach(function(producto){
        producto.addEventListener("mouseover",function(ev){
            ev.preventDefault();

            producto.classList.remove("animation-product-out")
            producto.classList.add("animation-product-in");

            producto.classList.add("shadow");

        });

        producto.addEventListener("mouseout",function(ev){
            ev.preventDefault();

            producto.classList.remove("animation-product-in");

            producto.classList.add("animation-product-out")
            producto.classList.remove("shadow");    
        });
    })
}
