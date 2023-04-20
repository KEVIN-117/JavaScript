class IndexForSiblings{
    static getIndex(index){
        let children = index.parentNode.children;
        for (let i = 0; i < children.length; i++) {
            let element = children[i];
            if (element == index){
                return i
            }
            
        }
    }
}

class Slider{
    // this -> hace referencia la objeto con el cual se trabaja
    constructor(selector){
        this.move = this.move.bind(this); //sobreescribe la firma para que this siempre valga lo mismo, siempre sera lo mismo

        this.clickHandler = this.clickHandler.bind(this); //sobreescribe
        this.slider = document.querySelector(selector);
        this.interval = null;
        this.contador = 0;
        this.amountImages = document.querySelectorAll(".img").length;
        this.start();
        this.buildControls();
        this.bindEvents();
    }

    buildControls(){
        for (let i = 0; i < this.amountImages; i++) {
            let li = document.createElement("li");
            if (i == 0){
                li.classList.add("active")
            }
            this.slider.querySelector(".controls ul").appendChild(li);
        }
    }

    start(){
        this.interval = window.setInterval(this.move, 5000)
    }
    move(){
        // this -> objeto
        this.contador++;
        if(this.contador >= this.amountImages){
            this.contador = 0;
        }
        this.moveTo(this.contador)

    }

    removeIndicator(){
        this.slider.querySelectorAll(".controls li.active").forEach(item => {
            item.classList.remove("active");
        });
    }
    moveTo(index){
        let left = index * 100;
        this.removeIndicator();
        this.slider.querySelector(".controls ul li:nth-child(" + (index+1) + ")").classList.add("active");
        this.slider.querySelector(".container").style.left = "-" + left + "%";
    }


    //marcar en la imagenm donde se haga click
    bindEvents(){
        this.slider.querySelectorAll(".controls li").forEach(item => {
            item.addEventListener("click", this.clickHandler)
        });
    }
    clickHandler(ev){
        let index = IndexForSiblings.getIndex(ev.currentTarget);
        this.contador = index;
        this.moveTo(index)
        this.restart()
    }
    restart(){
        if(this.interval){
            window.clearInterval(this.interval);
            this.start()
        }
    }
}

(
    function (){
        new Slider(".slider")
    }
)();