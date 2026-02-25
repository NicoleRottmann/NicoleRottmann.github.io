const bounceBall = () => {
    let ball = document.getElementById("ball");
    ball.classList.add("bounce");
};

const writeMessage = () => {
    const firstName = document.getElementById("txt-first-name").value;
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello " + firstName;
}

window.onload = () => {
    document.getElementById("bounce-button").onclick = bounceBall;
    document.getElementById("txt-first-name").onkeyup = writeMessage;
};
