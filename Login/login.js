const username = "oji"
const password = "oji13"

function login(){
    // tangkap nilai yang di input user
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == username && password == password){
        alert("login sukses");
        window.location.href = "Sukses.html";
    } else {
        alert("Login Failed!");
    }
}