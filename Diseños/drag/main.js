class DOMHelper{
    static move(el, coords){
        el.style.top = coords.y - (el.clientHeight / 2) +"px";
        el.style.left = coords.x - (el.clientWidth / 2) + "px";
    }

    static isOver(el, pointercoords){
        let elCoords = el.getBoundingClientRect();

        if(pointercoords.x > elCoords.left && pointercoords.x <(elCoords.left + elCoords.width));
    }
}
class DragList{
    constructor(list_selector,items_selector="li"){
        this.list = document.querySelector(list_selector);
        this.items = this.list.querySelectorAll(items_selector);
        this.handleDragStart =this.handleDragStart.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);

        this.canvas = document.createElement("canvas");

        this.buildFakeElements();
        this.bindEvents();
    }
    buildFakeElements(){
        this.fakeElement =document.createElement("div");
        this.fakeElement.style.background = "#eee";

        this.fakeElement.classList.add("card"); 

    }
    bindEvents(){
        this.items.forEach(item => {
            item.addEventListener("dragstart", this.handleDragStart);
            item.addEventListener("drag", this.handleDrag);
            item.addEventListener("dragend", this.handleDragEnd);

        });
    }
    handleDragStart(ev){
        let el = ev.currentTarget;
        ev.dataTransfer.setDragImage(this.canvas,0,0);
        el.classList.add("dragging");
    }
    handleDrag(ev){
        DOMHelper.move(ev.currentTarget,{x : ev.clientX, y: ev.clientY});
    }
    handleDragEnd(ev){
        let el = ev.currentTarget;
        el.style.top = "";
        el.style.left = "";
        el.classList.remove("dragging");
    }
}

(function(){
    new DragList("ul","li");
}())