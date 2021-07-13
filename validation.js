// VARIABLES
const user = document.querySelector(".user");
const password = document.querySelector(".password");
const message = document.querySelector(".message");
const button = document.querySelector("#button");

// FUNCTIONS
function clearField(e) {
    e.target.value = "";
}

function checkUser(e) {
    let target = e.target;
    const pattern = /[!<>(){}*$?&^/\\"',:;#@]/g;

    // check length of user name
    if (target.value.length > 0 && target.value.length < 5) {
        message.innerHTML = "<p><i class='fas fa-exclamation-triangle'></i> User name must be 5 or more characters long</p>";
        target.addEventListener("focus", () => {
            clearField(e);
            message.innerHTML = "";
        });
    } else {
        // user name must not contain any "pattern" characters for security reasons
        if (target.value.match(pattern)) {
            message.innerHTML = "<p><i class='fas fa-exclamation-triangle'></i> User name must contain only letters and/or numbers</p>"
            target.addEventListener("focus", () => {
                clearField(e);
                message.innerHTML = "";
            });
        } else {
            message.innerHTML = "";
        }
    }
};

// check length of password
function checkPassword(e) {
    let target = e.target;
    if (target.value.length > 0 && target.value.length < 8) {
        message.innerHTML = "<p><i class='fas fa-exclamation-triangle'></i> Password must be 8 or more characters long</p>";
        target.addEventListener("focus", () => {
            clearField(e);
            message.innerHTML = "";
        });
    } else {
        message.innerHTML = "";
    }
};

// EVENT LISTENERS
user.addEventListener("blur", checkUser);
password.addEventListener("blur", checkPassword);
button.addEventListener("click", (e) => {
    e.preventDefault();
})
