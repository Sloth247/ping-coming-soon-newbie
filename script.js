'use strict'
const form = document.querySelector(".form");
const emailInput = document.querySelector(".email");
let errorMsg = document.querySelector(".error-msg");


form.addEventListener("submit", function(e) {
    e.preventDefault();
    emailValidation();
})

const isEmail = (emailInput) => {
    const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(emailInput).toLowerCase());
}

const emailValidation = () => {
    if (emailInput.value.trim() === '') {
        errorMsg.innerHTML = "Email cannot be empty";
        errorMsg.classList.remove("hidden");
        emailInput.style.border = "2px solid hsl(354, 100%, 66%)"
        return false
    } else if (!isEmail(emailInput.value.trim())) {
        errorMsg.innerHTML = "please provide a valid email address"
        errorMsg.classList.remove("hidden");
        emailInput.style.border = "2px solid hsl(354, 100%, 66%)"
        return false
    } else if (isEmail(emailInput.value)){
        errorMsg.innerHTML = "Success! Valid email address";
        errorMsg.classList.remove("hidden");
        return true
    } 
    return false;
}

emailInput.addEventListener("input", ()=> {
    errorMsg.classList.add("hidden");
    emailInput.style.border = "1px solid hsl(223, 100%, 88%)"
})

/*errorMsg.innerHTML = "Email cannot be empty"
console.log(errorMsg.innerHTML);
console.log(emailInput.value); */

