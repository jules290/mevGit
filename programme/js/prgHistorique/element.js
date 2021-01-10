function postHistoriqueHeader() {
    listHeader = document.createElement("div");
    listHeader.className = "listHeader";
    document.getElementById("Historique").appendChild(listHeader);

    prgNameHeader = document.createElement("div");
    prgNameHeader.className = "prgNameHeader prgHeader";
    prgNameHeader.innerText = "Nom";
    listHeader.appendChild(prgNameHeader);

    prgTypeHeader = document.createElement("div");
    prgTypeHeader.className = "prgTypeHeader prgHeader";
    prgTypeHeader.innerText = "Type";
    listHeader.appendChild(prgTypeHeader);

    prgLongueurHeader = document.createElement("div");
    prgLongueurHeader.className = "prgLongueurHeader prgHeader";
    prgLongueurHeader.innerText = "Longueur";
    listHeader.appendChild(prgLongueurHeader);

    prgEntrainementHeader = document.createElement("div");
    prgEntrainementHeader.className = "prgEntrainementHeader prgHeader";
    prgEntrainementHeader.innerText = "Entrainement";
    listHeader.appendChild(prgEntrainementHeader);

    prgDebutHeader = document.createElement("div");
    prgDebutHeader.className = "prgDebutHeader prgHeader";
    prgDebutHeader.innerText = "Début";
    listHeader.appendChild(prgDebutHeader);

    prgCourseHeader = document.createElement("div");
    prgCourseHeader.className = "prgCourseHeader prgHeader";
    prgCourseHeader.innerText = "Course";
    listHeader.appendChild(prgCourseHeader);
}

function postListHistorique() {
    Programme = JSON.parse(localStorage.programme);
    aujourdHui = getAujourdHui();
    
    for (let i = 0; i < Programme.length; i++) {
        dateCourse = {
            day: Number(Programme[i].dateCourse.slice(0, 2)),
            month: Number(Programme[i].dateCourse.slice(3, 5)),
            year: Number(Programme[i].dateCourse.slice(6, 10))};

        actif = false;
        if (dateCourse.year > aujourdHui.year) actif = true
        else if (dateCourse.year == aujourdHui.year) {
            if (dateCourse.month > aujourdHui.month) actif = true
            else if (dateCourse.month == aujourdHui.month) {
                if (dateCourse.day >= aujourdHui.day) actif = true
            }
        }

        if (actif == false) {
            programme = document.createElement("a");
            programme.className = "programme";
            programme.href = `./tablBrdPrg.html?${i}`
            document.getElementById("Historique").appendChild(programme);
        
            prgNameProgramme = document.createElement("div");
            prgNameProgramme.className = "prgNameProgramme prgProgramme";
            prgNameProgramme.innerText = Programme[i].nom;
            programme.appendChild(prgNameProgramme);
        
            prgTypeProgramme = document.createElement("div");
            prgTypeProgramme.className = "prgTypeProgramme prgProgramme";
            prgTypeProgramme.innerText = Programme[i].type;
            programme.appendChild(prgTypeProgramme);
        
            prgLongueurProgramme = document.createElement("div");
            prgLongueurProgramme.className = "prgLongueurProgramme prgProgramme";
            prgLongueurProgramme.innerText = Programme[i].longueurProgramme + " semaines";
            programme.appendChild(prgLongueurProgramme);
        
            prgEntrainementProgramme = document.createElement("div");
            prgEntrainementProgramme.className = "prgEntrainementProgramme prgProgramme";
            prgEntrainementProgramme.innerText = Programme[i].entrainementProgramme + "/semaine";
            programme.appendChild(prgEntrainementProgramme);
        
            prgDebutProgramme = document.createElement("div");
            prgDebutProgramme.className = "prgDebutProgramme prgProgramme";
            date = getDateWithDayNb(getProgrammeStart(i).dayNb, getProgrammeStart(i).year);
            prgDebutProgramme.innerText = date.day + "/" + date.month + "/" + date.year;
            programme.appendChild(prgDebutProgramme);
        
            prgCourseProgramme = document.createElement("div");
            prgCourseProgramme.className = "prgCourseProgramme prgProgramme";
            prgCourseProgramme.innerText = Programme[i].dateCourse;
            programme.appendChild(prgCourseProgramme);
        }
    }

    if (document.getElementsByClassName("programme").length == 0) {
        errorMessage = document.createElement("p");
        errorMessage.className = "errorMessageList";
        errorMessage.innerText = "aucun programme dans l'historique";
        document.getElementById("Historique").appendChild(errorMessage);
    }
}