
(function(){
    shadows();
    bindEvents();
}())

function bindEvents(){
    let c=0;
    let items = document.querySelectorAll('.card').forEach(item => {
        item.addEventListener("click",function(){
            console.log(item.id);
            switch(item.id){
                case 'E1':
                    location.href = "./ejercicio1/index.html";
                break;

                case 'E2':
                    location.href = "./ejercicio2/index.html";
                break;

                case 'E3':
                    location.href = "./ejercicio3/index.html";
                break;

                case 'E4':
                    location.href = "./ejercicio4/index.html";
                break;

                case 'E5':
                    location.href = "./ejercicio5/index.html";
                break;

                case 'E6':
                    location.href = "./ejercicio6/index.html";
                break;
            }
            c++;
            console.log(c);
        });
    })
}

function shadows(){
    let productos = document.querySelectorAll('.card');
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