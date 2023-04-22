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

class TabsManager{
    constructor(selectorTab, controls, indicator){
        this.tabs = document.querySelector(selectorTab)
        this.controls = document.querySelectorAll(controls)
        this.indicator = document.querySelector(indicator)
        this.handleTabClick = this.handleTabClick.bind(this)
        this.setIndicatorWidth()
        this.bindEvents()
    }
    setIndicatorWidth(){
        console.log(this.controls)
        this.indicator.style.width = this.controls[0].clientWidth+2 + 'px'
    }
    bindEvents(){
        this.controls.forEach(item => {
            item.addEventListener('click', this.handleTabClick)
        })
    }

    handleTabClick(ev){
        ev.preventDefault()
        let button = ev.currentTarget;
        let index = IndexForSiblings.getIndex(button)
        this.indicator.style.left = (index * this.indicator.clientWidth) + "px"
        this.openTab(button.hash)/**hash muestra el href del elemento seleccionado en eqtiquetas a */
    }

    openTab(hash){
        let tab =  document.querySelector(hash)
        let position = IndexForSiblings.getIndex(tab)
        this.tabs.querySelector(".container").style.left = -(position * 100) + "%"
    }
}

new TabsManager(".tabs", ".tabs-control a", ".indicator")