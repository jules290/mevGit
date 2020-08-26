$("#addValidation").click(function () {
    let check = checked();

    if (check == true) {
        let segment = getSegment();
        let type = getType();

        let objectif = [{
            segment: segment,
            type: type,
        }]

        if (localStorage.objectif) {
            localStorage.objectif = JSON.stringify(JSON.parse(localStorage.objectif).concat(objectif));
        }
        else localStorage.objectif = JSON.stringify(objectif);

        window.location.reload();
    }
})

function getSegment() {
    let SegmentSelectValue = document.getElementById("SegmentSelect").value;

    switch (SegmentSelectValue) {
        case "Annuelle":
            segmentType = "Annuelle";
            segmentValue = "-";
            break;

        case "Activité":
            segmentType = "Activité";
            segmentValue = "-";
            break;

        case "Temps":
            segmentType = "Temps";
            let TempsValue = document.getElementById("SegmentTemps").value;
            let TempsUnite = document.getElementById("SegmentTempsSelect").value;
            switch (TempsUnite) {
                case "sec":
                    segmentValue = Number(TempsValue);
                    break;

                case "min":
                    segmentValue = TempsValue * 60;
                    break;

                case "h":
                    segmentValue = TempsValue * 3600;
                    break;
            }
            break;

        case "Distance":
            segmentType = "Distance";
            let DistanceValue = document.getElementById("SegmentDistance").value;
            let DistanceUnite = document.getElementById("SegmentDistanceSelect").value;
            switch (DistanceUnite) {
                case "km":
                    segmentValue = DistanceValue * 1000;
                    break;

                case "m":
                    segmentValue = Number(DistanceValue);
                    break;
            }
            break;
    }
    let segment = {
        "segmentType": segmentType,
        "segmentValue": segmentValue,
    }

    return segment;
}

function getType() {
    let typeSelectValue = document.getElementById("typeSelect").value;

    switch (typeSelectValue) {
        case "Distance":
            TypeName = "Distance";
            let DistanceValue = document.getElementById("typeDistance").value;
            let DistanceUnite = document.getElementById("typeDistanceSelect").value;
            switch (DistanceUnite) {
                case "km":
                    TypeValue = DistanceValue * 1000;
                    break;

                case "m":
                    TypeValue = Number(DistanceValue);
                    break;
            }
            break;

        case "Dénivelé":
            TypeName = "Dénivelé";
            let DeniveleValue = document.getElementById("typeDenivele").value;
            TypeValue = Number(DeniveleValue);
            break;

        case "Temps":
            TypeName = "Temps";
            let TempsValue = document.getElementById("typeTemps").value;
            let TempsUnite = document.getElementById("typeTempsSelect").value;
            switch (TempsUnite) {
                case "sec":
                    TypeValue = Number(TempsValue);
                    break;

                case "min":
                    TypeValue = TempsValue * 60;
                    break;

                case "h":
                    TypeValue = TempsValue * 3600;
                    break;
            }
            break;

        case "Vitesse":
            TypeName = "Vitesse";
            let VitesseValue = document.getElementById("typeVitesse").value;
            TypeValue = Number(VitesseValue);
            break;

        case "Puissance":
            TypeName = "Puissance";
            let PuissanceValue = document.getElementById("typePuissance").value;
            TypeValue = Number(PuissanceValue);
            break;
    }
    let Type = {
        "TypeName": TypeName,
        "TypeValue": TypeValue,
    }

    return Type;
}