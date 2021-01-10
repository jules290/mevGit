function postIsemChart(type) {
    let semaines = getSemaines(type);
    let entrainementProgramme = Number(programme.entrainementProgramme);

    let iSem = JSON.parse(localStorage.programme)[index].actualISem;
    let tps = JSON.parse(localStorage.programme)[index].actualTps;

    let semaineNames = new Array();
    for (let i = 0; i < semaines.length; i++) {
        let tagArray = new Array();
        for (let y = 0; y < semaines[i].length; y++) {
            tagArray[y] = semaines[i].name
        }
        semaineNames = semaineNames.concat(tagArray);
    }
    
    let colorBySemName = new Array();
    let borederColorBySemName = new Array();
    for (let i = 0; i < semaineNames.length; i++) {
        if (semaineNames[i] == "récupération") {
            colorBySemName[i] = "rgba(140, 140, 140, 0.8)";
            borederColorBySemName[i] = "rgba(140, 140, 140, 1.0)";
        }
        
        else if (semaineNames[i] == "endurance") {
            colorBySemName[i] = "rgba(140, 140, 140, 0.8)";
            borederColorBySemName[i] = "rgba(140, 140, 140, 1.0)";
        }
        else if (semaineNames[i] == "FTP") {
            colorBySemName[i] = "rgba(14, 191, 255, 0.8)";
            borederColorBySemName[i] = "rgba(14, 191, 255, 1.0)";
        }
        else if (semaineNames[i] == "seuil") {
            colorBySemName[i] = "rgba(95, 255, 63, 0.8)";
            borederColorBySemName[i] = "rgba(95, 255, 63, 1.0)";
        }
        else if (semaineNames[i] == "PMA") {
            colorBySemName[i] = "rgba(243, 255, 12, 0.8)";
            borederColorBySemName[i] = "rgba(243, 255, 12, 1.0)";
        }

        else if (semaineNames[i] == "affutage") {
            colorBySemName[i] = "rgba(140, 140, 140, 0.8)";
            borederColorBySemName[i] = "rgba(140, 140, 140, 1.0)";
        }
    }

    let label = new Array();
    for (let i = 0; i < PRG[index].length; i++) {
        label[i] = i + 1;
    }

    if (iSem.length == semaineNames.length + 1) {
        colorBySemName[semaineNames.length] = "rgba(41, 48, 255, 0.8)";
        borederColorBySemName[semaineNames.length] = "rgba(41, 48, 255, 1.0)";
    }
    
    var ctx = document.getElementById('myChart3').getContext('2d');
    var myChartISem = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'temps(minutes) par semaine',
                data: iSem,
                backgroundColor: colorBySemName,
                borderColor: borederColorBySemName,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        stepSize: 1
                    },
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });

    var ctx_modifier3 = document.getElementById('myChart3_modifier').getContext('2d');
    var myChart_modifier3 = new Chart(ctx_modifier3, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'temps(minutes) par semaine',
                data: iSem,
                backgroundColor: colorBySemName,
                borderColor: borederColorBySemName,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false
        }
    });

    for (let i = 0; i < iSem.length; i++) {
        if (semaineNames[i] != "récupération" && semaineNames[i] != "endurance" && semaineNames[i] != "affutage") {
            if (i != 0 && semaineNames[i] != semaineNames[i - 1]) {
                var semaine = document.createElement("div");
                semaine.className = "semaine"
                document.getElementById("listSemaineISem").appendChild(semaine);
        
                var listSemaineIndex = document.createElement("div");
                listSemaineIndex.className = "listSemaineIndex"
                listSemaineIndex.innerText = semaineNames[i];
                semaine.appendChild(listSemaineIndex);
        
                var listSemaineISemBox = document.createElement("div");
                listSemaineISemBox.className = "listSemaineBox"
                semaine.appendChild(listSemaineISemBox);
        
                var listSemaineISemInput = document.createElement("input");
                listSemaineISemInput.id = semaineNames[i];
                listSemaineISemInput.className = "listSemaineInput listSemaineInputISem"
                listSemaineISemInput.value = iSem[i];
                listSemaineISemBox.appendChild(listSemaineISemInput);
            }
        }
    }

    $(".listSemaineInputISem").focusout(function (evt) {
        if (document.getElementById(evt.currentTarget.id).value <= 1) {
            document.getElementById(evt.currentTarget.id).value = 1;
        }
        if (document.getElementById(evt.currentTarget.id).value >= 3) {
            document.getElementById(evt.currentTarget.id).value = 3;
        }

        for (let i = 0; i < iSem.length; i++) {
            if (semaineNames[i] == evt.currentTarget.id) {
                iSem[i] = Number(document.getElementById(evt.currentTarget.id).value);
            }
        }
        myChart_modifier3.data.datasets[0].data = iSem;

        myChart_modifier3.update();
    })

    $("#submit1").click(function () {
        myChartISem.data.datasets[0].data = iSem;
        myChartISem.update();
        index = getAfterUrl();

        programme = JSON.parse(localStorage.programme);
        programme[index].actualISem = iSem;
        localStorage.programme = JSON.stringify(programme);

        document.getElementById("filter").style.visibility = "hidden";
        document.getElementById("modifierISemPrg").style.visibility = "hidden";
        
        updateISemPRG(iSem, tps)
        window.location.reload();
    })

    $("#submitReInt1").click(function () {
        index = getAfterUrl();
        programme = JSON.parse(localStorage.programme);

        programme[index].actualISem = programme[index].startISem;
        localStorage.programme = JSON.stringify(programme);

        input = document.getElementsByClassName("semaine");

        for (let i = 0; i < iSem.length; i++) {
            if (semaineNames[i] != "récupération" && semaineNames[i] != "endurance" && semaineNames[i] != "affutage") {
                if (i != 0 && semaineNames[i] != semaineNames[i - 1]) {
                    document.getElementById(semaineNames[i]).value =  programme[index].startISem[i];
                }
            }
        }

        updateTempsPRG(programme[index].startISem, tps)
        window.location.reload();
    })
}

