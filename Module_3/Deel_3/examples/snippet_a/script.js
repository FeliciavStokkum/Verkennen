let playground = document.getElementById('playground');

function proccess_button_click() {
    this.remove();
}

let button = document.createElement('button');
button.type = 'button';
button.innerHTML = 'Remove Me';
button.classList.add('btn');
button.classList.add('btn-primary');
button.onclick = proccess_button_click;

let button2 = document.getElementById('button2');
button2.type = 'button';
button2.innerHTML = 'Niet te verwijderen';
button2.onclick = proccess_button_click;

playground.appendChild(button);