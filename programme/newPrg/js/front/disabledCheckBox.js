const inputCheckBox1 = document.getElementsByClassName ("inputCheckBox1");
const inputCheckBox2 = document.getElementsByClassName ("inputCheckBox2");
const inputCheckBox3 = document.getElementsByClassName ("inputCheckBox3");
var d = new Date();
année = Number(d.getFullYear());
mois = Number(d.getMonth());

function disabledCheckBox3() {
    $(".inputCheckBox3").click(function (event) {
        eveId = event.target.id;
        if ($('#pageInputCheckBoxTrainPrg_1').is(':checked') || $('#pageInputCheckBoxTrainPrg_2').is(':checked') || 
            $('#pageInputCheckBoxTrainPrg_3').is(':checked') || $('#pageInputCheckBoxTrainPrg_4').is(':checked') || 
            $('#pageInputCheckBoxTrainPrg_5').is(':checked')) {
            for (let i = 0; i < inputCheckBox3.length; i++) {
                if (inputCheckBox3[i].id != eveId) {
                    inputCheckBox3[i].disabled = true;
                }
            }
        }
        else {
            for (let i = 0; i < inputCheckBox3.length; i++) {
                inputCheckBox3[i].disabled = false;
            }
        }
        if (sessionStorage.entrainementActuel == "aucunEntrainement" || sessionStorage.entrainementActuel == "1-3Heure") {
            document.getElementById("pageInputCheckBoxTrainPrg_4").disabled = true;
            document.getElementById("pageInputCheckBoxTrainPrg_5").disabled = true;
        }
        else if (sessionStorage.entrainementActuel == "4-7Heure") {
            document.getElementById("pageInputCheckBoxTrainPrg_5").disabled = true;
        }

        if (sessionStorage.programme == "Criterium" || sessionStorage.programme == "GrandPrix" || sessionStorage.programme == "TimeTrial") {
            document.getElementById("pageInputCheckBoxTrainPrg_1").disabled = true;
        }
    })

    if (sessionStorage.entrainementActuel == "aucunEntrainement" || sessionStorage.entrainementActuel == "1-3Heure") {
        document.getElementById("pageInputCheckBoxTrainPrg_4").disabled = true;
        document.getElementById("pageInputCheckBoxTrainPrg_5").disabled = true;
    }
    else if (sessionStorage.entrainementActuel == "4-7Heure") {
        document.getElementById("pageInputCheckBoxTrainPrg_5").disabled = true;
    }

    if (sessionStorage.programme == "Criterium" || sessionStorage.programme == "GrandPrix" || sessionStorage.programme == "TimeTrial") {
        document.getElementById("pageInputCheckBoxTrainPrg_1").disabled = true;
    }
}

function disabledCheckBox4() {
    typeProgramme = sessionStorage.programme;
    optionNbSemaines = document.getElementsByClassName("optionNbSemaines");
    switch (typeProgramme) {
        case "Criterium":
            optionNbSemaines[0].style.display = "none";
            optionNbSemaines[1].style.display = "none";
            optionNbSemaines[10].style.display = "none";
            optionNbSemaines[11].style.display = "none";
            optionNbSemaines[12].style.display = "none";
            optionNbSemaines[13].style.display = "none";
            optionNbSemaines[14].style.display = "none";
            //8-22
            break;
        case "Endurance":
            //4-32
            break;
        case "GrandPrix":
            optionNbSemaines[0].style.display = "none";
            optionNbSemaines[1].style.display = "none";
            optionNbSemaines[10].style.display = "none";
            optionNbSemaines[11].style.display = "none";
            optionNbSemaines[12].style.display = "none";
            optionNbSemaines[13].style.display = "none";
            optionNbSemaines[14].style.display = "none";
            //8-22
            break;
        case "GranFondo":
            optionNbSemaines[0].style.display = "none";
            optionNbSemaines[1].style.display = "none";
            optionNbSemaines[14].style.display = "none";
            //8-30
            break;
        case "TimeTrial":
            optionNbSemaines[0].style.display = "none";
            optionNbSemaines[10].style.display = "none";
            optionNbSemaines[11].style.display = "none";
            optionNbSemaines[12].style.display = "none";
            optionNbSemaines[13].style.display = "none";
            optionNbSemaines[14].style.display = "none";
            //6-22
            break;
    }
}

