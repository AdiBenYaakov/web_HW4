function handleRouteSelection(route) {
    let psyInput = document.getElementById('psy_grade');
    let mechInput = document.getElementById('Mechina_grade');

    if (route === 'psy') {
        mechInput.disabled = true; 
        mechInput.value = ""; 
        psyInput.disabled = false;
    } else if (route === 'mech') {
        psyInput.disabled = true
        psyInput.value = "";
        mechInput.disabled = false;
    }
}

function validate() {
    let ageValue = parseInt(document.getElementById('age').value);
    let bagrutValue = document.getElementById('Bagrut_grade').value;
    let messageArea = document.getElementById('messageArea');

    if (bagrutValue === "" || isNaN(parseInt(bagrutValue))) {
        alert("You should enter a bagrut grade"); 
        return; 
    }

    messageArea.innerText = "";
    messageArea.classList.remove("green");

    if (ageValue > 30) {
        messageArea.innerText = "You are eligible for admission to any faculty you choose";
        messageArea.classList.add("green"); 
    }
}