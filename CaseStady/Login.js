const usernameAdmin = "admin";
const passwordAdmin = "123456"
function login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if (username === usernameAdmin && password === passwordAdmin ){
        alert("Đăng nhập thành công");
        location.href="WriteSoccer.html";
        localStorage.setItem("username", usernameAdmin)
    } else {
        alert("Đăng nhập thất bại");
    }
}