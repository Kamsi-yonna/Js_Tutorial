// Script.js

// Custom Function

function calculateTip(){
    // first thing to do is to store the data of the inputs we need in variables.
    
    var billAmount = document.getElementById("billAmount").value;
    // Store the value within the billAmount..once you click the calculate button.
    
    var serviceQuality = document.getElementById("serviceQuality").nodtotaleValue;
    
    var numPeople = document.getElementById("totalPeople").value;
    
    //2nd step is to do some quick validations. For when people click without inputing real numbers/values
    
    if(billAmount == )
    
    
    
}

//To hide the tip amount till the calculation has been done
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Now we will build functions to tell javascript what to do when we click some buttons

// We are building a function that will enable us to calculate the tip.

// The on click simply means that this would be carried out when we click whatever has the id of calculate. The function would be created above the page.
document.getElementById("calculate").onclick = function() {calculateTip();};
