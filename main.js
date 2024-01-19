const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("login-form-submit")

loginBtn.addEventListener("click",(event)=>{
    event.preventDefault()

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "user" && password ==="pass"){
        alert("Successfully logged in ")
        location.reload()//reloads the page...
    }else{
        alert("Wrong username or password !!")
    }
    location.reload()
})