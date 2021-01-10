const main = document.getElementById("mainPage");

function postMainCriterium(state) {
    switchPageState(state);
    pageT.innerText = "Criterium";
    if (state == "entrainement programme") document.getElementById("pageInputCheckBoxTrainPrg_1").disabled = true;
}

function postMainEndurance(state) {
    switchPageState(state);
    pageT.innerText = "Endurance";
}

function postMainGrandPrix(state) {
    switchPageState(state);
    pageT.innerText = "Grand Prix";
    if (state == "entrainement programme") document.getElementById("pageInputCheckBoxTrainPrg_1").disabled = true;
}

function postMainGranFondo(state) {
    switchPageState(state);
    pageT.innerText = "Gran Fondo";
}

function postMainTimeTrial(state) {
    switchPageState(state);
    pageT.innerText = "Time Trial";
    if (state == "entrainement programme") document.getElementById("pageInputCheckBoxTrainPrg_1").disabled = true;
}

function switchPageState(state) {
    switch (state) {
        case "equipement":
            main.innerHTML = mainEquipement;
            break;
        case "entrainement actuel":
            main.innerHTML = mainEntrainementActuel;
            break;
        case "entrainement programme":
            main.innerHTML = mainEntrainementProgramme;
            disabledCheckBox3();
            break;
        case "temps programme":
            main.innerHTML = mainTimeEntrainementProgramme;
            break;
        case "longueur programme":
            main.innerHTML = mainLongueurProgramme;
            disabledCheckBox4();
            break;
        case "jour dispo":
            main.innerHTML = mainJourDispo;
            break;
        // case "sortie club":
        //     main.innerHTML = mainSortieClub;
        //     disabledCheckBox6();
        //     break;
        case "date course":
            main.innerHTML = mainDateCourse;
            disabledCheckBox7();
            break;
        case "pametre generaux":
            main.innerHTML = mainParametreGeneraux;
            document.getElementById("finaleValueNom").value = sessionStorage.programme;
            document.getElementById("finaleValueEquipement").innerText = returnEquipement();
            document.getElementById("finaleValueEntrainementActuel").innerText = sessionStorage.entrainementActuelNb + "h";
            document.getElementById("finaleValueEntrainementProgramme").innerText = sessionStorage.entrainementProgramme;
            document.getElementById("finaleValueTempsEntrainementProgramme").innerText = sessionStorage.tpsSemaine + "h";
            document.getElementById("finaleValueLongueurProgramme").innerText = sessionStorage.longueurProgramme + " semaine(s)";
            document.getElementById("finaleValueJourDispo").innerText = returnJourDispo();
            // document.getElementById("finaleValueSortieClub").innerText = returnSortieClub();
            document.getElementById("finaleValueDateCourse").innerText = sessionStorage.dateCourse;
            break;
        case "fin": 
            window.location.href = "../programme.html";
            break;
    }
}
function returnEquipement() {
    obj = JSON.parse(sessionStorage.equipement);
    value = "";
    if (obj.cardio == true) value = value + "Cardio Fréquencemètre";
    if (obj.HT == true) {
        if (value.length > 0) value = value + ", Home Trainer"
        else value = value + "Home Trainer"
    }
    if (obj.power == true) {
        if (value.length > 0) value = value + ", Capteur De Puissance"
        else value = value + "Capteur De Puissance"
    }

    return value;
}

function returnEntrainementActuel() {
    obj = sessionStorage.entrainementActuel;
    switch (obj) {
        case "aucunEntrainement":
            return "Aucun Entrainement";
            break;

        case "1-3Heure":
            return "1-3h";
            break;

        case "4-7Heure":
            return "4-7h";
            break; 

        case "8-12Heure":
            return "8-12h";
            break;

        case "13-18Heure":
            return "13-18h";
            break;

        case "19HeureEtPlus":
            return "19h et plus";
            break;
    }
}

function returnJourDispo() {
    obj = JSON.parse(sessionStorage.jourDispo);
    value = "";

    if (obj.lundi == true) value = value + "lundi";
    if (obj.mardi == true) {
        if (value.length > 0) value = value + ", mardi"
        else value = value + "mardi"
    }
    if (obj.mercredi == true) {
        if (value.length > 0) value = value + ", mercredi"
        else value = value + "mercredi"
    }
    if (obj.jeudi == true) {
        if (value.length > 0) value = value + ", jeudi"
        else value = value + "jeudi"
    }
    if (obj.vendredi == true) {
        if (value.length > 0) value = value + ", vendredi"
        else value = value + "vendredi"
    }
    if (obj.samedi == true) {
        if (value.length > 0) value = value + ", samedi"
        else value = value + "samedi"
    }
    if (obj.dimanche == true) {
        if (value.length > 0) value = value + ", dimanche"
        else value = value + "dimanche"
    }

    return value;
}

// function returnSortieClub() {
//     const intensité = new Array();
//     intensité[1] = "faible";
//     intensité[2] = "moderé";
//     intensité[3] = "élevé";

//     const tempsSortie = new Array();
//     tempsSortie[0] = "1h et moins";
//     tempsSortie[1] = "1-2h";
//     tempsSortie[2] = "2-3h";
//     tempsSortie[3] = "3-5h";
//     tempsSortie[5] = "5h et plus";

//     obj = JSON.parse(sessionStorage.sortieClub);
//     value = "";
//     if (obj == false) {
//         value = "pas de sortie club";
//     }
//     else {
//         value = `${jour[obj.jour]}, ${intensité[obj.intensite]}, ${tempsSortie[obj.tempsSortie]}`;
//     }
//     return value;
// }