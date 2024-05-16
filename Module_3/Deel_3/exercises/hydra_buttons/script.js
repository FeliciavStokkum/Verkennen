function create_button(type) {
    // genereer een button met overeenkomstige classes en attributes
    const knop = document.createElement('button');
    knop.type = 'button';
    knop.onclick = proccess_button_click;
    knop.classList.add('btn');
    knop.classList.add(type);
    // genereer een icoon
    const icon = document.createElement('i');
    icon.classList.add("fa");

    // maak een if die de specifieke classes toevoegd adhv type
    if (type === 'fire') {
        knop.classList.add('btn-danger');
        icon.classList.add('fa-fire')
    } else if (type === 'ice') {
        knop.classList.add('btn-info');
        icon.classList.add('fa-snowflake-0')
    } else if (type === 'lightning') {
        knop.classList.add('btn-warning');
        icon.classList.add('fa-bolt');
    }
    // voeg icoon en tekst aan de button
    knop.appendChild(icon);
    knop.innerHTML += 'HEAD';
    console.dir(knop);

    // voeg button toe aan de hydra
    hydra.appendChild(knop);
}

function proccess_button_click(event) {
    // maak een if om te kijken welke 2 buttons je moet genereren
    if (this.classList.contains('fire')) {
        create_button('lightning');
        create_button('ice');
    } else if (this.classList.contains('ice')) {
        create_button('fire');
        create_button('lightning');
    } else if (this.classList.contains('lightning')) {
        create_button('ice');
        create_button('fire');
        // verwijder de geklikte button
        this.remove();
    }
    create_button('fire');
    create_button('ice');
    create_button('lightning');
}

create_button('fire');
create_button('ice');
create_button('lightning');