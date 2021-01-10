function postSeance() {
    seanceAujourdHui = false;

    if (seanceAujourdHui == true) {
        
    }
    else {
        document.getElementById("SEANCES_BOX").className = "case2";
        document.getElementById("SEANCES_BOX").innerHTML = 
            "<h2 id='suggestionSeance'>TROUVEZ LA SEANCE QUI VOUS FERRA PROGRESSER AUJOURD'HUI</h2>"+
            '<button id="suggestionSeanceBtn">TROUVER UNE SEANCE</button>'
        $("#suggestionSeanceBtn").click(function () {window.location.href = '/seances/seance.html'})
    }
}