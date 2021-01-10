$(document).ready(function () {
    nav();
})

function nav() {
    page = getPage();
    
    switch (page) {
        case "accueil":
            document.getElementById("thisPage").style.marginLeft = 0 * 100 / 6 + "%";
            break;

        case "programme":
            document.getElementById("thisPage").style.marginLeft = 1 * 100 / 6 + "%";
            break;

        case "calendrier":
            document.getElementById("thisPage").style.marginLeft = 2 * 100 / 6 + "%";
            break;

        case "seance":
            document.getElementById("thisPage").style.marginLeft = 3 * 100 / 6 + "%";
            break;

        case "statistique":
            document.getElementById("thisPage").style.marginLeft = 4 * 100 / 6 + "%";
            break;

        case "parametre":
            document.getElementById("thisPage").style.marginLeft = 5 * 100 / 6 + "%";
            break;

        case "tablBrdPrg":
            document.getElementById("thisPage").style.marginLeft = 1 * 100 / 6 + "%";
            break;

        case "newPrg":
            document.getElementById("thisPage").style.marginLeft = 1 * 100 / 6 + "%";
            break;
        
        case "viewSeance":
            document.getElementById("thisPage").style.marginLeft = 3 * 100 / 6 + "%";
            break;
    }
}