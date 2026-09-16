//
// HIC Project 1: 8 Golden Rules of Interface Design
// Matthew DeProfio
// script.js contains the source code for all of the user interactions that may
// take place on the different pages of my application.
//

document.addEventListener("keydown", function(event) {  // Shortcuts (Page 2) - Go to Next Page
    if (event.altKey && event.key === "s") {
        event.preventDefault();
        document.querySelector(".next-button").click();
    }

    if (event.altKey && event.key === "h") {            // Shortcuts (Page 2) - Go to Dashboard
        event.preventDefault();
        window.location.href = "dashboard.html";
    }

    if (event.altKey && event.key === "l") {            // Shortcuts (Page 2) - Go to Previous Page
        event.preventDefault();
        document.querySelector(".previous-button").click();
    }
});

const submitButton = document.getElementById("submit-button"); // Feedback/Error - Page3
if (submitButton) {
    submitButton.addEventListener("click", function() {
        document.getElementById("action-message").textContent = "Action submitted successfully!";
        document.getElementById("action-message").style.color = "green";
    });
}

const nameButton = document.getElementById("name-button");     // Feedback/Error - Page3
if (nameButton) {
    nameButton.addEventListener("click", function() {
        const name = document.getElementById("name-input").value;
        if (name === "") {
            document.getElementById("input-message").textContent = "Please enter your name before submitting.";
            document.getElementById("input-message").style.color = "red";
        } else {
            document.getElementById("input-message").textContent = "Welcome, " + name + "! Thank you for entering your name.";
            document.getElementById("input-message").style.color = "black";
        }
    });
}

const submitResponse = document.getElementById("submit-response");  // Closure - Page 4
if (submitResponse) {
    const responseInput = document.getElementById("learning-response");
    const popup         = document.getElementById("success-popup");
    const okButton      = document.getElementById("ok-button");

    submitResponse.addEventListener("click", function() {
        const response = responseInput.value;
        if (response === "") {
            alert("Please enter a response before submitting.");
        } else {
            popup.style.display = "block";
        }
    });
        okButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
}

const largeText = document.getElementById("large-text");  // Enlarge text and Undo operations - Page 5
if (largeText) {
    const textExample = document.getElementById("text-example");
    const undo        = document.getElementById("undo-text");
    const message     = document.getElementById("reversal-message");

    largeText.addEventListener("click", function() {
        textExample.style.fontSize = "24px";
        message.textContent = "Text size enlarged.";
    });

    undo.addEventListener("click", function() {
        textExample.style.fontSize = "";
        message.textContent = "Undo operation completed.";
    });
}

const locationButton = document.getElementById("location-button");  // Manage Location Access - Page 6
if (locationButton) {
    const popup = document.getElementById("location-popup");
    const deny = document.getElementById("deny");
    const whileUsing = document.getElementById("while-using");
    const allow = document.getElementById("allow");
    const message = document.getElementById("control-message");

    locationButton.addEventListener("click", function() {
        popup.style.display = "block";
    });

    deny.addEventListener("click", function() {
        popup.style.display = "none";
        message.textContent = "Your location will not be used on this application.";
    });

    whileUsing.addEventListener("click", function() {
        popup.style.display = "none";
        message.textContent = "Location access allowed while using the application.";
    });

    allow.addEventListener("click", function() {
        popup.style.display = "none";
        message.textContent = "Location access allowed.";
    });
}

const stepOneNext = document.getElementById("step1-next");
if (stepOneNext) {
    const stepOne   = document.getElementById("step1");
    const stepTwo   = document.getElementById("step2");
    const stepThree = document.getElementById("step3");
    const title     = document.getElementById("step-title");
    const stepTwoBack = document.getElementById("step2-back");
    const stepTwoNext = document.getElementById("step2-next");
    const stepThreeBack = document.getElementById("step3-back");
    const submit = document.getElementById("submit");

    stepOneNext.addEventListener("click", function() {
        stepOne.style.display = "none";
        stepTwo.style.display = "block";
        title.textContent     = "Step 2: Account Information";
    });

    stepTwoBack.addEventListener("click", function() {
        stepTwo.style.display = "none";
        stepOne.style.display = "block";
        title.textContent     = "Step 1: Personal Information";
    });

    stepTwoNext.addEventListener("click", function() {
        stepTwo.style.display   = "none";
        stepThree.style.display = "block";
        title.textContent       = "Step 3: Contact Information"
    })

    stepThreeBack.addEventListener("click", function() {
        stepThree.style.display = "none";
        stepTwo.style.display   = "block";
        title.textContent       = "Step 2: Account Information";
    });

    submit.addEventListener("click", function() {
        alert("Account created successfully!");
    });
}

