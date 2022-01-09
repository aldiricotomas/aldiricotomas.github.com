class InputMD{
    constructor(selector){
        this.input = document.querySelectorAll(selector);
        this.bindEvents();
    }

    bindEvents(){
        this.input.forEach(el =>{
            el.addEventListener("keyup",()=>{
                if(el.value==""){
                    return el.classList.remove("non-empty");
                }
                el.classList.add("non-empty");
            })
        })
    }
}

(function(){
    new InputMD(".input-form input");
}());