function getISem() {
    index = getAfterUrl();
    let iSem = new Array();
    let tpsIsem = new Array();
    for (let i = 0; i < PRG[index].length; i++) {
        iSem[i] = 0;
        tpsIsem[i] = 0;

        if (PRG[index][i].lundi.typeSeance == "Seuil" || PRG[index][i].lundi.typeSeance == "PMA" || PRG[index][i].lundi.typeSeance == "Test FC MAX" || 
        PRG[index][i].lundi.typeSeance == "Test PMA" || PRG[index][i].lundi.typeSeance == "Sweet Spot") {
            iSem[i]++;
            tpsIsem[i] += getTpsSeance(PRG[index][i].lundi);
        }

        if (PRG[index][i].mardi.typeSeance == "Seuil" || PRG[index][i].mardi.typeSeance == "PMA" || PRG[index][i].mardi.typeSeance == "Test FC MAX" || 
        PRG[index][i].mardi.typeSeance == "Test PMA" || PRG[index][i].mardi.typeSeance == "Sweet Spot") {
            iSem[i]++;
            tpsIsem[i] += getTpsSeance(PRG[index][i].mardi);
        }

        if (PRG[index][i].mercredi.typeSeance == "Seuil" || PRG[index][i].mercredi.typeSeance == "PMA" 
        || PRG[index][i].mercredi.typeSeance == "Test FC MAX" || PRG[index][i].mercredi.typeSeance == "Test PMA" ||
         PRG[index][i].mercredi.typeSeance == "Sweet Spot") {
            iSem[i]++;
            tpsIsem[i] += getTpsSeance(PRG[index][i].mercredi);
        }

        if (PRG[index][i].jeudi.typeSeance == "Seuil" || PRG[index][i].jeudi.typeSeance == "PMA" || PRG[index][i].jeudi.typeSeance == "Test FC MAX" || 
        PRG[index][i].jeudi.typeSeance == "Test PMA" || PRG[index][i].jeudi.typeSeance == "Sweet Spot") {
            iSem[i]++;
            tpsIsem[i] += getTpsSeance(PRG[index][i].jeudi);
        }

        if (PRG[index][i].vendredi.typeSeance == "Seuil" || PRG[index][i].vendredi.typeSeance == "PMA" 
        || PRG[index][i].vendredi.typeSeance == "Test FC MAX" || PRG[index][i].vendredi.typeSeance == "Test PMA" || 
        PRG[index][i].vendredi.typeSeance == "Sweet Spot") {
            iSem[i]++;
            tpsIsem[i] += getTpsSeance(PRG[index][i].vendredi);
        }

        if (PRG[index][i].samedi.typeSeance == "Seuil" || PRG[index][i].samedi.typeSeance == "PMA" || 
        PRG[index][i].samedi.typeSeance == "Test FC MAX" || PRG[index][i].samedi.typeSeance == "Test PMA" || 
        PRG[index][i].samedi.typeSeance == "Sweet Spot") {
            iSem[i]++;
            tpsIsem[i] += getTpsSeance(PRG[index][i].samedi);
        }

        if (PRG[index][i].dimanche.typeSeance == "Seuil" || PRG[index][i].dimanche.typeSeance == "PMA" || 
        PRG[index][i].dimanche.typeSeance == "Test FC MAX" || PRG[index][i].dimanche.typeSeance == "Test PMA" || 
        PRG[index][i].dimanche.typeSeance == "Sweet Spot") {
            iSem[i]++;
            tpsIsem[i] += getTpsSeance(PRG[index][i].dimanche);
        }
    }

    for (let i = 0; i < tpsIsem.length; i++) {
        tpsIsem[i] = tpsIsem[i] / 60
    }
    
    return [iSem, tpsIsem]
}

$("#iconModifier1").click(function () {
    document.getElementById("filter").style.visibility = "visible";
    document.getElementById("modifierISemPrg").style.visibility = "visible";
})

$("#modifierCloseIcon1").click(function () {
    document.getElementById("filter").style.visibility = "hidden";
    document.getElementById("modifierISemPrg").style.visibility = "hidden";
});