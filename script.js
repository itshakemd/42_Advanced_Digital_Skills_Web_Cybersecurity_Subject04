
const themeButton = document.getElementById("theme-button");

let isDark = false;

function changeTheme() {
    if (isDark === false) {
        document.body.classList.add("dark");
        themeButton.textContent = "Light Mode";
        isDark = true;
    } else {
        document.body.classList.remove("dark");
        themeButton.textContent = "Dark Mode";
        isDark = false;
    }
}

themeButton.addEventListener("click", changeTheme);


const feedbackButton = document.getElementById("post-feedback");
const nameInput = document.getElementById("visitor-name");
const messageInput = document.getElementById("visitor-message");
const feedbackList = document.getElementById("feedback-list");
const feedbackStatus = document.getElementById("feedback-status");

function postFeedback() {

    const name = nameInput.value;
    const message = messageInput.value;

    if (name === "" || message === "") {
        feedbackStatus.textContent = "Please fill in both fields.";
        return;
    }

    const card = document.createElement("article");
    card.classList.add("feedback-card");

    const nameElement = document.createElement("h3");
    nameElement.textContent = name;

    const messageElement = document.createElement("p");
    messageElement.textContent = message;

    card.appendChild(nameElement);
    card.appendChild(messageElement);

    feedbackList.appendChild(card);

    nameInput.value = "";
    messageInput.value = "";

    feedbackStatus.textContent = "Feedback posted!";
}

feedbackButton.addEventListener("click", postFeedback);
