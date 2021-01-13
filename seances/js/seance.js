$(document).ready(function () {
    PostBaseSeances();
    postTopNav();
})

function PostBaseSeances() {
    $("#seance").empty();
    document.getElementById("seance").style.flexDirection = "row";

    for (let i = 0; i < seances.length; i++) {
        var seance = document.createElement("div");
        seance.className = "seanceBase";
        document.getElementById("seance").appendChild(seance);

        var seanceT = document.createElement("div");
        seanceT.className = "seanceBaseT";
        seanceT.innerText = seances[i].titre;
        seance.appendChild(seanceT);

        var seanceIMGBox = document.createElement("div");
        seanceIMGBox.className = "seanceIMGBox";
        seance.appendChild(seanceIMGBox);

        var seanceIMG = document.createElement("img");
        seanceIMG.className = "seanceIMG";
        seanceIMG.src = seances[i].imgHref;
        seanceIMGBox.appendChild(seanceIMG);

        var seanceZoneBox = document.createElement("div");
        seanceZoneBox.className = "seanceZoneBox";
        seance.appendChild(seanceZoneBox);

        var seanceZone = document.createElement("div");
        seanceZone.className = "seanceZone";
        seanceZone.innerText = "ZONE " + seances[i].zone;
        seanceZoneBox.appendChild(seanceZone);

        seance.onclick = function () {
            window.location.href = `/seances/viewSeance/viewSeance.html?${i}`;
        }
    }
}

function PostSearchSeances() {
    $("#seance").empty();
    document.getElementById("seance").style.flexDirection = "column";
}

function postTopNav() {
    option = document.getElementsByClassName("option");
    main = document.getElementsByClassName("main");
    ActifNav = document.getElementById("ActifNav");
    HistoriqueNav = document.getElementById("HistoriqueNav");
    NouveauNav = document.getElementById("NouveauNav");
    
    $(document).ready(function () {
        afterUrl = getAfterUrl();
        if (afterUrl = "nouveau") {
            $("#Nouveau").show();
            document.getElementById("NouveauNav").style.borderBottom = "2px solid rgb(0, 234, 170)";
        }
        else {
            for (let i = 0; i < main.length; i++) {
                $(`#${main[i].id}`).hide();
            }
        
            if (localStorage.seance && localStorage.seance.length > 2) mainState("ActifNav");
            else mainState("NouveauNav");
        }
    })
    
    $(".option").click(function () {
        btnActiv()
        $(this).css({"border-bottom": "2px solid rgb(0, 234, 170)"});
        ThisId = $(this)[0].id;
    
        mainState(ThisId)
    })
    
    function mainState(elementId) {
        for (let i = 0; i < main.length; i++) {
            $(`#${main[i].id}`).show();
        }
    
        for (let i = 0; i < option.length; i++) {
            if (option[i].id != elementId) {
                $(`#${main[i].id}`).hide();
            }        
        }
    
        document.getElementById(elementId).style.borderBottom = "2px solid rgb(0, 234, 170)";
        if (elementId == "ActifNav") postSeancesActifList()
        else if (elementId == "HistoriqueNav") postSeancesHistoriqueList()
    }
    
    function btnActiv() {
        for (let i = 0; i < option.length; i++) {
            option[i].style.borderBottom = "";
        }
    }
}