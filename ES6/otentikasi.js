function loginAuthentication() {
    var done = 0;
    var username = document.login.username.value;
    username = username.toLowerCase();
    var password = document.login.password.value;
    password = password.toLowerCase();
    if (username == "nurwahidaf" && password == "password") {
        window.alert("Login success");
    } else 
        if (done == 0) {
            window.alert("Login failed");
        }
}