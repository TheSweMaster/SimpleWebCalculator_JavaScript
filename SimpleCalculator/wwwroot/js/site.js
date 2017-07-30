// Simple Calculator 
// Created by Jacob - jQuery Version

//Creates text with current year and add click event
$(function () {
    var d = new Date();
    var year = d.getFullYear();

    $("#footerText").text("© Jacob Gandemo - " + year);
    $("#button").click(Calculate);
});

function Calculate() {
    //Get inputs from the user in HTML
    var number1 = parseFloat($("#num1").val());
    var number2 = parseFloat($("#num2").val());
    var operatOr = $("#operatOr").val();

    //Calculate the result
    var result;
    switch (operatOr) {
        case '+':
            result = Add(number1, number2);
            break;
        case '-':
            result = Subtract(number1, number2);
            break;
        case '*':
            result = Multiply(number1, number2);
            break;
        case '/':
            result = Divide(number1, number2);
            break;
        case '%':
            result = Remainder(number1, number2);
            break;
        case '^':
            result = Math.pow(number1, number2);
            break;
        case '√':
            result = Math.sqrt(number2);
            number1 = "";
            break;
        case "cos":
            //Converts input from degrees to radians for the Math.cos, sin, tan function.
            result = Math.cos(Math.PI * number2 / 180);
            number1 = "";
            break;
        case "sin":
            result = Math.sin(Math.PI * number2 / 180);
            number1 = "";
            break;
        case "tan":
            result = Math.tan(Math.PI * number2 / 180);
            number1 = "";
            break;
        default:
            result = 0;
    }

    //Round and add together the result string   
    var textResult = "Result: " + number1 + " " + operatOr + " " + number2 +
        " = " + Math.round(result * 1000) / 1000 + "";

    //Displays the result to HTML
    $("#resultText").html("<b>" + textResult + "</b>");
}

//Operator functions
function Add(x, y) {
    return x + y;
}

function Subtract(x, y) {
    return x - y;
}

function Multiply(x, y) {
    return x * y;
}

function Divide(x, y) {
    return x / y;
}

function Remainder(x, y) {
    return x % y;
}
