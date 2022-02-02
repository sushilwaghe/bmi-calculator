function calculateBMI() {

    var w = parseFloat(document.getElementById("txt-weight").value);
    var h = parseFloat(document.getElementById("txt-height").value);
    var hm = h / 100;

    var bmi = (w / (hm * hm)).toFixed(2);

    document.getElementById("txt-bmi").innerHTML = "BMI: "+bmi;

    if(bmi < 18.5){
        document.getElementById("txt-remark").innerHTML = "Underweight";
        document.getElementById("progress-remark").className = "progress-bar progress-bar-striped progress-bar-animated";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("txt-remark").innerHTML = "Normal";
        document.getElementById("progress-remark").className = "progress-bar progress-bar-striped progress-bar-animated bg-success";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById("txt-remark").innerHTML = "Overweight";
        document.getElementById("progress-remark").className = "progress-bar progress-bar-striped progress-bar-animated bg-info";
    }
    else if(bmi >= 30 && bmi <= 34.9){
        document.getElementById("txt-remark").innerHTML = "Obese";
        document.getElementById("progress-remark").className = "progress-bar progress-bar-striped progress-bar-animated bg-warning";
    }
    else if(bmi >= 34.9 && bmi <= 40){
        document.getElementById("txt-remark").innerHTML = "Extremely Overweight ";
        document.getElementById("progress-remark").className = "progress-bar progress-bar-striped progress-bar-animated bg-danger";
    }
}