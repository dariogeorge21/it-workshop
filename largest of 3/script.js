function largest() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

    if (num1="" || num2=="" || num3==""){
        alert("Please enter all the numbers");
        return;
    }
    
    let largest=num1;
    if(num2>largest){
        largest=num2;
    }
    if(num3>largest){
        largest=num3;
    }
    alert("The largest number is "+largest);
}