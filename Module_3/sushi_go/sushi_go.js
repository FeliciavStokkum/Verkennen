let totalRounds = 6; // Aantal rondes
let roundsLeft = totalRounds; // Variabele om resterende rondes bij te houden
let totalOrderedAllRounds = 0;
const maxItemsPerOrder = 60;  // Maximaal aantal items per alle rondes
let maxItemsPerRound = 12; // Maximaal aantal items per ronde
let minItemsPerRound = 6;  // Minimaal aantal items per ronde

function validateOrder() {
    const totalThisRound = calculateTotalThisRound();

    if (totalThisRound < minItemsPerRound) {
        document.getElementById('minItemsWarning').style.display = 'block'; //kan ook enkel id, getelement mogelijk niet nodig
        alert(`Je moet minimaal per ronde ${minItemsPerRound} stuks bestellen`);
        return;
    } else {
        document.getElementById('minItemsWarning').style.display = 'none';
    }

    if (totalThisRound > maxItemsPerRound) {
        alert(`Je kan maximaal ${maxItemsPerRound} items per ronde bestellen.`);
        return;
    }

    if (totalOrderedAllRounds + totalThisRound > maxItemsPerOrder) {
        alert(`Het totale maximum aantal items (${maxItemsPerOrder}) is bereikt of overschreden.`);
        return;
    }

    totalOrderedAllRounds += totalThisRound;
    document.getElementById('totalOrdered').innerText = 'Totaal geleverd in alle rondes: ' + totalOrderedAllRounds;

    roundsLeft--; // Aantal resterende rondes verminderen
    updateRoundsLeft();

    if (roundsLeft === 0 || totalOrderedAllRounds >= maxItemsPerOrder) {
        disableInputsAndButton();
    }

    resetInputs();
    updateTotalPerRound();
}

function updateRoundsLeft() {
    document.getElementById('roundsLeft').innerText = 'Rondes over: ' + roundsLeft;
}

document.addEventListener('DOMContentLoaded', () => {
    updateTotalPerRound();
    updateRoundsLeft(); // Zorg ervoor dat bij het laden van de pagina het aantal rondes correct wordt weergegeven
});

// De rest van je functies blijven ongewijzigd
function calculateTotalThisRound() {
    const inputs = document.querySelectorAll('#sushiForm input[type="number"]');
    let total = 0;
    inputs.forEach(input => {
        total += parseInt(input.value, 10);
    });
    return total;
}

function updateTotalPerRound() {
    const totalThisRound = calculateTotalThisRound();
    document.getElementById('totalPerRound').innerText = 'Totaal te bestellen stuks deze ronde: ' + totalThisRound;
}

function disableInputsAndButton() {
    const inputs = document.querySelectorAll('#sushiForm input[type="number"]');
    const button = document.querySelector('#sushiForm button');
    inputs.forEach(input => input.disabled = true);
    button.disabled = true;
}

function resetInputs() {
    const inputs = document.querySelectorAll('#sushiForm input[type="number"]');
    inputs.forEach(input => input.value = 0);
}

document.addEventListener('DOMContentLoaded', () => {
    updateTotalPerRound();
});