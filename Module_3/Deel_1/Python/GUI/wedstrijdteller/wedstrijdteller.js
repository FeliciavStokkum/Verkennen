inputTeams = document.getElementById('input-teams');

// object
let game = 
{
    team1Punten: 0, //attributen
    team2Punten: 0, 
    Serving:0,
    lastsServe:0, // Wie de vorige serve is
    lastScored:0, // Wie het laatste punt heeft gescoord
    Team1Sets: 0,
    Team2Sets: 0
}

let CounterTeam1Sets = document.getElementById('counterTeam1Sets');
let CounterTeam2Sets = document.getElementById('counterTeam2Sets');


inputTeam1.value = '...'; // testdata
inputTeam2.value = '...'; // testdata

function updateScreen(){
    counterTeam1.classList.remove('serving');
    counterTeam2.classList.remove('serving');
    if (game.serving == 1){
        counterTeam1.classList.add('serving');
    } else {
        counterTeam2.classList.add('serving');
    } 

    counterTeam1.innerText = game.team1Punten;
    counterTeam2.innerText = game.team2Punten;
}

function start(event){
    console.log("You pressed start!");
    // controleer of er twee namen zijn ingevoerd
    if (nameTeam1.innerText == "..." || nameTeam2.innerText == "..."){
        alert("Er mist een naam");
        return;
    };
    console.dir(servingTeam1);
    // controleer of er een beginnende partij is gekozen
    if (!servingTeam1.checked && servingTeam2.checked == false){
        alert("wie moet er beginnen?")
        return;
    };
    // hide inputfields
    input_teams.style.display = "none";
    // activeer tellers
    counterTeam1.disabled = false
    counterTeam2.disabled = false


    // Active serving
    counterTeam1.classList.add("serving");
    game.serving = 2;
    if (servingTeam1.checked){
        game.serving = 1;
    };

    updateScreen();
}
startButton.addEventListener('click',start);

function count(event){
    game.lastsServe = game.serving;
    console.log("Je drukte op count!");
    console.dir(this);
    if (this.id == 'counterTeam1'){
        game.team1Punten += 1;
        game.serving = 1;
        game.lastScored = 1;
    } else {
        game.team2Punten += 1;
        game.serving = 2;
        game.lastScored = 2;
    }

    if (game.team1Punten >= 25 && game.team1Punten - game.team2Punten >= 2){
        game.team1Punten = 0;
        game.team2Punten = 0;
        game.serving = 0;
        game.lastScored = 0;
        game.lastServe = 0;
        game.Team1Sets += 1;
        CounterTeam1Sets.innerText = game.Team1Sets
        alert(`${inputTeam1.value} heeft gewonnen! Gefeliciteerd.`)

    } if (game.team2Punten >= 25 && game.team2Punten - game.team1Punten >= 2){
        game.team1Punten = 0;
        game.team2Punten = 0;
        game.serving = 0;
        game.lastScored = 0;
        game.lastServe = 0;
        game.Team2Sets += 1;
        CounterTeam2Sets.innerText = game.Team2Sets
        alert(`${inputTeam2.value} heeft gewonnen! Gefeliciteerd.`)
    }

    undoButton.disabled = false;
    updateScreen();
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event){
    nameTeam1.innerText = inputTeam1.value;
    nameTeam2.innerText = inputTeam2.value;
}

inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);

function undoLastPoint(event) {
    if (game.lastScored == 1) {
        game.team1Punten -= 1;
    } else if (game.lastScored == 2) {
        game.team2Punten -= 1;
    }
    game.serving = game.lastsServe;

    updateScreen();
    if (game.team1Punten == 0 && game.team2Punten == 0) {
        undoButton.disabled = true;
    }
}

undoButton.addEventListener('click',undoLastPoint);

// Annulleer / puntentellers deactiveren
undoButton.disabled = true
counterTeam1.disabled = true
counterTeam2.disabled = true