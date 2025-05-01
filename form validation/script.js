function validate() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let cpassword=document.getElementById("c-password").value;
    let val=true;

    if (name="" || email=="" || password=="") {
        alert("All fields are mandatory");
        val=false;
    }
    if (password !== cpassword) {
        alert("Password and Confirm Password should be same");
        val=false;
    }
    if (val) {
        alert("Form submitted successfully");
    }
    return val;
}