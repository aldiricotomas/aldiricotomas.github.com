(function(){
    let cd = document.getElementById('op-cl-popup').addEventListener("click",function(){
        
        //Busco y obtengo los controles necesarios para la funcion
        let popup = document.querySelector(".popup");
        let popupCont = document.querySelector('.popup-content');
        let close = document.querySelector('.op-cl-popup');

        //Quito todas las clases
        popup.classList.remove("showed");
        popupCont.classList.remove('animate__animated');
        popupCont.classList.remove('animate__fadeInRight')

        //Agrego clases nuevas
        popupCont.classList.add('animate__animated')
        popupCont.classList.add('animate__fadeOutRight')

        //Agrego un tiempo de espera para que se vea la salida del popup
        setTimeout(function(){
            popup.classList.add('hidden');
        },1000);
    })
}());

