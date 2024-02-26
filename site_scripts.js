var photos = []; //Declar an empty array to store image element
var fileNames = ["bustour", "cabinrental", "campingadv", "collegetours", "rentalbike", "tourgroup"];
var imageList = []; //Declare an empty array to store html list that contain an image
var image; //Declare an empty variable to store the assembles image list codes
var openList = "<li class='partner'>"; //Declare a variable to contain open list tag
var closeList = "</li>"; //Declare a variable to contain close list tag

//Crate a loop to create 6 images starting with index of 0
for (var i = 0; i < 6; i++) {
    photos.push("<img src ='images/partners/partner-" + fileNames[i] + ".png'>"); //Assemble file name into image element and store in an array
    image = openList + photos[i] + closeList; //Assxemble image element from array with list elements and store in a variable
    imageList.push(image); //Store(push) the assembled list code into an array
}
//Display all six image codes stored in the array
document.getElementById("partners").innerHTML = imageList.join(" ");

