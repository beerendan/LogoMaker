//Require dependencies and packages
const inquirer=require("inquirer");
const jest = require("jest");
const fs=require("fs/promises");
const SVG = require("./lib/svg");

//For the shapes
const Triangle=require("./lib/shapes").Triangle;
const Circle=require("./lib/shapes").Circle;
const Square=require("./lib/shapes").Square;


//Function for logo criteria
const criteria=()=>{
    return inquirer.prompt([
        {
            type:"input",
            message:"Please provide the 3 characters of your desired logo",
            name:"text",
            validate:(text)=>{
                if (text.length>3) {
                    return "Logo max character length must be 3 characters or less"
                }
                return true;
            }
        },
        {
            type:"list",
            message:"What shape would you like your logo background to be?",
            choices:["Triangle","Circle","Square"],
            name:"shape",
        },
        {
            type:"input",
            message:"What colour would you like the background to be?(colour name or hexidecimal code)",
            name:"colour",
        },
        {
            type:"input",
            message:"What colour would you like the logo text to be?(colour name or hexidecimal code)",
            name:"tColour"
        },
    ]
    )   
    
}
function init() {
    criteria()
    //Convert answers to SVG properties
    .then((answers)=>{
        let background;
        switch (answers.shape){
            case "Triangle":
                background=new Triangle();
                break;
                
                case "Circle":
                background=new Circle();
                break;
                
                case "Square":
                    background=new Square();
                    break;
        }
        //Write the  new SVG Logo file
        const svg= new SVG();
        background.setColor(answers.colour);
        svg.setText(answers.text,answers.tColour);
        svg.setShape(background);
        //console.log(svg.render());
        return fs.writeFile("Logo.svg",svg.render());

    }
    )
   
}


init();