
(function(){
    toggleCheckedRadios();
    windowLeave();
    closeEvent();
}());

function closeEvent(){

    let close = document.querySelector('#close');
    close.addEventListener("click", ()=>{

        hidePopUp();
        setTimeout(() => {
            document.querySelector("#popup").style.display="none";
        }, 500);        
    })
}
function windowLeave(){
    document.addEventListener("mouseleave" ,function(e){
        if(e. clientY < 0)
        {
            showPopUp();
            
            setTimeout(() => {
                document.querySelector("#popup").style.display="flex";
            }, 500);     
            
        }
    } , false) ;
}
function showPopUp(){
    let popupCont = document.querySelector(".popup-content");
    removeClass(popupCont,'animate__animated')
    removeClass(popupCont,'animate__fadeOutRight')

    addClass(popupCont,'animate__animated')
    addClass(popupCont,"animate__fadeInRight");
}
function hidePopUp(){
    let popupCont = document.querySelector(".popup-content");

    removeClass(popupCont,"animate__fadeInRight");
    removeClass(popupCont,'animate__animated');

    addClass(popupCont,'animate__animated')
    addClass(popupCont,'animate__fadeOutRight')
}
function removeClass(obj,className){
    obj.classList.remove(className);
}
function addClass(obj,className){
    obj.classList.add(className);
}

function toggleCheckedRadios(){
    toggleRadioGroup();
    toggleSingleRadio();
}
function toggleRadioGroup(){

    //Establecemos que no hay items chequeados
    let check = null;
    //Iteramos los rbuttons
    document.querySelectorAll('.radio .experience').forEach((radio) =>{
        radio.addEventListener("click", (ev)=>{

            //Si habian items chequeeados 
            if(check){

                //Si clickeamos dos veces seguidas el mismo
                if(check == ev.target.id){

                    //Asignamos la propiedad false a checked.
                    ev.target.checked = false;
                    check = null;

                //Si clickeamos uno distinto
                }else{
                    //Establecemos que se clickeó un item distinto
                    check = ev.target.id;
                };

            // Si no habian items checkeados
            }else{

                //Establecemos que se clickeó en un item.
                check =  ev.target.id;
            }
            console.log("clickeado: " +ev.target.id +"; prvcheck: " + check)
        })
    })
}
function toggleSingleRadio(){
    //Genero el boton y el textarea.
    let textarea = textareaGenerate();
    let button = buttonGenerate();
    let popupCont = document.querySelector(".popup-content");
    let radios = document.querySelector(".radio");

    //Como no hay items seleccionados, lo ponemos en null.
    let extraCheck = null;

    //Agregamos el evento click al boton "deje un comentario"
    document.querySelector(".radio #another").addEventListener("click",(ev)=>{

        //Si hay un item seleccionado
        if(extraCheck){

            //Le quitamos el checked y establecemos que no hay items seleccionados (extracheck == null)
            ev.target.checked = false;
            extraCheck = null;

            //Vaciamos el textarea y eliminamos las etiquetas agregadas.
            radios.querySelector('textarea').value= "";
            radios.removeChild(textarea);
            popupCont.removeChild(button);

        //Si no hay items seleccionados, establecemos que se seleccionó un item( extracheck = ev.target.id)
        }else{
            extraCheck = ev.target.id;
            //Agregamos las etiquetas generadas
            radios.appendChild(textarea);
            popupCont.appendChild(button)
        }
    })
}
//Funcion para generar un textarea y agregar estilo
function textareaGenerate(){
    let textarea = document.createElement("textarea");
    textarea.rows = 6;
    textarea.classList.add("textarea");
    return textarea;
}
//Funcion para generar un boton y agregarle estilo
function buttonGenerate(){
    let button = document.createElement('button');
    button.innerHTML = "Enviar";
    button.type = 'submit';
    button.classList.add("btn-enviar");
    return button;
}



