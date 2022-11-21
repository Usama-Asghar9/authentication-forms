let username = document.getElementById('name');
let password = document.getElementById('pass');
let email = document.getElementById('email');

let result = document.createElement('div');
var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

function check() {
    if (username.value == "") {
        result.innerHTML = "*Name is required";
        result.style = "color: red; margin-left:-150px; margin-bottom:-20px; font-size: 13px; margin-top:-6px;";
        username.insertAdjacentElement("afterend", result)
    }
    else if (password.value == "") {
        result.innerHTML = "*Password is required";
        result.style = "color: red; margin-left:-150px; margin-bottom:-20px; font-size: 13px; margin-top:-6px;";
        password.insertAdjacentElement("afterend", result)
    }
    else if (password.value.match(pass)) {
        result.innerHTML = "It's OK";
        result.style = "color: red; margin-left:-150px; margin-bottom:-20px; font-size: 13px; margin-top:-6px;";
        password.insertAdjacentElement("afterend", result)
    }
    else if (password.value.match(!pass)) {
        result.innerHTML = "Please enter atleast 1 Numeric, Uppercase, Lowecase & Special Character!";
        result.style = "color: red; margin-left:-150px; margin-bottom:-20px; font-size: 13px; margin-top:-6px;";
        password.insertAdjacentElement("afterend", result)
    }
    else if (email.value == "") {
        result.innerHTML = "*Email is required";
        result.style = "color: red; margin-left:-150px; margin-bottom:-20px; font-size: 13px; margin-top:-6px;";
        email.insertAdjacentElement("afterend", result)
    }
    else if (!email.value.includes("@")) {
        result.innerHTML = "@ is required";
        result.style = "color: red; margin-left:-150px; margin-bottom:-20px; font-size: 13px; margin-top:-6px;";
        email.insertAdjacentElement("afterend", result);
    }
    else {
        // window.location.href = "../HTML/Welcome.html";
        document.getElementById('show').innerHTML = `<h4 style="color: green; font-size: 15px; ">Welcome "${username.value}"</h>`;
    }
}

