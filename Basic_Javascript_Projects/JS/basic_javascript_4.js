function myDictionary() {
    var Pets = {
        Name:"Drax",
        Species:"Cat",
        Breed:"Domestic Short Hair",
        Color:"Grey and White",
        Age:"7 Months"
    };
    delete Pets.Name;
    document.getElementById("Dictionary").innerHTML = Pets.Name;
}