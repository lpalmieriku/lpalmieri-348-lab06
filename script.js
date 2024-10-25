/*
Name: Lena Palmieri
KUID: 3115099
Date: 10/25/24
Lab: lab06
Last Modified: 10/25/24
Purpose: Contains the funtions for changing the paragraph styling and validaing passwords that the html files will call
*/

function validate_password() {
    //Gets user input from the html file
    var password1 = document.getElementById("first").value;
    var password2 = document.getElementById("second").value;

    //Checks if the password is at least 8 characters long
    if (password1.length < 8) {
        alert("Your first password is not at least 8 characters long!");
    }
    //Checks if the validation password is at least 8 characters long
    else if (password2.length < 8) {
        alert("Your second password is not at least 8 characters long!");
    }
    //Checks if the password and validation passwords match
    else if (password1 != password2) {
        alert("Your passwords do not match!")
    }
    //If none of the above if or else-if statements run, then the password is valid
    else {
        alert("Your password is valid!")
    }
}

function change_paragraph_color() {
    //Gets user input from the html file
    var borderR = document.getElementById("BorderR").value;
    var borderG = document.getElementById("BorderG").value;
    var borderB = document.getElementById("BorderB").value;
    var width = document.getElementById("Width").value;
    var backR = document.getElementById("BackR").value;
    var backG = document.getElementById("BackG").value;
    var backB = document.getElementById("BackB").value; 

    //Gets the id tag for the paragraph in the html file, so script.js can style it
    var tag = document.getElementById("paragraph");
    //Adds styling to the paragraph using the above user input
    tag.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
    tag.style.borderWidth = width;
    tag.style.backgroundColor = `rgb(${backR},${backG},${backB})`;
}
