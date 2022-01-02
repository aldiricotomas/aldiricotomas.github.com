(function(){

    let productos = document.querySelectorAll('.product');
    console.log(productos);
    productos.forEach(function(producto){
        producto.addEventListener("mouseover",function(ev){
            ev.preventDefault();

            producto.classList.remove("animation-product-out")
            producto.classList.add("animation-product-in");

            producto.classList.add("shadow");
         /*    setTimeout(function(){
                
            },1000); */
            
        });

        producto.addEventListener("mouseout",function(ev){
            ev.preventDefault();

            producto.classList.remove("animation-product-in");

            producto.classList.add("animation-product-out")
            
            setTimeout(function(){
                producto.classList.remove("shadow");
            },0);
            
        });
    })
    /* producto.addEventListener("mouseover",function(){
        setTimeout(function(){
            producto.classList.add("shadow");
        },1000);
    })
    producto.addEventListener("mouseout",function(ev){
        
    }) */
   /*  productos.forEach(function(producto){

        producto.addEventListener('mouseover',function(ev){
            ev.preventDefault();

            
        })
    }) */
}());