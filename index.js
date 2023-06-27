//Require dependencies
const jest = require("jest");
const inquirer= require("inquirer");
const shapes= require("./lib/shapes");

//Function for logo criteria
function criteria(){
    inquirer.prompt([
        {
            type:"input",
            message:"Please provide the 3 characters of your desired logo",
            name:"text",
        },
        {
            type:"list",
            message:"What shape would you like your logo background to be?",
            choices:["Triangle","Square","Circle"],
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
criteria();