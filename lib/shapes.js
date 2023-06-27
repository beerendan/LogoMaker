//Class definitions for each shape type
class shapes {constructor(){
    this.colour="";
    }
setColor(colour){this.colour=colour};
}; 

class Triangle extends shapes{
    render(){
        return ``
    }
};

class Circle extends shapes{
    render(){
        return `<circle cx="25" cy="75" r="20"fill="${this.colour}"/>`
    }
};

class Square extends shapes{};

module.exports={Triangle,Circle,Square};