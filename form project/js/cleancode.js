const UiForm = document.querySelector("form");
const UiUsername = document.querySelector("#username");
const UiEmail = document.querySelector("#email");
const UiPass = document.querySelector("#password");
const UiPass2 = document.querySelector("#password2");

function showError(input, message) {
    let formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const UiSmall = formGroup.querySelector("small");
    UiSmall.innerText = message;

}

function showSuccess(input) {
    let formGroup = input.parentElement;
    formGroup.className = "form-group success";
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

function field_name(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${field_name(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${field_name(input)} must be atleast ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${field_name(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'your passwords does not match')
    }
}

// function checkNames(inputArray) {
//     inputArray.forEach(function(input) {
//         if (input.value === '') {
//             showError(input, `${field_name(input)} is required`)
//         } else {
//             showSuccess(input)
//         }
//     })
// }
UiForm.addEventListener("submit", function(e) {
    checkRequired([UiUsername, UiEmail, UiPass, UiPass2])
    checkLength(UiUsername, 3, 10)
    checkLength(UiPass, 6, 15)
    checkEmail(UiEmail)
    checkPassword(UiPass, UiPass2)
        // checkNames([UiFName, UiLName])
    e.preventDefault();
});