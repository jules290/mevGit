function postListObjectifs() {
    $("#listContenair").empty();
    if (localStorage.objectif) {
        for (let i = 0; i < JSON.parse(localStorage.objectif).length; i++) {
            let data = JSON.parse(localStorage.objectif)[i];
            console.log(data)

            IPair = checkPair(i)

            let objectif = document.createElement("div");
            objectif.className = "objectif";
            if (IPair == true) objectif.style.backgroundColor = "rgb(244, 244, 244)"
            else objectif.style.backgroundColor = "rgb(239, 239, 239)"
            document.getElementById("listContenair").appendChild(objectif);


            let objectifSegment = document.createElement("div");
            objectifSegment.className = "objectifCase";
            objectif.appendChild(objectifSegment);

            let objectifSegmentTitle = document.createElement("p");
            objectifSegmentTitle.className = "objectifCaseTitle";
            objectifSegmentTitle.innerText = dataText(data.segment.segmentType, data.segment.segmentValue)
            objectifSegment.appendChild(objectifSegmentTitle);


            let objectifType = document.createElement("div");
            objectifType.className = "objectifCase";
            objectif.appendChild(objectifType);

            let objectifTypeTitle = document.createElement("p");
            objectifTypeTitle.className = "objectifCaseTitle";
            objectifTypeTitle.innerText = data.type.TypeName;
            objectifType.appendChild(objectifTypeTitle);


            let objectifValeur = document.createElement("div");
            objectifValeur.className = "objectifCase";
            objectif.appendChild(objectifValeur);

            let objectifValeurTitle = document.createElement("p");
            objectifValeurTitle.className = "objectifCaseTitle";
            objectifValeurTitle.innerText = dataText(data.type.TypeName, data.type.TypeValue);
            objectifValeur.appendChild(objectifValeurTitle);


            let objectifComplete = document.createElement("div");
            objectifComplete.className = "objectifCase";
            objectif.appendChild(objectifComplete);
        }
    }
    else {
        let alertMessage = document.createElement("div");
        alertMessage.className = "alertMessage";
        document.getElementById("listContenair").appendChild(alertMessage);

        let alertMessageTitle = document.createElement("p");
        alertMessageTitle.className = "alertMessageTitle";
        alertMessageTitle.innerText = "Aucun objectifs";
        alertMessage.appendChild(alertMessageTitle);
    }
}

function checkPair(nbr) {
    if(nbr%2 == 0) {
        return true; 
    }
    else {
        return false; 
    }
}

function dataText(dataType, dataValue) {
    switch (dataType) {
        case "Annuelle":
            return "Annuelle";
            break;

        case "Activité":
            return "Activité";
            break;

        case "Temps":
            valeur = getTempsUnits(dataValue);
            return valeur;
            break;

        case "Distance":
            valeur =  getDistanceUnits(dataValue);
            return valeur;
            break;

        case "Vitesse":
            valeur =  dataValue + "km/h";
            return valeur;
            break;

        case "Puissance":
            valeur =  dataValue + "w";
            return valeur;
            break;
    }
}

function getTempsUnits(data) {
    temps = data;
    if (temps > 3600) {
        h = Math.round(temps / 3600);
        temps = temps % (3600 * h);
        min = Math.round(temps / 60);
        temps = temps % (60 * min);
        sec = temps;
        if (sec > 0) return h + "h " + min + "min " + sec + "sec";
        else if (min > 0) return h + "h " + min + "min";
        else return h + "h";
    }
    else if (temps > 60) {
        min = Math.round(temps / 60);
        temps = temps % (60 * min);
        sec = temps;
        if (sec > 0) return min + "min " + sec + "sec";
        else return min + "min";
    }
    else {
        sec = temps;
        return sec + "sec";
    }
}

function getDistanceUnits(data) {
    distance = data;
    if (distance > 1000) {
        return (Math.round( (distance / 1000) * 100) / 100) + "km";
    }
    else {
        return distance + "m";
    }
}