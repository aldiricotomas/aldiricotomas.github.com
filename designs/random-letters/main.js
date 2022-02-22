/* var Animator = {
    animate: function(options){
        
        options.stagger = options.stagger || 200;
        options.StaggerPerLetter = options.StaggerPerLetter || 50;

        el = document.querySelector(options.selector);
        let text = el.innerText;
        el.innerText = "";

        for(letter_index in text){
            let letter = text[letter_index];
            console.log(letter);
            let span = document.createElement("span");
            span.innerText = ' ';
            el.appendChild(span);
            

            setTimeout(() => {
                this.animateLetter({
                    element: span,
                    letter: letter,
                    stagger: options.StaggerPerLetter
                })
            }, options.stagger*letter_index);
        }
    },

    animateLetter: function(options,contador=0){
        if(contador>20) {
            options.element.innerText = options.letter;
            options.element.style.color = 'white';
            options.element.classList.add("zoomIn");
            return options.element;
        }

        contador++;
        setTimeout(() => {
            options.element.innerText = this.generateRandomChar();
            this.animateLetter(options,contador);
            
        },options.stagger);


    },
    generateRandomChar: function(){
        return Math.random().toString(36).substr(2,1);
    }
} */var Animator = {
    animate: function(options){
        
        options.stagger = options.stagger || 200;
        options.StaggerPerLetter = options.StaggerPerLetter || 50;

        el = document.querySelector(options.selector);
        console.log(el);
        let text = "WHIRLPOOLXSMS2022";
        el.innerText= "";
        el.style.cursor= 'default';
        
        for(let i = 0; i< text.length; i++){
            let letter = text[i];
            console.log(letter);
            console.log(i)
            let span = document.createElement("span");
            span.innerText ="";
            span.innerHTML="";
            el.appendChild(span);
            
            setTimeout(() => {
                this.animateLetter({
                    element: span,
                    letter: letter,
                    stagger: options.StaggerPerLetter
                })
            }, options.stagger*i);
        }
    },

    animateLetter: function(options,contador=0){
        if(contador>20) {
            options.element.innerText = options.letter;
            options.element.style.color = 'white';
            options.element.classList.add("zoomIn");
            return options.element;
        }

        contador++;
        setTimeout(() => {
            options.element.innerText = this.generateRandomChar()
            this.animateLetter(options,contador);
            
        },options.stagger);


    },
    generateRandomChar: function(){
        return Math.random().toString(36).substr(2,1);
    }
}


document.querySelector(".dont-leave-button").addEventListener("click", ()=>{
    Animator.animate({
            selector: ".dont-leave-button",
            stagger: 100,
            staggerPerLetter: 30
        })
        let p = document.querySelector(".dont-leave-your-code");
        p.classList.add("zoomInSlow");
        setTimeout(() =>{
            p.style.display= 'block';
        },2000)
})