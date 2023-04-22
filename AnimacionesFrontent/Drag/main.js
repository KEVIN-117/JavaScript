class DomHelper {
    constructor() {}
    static move(elements, coords) {
        elements.style.top = coords.y - elements.clientHeight / 2 + "px";
        elements.style.left = coords.x - elements.clientHeight / 2 + "px";
    }
    static isOver(element, coords) {
        let elementCoords = element.getBoundingClientRect();

        if (
        coords.x > elementCoords.left &&
        coords.x < elementCoords.left + elementCoords.width
        ) {
        if (
            coords.y > elementCoords.top &&
            coords.y < elementCoords.top + elementCoords.height
        ) {
            /**evluamos que el cursor no aya exedido el limite del card */
            //return element.style.background = "red"
            return true;
        }
        }
        //element.style.background = "inherit";
        return false;
    }

    static whereIs(element, coords) {
        let elementCoords = element.getBoundingClientRect();

        if (
        coords.x > elementCoords.left &&
        coords.x < elementCoords.left + elementCoords.width
        ) {
        if (
            coords.y > elementCoords.top &&
            coords.y < elementCoords.top + elementCoords.height
        ) {
            if (coords.y > elementCoords.top + elementCoords.height / 2)
            return 1; /*valida si el elemento arrastrado esta en la parte de arriba o en abajo */
            return 2;
        }
        }
        //element.style.background = "inherit";
        return -1;
    }
}

class DragList {
    constructor(drag, dragItems = "li") {
        this.drag = document.querySelector(drag);
        this.dragItems = this.drag.querySelectorAll(dragItems);

        this.finalPosition = -1; /* guarda en donde se posisicono el elenebto por arriba o por debajo  */
        this.finalElementHover = null;

        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.canvas = document.createElement("canvas");
        this.buildFakeElement();
        this.bindEvents();
    }

    buildFakeElement() {
        this.fakeElement = document.createElement("div");
        this.fakeElement.style.background = "#eee";
        this.fakeElement.classList.add("items-drag");
    }
    /**
     * @description events from drag
     */
    bindEvents() {
        this.dragItems.forEach((item) => {
        item.addEventListener("dragstart", this.handleDragStart);
        item.addEventListener("drag", this.handleDrag);
        item.addEventListener("dragend", this.handleDragEnd);
        });
    }
    /**
     * handle = manejar
     * @description init if the user initialise the drag and drog
     */
    handleDragStart(event) {
        let element = event.currentTarget; //mientras se esta arrastrando
        event.dataTransfer.setDragImage(this.canvas, 0, 0); //quita la sombra del drag
        element.classList.add("dragging");
    }
    /**
     * @description while the user is dragging the drag element
     */
    handleDrag(event) {
        let coords = { x: event.clientX, y: event.clientY };
        DomHelper.move(event.currentTarget, coords);
        if (DomHelper.isOver(this.drag, coords)) {
            this.dragItems.forEach((item) => this.compareElement(item, event, coords));
        } else {
            this.fakeElement.remove();
        }
    }
    compareElement(item, event, coords) {
        if (item === event.currentTarget) 
            return;
        let result = DomHelper.whereIs(item, coords);
        if (result === -1) {
            /** no inserta nada */
            return;
        }
        this.finalPosition = result
        this.finalElementHover = item
        if (result === 1) {
            /** insertar elemento en la oarte de abajo */
            this.drag.insertBefore(this.fakeElement, item.nextSibling); /**item.nextSibling = insertalo antes del que sigue */
        }
        if (result === 2) {
            /** insertar elemento en la parte de arriba */
            this.drag.insertBefore(this.fakeElement, item); 
        }
    }
    /**
     * @description when user stop dragging
     */
    handleDragEnd(event) {
        let target = event.currentTarget; //mientras se esta arrastrando
        target.classList.remove("dragging");
        target.style.top = "";
        target.style.left = "";
        
        if (this.finalPosition === 1) {
            /** insertar elemento en la oarte de abajo */
            this.drag.insertBefore(target, this.finalElementHover.nextSibling); 
        }
        if (this.finalPosition === 2) {
            /** insertar elemento en la parte de arriba */
            this.drag.insertBefore(target, this.finalElementHover); 
        }
    }
}

(function () {
    new DragList(".drag");
})();
