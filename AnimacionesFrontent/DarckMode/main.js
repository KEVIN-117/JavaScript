
class ViewDarckSystem{
    constructor(){
        this.body = document.querySelector('body');
        this.bodyStyle = getComputedStyle(this.body)
        this.bodyBg = this.covertRgbToHex(this.bodyStyle.backgroundColor);
        this.darckColor = '#0d1b1e'.toUpperCase()
        this.initComponent()
        this.readColorSchemaFromLS()
    }
    /**
     * 
     * @returns if bg color of the page is darck true else false
     */
    initComponent(){
        return this.bodyBg === this.darckColor
    }
    /**
     * 
     * @param {String} rgbColor 
     * @returns {String} rgbColor in hex code format
     */
    covertRgbToHex(rgbColor){
        rgbColor = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
        return ("#0" + this.hex(rgbColor[1]) + this.hex(rgbColor[2]) + this.hex(rgbColor[3])).toUpperCase()
    }
    /**
     * 
     * @param {String} x -> rgb color 
     * @returns {String} rgb color digit in hex code format
     */
    hex(x){
        return (parseInt(x).toString(16).slice(-2));
    }
     /**
      * 
      * @returns 
      */
    readColorSchemaFromLS(){
        let colorSchema = this.getColorSchemeFromLS()
        if(!colorSchema){
            return
        }if(colorSchema === 'ligth'){
            this.body.classList.add('forse-ligth')
        }if(colorSchema === 'dark'){
            this.body.classList.add('forse-dark')
        }
    }

    /**
     * 
     * @param {String} colorScheme 
     * @description save color scheme in local storage
     */
    setColorSchemeInLS(colorScheme){
        try {
            window.localStorage.setItem("my-color-scheme", colorScheme)
        } catch{
            alert("Failed to set color scheme in local storage")
        }
    }
    /**
     * @description get color scheme  from local storage
     */
    getColorSchemeFromLS(){
        try {
            return window.localStorage.getItem("my-color-scheme")
        } catch{
            alert("Failed to get color scheme from local storage")
        }
    }
}
(
    
    function(){
        const viewMode = new ViewDarckSystem();
        let check = document.querySelector(".dark-toggle")
        console.log(check.checked)
        check.checked = viewMode.initComponent()
        check.addEventListener("change", function(event){
            let body = document.querySelector("body")
            let sun = document.querySelector(".item-ligth")
            let moon = document.querySelector(".item-dark")
            if(this.checked){
                /* change darck mode */
                body.classList.remove("forse-ligth")
                body.classList.add("forse-dark")
                sun.classList.remove("item-ligth-bg")
                moon.classList.add("item-dark-bg")
                viewMode.setColorSchemeInLS("dark")
            }else{
                /** change ligth mode */
                body.classList.remove("forse-dark")
                body.classList.add("forse-ligth")
                moon.classList.remove("item-dark-bg")
                sun.classList.add("item-ligth-bg")
                viewMode.setColorSchemeInLS("ligth")
            }
        })
    }
)();