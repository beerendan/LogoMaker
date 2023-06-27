//Class definitions for each shape type
class shapes {constructor(){
    this.colour="";
    }
setColor(colour){this.colour=colour};
}; 

class Triangle extends shapes{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`
    }
};

class Circle extends shapes{
    render(){
        return `<circle cx="150" cy="100" r="100" fill="${this.colour}" />`
    }
};

class Square extends shapes{
    render(){
        return `<rect x="50" y="" width="200" height="200" fill="${this.colour}" />`
    }
};

module.exports={Triangle,Circle,Square};