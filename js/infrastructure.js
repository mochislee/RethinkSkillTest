
function register(email, username, password) {
    var user = getUser(email);

    if (user === null) {
        alert("User already exists");
        return false;
    }
    registerUser(email, username, password);
}

function login(email, password) {
    var user = getUser(email);

    if (user === null || user.password != hashPassword(password)) {
        alert("User does not exists");
        return false;
    }

    return user;
}

