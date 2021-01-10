function getTps_semChart(type) {
    index = getAfterUrl();
    let semaines = getSemaines(type);
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
            colorBySemName[i] = "rgba(41, 48, 255, 0.8)";
            borederColorBySemName[i] = "rgba(41, 48, 255, 1.0)";
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
            colorBySemName[i] = "rgba(41, 48, 255, 0.8)";
            borederColorBySemName[i] = "rgba(41, 48, 255, 1.0)";
        }
    }

    let label = new Array();
    for (let i = 0; i < PRG[index].length; i++) {
        label[i] = i + 1;
    }

    if (tps.length == semaineNames.length + 1) {
        colorBySemName[semaineNames.length] = "rgba(41, 48, 255, 0.8)";
        borederColorBySemName[semaineNames.length] = "rgba(41, 48, 255, 1.0)";
    }
    
    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'temps(minutes) par semaine',
                data: tps,
                backgroundColor: colorBySemName,
                borderColor: borederColorBySemName,
                borderWidth: 1
            }]
        },
        options: {
            
        }
    });

    var ctx_modifier = document.getElementById('myChart2_modifier').getContext('2d');
    var myChart_modifier = new Chart(ctx_modifier, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'temps(minutes) par semaine',
                data: tps,
                backgroundColor: colorBySemName,
                borderColor: borederColorBySemName,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false
        }
    });

    $("#iconModifier0").click(function () {
        document.getElementById("filter").style.visibility = "visible";
        document.getElementById("modifierTpsPrg").style.visibility = "visible";
    })

    $("#filter").click(function () {
        document.getElementById("filter").style.visibility = "hidden";
        document.getElementById("modifierTpsPrg").style.visibility = "hidden";
        document.getElementById("modifierISemPrg").style.visibility = "hidden";
    });

    $("#modifierCloseIcon0").click(function () {
        document.getElementById("filter").style.visibility = "hidden";
        document.getElementById("modifierTpsPrg").style.visibility = "hidden";
    });

    for (let i = 0; i < tps.length; i++) {
        var semaine = document.createElement("div");
        semaine.className = "semaine"
        document.getElementById("listSemaineTps").appendChild(semaine);

        var listSemaineIndex = document.createElement("div");
        listSemaineIndex.className = "listSemaineIndex"
        listSemaineIndex.innerText = i + 1;
        semaine.appendChild(listSemaineIndex);

        var listSemaineTpsBox = document.createElement("div");
        listSemaineTpsBox.className = "listSemaineBox"
        semaine.appendChild(listSemaineTpsBox);

        var listSemaineTpsInput = document.createElement("input");
        listSemaineTpsInput.id = i;
        listSemaineTpsInput.className = "listSemaineInput listSemaineInputTps"
        listSemaineTpsInput.value = tps[i];
        listSemaineTpsInput.autocomplete = "off";
        listSemaineTpsBox.appendChild(listSemaineTpsInput);
    }

    $(".listSemaineInputTps").focusout(function (evt) {
        if (document.getElementById(evt.currentTarget.id).value <= 0) document.getElementById(evt.currentTarget.id).value = 0;
        if (document.getElementById(evt.currentTarget.id).value >= 3000) document.getElementById(evt.currentTarget.id).value = 3000;

        tps[Number(evt.currentTarget.id)] = document.getElementById(evt.currentTarget.id).value;
        myChart_modifier.data.datasets[0].data = tps;

        myChart_modifier.update();
    })

    $("#submit0").click(function () {
        index = getAfterUrl();

        programme = JSON.parse(localStorage.programme);
        programme[index].actualTps = tps;
        localStorage.programme = JSON.stringify(programme);

        document.getElementById("filter").style.visibility = "hidden";
        document.getElementById("modifierTpsPrg").style.visibility = "hidden";

        updateTempsPRG(tps)
        window.location.reload();
    })

    $("#submitReInt0").click(function () {
        index = getAfterUrl();
        programme = JSON.parse(localStorage.programme);

        programme[index].actualTps = programme[index].startTps;
        localStorage.programme = JSON.stringify(programme);

        for (let i = 0; i < programme[index].startTps.length; i++) {
            document.getElementById(i).value = programme[index].startTps[i];
        }

        updateTempsPRG(programme[index].startTps)
        window.location.reload();
    })
}