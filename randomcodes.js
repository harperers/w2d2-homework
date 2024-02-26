/* ------ Random Codes ------ */

//NOTE: submit button is initially disabled upon loading of this page - see <body> in html

var code = ' '; //to store generated codes and initialize to empty value
var getCode = ' '; //to store entered code
var btnvalue; //for button boolean value
//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'

//Function to generate combination of characters
function generateCode() {
    //Generate character multiple times using a loop
    for (i = 1; i<= 8; i++) {
        var char = Math.random()* str.length; //random select a character from the variable and then store in a new variable
        code += str.charAt(char);
    }
    return code;
}   

//get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true) { //test if button is disabled or enabled
        //set button and label color translucent
        document.getElementById("submit").setAttribute("disabled", "true");
    } else {
        //set button and label color with no transparency
        document.getElementById("submit").setAttribute("disabled", "false");
    }
}

//listen to user input code
var codebox = document.getElementById("codeentered") //get textbox
codebox.addEventListener("input", evaluateCode);

//run function if detected user had entered a character in textbox
function evaluateCode() {
    getCode = document.getElementById("codeentered").value; //get character entered
    var charset1 = getCode.trim();
    var charset2 = code.trim();
    //test if code entered matches the number of generated characters
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false); //if match, run the function to enable button
    }
}