function validateOrder() {
    const inputs = document.querySelectorAll('#sushiForm input[type="number"]');
    let total = 0;
    inputs.forEach(input => {
        total += parseInt(input.value, 10);
    });

    if (total > 10) {
        document.getElementById('totalPiecesWarning').style.display = 'block';
    } else {
        document.getElementById('totalPiecesWarning').style.display = 'none';
        alert('Je bestelling is geplaatst!');
        // Voeg hier eventueel logica toe om de bestelling te verwerken
    }
}

