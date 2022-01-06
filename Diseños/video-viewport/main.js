class ViewPort{
    static visible(el){
        let coords = el.getBoundingClientRect();
        let windowHeight = document.documentElement.clientHeight;    
        console.log((coords.top *-1)+115)
        console.log(windowHeight);
        return (coords.top < windowHeight && ((coords.top *-1)+147) < windowHeight);

    }
}
class PlayOnViewPort{
    constructor(video_selector){
        this.video = document.querySelector(video_selector);
        this.evaluate = this.evaluate.bind(this);
        this.bindEvents();
    }

    bindEvents(){
        window.addEventListener("scroll",this.evaluate);
    }
    evaluate(){
        if(ViewPort.visible(this.video)){
            this.video.play();/* 
            this.video.muted = false; */
            
        }
        else{
            this.video.pause();
        }
    }
}

(function(){
    new PlayOnViewPort("video");
}())

