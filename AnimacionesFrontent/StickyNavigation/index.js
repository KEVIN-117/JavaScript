(
    function (){

        const navigation = ["Home", "About", "Contact", "Forgot", "Contact"];
        const slider = document.querySelector(".content");
        let pinget = false;
        let nav = slider.querySelector(".nav");
        let stickiScrollPoint = document.querySelector('.titleContent').offsetHeight;

        for (let i = 0; i < navigation.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = navigation[i]
            slider.querySelector(".nav ul").appendChild(li);
        }

        function pingToTop(){
            if(pinget){
                return;
            }
            nav.classList.add("pinged");
            pinget = true;
        }

        function unPingFromTop(){
            if(!pinget){
                return;
            }
            nav.classList.remove("pinged");
            pinget = false;
        }

        
        window.addEventListener("scroll", function(ev){
            if(this.window.scrollY < stickiScrollPoint) {
                return unPingFromTop();
            }
            let coords = nav.getBoundingClientRect();
            if(coords.top <= 0){
                pingToTop();
            }
        })
    }
)();