//define basic SVG logo constructor element
class SVG{
    constructor(){
        this.shapeEl="";
        this.textEl="";
    }
    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                ${this.shapeEl}
                ${this.textEl}
                </svg>`
    }
}