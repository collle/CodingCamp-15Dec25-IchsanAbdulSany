// Welcome Name
const userName = prompt("Masukkan nama Anda:");
if (userName) {
    document.getElementById("welcomeText").innerText =
        "Hi " + userName + ", Welcome To Website";
}

// Form Validation & Output
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birth = document.getElementById("birthdate").value;
    const message = document.getElementById("messageText").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    document.getElementById("outName").innerText = name;
    document.getElementById("outBirth").innerText = birth;
    document.getElementById("outGender").innerText = gender;
    document.getElementById("outMessage").innerText = message;
    document.getElementById("time").innerText = new Date().toLocaleString();
});
