function conMethod() {
    var text1 = "This is how ";
    var text2 = "you use the ";
    var text3 = "concat() method to ";
    var text4 = "connect string variables.";
    var fullText = text1.concat(text2, text3, text4);
    document.getElementById("concatenate").innerHTML = fullText;
}

function strSlice() {
    var str = "Out on the road there are fireflies circling. Deep in the woods, where the lost souls hide. Over the hill there are men returning, trying to find some peace of mind.";
    var slc = str.slice(92,165);
    document.getElementById("slice").innerHTML = slc;
}

function metFunction() {
    var str = "In between night and day lies the shrine of secrets. In between mind and chaos dwells the unbeing.<br>";
    var upper = str.toUpperCase();
    var search = str.search("night and day")
     document.getElementById("tUC&Search").innerHTML = upper + search;
}

function strMethod() {
    var num = 534;
    document.getElementById("numtostr").innerHTML = num.toString();
}

function toprecDemo() {
    var num = 136.625;
    document.getElementById("precision_method").innerHTML = num.toPrecision(3);
}

function valofMethod() {
    var X = (54 * 9);
    document.getElementById("value_of").innerHTML = X.valueOf();
}

function tofixMethod() {
    var X = 119.875;
    document.getElementById("to_fixed").innerHTML = X.toFixed(0);
}