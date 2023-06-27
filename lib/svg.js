//define basic SVG logo constructor element
class SVG{
    constructor(){
        this.background="";
        this.text="";
    }
    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.background}${this.text}</svg>`
    
    }
    setShape(background){this.background=background.render()}
    setText(text, colour){
        this.text=`<text x="150" y="125" font-size="80" fill="${colour}" text-anchor="middle">${text}</text>`
    }
}

module.exports=SVG;