

// Obtener todos los links 
let links = document.querySelectorAll(".close");

// Recorremos los links
links.forEach(function(link){
    //Agregamos el evento click a cada link / Agregamos el receptor ev, para luego darle un stop a la pagina
    link.addEventListener("click", function(ev){
        
        //Evento de espera
        ev.preventDefault()

        //Buscamos los elementos con clase content
        let content = document.querySelector('.content');

        //Quitamos las animaciones
        content.classList.remove('animate__animated')
        content.classList.remove('animate__zoomIn');

        //Agregamos nuevas
        content.classList.add('animate__animated')
        content.classList.add('animate__fadeOutUp')

        //Agregamos una funcion de intervalo (1000 = 1 segundo)
        setTimeout(function(){
            location.href = "/";
        },1000);
    }); 
});


