class DOMHelper{
    static move(el, coords){
        el.style.top = coords.y - (el.clientHeight / 2) +"px";
        el.style.left = coords.x - (el.clientWidth / 2) + "px";
    }

    static isOver(el, pointercoords){
        let elCoords = el.getBoundingClientRect();

        if(pointercoords.x > elCoords.left && pointercoords.x <(elCoords.left + elCoords.width))
        {
            if(pointercoords.y > elCoords.top && pointercoords.y <(elCoords.top + elCoords.height)){
               return true;
            }
        }

        return false;
    }

    static whereIs(el,pointercoords){
        let elCoords = el.getBoundingClientRect();

        if(pointercoords.x > elCoords.left && pointercoords.x <(elCoords.left + elCoords.width))
        {
            if(pointercoords.y > elCoords.top && pointercoords.y <(elCoords.top + elCoords.height)){
               if(pointercoords.y > elCoords.top + (elCoords.height / 2 )){
                   return 1;
               }
               return 2;
            }
        }

        return -1;   
    }

}
class DragList{
    constructor(list_selector,items_selector="li"){
        this.list = document.querySelector(list_selector);
        this.items = this.list.querySelectorAll(items_selector);
        this.handleDragStart =this.handleDragStart.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.finalPosition = -1;
        this.finalElementHover = null;

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
        let mousecoords = {x : ev.clientX, y: ev.clientY}
        DOMHelper.move(ev.currentTarget, mousecoords);

        if(DOMHelper.isOver(this.list,mousecoords)){
            this.items.forEach(item => this.compareElement(item,ev));
        }else{
            this.fakeElement.remove();
        }

        
    }

    compareElement(item,ev){
        if(item == ev.currentTarget)return;
        let mousecoords = {x : ev.clientX, y: ev.clientY}

        let result = DOMHelper.whereIs(item, mousecoords)
        if(result==-1)return;

        this.finalPosition = result;
        this.finalElementHover = item;

        if(result==1)
            this.list.insertBefore(this.fakeElement,item.nextSibling);

        if(result==2)
            this.list.insertBefore(this.fakeElement,item);
    }
    handleDragEnd(ev){
        let el = ev.currentTarget;
        el.classList.remove("dragging");
        el.style.top = "";
        el.style.left = "";
        

        if(this.finalPosition==1)
            this.list.insertBefore(el,this.finalElementHover.nextSibling);

        if(this.finalPosition==2)
            this.list.insertBefore(el,this.finalElementHover);
    }
}

(function(){
    new DragList("ul","li");
}())