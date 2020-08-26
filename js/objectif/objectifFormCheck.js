function checked() {
    checkSegmentValue = checkedSegmentValue()
    checkTypeValue = checkedTypeValue()

    if (checkSegmentValue == true && checkTypeValue == true) return true
    else return false;

    function checkedSegmentValue() {
        let SegmentSelectValue = document.getElementById("SegmentSelect").value;

        switch (SegmentSelectValue) {
            case "Annuelle":
                return true;
                break;

            case "Activité":
                return true;
                break;

            case "Temps":
                let tempsValue = document.getElementById("SegmentTemps").value;
                if (tempsValue) return true
                else return false;
                break;

            case "Distance":
                let distanceValue = document.getElementById("SegmentDistance").value;
                if (distanceValue) return true
                else return false;
                break;
        }
    }

    function checkedTypeValue() {
        let typeSelectValue = document.getElementById("typeSelect").value;
        
        switch (typeSelectValue) {
            case "Distance":
                let distanceValue = document.getElementById("typeDistance").value;
                if (distanceValue) return true
                else return false;
                break;

            case "Dénivelé":
                let deniveleValue = document.getElementById("typeDenivele").value;
                if (deniveleValue) return true
                else return false;
                break;

            case "Temps":
                let tempsValue = document.getElementById("typeTemps").value;
                if (tempsValue) return true
                else return false;
                break;

            case "Vitesse":
                let vitesseValue = document.getElementById("typeVitesse").value;
                if (vitesseValue) return true
                else return false;
                break;

            case "Puissance":
                let puissanceValue = document.getElementById("typePuissance").value;
                if (puissanceValue) return true
                else return false;
                break; 
        }
    }
}