
(
    function() {
        let x = document.querySelector(".containerTransform")
        let flag = true
        x.addEventListener("click", function(e){
            let menu = document.querySelector(".container");
            let content = document.querySelector(".content")
            if(flag){
                x.classList.toggle("change");
                x.classList.add("containerTransformRotate")
                menu.classList.add("open")
                content.classList.add("resizeContainer")
                flag = false;
            }else{
                x.classList.toggle("change");
                menu.classList.remove("open")
                x.classList.remove("containerTransformRotate")
                content.classList.remove("resizeContainer")
                flag = true;
            }
        })
    }
)();