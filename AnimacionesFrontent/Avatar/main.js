(function (){
    document.querySelector('#avatar_image').addEventListener('change', function(ev){
        let files = ev.target.files;
        let image = files[0];
        console.log(image)
        let imageURL = URL.createObjectURL(image);
        document.querySelector(".avatar .img").style.backgroundImage = "url('" + imageURL + "')"
    })
})();