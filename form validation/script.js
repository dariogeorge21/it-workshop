function validate() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let val=true;

    if (name="" || email=="" || password=="") {
        alert("All fields are mandatory");
        val=false;
    }
    return val;
}