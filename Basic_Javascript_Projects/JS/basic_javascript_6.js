function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function ageFunction() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are not yet old enough to vote.":"You are old enough to vote.";
    document.getElementById("vote").innerHTML = can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Person(first_name, last_name, age, email) {
    this.Person_first = first_name;
    this.Person_last = last_name;
    this.Person_age = age;
    this.Person_email = email;
}
var Tyler = new Person("Tyler", "Duggan", 31, "Lazarus2589@gmail.com");
var Marty = new Person("Martin", "Caschette", 37, "Martycash82@yahoo.com");
var Brit = new Person("Brittany", "Holcomb", 28, "Raven_claws666@gmail.com");
function myConstructor() {
    document.getElementById("New_and_This").innerHTML = 
    "Martys full name is " + Marty.Person_first + " " + Marty.Person_last + 
    " and he is " + Marty.Person_age + " years old.";
}

function nestFunction() {
    document.getElementById("Nested_Function").innerHTML = counter();
    function counter() {
        var start = 5;
        function incOne() {start *= 10;}
        incOne();
        return start;
    }
} 