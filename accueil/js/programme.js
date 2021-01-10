function postProgramme() {
    if (localStorage.programme && localStorage.programme.length > 2) postPRG()
    else postSuggestionPRG()

    function postPRG() {
        let date = new Date();
        aujourdHuiDayNb = {dayNb: getDayNB365(date.getDate(), date.getMonth() + 1, date.getFullYear()), year: date.getFullYear()}
        Programme = JSON.parse(localStorage.programme);

        programmeActif = "";
        programmeAVenir = new Array();

        for (let i = 0; i < Programme.length; i++) {
            thisProgramme = Programme[i];
            endPrg =  getEndPrgDay(i);
            startPrg = getStartPrgDay(i);

            if (startPrg.year == endPrg.year) {
                if (aujourdHuiDayNb.dayNb >= startPrg.dayNb && aujourdHuiDayNb.dayNb <= endPrg.dayNb) {
                    programmeAVenir.push({programme: thisProgramme, index: i});
                }
            }
            else {
                if (aujourdHuiDayNb.year == startPrg.year) {
                    if (aujourdHuiDayNb.dayNb >= startPrg.dayNb) programmeActif = {programme: thisProgramme, index: i};
                }
                else if (aujourdHuiDayNb.year == endPrg.year) {
                    if (aujourdHuiDayNb.dayNb <= endPrg.dayNb) programmeActif = {programme: thisProgramme, index: i};
                }
                else if (aujourdHuiDayNb.year > startPrg.year && aujourdHuiDayNb.year < endPrg.year) {
                    alert()
                    programmeActif = {programme: thisProgramme, index: i};
                }
            }

            if (!programmeActif.programme) {
                if (aujourdHuiDayNb.year <= startPrg.year) programmeAVenir.push({programme: thisProgramme, index: i});
            }

            console.log(programmeActif)
            console.log(programmeAVenir)
        }

        if (programmeActif.programme) postPRGActif(programmeActif)
        else if (programmeAVenir.length > 0) postPRGAvenir(programmeAVenir)
        else postSuggestionPRG()

        function postPRGActif(programmeActif) {
            console.log(programmeActif)
            document.getElementById("PROGRAMMES_BOX").className = "case1 PROGRAMMES_BOX1";

            document.getElementById("PROGRAMMES_BOX").innerHTML = '<h2 id="programmeT">PROGRAMME ACTIF</h2>'+
            '<div id="programmeActif">'+
                `<h3 id="programmeActifT">${programmeActif.programme.nom}</h3>`+
                '<button id="programmeActifBtn">ACCÉDER AU PROGRAMME</button>'+
            '</div>';
        }

        function postPRGAvenir(programmeAVenir) {
            document.getElementById("PROGRAMMES_BOX").className = "case1 PROGRAMMES_BOX1";

            document.getElementById("PROGRAMMES_BOX").innerHTML = '<h2 id="programmeT">PROGRAMME À VENIR</h2>'+
            '<div id="programmeListBox"> <div id="programmeList"></div> </div>';

            for (let i = 0; i < programmeAVenir.length; i++) {
                var programmeListContent = document.createElement("div")
                programmeListContent.className = "programmeListContent";
                programmeListContent.onclick = function() {
                    window.location.href = `/programme/tablBrdPrg/tablBrdPrg.html?${programmeAVenir[i].index}`;
                }
                document.getElementById("programmeList").append(programmeListContent);

                var programmeListContentT = document.createElement("h3")
                programmeListContentT.className = "programmeListContentT";
                programmeListContentT.innerText = programmeAVenir[i].programme.nom.toLowerCase();
                programmeListContent.append(programmeListContentT);

                var programmeListContentDate = document.createElement("h3")
                programmeListContentDate.className = "programmeListContentDate";
                programmeListContentDate.innerText = programmeAVenir[i].programme.dateCourse.toLowerCase();
                programmeListContent.append(programmeListContentDate);
            }
        }
    }

    function postSuggestionPRG() {
        document.getElementById("PROGRAMMES_BOX").className = "case2 PROGRAMMES_BOX2";

        document.getElementById("PROGRAMMES_BOX").innerHTML = '<h2 id="suggestionPRGT">DES PROGRAMMES POUR REALISER VOS OBJECTIFS</h2>'+
            '<button id="suggestionPRGBtn">DEMARER UN PROGRAMME</button>';
        $("#suggestionPRGBtn").click(function () {window.location.href = '../programme/programme.html'});
    }
}