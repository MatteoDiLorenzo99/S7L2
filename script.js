// Mostra il nome salvato (se presente in localStorage)
window.onload = function() {
    displaySavedName();
    startCounter();
};

function saveName() {
    const name = document.getElementById("nameInput").value;
    if (name) {
        localStorage.setItem("savedName", name);
        displaySavedName();
        document.getElementById("nameInput").value = "";
    }
}

function removeName() {
    localStorage.removeItem("savedName");
    document.getElementById("savedName").style.display = "none";
}

function displaySavedName() {
    const savedName = localStorage.getItem("savedName");
    if (savedName) {
        const nameDisplay = document.getElementById("savedName");
        nameDisplay.innerText = "Nome salvato: " + savedName;
        nameDisplay.style.display = "block";
    }
}

// Funzione per gestire il contatore di tempo
function startCounter() {
    let time = sessionStorage.getItem("timeCounter") || 0;
    time = parseInt(time);

    setInterval(() => {
        time += 1;
        sessionStorage.setItem("timeCounter", time);
        document.getElementById("timeCounter").innerText = time;
    }, 1000);
}
