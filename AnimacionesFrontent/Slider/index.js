class Slider{
    // this -> hace referencia la objeto con el cual se trabaja
    constructor(selector){
        this.move = this.move.bind(this); //sobreescribe la firma para que this siempre valga lo mismo, siempre sera lo mismo
        this.slider = document.querySelector(selector);
        this.interval = null;
        this.contador = 0;
        this.start();
    }

    start(){
        this.interval = window.setInterval(this.move, 1000)
    }

    move(){
        // this -> objeto
        this.contador++;
        this.moveTo(this.contador)

    }
    moveTo(index){
        let left = index * 100;
        this.slider.querySelector(".container")
    }
}

(
    function (){
        new Slider(".slider")
    }
)