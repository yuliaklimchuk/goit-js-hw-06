const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    createObject(email.value, password.value);
    form.reset();
}

function createObject(email, password) { 
    const user = {
        email: email,
        password: password,
    }
    console.log(user);
}