function updateTempsPRG(tps) {
    let entrainementProgramme = Number(programme[index].entrainementProgramme);
            
    iSem = getISem()[0];
    tpsIsem = getISem()[1];

    for (let i = 0; i < PRG[index].length; i++) {
        End = new Array();
        for (let y = 0; y < entrainementProgramme - iSem[i]; y++) {
            End[y] = 0;
        }

        while (tps[i] - tpsIsem[i] > End.reduce(reducer)) {
            for (let y = 0; y < entrainementProgramme - iSem[i]; y++) {
                End[y] += Math.floor(Math.random() * (tps[i] / 40));
            }
        }

        EndIndex = 0;
        if (PRG[index][i].lundi.typeSeance == "Endurance") {
            PRG[index][i].lundi.seance[0].value = End[EndIndex] * 60;
            EndIndex++;
        }

        if (PRG[index][i].mardi.typeSeance == "Endurance") {
            PRG[index][i].mardi.seance[0].value = End[EndIndex] * 60;
            EndIndex++;
        }

        if (PRG[index][i].mercredi.typeSeance == "Endurance") {
            PRG[index][i].mercredi.seance[0].value = End[EndIndex] * 60;
            EndIndex++;
        }

        if (PRG[index][i].jeudi.typeSeance == "Endurance") {
            PRG[index][i].jeudi.seance[0].value = End[EndIndex] * 60;
            EndIndex++;
        }

        if (PRG[index][i].vendredi.typeSeance == "Endurance") {
            PRG[index][i].vendredi.seance[0].value = End[EndIndex] * 60;
            EndIndex++;
        }

        if (PRG[index][i].samedi.typeSeance == "Endurance") {
            PRG[index][i].samedi.seance[0].value = End[EndIndex] * 60;
            EndIndex++;
        }

        if (PRG[index][i].dimanche.typeSeance == "Endurance") {
            PRG[index][i].dimanche.seance[0].value = End[EndIndex] * 60;
            EndIndex++;
        }
    }

    localStorage.PRG = JSON.stringify(PRG);
}

function updateISemPRG(iSem, tps) {
    let semaines = getSemaines(programme[index].type);
    let etapeI = getEtapeI(iSem, semaines);
    let TypeExo = new Array();
    let Level = new Array();
    for (let i = 0; i < etapeI.length; i++) {
        TypeExo[i] = getType(semaines[etapeI[i].i].name)
        Level[i] = getAddLevel(semaines[etapeI[i].i].length, iSem[[etapeI[i].indexStart]], TypeExo[i], 3)
    }

    semI = new Array();
    for (let i = 0; i < etapeI.length; i++) {
        semI[i] = editSemI(etapeI[i].length, Level[i], TypeExo[i], tps.slice(etapeI[i].indexStart, etapeI[i].indexEnd + 1), iSem, etapeI[i].indexStart);
    }

    function getEtapeI(iSem, semaines) {
        EtapeI = new Array();

        for (let i = 0; i < semaines.length; i++) {
            if (semaines[i].name != "récupération" && semaines[i].name != "endurance" && semaines[i].name != "affutage") {
                Index = 0
                for (let y = 0; y < i; y++) {
                    Index += semaines[y].length;
                }
                EtapeI.push({name: semaines[i].name, length: semaines[i].length, indexStart: Index, indexEnd: Index + semaines[i].length - 1, i: i})
            }
        }

        return EtapeI;
    }

    function getType(name) {
        let typeExo;
        switch (name) {
            case "FTP":
                switch (programme[0].type) {
                    case "Criterium":
                        typeExo = "sweetspot";
                        break;
        
                        case "Endurance":
                            typeExo = "sweetspot";
                            break;
        
                        case "GrandPrix":
                            typeExo = "sweetspot";
                            break;
        
                        case "GranFondo":
                            typeExo = "sweetspot";
                            break;
        
                        case "TimeTrial":
                            typeExo = "sweetspot";
                            break;
                    }
                    break;
        
            case "seuil":
                switch (programme[0].type) {
                    case "Criterium":
                        typeExo = "seuil5_5";
                        break;
        
                    case "Endurance":
                        typeExo = "seuil5_5";
                        break;
        
                    case "GrandPrix":
                        typeExo = "seuil5_5";
                        break;
        
                    case "GranFondo":
                        typeExo = "seuil5_5";
                        break;
        
                    case "TimeTrial":
                        typeExo = "seuil5_5";
                        break;
                }
                break;
        
            case "PMA":
                switch (programme[0].type) {
                    case "Criterium":
                        typeExo = "PMA30_30";
                        break;
        
                    case "GrandPrix":
                        typeExo = "PMA30_30";
                        break;
        
                    case "GranFondo":
                        typeExo = "PMA3_3";
                        break;

                    case "TimeTrial":
                        typeExo = "PMA1_1";
                        break;
                }
                break;
        }

        return typeExo;
    }
}