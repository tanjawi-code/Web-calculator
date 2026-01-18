const displayResult = document.getElementById("displayResult");

function displayButton(input) {
    let value = displayResult.value;
    let length = value.length - 1;
    let operators = "%*-+/";

    if (input == "." && value.length === 0) {
        displayResult.value += "0.";
    }
    else if (value.length === 0 && operators.includes(input)) {
        displayResult.value = value;
    }
    else if (operators.includes(input) && operators.includes(value.charAt(length))) {
        displayResult.value = value.slice(0, length) + input;
    }
    else if (operators.includes(value.charAt(length)) && input == ".") {
        displayResult.value = value + "0.";
    }
    else if (value.charAt(length) == "." && input == ".") {
        displayResult.value = value;
    }
    else if (input == "+/-") {
        displayResult.value = value;
    }
    else displayResult.value += input;
}

function clearButton() {
    displayResult.value = "";
}

function remove() {
    let length = displayResult.value.length;
    let value = displayResult.value;
    displayResult.value = value.slice(0, length-1);
}

function calculate() {
    if (displayResult.value.length === 0) {
        displayResult.value = "";
    }
    else {
        try {
        displayResult.value = eval(displayResult.value);
    }
        catch(error) {
            displayResult.value = "Something went wrong";
        }
    }
}

// Add chainging using the operator (+/-).
// Make the calculator looks like Andriod calculator (complex operations).