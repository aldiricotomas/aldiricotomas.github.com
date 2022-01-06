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
        let index = IndexForSiblings.get(ev.currentTarget);
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
            cont.style.left = "-"+(left+0.5)+"%";
        })
    }
    resetIndicator(){
        document.querySelectorAll(".controls li.active")
            .forEach(item => item.classList.remove("active"));
    }


    buildControls(){
        for(let i=0;i < (this.itemsCount/4);i++){
            let control = document.createElement("li");
            if(i==0) control.classList.add("active");
            document.querySelector(".controls ul").appendChild(control);
        }
        /* let tamaño = window.screen.width;
        console.log(tamaño);
        if(tamaño>1024){
            for(let i=0;i < (this.itemsCount/4);i++){
                let control = document.createElement("li");
                if(i==0) control.classList.add("active");
                document.querySelector(".controls ul").appendChild(control);
            }
        }
        else if(tamaño>750){
            for(let i=0;i < (this.itemsCount/3);i++){
                console.log(this.itemsCount/3);
                let control = document.createElement("li");
                if(i==0) control.classList.add("active");
                document.querySelector(".controls ul").appendChild(control);
            }
        }
        else if(tamaño>500){
            for(let i=0;i < (this.itemsCount/2);i++){
                let control = document.createElement("li");
                if(i==0) control.classList.add("active");
                document.querySelector(".controls ul").appendChild(control);
            }
        }
        else{
            for(let i=0;i < (this.itemsCount);i++){
                let control = document.createElement("li");
                if(i==0) control.classList.add("active");
                document.querySelector(".controls ul").appendChild(control);
            }
        } */
    }
}


(function(){
    new Slider(".slider",false);
    shadows();
}());

    
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
/* function updateControls(itemsCount){

    let tamaño = window.screen.width;   
    
    if(tamaño>1024){
        do{
            let c=0;
            if(c==0){
                for(let i=0;i < (itemsCount/4);i++){    
                    let control = document.createElement("li");
                    if(i==0) control.classList.add("active");
                    document.querySelector(".controls ul").appendChild(control);
                } 
            }
            c++;
            var tamañoUpd = window.screen.width;
        }while(tamañoUpd>1024)
    }
    else if(tamaño>750){
        $('#list li').remove();
            for(let i=0;i < (itemsCount/3);i++){
                let control = document.createElement("li");
                if(i==0) control.classList.add("active");
                document.querySelector(".controls ul").appendChild(control);
            } 

    }
    else if(tamaño>500){
        $('#list li').remove();
        for(let i=0;i < (itemsCount/2);i++){
            let control = document.createElement("li");
            if(i==0) control.classList.add("active");
            document.querySelector(".controls ul").appendChild(control);
        } 
    }
    else{
        $('#list li').remove();
        for(let i=0;i < (itemsCount);i++){
            let control = document.createElement("li");
            if(i==0) control.classList.add("active");
            document.querySelector(".controls ul").appendChild(control);
        } 
    }
}
function removeChilds(){
   
} */