const afterUrl = getAfterUrl();
const pageT = document.getElementById("pageT");

let State = new Array();
State[0] = "equipement";
State[1] = "entrainement actuel";
State[2] = "entrainement programme";
State[3] = "temps programme";
State[4] = "longueur programme";
State[5] = "jour dispo";
// State[6] = "sortie club";
State[6] = "date course";
State[7] = "pametre generaux";
State[8] = "fin";

SwitchType(0);

function SwitchType(nb) {
    if (nb == 8) saveInLocalStorage()
    else saveInSessionStorage(nb)
    
    if (nextCheck(nb) == true) {
        
        switch (afterUrl) {
            case "Criterium":
                postMainCriterium(State[nb]);
                sessionStorage.programme = "Criterium";
                break;
            case "Endurance":
                postMainEndurance(State[nb]);
                sessionStorage.programme = "Endurance";
                break;
            case "GrandPrix":
                postMainGrandPrix(State[nb]);
                sessionStorage.programme = "GrandPrix";
                break;
            case "GranFondo":
                postMainGranFondo(State[nb]);
                sessionStorage.programme = "GranFondo";
                break;
            case "TimeTrial":
                postMainTimeTrial(State[nb]);
                sessionStorage.programme = "TimeTrial";
                break;
        }  
    }
    else {
        alert(nextCheck(nb))
    }
}

function nextCheck(nb) {
    switch (nb) {
        case 0:
            sessionStorage.clear();
            return true;
            break;
        case 1:
            if ($('#pageInputCheckBoxFC').is(':checked') || $('#pageInputCheckBoxHT').is(':checked') || $('#pageInputCheckBoxW').is(':checked')) {
                return true;
            }
            else return "veuillez cocher une case";
            break;
        case 2:
            if (document.getElementById("entActSem").value.length > 0) return true
            else return "veuillez renseigner votre entrainement actuel";
            break;
        case 3:
            if ($('#pageInputCheckBoxTrainPrg_1').is(':checked') || $('#pageInputCheckBoxTrainPrg_2').is(':checked') || 
                $('#pageInputCheckBoxTrainPrg_3').is(':checked') || $('#pageInputCheckBoxTrainPrg_4').is(':checked') || 
                $('#pageInputCheckBoxTrainPrg_5').is(':checked')) {
                return true;
            }
            else return "veuillez cocher une case";
            break;
        case 4:
            if (document.getElementById("timeSemaine").value.length > 0) return true
            else return "veuillez donner la difficulté du programme";
            break;
        case 5:
            if (document.getElementById("nbSemaines").value != "") {
                return true;
            }
            else return "veuillez donner la longueur du programme";
            break;
        case 6:
            if ($('#pageInputCheckBoxJourDispo_1').is(':checked') || $('#pageInputCheckBoxJourDispo_2').is(':checked') || 
                $('#pageInputCheckBoxJourDispo_3').is(':checked') || $('#pageInputCheckBoxJourDispo_4').is(':checked') || 
                $('#pageInputCheckBoxJourDispo_5').is(':checked') || $('#pageInputCheckBoxJourDispo_6').is(':checked') || 
                $('#pageInputCheckBoxJourDispo_7').is(':checked')) {
                    entrainementsSemaine = sessionStorage.entrainementProgramme;
                    nbJoursDispo = 0;
                    inputs = document.getElementsByClassName("inputCheckBox4");
                    for (let i = 0; i < inputs.length; i++) {
                        if (inputs[i].checked == true) nbJoursDispo++
                    }

                    switch (nbJoursDispo) {
                        case 1:
                            return "le nombre de jours disponibles est trop faible par rapport au nombre d'entrainement par semaine";
                            break;
                        case 2:
                            return "le nombre de jours disponibles est trop faible par rapport au nombre d'entrainement par semaine";
                            break;
                        case 3:
                            if (entrainementsSemaine == "3") return true
                            else return "le nombre de jours disponibles est trop faible par rapport au nombre d'entrainement par semaine";
                            break;
                        case 4:
                            if (entrainementsSemaine == "3" || entrainementsSemaine == "4") return true
                            else return "le nombre de jours disponibles est trop faible par rapport au nombre d'entrainement par semaine";
                            break;
                        case 5:
                            if (entrainementsSemaine == "3" || entrainementsSemaine == "4" || entrainementsSemaine == "5") 
                            {return true}
                            else return "le nombre de jours disponibles est trop faible par rapport au nombre d'entrainement par semaine";
                            break;
                        case 6:
                            if (entrainementsSemaine == "3" || entrainementsSemaine == "4" || entrainementsSemaine == "5" || entrainementsSemaine == "6") 
                            {return true}
                            else return "le nombre de jours disponibles est trop faible par rapport au nombre d'entrainement par semaine";
                            break;
                        case 7:
                            if (entrainementsSemaine == "3" || entrainementsSemaine == "4" || entrainementsSemaine == "5" || entrainementsSemaine == "6"
                            || entrainementsSemaine == "7") 
                            {return true}
                            else return "le nombre de jours disponibles est trop faible par rapport au nombre d'entrainement par semaine";
                            break;
                    }
            }
            else return "veuillez cocher une case"; 
            break;
        // case 7:
        //     if ($('#pageInputCheckBoxSortieClub_1').is(':checked')) {
        //         return true;
        //     }
        //     else if ($('#pageInputCheckBoxSortieClub_2').is(':checked')) {
        //         if (document.getElementById("inputJour").value.length > 0 &&
        //             document.getElementById("inputIntensite").value.length > 0 &&
        //             document.getElementById("inputTempsSortie").value.length > 0) {
        //                 jourDispo = JSON.parse(sessionStorage.jourDispo);
        //                 sortieClub = document.getElementById("inputJour").value;

        //                 switch (sortieClub) {
        //                     case "1":
        //                         if (jourDispo.lundi == true) return true;
        //                         else return "veuillez donner un jour où vous êtes disponible";
        //                         break;
        //                     case "2":
        //                         if (jourDispo.mardi == true) return true;
        //                         else return "veuillez donner un jour où vous êtes disponible";
        //                         break;
        //                     case "3":
        //                         if (jourDispo.mercredi == true) return true;
        //                         else return "veuillez donner un jour où vous êtes disponible";
        //                         break;
        //                     case "4":
        //                         if (jourDispo.jeudi == true) return true;
        //                         else return "veuillez donner un jour où vous êtes disponible";
        //                         break;
        //                     case "5":
        //                         if (jourDispo.vendredi == true) return true;
        //                         else return "veuillez donner un jour où vous êtes disponible";
        //                         break;
        //                     case "6":
        //                         if (jourDispo.samedi == true) return true;
        //                         else return "veuillez donner un jour où vous êtes disponible";
        //                         break;
        //                     case "7":
        //                         if (jourDispo.dimanche == true) return true;
        //                         else return "veuillez donner un jour où vous êtes disponible";
        //                         break;
        //                 }
        //         }
        //         else return "veuillez donner des informations sur votre sortie club"; 
        //     }
        //     else return "veuillez cocher une case"; 
        //     break;
        case 7:
            raceDateValueNb = getDayNB365(
            Number(document.getElementById("inputJour").value), 
            Number(document.getElementById("inputMois").value), 
            Number(document.getElementById("inputAnnée").value)
            );
            checkingDateOfOtherPrg = checkDateOfOtherPrg(raceDateValueNb, Number(document.getElementById("inputAnnée").value));

            raceDateValue = document.getElementById("inputJour").value + "/" + document.getElementById("inputMois").value + 
            "/" + document.getElementById("inputAnnée").value

            if (raceDateValue.length == 10) {
                return checkingDateOfOtherPrg;
            }
            else return "veuillez donner une date";
            break;
        case 8:
            return true;
            break;
    }
}

