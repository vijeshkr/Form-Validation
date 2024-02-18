const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");



const submitButton = document.getElementById("btn");
submitButton.disabled = true;



form.addEventListener("input",(e)=>{
    e.preventDefault();
    validateUserName();
})
form.addEventListener("input",(e)=>{
    e.preventDefault();
    validateEmail();
})
form.addEventListener("input",(e)=>{
    e.preventDefault();
    validatePhone();
})
form.addEventListener("input",(e)=>{
    e.preventDefault();
    validateDate();
})
form.addEventListener("input",(e)=>{
    e.preventDefault();
    validatePassword();
})
form.addEventListener("input",(e)=>{
    e.preventDefault();
    confirmPasswordFun();
})
form.addEventListener("input",(e)=>{
    e.preventDefault();
    isValid();
});


function isValid() {
    if (
        validateUserName() &&
        validateEmail() &&
        validatePhone() &&
        validateDate() &&
        validatePassword() &&
        confirmPasswordFun()
    ) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}



function validateUserName(){
    const userNameVal = userName.value.trim();
    
    
    let nameRegex = /^[a-zA-Z]+$/;

    if(userNameVal===""){
        setError(userName,"Name is required");

    }else if(!nameRegex.test(userNameVal)){
        setError(userName,"Name contain only alphabetic characters");
    }else if(userNameVal.length<3){
        setError(userName,"Name should be at least 3 characters long");
    }else if(userNameVal.length>30){
        setError(userName,"Name must be less than 25 characters");
    }
    else{
        setSuccess(userName);
        return true;
    }
 }



function validateEmail(){
    const emailVal = email.value.trim();
    // let emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/;
     let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if(emailVal===""){
        setError(email,"Email is required")
    }else if(emailVal.length>35){
        setError(email,"Email must be less than 35 characters");
    }else if(!emailRegex.test(emailVal)){
        setError(email,"Please enter valid email");
    }else{
        setSuccess(email);
        return true;
    }
}
function validatePhone(){
    phoneVal=phone.value.trim();
    // let phoneRegex = /^[0-9]+$/;
    let phoneRegex = /^(?=[6-9])[0-9]+$/;
    if(phoneVal===""){
        setError(phone,"Phone number is required");
    }else if(!phoneRegex.test(phoneVal)){
        setError(phone,"Invalid phone number");
    }else if(phoneVal.length<10){
        setError(phone,"Phone number must have 10 numbers");
    }else if(phoneVal.length>10){
        setError(phone,"Phone number must be less than 11 numbers");
    }else{
        setSuccess(phone);
        return true;
    }
}
function validateDate(){
    const dateVal = new Date(date.value);
    const currentDate = new Date();
    if(dateVal>currentDate){
        setError(date,"The date is in the future");
    }else{
        setSuccess(date);
        return true;
    }
}
function validatePassword(){
    const passwordVal = password.value.trim();
    let uppercaseRegex = /[A-Z]/g;
    let lowercaseRegex = /[a-z]/g;
    let numericRegex = /[0-9]/g;
    var specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    if(passwordVal===""){
        setError(password,"Password must required");
    }else if(!specialCharacterRegex.test(passwordVal)){
        setError(password,"Password must have atleast one special character");
    }else if(!lowercaseRegex.test(passwordVal)){
        setError(password,"Password must have atleast one lowercase letter");
    }else if(!numericRegex.test(passwordVal)){
        setError(password,"Password must have atleast one number");
    }else if(!uppercaseRegex.test(passwordVal)){
        setError(password,"Password must have atleast one uppercase letter");
    } else if(passwordVal.length<8){
        setError(password,"Password must be atleast 8 characters");
    } else if(passwordVal.length>15){
        setError(password,"Password must be less than 15 characters");
    }
    else{
        setSuccess(password);
        return true;
    }

}
function confirmPasswordFun(){
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();
    if(passwordVal!=confirmPasswordVal){
        setError(confirmPassword,"Passwords do not match!");
    }else{
        setSuccess(confirmPassword);
        return true;
    }

}

function setError(element,message){
    element.style.borderColor ="red";
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");

    errorElement.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success")
}
function setSuccess(element){
    element.style.borderColor ="green";
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    
    
    errorElement.innerText = "";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}