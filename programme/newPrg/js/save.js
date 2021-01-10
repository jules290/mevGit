function saveInSessionStorage(nb) {
    switch (nb) {
        case 1:
            check = {
                cardio: document.getElementById("pageInputCheckBoxFC").checked,
                HT: document.getElementById("pageInputCheckBoxHT").checked,
                power: document.getElementById("pageInputCheckBoxW").checked
            }
            sessionStorage.equipement = JSON.stringify(check)
            break;
        case 2:
            values = [
                "aucunEntrainement",
                "1-3Heure",
                "4-7Heure",
                "8-12Heure",
                "13-18Heure",
                "19HeureEtPlus"
            ];

            selectEntAct = document.getElementById("entActSem");
            value = Number(selectEntAct.value);
            sessionStorage.entrainementActuelNb = value;

            if (value == 0) sessionStorage.entrainementActuel = values[0]
            else if (value >= 0 && value <= 3) sessionStorage.entrainementActuel = values[1]
            else if (value >= 4 && value <= 7) sessionStorage.entrainementActuel = values[2]
            else if (value >= 8 && value <= 12) sessionStorage.entrainementActuel = values[3]
            else if (value >= 13 && value <= 18) sessionStorage.entrainementActuel = values[4]
            else if (value >= 19) sessionStorage.entrainementActuel = values[5]
            break;
        case 3:
            values = [
                "3",
                "4",
                "5",
                "6",
                "7"
            ];
            inputCheckBox = document.getElementsByClassName("inputCheckBox3");
            for (let i = 0; i < inputCheckBox.length; i++) {
                if (inputCheckBox[i].disabled == false) {
                    sessionStorage.entrainementProgramme = values[i];
                }
            }
            break;
        case 4:
            sessionStorage.tpsSemaine = document.getElementById("timeSemaine").value;
            break;
        case 5:
            sessionStorage.longueurProgramme = document.getElementById("nbSemaines").value;
            break;
        case 6:
            check = {
                lundi: document.getElementById("pageInputCheckBoxJourDispo_1").checked,
                mardi: document.getElementById("pageInputCheckBoxJourDispo_2").checked,
                mercredi: document.getElementById("pageInputCheckBoxJourDispo_3").checked,
                jeudi: document.getElementById("pageInputCheckBoxJourDispo_4").checked,
                vendredi: document.getElementById("pageInputCheckBoxJourDispo_5").checked,
                samedi: document.getElementById("pageInputCheckBoxJourDispo_6").checked,
                dimanche: document.getElementById("pageInputCheckBoxJourDispo_7").checked
            }
            sessionStorage.jourDispo = JSON.stringify(check);
            break;
        // case 7:
        //     value = "";
        //     if (document.getElementById("pageInputCheckBoxSortieClub_1").checked == true) {
        //         value = false
        //     }
        //     else {
        //         value = {
        //             jour: document.getElementById("inputJour").value,
        //             intensite: document.getElementById("inputIntensite").value,
        //             tempsSortie: document.getElementById("inputTempsSortie").value
        //         }
        //     }
        //     sessionStorage.sortieClub = JSON.stringify(value);
        //     break;
        case 7:
            sessionStorage.dateCourse = document.getElementById("inputJour").value + "/" + document.getElementById("inputMois").value + 
            "/" + document.getElementById("inputAnnée").value;
            break;
    }
}

function saveInLocalStorage() {
    if (!localStorage.programme) {
        localStorage.programme = JSON.stringify([])
    }

    makePrg();
    PRG = JSON.parse(localStorage.PRG)[JSON.parse(localStorage.PRG).length - 1];
    programme = JSON.parse(localStorage.programme);
    if (programme.length <= 3) {
        newProgramme = [{
            type: sessionStorage.programme,
            nom: document.getElementById("finaleValueNom").value,
            equipement: JSON.parse(sessionStorage.equipement),
            entrainementActuel: sessionStorage.entrainementActuel,
            entrainementActuelNb: sessionStorage.entrainementActuelNb,
            typeCycliste: sessionStorage.typeCycliste,
            entrainementProgramme: sessionStorage.entrainementProgramme,
            longueurProgramme: sessionStorage.longueurProgramme,
            jourDispo: JSON.parse(sessionStorage.jourDispo),
            // sortieClub: JSON.parse(sessionStorage.sortieClub),
            dateCourse: sessionStorage.dateCourse,
            startTps: getTps(PRG),
            actualTps: getTps(PRG),
            startISem: getISem(PRG),
            actualISem: getISem(PRG)
        }]
        programme = programme.concat(newProgramme);
        
        localStorage.programme = JSON.stringify(programme);
    }
    else alert("vous avez trop de programmes de prévu");
}