function calculateBMI() {

    var w = parseFloat(document.getElementById("txt-weight").value);
    var h = parseFloat(document.getElementById("txt-height").value);
    var hm = h / 100;

    var bmi = (w / (hm * hm)).toFixed(2);

    document.getElementById("txt-bmi").innerHTML = "BMI: "+bmi;
}