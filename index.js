//Require dependencies
const inquirer=require("inquirer");
const jest = require("jest");
const shapes= require("./lib/shapes");
const fs=require("fs");
const svg=require("./lib/svg");
const SVG = require("./lib/svg");

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
    //Convert answers to SVG params
    .then((answers)=>{
        let background;
        switch (shape){
            case Triangle:
                background=new Triangle();
                break;
                
                case Circle:
                background=new Circle();
                break;
                
                case Square:
                    background=new Square();
                    break;
        }

        const svg= new SVG();
        background.setColor(colour);
        
        svg.setText(text,tColour);
        svg.setShape(background);

    }
    )
}
init();