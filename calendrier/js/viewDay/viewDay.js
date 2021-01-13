function postListDaySeances(day, month, year) {
    daySeances = getDaySeances(Number(day), month.toLowerCase(), year);
    

    $("#viewSeance").empty();
    if (daySeances.length > 0) {
        for (let i = 0; i < daySeances.length; i++) {
            if (daySeances[i] != "") {
                seance = document.createElement("div");
                seance.className = "viewSeance";
                document.getElementById("viewSeance").appendChild(seance);

                seanceBasicInfo = document.createElement("div");
                seanceBasicInfo.className = "viewSeanceBasicInfo";
                seance.appendChild(seanceBasicInfo);
        
                seanceArrowBox = document.createElement("div");
                seanceArrowBox.className = "viewSeanceArrowBox";
                seanceArrowBox.onclick = function () {
                    if (this.children[0].style.transform == "rotate(180deg)") {
                        this.children[0].style.transform = "rotate(0deg)";

                        this.parentNode.style.height = "100%";
                        this.parentNode.parentNode.style.height = "14%";

                        this.parentNode.parentNode.children[1].remove();
                    }
                    else {
                        this.children[0].style.transform = "rotate(180deg)";

                        this.parentNode.style.height = "14.5%";
                        this.parentNode.parentNode.style.height = "94%";

                        seanceOtherInfo = document.createElement("div");
                        seanceOtherInfo.className = "viewSeanceOtherInfo";
                        this.parentNode.parentNode.appendChild(seanceOtherInfo);
                        if (daySeances[i] != undefined) postOtherInfo(daySeances[i])
                        else if (sessionStorage.viewSeance) {
                            if (JSON.parse(sessionStorage.viewSeance)) {
                                postOtherInfo(JSON.parse(sessionStorage.viewSeance)[i]);
                            }
                        }
                    }
                }
                seanceBasicInfo.appendChild(seanceArrowBox);
        
                seanceArrow = document.createElement("img");
                seanceArrow.className = "viewSeanceArrow";
                seanceArrow.src = "/img/bottomArrow.png";
                seanceArrowBox.appendChild(seanceArrow);
        
                viewSeanceT = document.createElement("p");
                viewSeanceT.className = "viewSeanceT";
                if (daySeances[i] != "race") {
                    if (daySeances[i].typeSeance == "Test FC MAX") viewSeanceT.innerText = "TEST DE FC MAX"
                    else if (daySeances[i].typeSeance == "Test PMA") viewSeanceT.innerText = "TEST DE PMA"
                    else if (daySeances[i].typeSeance == "Débloquage") viewSeanceT.innerText = "DéBLOQUAGE".toLocaleUpperCase()
                    else if (daySeances[i].typeSeance == "Endurance") viewSeanceT.innerText = "SEANCE D'ENDURANCE"
                    else if (daySeances[i].typeSeance == "Sweet Spot") viewSeanceT.innerText = "SEANCE DE SWEET SPOT"
                    else if (daySeances[i].typeSeance == "Gimenez") viewSeanceT.innerText = "SEANCE DE GIMENEZ"
                    else if (daySeances[i].typeSeance == "Seuil") viewSeanceT.innerText = "SEANCE DE SEUIL"
                    else if (daySeances[i].typeSeance == "PMA") viewSeanceT.innerText = "SEANCE DE PMA"
                    else if (daySeances[i].typeSeance == "Sprint") viewSeanceT.innerText = "SEANCE DE SPRINT"
                }
                else viewSeanceT.innerText = "COURSE";
                seanceBasicInfo.appendChild(viewSeanceT);
            }
        }   
    }
    addSeanceMsg = document.createElement("div");
    addSeanceMsg.className = "addSeanceMsg";
    addSeanceMsg.onclick = function () {window.location.href = "/seances/seance.html?nouveau"}
    document.getElementById("viewSeance").appendChild(addSeanceMsg);

    addSeanceMsgLogo = document.createElement("img");
    addSeanceMsgLogo.className = "addSeanceMsgLogo";
    addSeanceMsgLogo.src = "/img/addSeance.png";
    addSeanceMsg.appendChild(addSeanceMsgLogo);
}

function postOtherInfo(seance) {
    dataBox = document.createElement("div");
    dataBox.className = "dataBox";
    seanceOtherInfo.appendChild(dataBox);

    for (let y = 0; y < 3; y++) {
        prochaineSeanceContent = document.createElement("div");
        prochaineSeanceContent.className = "prochaineSeanceContent";
        dataBox.appendChild(prochaineSeanceContent);

        prochaineSeanceDataT = document.createElement("p");
        prochaineSeanceDataT.className = "prochaineSeanceDataT";
        if (y == 0) prochaineSeanceDataT.innerText = "intensité"
        else if (y == 1) prochaineSeanceDataT.innerText = "Durée"
        else if (y == 2) prochaineSeanceDataT.innerText = "stress"
        prochaineSeanceContent.appendChild(prochaineSeanceDataT);

        prochaineSeanceData = document.createElement("p");
        prochaineSeanceData.className = "prochaineSeanceData";
        if (y == 0) {
            prochaineSeanceData.innerText = "0%";
            prochaineSeanceData.id = "Intensite";
        }
        else if (y == 1) {
            prochaineSeanceData.innerText = "00:00:00";
            prochaineSeanceData.id = "duree";
        }
        else if (y == 2) {
            prochaineSeanceData.innerText = "0";
            prochaineSeanceData.id = "stress";
        }
        prochaineSeanceContent.appendChild(prochaineSeanceData);
    }

    document.getElementById("duree").innerText = getDuree(seance.seance);
    document.getElementById("Intensite").innerText = getIntensite(seance.seance) + "%";
    document.getElementById("stress").innerText = getStress(seance.seance);

    function getDuree(seance) {
        duree = 0
        for (let i = 0; i < seance.length; i++) {
            if (seance[i].typeValue != "startSerie" && seance[i].typeValue != "endSerie") {
                duree += seance[i].value;
            }
        }
    
        return get00i00i00(duree);
    }
    
    function getIntensite(seance) {
        Intensite = 0
        for (let i = 0; i < seance.length; i++) {
            if (seance[i].typeValue != "startSerie" && seance[i].typeValue != "endSerie") {
                Intensite +=  ( ( seance[i].value * ( seance[i].Z * ( 1 / 7 )) ) * 100 ) / duree ;
            }
        }
        Intensite = Math.round(Intensite);
    
        return Intensite;
    }
    
    function getStress(seance) {
        stress = 0
        Intensite = getIntensite(seance);
        for (let i = 0; i < seance.length; i++) {
            if (seance[i].typeValue != "startSerie" && seance[i].typeValue != "endSerie") {
                stress += ( Math.pow(Intensite, 0.41) * seance[i].value ) / 180;
            }
        }
        stress = Math.round(stress);
    
        return stress;
    }

    postGraphSeance(seance, seanceOtherInfo);
}