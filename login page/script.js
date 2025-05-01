function validate(event){
    event.preventDefault();
    let name=document.getElementById("username").value;
    let welcomeMessage=document.getElementById("welcome");
    welcomeMessage.innerHTML="Welcome "+name;
}