function disabledCheckBox6() {
    $("#pageInputCheckBoxSortieClub_2").click(function () {
        if ($('#pageInputCheckBoxSortieClub_2').is(':checked')) {
            document.getElementById("inputJour").disabled = false;
            document.getElementById("inputIntensite").disabled = false;
            document.getElementById("inputTempsSortie").disabled = false;

            document.getElementById("pageInputCheckBoxSortieClub_1").disabled = true;
        }
        else {
            document.getElementById("inputJour").disabled = true;
            document.getElementById("inputIntensite").disabled = true;
            document.getElementById("inputTempsSortie").disabled = true;

            document.getElementById("pageInputCheckBoxSortieClub_1").disabled = false;
        }
    })

    $("#pageInputCheckBoxSortieClub_1").click(function () {
        if ($('#pageInputCheckBoxSortieClub_1').is(':checked')) {
            document.getElementById("pageInputCheckBoxSortieClub_2").disabled = true;
        }
        else {
            document.getElementById("pageInputCheckBoxSortieClub_2").disabled = false;
        }
    })
}

function disabledCheckBox7() {
    aujourdHui = getAujourdHui();
    aujourdHuiNb = getDayNB365(aujourdHui.day, aujourdHui.month, aujourdHui.year);

    prgLengthInDay = Number(sessionStorage.longueurProgramme) * 7;

    minEndNb = aujourdHuiNb + prgLengthInDay;

    if (aujourdHui.year % 4 == 0) {
        if (minEndNb > 366) {
            year = aujourdHui.year + 1;
            minEndNb = minEndNb - 366;
        }
        else year = aujourdHui.year;
    }
    else {
        if (minEndNb > 365) {
            year = aujourdHui.year + 1;
            minEndNb = minEndNb - 365;
        }
        else year = aujourdHui.year;
    }

    minEnd = getDateWithDayNb(minEndNb, year);

    optionsAnnee = document.getElementsByClassName("optionAnnee");
    for (let i = 0; i < optionsAnnee.length; i++) {
        if (i + 2020 < minEnd.year) {
            optionsAnnee[i].style.display = "none";
        }
    }
    
    $("#inputAnnée").change(function () {
        document.getElementById("inputMois").disabled = false;
        valueAnnée = document.getElementById("inputAnnée").value;
        valueMois = document.getElementById("inputMois").value;

        if (minEnd.year == Number(valueAnnée)) {
            if (valueMois < minEnd.month && valueMois != "") {
                for (let i = 0; i < 12; i++) {
                    document.getElementsByClassName("optionMois")[i].selected = false;
                }
                document.getElementsByClassName("optionMois")[minEnd.month - 1].selected = true;
            }

            for (let i = 0; i < 12; i++) {
                if (i < minEnd.month - 1) {
                    document.getElementsByClassName("optionMois")[i].style.display = "none";
                }
            }
        }
        else {
            for (let i = 0; i < 12; i++) {
                document.getElementsByClassName("optionMois")[i].style.display = "block";
            }
        }
    })

    $("#inputMois").change(function () {
        document.getElementById("inputJour").disabled = false;
        valueMois = document.getElementById("inputMois").value;
        optionsJour = document.getElementsByClassName("optionJour");

        for (let i = 0; i < optionsJour.length; i++) {
            optionsJour[i].style.display = "block";
        }

        if (valueMois == minEnd.month) {
            for (let i = 0; i < optionsJour.length; i++) {
                if (i < minEnd.day - 1) {
                    optionsJour[i].style.display = "none";
                }
            }
        }

        switch (Number(valueMois)) {
            case 1:
                document.getElementsByClassName("optionJour")[30].style.display = "block";
                break;
            case 2:
                if (valueAnnée % 4 == 0) {
                    document.getElementsByClassName("optionJour")[30].style.display = "none";
                    document.getElementsByClassName("optionJour")[29].style.display = "none";
                }
                else {
                    document.getElementsByClassName("optionJour")[30].style.display = "none";
                    document.getElementsByClassName("optionJour")[29].style.display = "none";
                    document.getElementsByClassName("optionJour")[28].style.display = "none";
                }
                break;
            case 3:
                document.getElementsByClassName("optionJour")[30].style.display = "block";
                break;
            case 4:
                document.getElementsByClassName("optionJour")[30].style.display = "none";
                break;
            case 5:
                document.getElementsByClassName("optionJour")[30].style.display = "block";
                break;
            case 6:
                document.getElementsByClassName("optionJour")[30].style.display = "none";
                break;
            case 7:
                document.getElementsByClassName("optionJour")[30].style.display = "block";
                break;
            case 8:
                document.getElementsByClassName("optionJour")[30].style.display = "block";
                break;
            case 9:
                document.getElementsByClassName("optionJour")[30].style.display = "none";
                break;
            case 10:
                document.getElementsByClassName("optionJour")[30].style.display = "block";
                break;
            case 11:
                document.getElementsByClassName("optionJour")[30].style.display = "none";
                break;
            case 12:
                document.getElementsByClassName("optionJour")[30].style.display = "block";
                break;
        }
        document.getElementById("inputJour").disabled = false;
    })
}