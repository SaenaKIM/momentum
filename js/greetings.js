const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden" ;
const USERNAME_KEY ="username";

function onLoginSubmit(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        
        paintGreetings(username);
        loginForm.style.display = "none";

    }
}

function paintGreetings(username) {
     
    greeting.innerText = `${getHello()}, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);

}

function getHello(){
    let hello = ""
    const date = new Date()
    const hours = date.getHours();
    if (hours < 12)
    {
        hello = "Good morning";
    }
    else if(hours < 18)
    {
        hello = "Good afternoon";
    }
    {
        hello = "Good evening";
    }

    return hello;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
    
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.addEventListener("keydown", onLoginSubmit);
} 
else { 
    paintGreetings(savedUserName);
}