(function(){
    
    let close = document.getElementById('op-cl-popup');
    
    close.addEventListener("click",function(ev){

        ev.preventDefault();

        let popup = document.querySelector('.popup');
        let popupCont = document.querySelector('.popup-content');    

        popup.classList.remove('showed');
        popupCont.classList.remove('animate__animated');
        popupCont.classList.remove('animate__zoomIn')

        popupCont.classList.add('animate__animated')
        popupCont.classList.add('animate__zoomOut');
        
        setTimeout(function(){
            popup.classList.add('hidden');
        },1000);
        
    });
}());