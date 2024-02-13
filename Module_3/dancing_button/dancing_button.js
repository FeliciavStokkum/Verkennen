function klikStart() {
    document.getElementById("knop").style.left = "100px";
    document.getElementById("knop").style.top = "150px";
    if (mijnBody.classList.contains('black')){
        mijnBody.classList.toggle('yellow');
    }
    alert("Je hebt op de knop geklikt")
}

knop.addEventListener("click", klikStart);