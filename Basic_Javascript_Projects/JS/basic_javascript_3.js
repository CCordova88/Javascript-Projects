window.alert(Math.random(100) * 500);

function addFunction() {
    var Add = 13 + 32;
    document.getElementById("Math1").innerHTML = "13 + 32 = " + Add;
}

function subtractFunction() {
    var Subtract = 45 - 7;
    document.getElementById("Math2").innerHTML = "45 - 7 = " + Subtract;
}

function multiplyFunction() {
    var Multiply = 38 * 2;
    document.getElementById("Math3").innerHTML = "38 x 2 = " + Multiply;
}

function divideFunction() {
    var Divide = 76 / 4;
    document.getElementById("Math4").innerHTML = "76 / 4 = " + Divide;
}

function mathFunction() {
    var Math = (76 / 4) + (10 * 3) - 36;
    document.getElementById("Math5").innerHTML = "(76 / 4) + (10 x 3) - 36 = " + Math;
}

function modopFunction() {
    var Remainder = 45 % 7;
    document.getElementById("Math6").innerHTML = " 45 / 7 leaves a remainder of " + Remainder;
}

function negopFunction() {
    var x = 3;
    document.getElementById("Math7").innerHTML = -x;
}

function incopFunction() {
    var x = -3;
    x++;
    document.getElementById("Math8").innerHTML = x;
}

function decopFunction() {
    var x = -3;
    x--;
    document.getElementById("Math9").innerHTML = x;
}

function mathobFunction() {
    document.getElementById("Math10").innerHTML =Math.round(565.3);
}
