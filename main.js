

function calculate(){
    var number1=Number(document.getElementById("first_number").value);
    var area= number1*number1;
    var perimeter= 4*number1;

    document.getElementById("areacal").innerHTML=area;
    document.getElementById("lengthcal").innerHTML=perimeter;
}


