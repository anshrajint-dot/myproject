document.getElementById("myForm").addEventListener("submit", function(event){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    // Clear previous error
    error.innerHTML = "";

    // Email pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name Validation
    if(name === ""){
        error.innerHTML = "Name is required";
        event.preventDefault();
        return;
    }

    // Email Validation
    if(!emailPattern.test(email)){
        error.innerHTML = "Enter a valid email";
        event.preventDefault();
        return;
    }

    // Password Validation
    if(password.length < 6){
        error.innerHTML = "Password must be at least 6 characters";
        event.preventDefault();
        return;
    }

    // Success
    alert("Registration Successful!");
});