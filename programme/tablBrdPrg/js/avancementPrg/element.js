function postMainAvancement(type) {
    let etape = getSemaines(type);

    document.getElementById("prgT").innerHTML = type.toUpperCase();

    for (let i = 0; i < etape.length; i++) {
        let avancementBar = document.createElement("div");
        avancementBar.className = "avancementBar";
        document.getElementById("avancementBar").appendChild(avancementBar);

        let avancementRound = document.createElement("div");
        avancementRound.className = "avancementRound";
        avancementRound.onclick = function () {
            document.getElementById("avancementLongueurP").innerText = etape[i].length + " SEMAINE(S)"
            if (etape[i].name == "endurance") {
                document.getElementById("avancementDescriptionT").innerText = "Endurance";
                document.getElementById("avancementDescriptionP").innerText = "il est temps de poser les bases, cette période est constitué de longs" +
                " entrainements peu intenses pour augmenter vos capacités d'endurance et de récupération.";
            }
            else if (etape[i].name == "récupération") {
                document.getElementById("avancementDescriptionT").innerText = "Récupération";
                document.getElementById("avancementDescriptionP").innerText = "il est temps de récupérer de vos éfforts pour mieux encaisser les" + 
                " prochains.";
            }
            else if (etape[i].name == "FTP") {
                document.getElementById("avancementDescriptionT").innerText = "FTP";
                document.getElementById("avancementDescriptionP").innerText = "la FTP correspond à la puissance maximale sur 1h, le travail à FTP" +
                " permet d'améliorer celle-ci et de performer sur des contre-la-montre de plus de 20 minutes.";
            }
            else if (etape[i].name == "seuil") {
                document.getElementById("avancementDescriptionT").innerText = "Seuil";
                document.getElementById("avancementDescriptionP").innerText = "le seuil correspond à la puissance maximale sur 20min, le travail au" 
                " seuil permet d'améliorer celui-ci et de performer sur des contre-la-montre de 20 minutes.";
            }
            else if (etape[i].name == "PMA") {
                document.getElementById("avancementDescriptionT").innerText = "PMA";
                document.getElementById("avancementDescriptionP").innerText = "la PMA correspond à la puissance maximale sur 5min, le travail à PMA" +
                " permet d'améliorer celle-ci et de performer sur des courses de courte durée.";
            }
            else if (etape[i].name == "affutage") {
                document.getElementById("avancementDescriptionT").innerText = "Affutage";
                document.getElementById("avancementDescriptionP").innerText = "l'Affutage est la phase finale de votre programme, elle permet de" +
                " maximiser vos performances pour les échéances à venir.";
            }
        };
        avancementBar.appendChild(avancementRound);
    }

    let etapeActuel = getEtapeActuel(etape);
    document.getElementsByClassName("avancementRound")[etapeActuel[1]].style.backgroundColor = "rgb(0, 234, 170)";
    switch (etapeActuel[0]) {
        case "endurance":
            document.getElementById("avancementDescriptionT").innerText = "Endurance";
            document.getElementById("avancementDescriptionP").innerText = "il est temps de poser les bases, cette période est constitué de longs" +
            " entrainements peu intenses pour augmenter vos capacités d'endurance et de récupération.";
            for (let y = 0; y < etape.length; y++) {
                if (etape[y].name == "endurance") document.getElementById("avancementLongueurP").innerText = etape[y].length + " SEMAINE(S)"
            }
            break;
        case "récupération":
            document.getElementById("avancementDescriptionT").innerText = "Récupération";
            document.getElementById("avancementDescriptionP").innerText = "il est temps de récupérer de vos éfforts pour mieux encaisser les" + 
            " prochains.";
            for (let y = 0; y < etape.length; y++) {
                if (etape[y].name == "récupération") document.getElementById("avancementLongueurP").innerText = etape[y].length + " SEMAINE(S)"
            }
            break;
        case "FTP":
            document.getElementById("avancementDescriptionT").innerText = "FTP";
            document.getElementById("avancementDescriptionP").innerText = "la FTP correspond à la puissance maximale sur 1h, le travail à FTP" +
            " permet d'améliorer celle-ci et de performer sur des contre-la-montre de plus de 20 minutes.";
            for (let y = 0; y < etape.length; y++) {
                if (etape[y].name == "FTP") document.getElementById("avancementLongueurP").innerText = etape[y].length + " SEMAINE(S)"
            }
            break;
        case "seuil":
            document.getElementById("avancementDescriptionT").innerText = "Seuil";
            document.getElementById("avancementDescriptionP").innerText = "le seuil correspond à la puissance maximale sur 20min, le travail au" 
            " seuil permet d'améliorer celui-ci et de performer sur des contre-la-montre de 20 minutes.";
            for (let y = 0; y < etape.length; y++) {
                if (etape[y].name == "seuil") document.getElementById("avancementLongueurP").innerText = etape[y].length + " SEMAINE(S)"
            }
            break;
        case "PMA":
            document.getElementById("avancementDescriptionT").innerText = "PMA";
            document.getElementById("avancementDescriptionP").innerText = "la PMA correspond à la puissance maximale sur 5min, le travail à PMA" +
            " permet d'améliorer celle-ci et de performer sur des courses de courte durée.";
            for (let y = 0; y < etape.length; y++) {
                if (etape[y].name == "PMA") document.getElementById("avancementLongueurP").innerText = etape[y].length + " SEMAINE(S)"
            }
            break;
        case "affutage":
            document.getElementById("avancementDescriptionT").innerText = "Affutage";
            document.getElementById("avancementDescriptionP").innerText = "l'Affutage est la phase finale de votre programme, elle permet de" +
            " maximiser vos performances pour les échéances à venir.";
            for (let y = 0; y < etape.length; y++) {
                if (etape[y].name == "affutage") document.getElementById("avancementLongueurP").innerText = etape[y].length + " SEMAINE(S)"
            }
            break;
    }

    avancementJquery();
}

function checkTest() {
    if (
        programme.equipement.HT == true && programme.equipement.cardio == true && programme.equipement.power == true ||
        programme.equipement.HT == false && programme.equipement.cardio == true && programme.equipement.power == true ||
        programme.equipement.HT == true && programme.equipement.cardio == false && programme.equipement.power == true ||
        programme.equipement.HT == true && programme.equipement.cardio == true && programme.equipement.power == false ||
        programme.equipement.HT == true && programme.equipement.cardio == false && programme.equipement.power == false ||
        programme.equipement.HT == false && programme.equipement.cardio == true && programme.equipement.power == false ||
        programme.equipement.HT == false && programme.equipement.cardio == false && programme.equipement.power == true
    ) {
        if (localStorage.poids) {
            if ( JSON.parse(localStorage.poids) > 0 ) return true
            else if ( JSON.parse(localStorage.fcMax) > 0 ) return true
            else if ( JSON.parse(localStorage.fcRepos) > 0 ) return true
            else if ( JSON.parse(localStorage.PMA) > 0 ) return true
            else if ( JSON.parse(localStorage.seuil) > 0 ) return true
            else if ( JSON.parse(localStorage.ftp) > 0 ) return true
            else return false;
        }
        else return false;
    }
    else return true;
}