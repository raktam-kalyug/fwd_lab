function studentInteraction() {
    alert("Welcome to JavaScript Lab");
    let name = prompt("Enter your name");
    let course = prompt("Enter your course/branch");
    let choice = confirm("Do you want to continue?");

    if (choice) {
        alert("Hello " + name + ", welcome to " + course + ". You are ready for the lab.");
    } else {
        alert("You chose not to continue.");
    }
}

function studentCheck() {
    let marks = prompt("Enter your marks out of 100");
    if (marks >= 90) {
        alert("Excellent");
    } else if (marks >= 75) {
        alert("Very Good");
    } else if (marks >= 50) {
        alert("Pass");
    } else {
        alert("Need Improvement");
    }
}

function repeatMessage() {
    let times = prompt("How many times do you want the welcome message to appear?");
    for (let i = 1; i <= times; i++) {
        alert("Welcome to JS...!");
    }
}

function bonus() {
    let age = prompt("Enter your age");
    if (age >= 18) {
        alert("You are eligible");
    } else {
        alert("You are not eligible yet");
    }
}