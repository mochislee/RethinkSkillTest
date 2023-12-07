
function userLogin() {
    var email = document.getElementById("logEmail").value;
    var password = document.getElementById("logPassword").value;
    
    login(email, password);

}
function hashPassword(password) {
    return password;
}

function login(email, password) {
    var user = getUser(email);

    if (user == null || user.password != hashPassword(password)) {
        alert("User does not exists");
        return false;
    }

    return window.location.href= "viewposts.html" ;

    
}

function getUser(email) {
    var user = sessionStorage.getItem("RegisteredUser_" + email);

    if (user != null) {
        return JSON.parse(user);
    }

    return user;
}