function checkDateOfOtherPrg(endNb, year) {
    if (localStorage.programme) {
        startNb = endNb - (Number(sessionStorage.longueurProgramme) * 7)
        programme = JSON.parse(localStorage.programme);

        startAllPrg = new Array();
        for (let i = 0; i < programme.length; i++) {
            startAllPrg[i] = getDayNB365(
            Number(programme[i].dateCourse.slice(0, 2)), 
            Number(programme[i].dateCourse.slice(3, 5)), 
            Number(programme[i].dateCourse.slice(6, 10))
            ) - (Number(programme[i].longueurProgramme) * 7);
        }
        
        endAllPrg = new Array();
        for (let i = 0; i < programme.length; i++) {
            endAllPrg[i] = getDayNB365(
            Number(programme[i].dateCourse.slice(0, 2)), 
            Number(programme[i].dateCourse.slice(3, 5)), 
            Number(programme[i].dateCourse.slice(6, 10))
            );
        }
        yearAllPrg = new Array();
        for (let i = 0; i < programme.length; i++) {
            yearAllPrg[i] = Number(programme[i].dateCourse.slice(6, 10));
        }
        
        prgWrap = new Array();
        for (let i = 0; i < startAllPrg.length; i++) {
            if (yearAllPrg[i] == year) {
                if (startAllPrg[i] > startNb || startAllPrg[i] < endNb) {
                    prgWrap[i] = i;
                }
                else if (endAllPrg[i] > startNb || endAllPrg[i] < endNb) {
                    prgWrap[i] = i;
                }
                else {
                    prgWrap[i] = false;
                }
            }
            else {
                prgWrap[i] = false;
            }
        }
        
        let wrap = false;
        for (let i = 0; i < prgWrap.length; i++) {
            if (typeof prgWrap[i] == "number") {
                wrap = true
            }
        }

        if (wrap == true) {
            return "vous avez déja un programme de prévu à cette période";
        }
        else if (wrap == false) {
            return true;
        }
    }
    else {
        return true;
    }
}