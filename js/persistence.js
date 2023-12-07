function hashPassword(password) {
    return password;
}

function registerUser(email, username, password) {
    var hashedPassword = hashPassword(password);

    sessionStorage.setItem("RegisteredUser_" + email, JSON.stringify({ email: email, username: username, password: hashedPassword }));
     alert("Registration successful. You can now log in.");

    
}

function getUser(email) {
    var user = sessionStorage.getItem("RegisteredUser_" + email);

    if (user != null) {
        return JSON.parse(user);
    }

    return user;
}