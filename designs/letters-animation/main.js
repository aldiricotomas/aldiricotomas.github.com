var LettersAnimator = {

    letterStyle:`
        margin-right: -0.25em;
        display:inline-block;
        transform: scaleY(0) translateY(-40px);
        transition: all 0.2s cubic-bezier(0.3,0.0,0.3,1);
    `,
    wordStyle:`
        margin-right: 0.5em; 
    `,

    init: function(selector){
        document.querySelectorAll(selector).forEach(el => this.spanLetters(el));
    },
    spanLetters: function(element){
        let text = element.innerText;
        element.innerHTML="";
        let words = text.split(' ');
        let wordsSpan = [];
        
        for(word_index in words){
            let word = words[word_index];

            let span = document.createElement("span");
            span.classList.add("word")
            span.style.cssText = this.wordStyle;
            
            let lettersSpan = [];
            for(character_index in word){
                lettersSpan.push(`<span style="${this.letterStyle}" class="letter">${word[character_index]}</span>`);

            }

            span.innerHTML = lettersSpan.join(' ');
            wordsSpan.push(span);
        }

        wordsSpan.forEach(span => element.appendChild(span));

        this.animate(element);

    },
    animate: function(el){
        el.querySelectorAll(".letter").forEach((span,index)=>{
            setTimeout(() => {
                span.style.transform = 'scaleY(1) translateY(0)';      
            },40*index);
        })
    }
}