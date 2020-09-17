// const UiForm = document.querySelector("form");
// const UiUsername = document.querySelector("#username");
// const UiEmail = document.querySelector("#email");
// const UiPass = document.querySelector("#password");
// const UiPass2 = document.querySelector("#password2");

// function showError(input, message) {
//     let formGroup = input.parentElement;
//     formGroup.className = "form-group error";
//     const UiSmall = formGroup.querySelector("small");
//     UiSmall.innerText = message;

// }

// function showSuccess(input) {
//     let formGroup = input.parentElement;
//     formGroup.className = "form-group success";
// }

// function isValid(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
// UiForm.addEventListener("submit", function(e) {
//     if (UiUsername.value === "") {
//         // UiUsername.parentElement.className = "form-group error";
//         // UiSmall.innerText = "Username is required";
//         showError(UiUsername, 'username is required')
//     } else {
//         // UiUsername.parentElement.className = "form-group success";
//         showSuccess(UiUsername)
//     }
//     // if (UiEmail.value === "") {
//     //     // UiEmail.parentElement.className = "form-group error";
//     //     // UiSmall.innerText = "Email is required";
//     //     showError(UiEmail, 'Email is required')
//     // } else {
//     //     // UiEmail.parentElement.className = "form-group success";
//     //     showSuccess(UiEmail)
//     // }
//     if (UiEmail.value === '') {
//         // UiUsername.parentElement.className = 'form-group error';
//         showError(UiEmail, 'Email is required')

//     } else if (!isValid(UiEmail.value)) {
//         showError(UiEmail, "Email is not valid")
//     } else {
//         // UiUsername.parentElement.className = "form-group success";
//         showSuccess(UiEmail)
//     }
//     if (UiPass.value === '') {
//         // UiUsername.parentElement.className = 'form-group error';
//         showError(UiPass, 'Password is required')

//     } else {
//         // UiUsername.parentElement.className = "form-group success";
//         showSuccess(UiPass)
//     }
//     if (UiPass2.value === '') {
//         // UiUsername.parentElement.className = 'form-group error';
//         showError(UiPass2, ' confirmation Password is required')

//     } else {
//         // UiUsername.parentElement.className = "form-group success";
//         showSuccess(UiPass2)
//     }
//     e.preventDefault();
// });