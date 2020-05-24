function Call_Loop() {
    var num = "";
    var X = 50;
    while (X > -51) {
        num += "<br>" + X;
        X--;
    }
    document.getElementById("loop").innerHTML = num;
}

function stringLength() {
    var X = "Have a great day, Cameron."
    var Y = X.length;
    document.getElementById("strLength").innerHTML = Y
}


function for_Loop() {
    var instruments = ["Piano", "Guitar", "Bass", "Drums", "Trumpet", "Flute", "Saxophone", "Cello", "Trombone"];
    var content = "";
    var Y;
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function arrayFunction() {
    var instrument = [];
    var type = [];
    instrument[0] = "piano";
    instrument[1] = "trumpet";
    instrument[2] = "saxophone";
    instrument[3] = "drums";
    type[0] = "percussion";
    type[1] = "woodwind";
    type[2] = "brass";
    type[3] = "string";
    document.getElementById("array").innerHTML = "The " + instrument[0] + " is a " + 
        type[3] + " instrument.";
}

function constantFunction() {
    const client = {name:"Jade Penny", age:"26", gender:"woman", marital_status:"single", hometown:"Denver, Colorado", email:"jpen256@gmail.com"};
    client.hometown = "Arvada, Colorado";
    client.ethnicity = "white";
    document.getElementById("constant").innerHTML = client.name + " is a " + client.marital_status + " " + client.age + " year old " 
    + client.ethnicity + " " + client.gender + " from " + client.hometown + ". She can be reached at " + client.email + ".";
}

var X = 12;
{
    let X = 15;
    document.write(X + "<br>");
}
document.write(X);

function objFunction() {
    let album = {
        name: "Age of Excuse ",
        artist: "MGLA ",
        genre: "black metal ",
        label: "No Solace Records ",
        release_date: "9/2/2019 ",
        summary : function() {
            return album.name + "is an album by the " + album.genre + "band: " + album.artist + "that was released on " + album.release_date + "through " + album.label;
        }

    };
    document.getElementById("album_summary").innerHTML = album.summary();
}
