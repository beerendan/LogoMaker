const test=require("jest");
const shapes=require("./shapes")
const Triangle=require("./shapes").Triangle;
const Circle=require("./shapes").Circle;
const Square=require("./shapes").Square;

describe('shapes', () => {
    describe('setColor', () => {
      it('should insert blue', () =>{
const triangle = new Triangle();
triangle.setColor("blue");
expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});

describe('shapes', () => {
    describe('setColor', () => {
      it('should insert blue', () =>{
const circle = new Circle();
circle.setColor("blue");
expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="blue" />`);
        });
    });
});

describe('shapes', () => {
    describe('setColor', () => {
      it('should insert blue', () =>{
const square = new Square();
square.setColor("blue");
expect(square.render()).toEqual(`<rect x="50" y="" width="200" height="200" fill="blue" />`)
        });
    });
});