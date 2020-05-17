var X = 1500;

function multiply() {
    var Y = 75;
    var multiply = (X - 500) * Y;
    document.getElementById("math").innerHTML = multiply;
}

function divide() {
    console.log(X / Y);
    document.getElementById("math2").innerHTML = divide;
}

function dateMethod() {
    if (new Date().getMonth() < 6) {
    document.getElementById("method").innerHTML = "Get ready for a hot summer.";
    }
}

function csDemo() {
    var num;
    num = document.getElementById("number").value;
    if (num == 13) {
        document.getElementById("result").innerHTML = "You win!!!";}
    else {
        document.getElementById("result").innerHTML = "You lose! Guess again.";}
}

function csDemo2() {
    dis = document.getElementById("distance").value;
    if (dis == "238,900 miles") {
        res = "You are correct!";}
    else {res = "You are incorrect, try again";}
    document.getElementById("answer").innerHTML = res;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}