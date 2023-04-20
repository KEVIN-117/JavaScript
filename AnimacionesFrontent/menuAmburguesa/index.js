(
    function (){

        const navigation = ["Home", "About", "Contact", "Forgot", "Contact"];
        let slider = document.querySelector(".container");

        for (let i = 0; i < navigation.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = navigation[i]
            slider.querySelector(".content .navTop ul").appendChild(li);
        }

        for (let i = 0; i < navigation.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = navigation[i]
            slider.querySelector(".menu-left .navLeft ul").appendChild(li);
        }
    }
)();