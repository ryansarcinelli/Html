function cToF(c){
    return (c*9/5)+32;
}
function fToC(f){
    return (f-32)*5/9;
}

function convertTemperature() {
    var celsius = document.getElementById("c").value;
    var fahrenheit = document.getElementById("f").value;

    if (celsius !== "") {
        // Converte Celsius para Fahrenheit
        fahrenheit = cToF(parseFloat(celsius));
        document.getElementById("f").value = fahrenheit.toFixed(2);
    } else if (fahrenheit !== "") {
        // Converte Fahrenheit para Celsius
        celsius = fToC(parseFloat(fahrenheit));
        document.getElementById("c").value = celsius.toFixed(2);
    } else {
        alert("Please enter a value to convert.");
    }
}

function kgToLbs(kg){
    return kg*2.205;
}

function lbsToKg(lbs){
    return lbs/2.205;
}

function convertWeight(){
    var kg = document.getElementById("kg").value;
    var lb = document.getElementById("lbs").value;

    if(kg!== ""){
        //convert kg to lbs
        lb = kgToLbs(parseFloat(kg));
        document.getElementById("lbs").value = lb.toFixed(2);
    }else if(lb !== ""){
        //convert lbs to kg
        kg = lbsToKg(parseFloat(lb));
        document.getElementById("kg").value = kg.toFixed(2);
    }else {
        alert("Please enter a value to convert.");
    }

}

function kmToMiles(km){
    return km/1.609;
}

function milesToKm(miles){
    return miles*1.609;
}

function convertDistance(){
    var km = document.getElementById("km").value;
    var miles = document.getElementById("m").value;

    if(km !== ""){
        //convert km to miles
        miles = kmToMiles(parseFloat(km));
        document.getElementById("m").value = miles.toFixed(2);
    }else if(miles !== ""){
        //convert miles to km
        km = milesToKm(parseFloat(miles));
        document.getElementById("km").value = km.toFixed(2);
    }else {
        alert("Please enter a value to convert.");
    }
}