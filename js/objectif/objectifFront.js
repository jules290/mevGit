const switchtState = document.getElementById("switchState");
let d = new Date();
let annee = d.getFullYear();
let mois = d.getMonth() + 1;
let date = d.getDate();

$(document).ready(function () {
    let positionAfter = window.location.href.indexOf("code=") + 5;
    if (positionAfter != -1) {
        objectifState("list");
    }
    else {
        
    }
})

$("#switch").click(function () {
    if (switchtState.style.marginLeft == "" || switchtState.style.marginLeft == "-200px") {
        switchtState.style.marginLeft = "200px";
        switchtState.style.borderRadius = "5px";
        switchtState.style.borderTopLeftRadius = "0px";
        switchtState.style.borderBottomLeftRadius = "0px";
        document.getElementById("listObj").style.color = "rgb(41, 41, 41)";
        document.getElementById("addObj").style.color = "rgb(255, 255, 255)";
        objectifState("add");
    }
    else {
        switchtState.style.marginLeft = "-200px";
        switchtState.style.borderRadius = "5px";
        switchtState.style.borderTopRightRadius = "0px";
        switchtState.style.borderBottomRightRadius = "0px";
        document.getElementById("listObj").style.color = "rgb(255, 255, 255)";
        document.getElementById("addObj").style.color = "rgb(41, 41, 41)";
        objectifState("list");
    }
})

function objectifState(state) {
    if (state == "list") {
        $("#list").show();
        $("#add").hide();
    }
    else if (state == "add") {
        $("#add").show();
        $("#list").hide();

        $("#SegmentTempsSelectBoxContenair").hide();
        $("#SegmentDistanceSelectBoxContenair").hide();

        $("#typeDistanceSelectBoxContenair").hide();
        $("#typeDeniveleSelectBoxContenair").hide();
        $("#typeTempsSelectBoxContenair").hide();
        $("#typeVitesseSelectBoxContenair").hide();
        $("#typePuissanceSelectBoxContenair").hide();

        $("#DateInputBox").hide();
        $("#dateCloseBox").hide();

        setMinData();
    }
}

$("#SegmentSelect").change(function () {
    $("#SegmentTempsSelectBoxContenair").hide()
    $("#SegmentDistanceSelectBoxContenair").hide()

    $("#TypeOptVitesse").show();
    $("#TypOptPuissance").show();
    let valeur = document.getElementById("SegmentSelect").value;

    if (valeur == "Annuelle") {
        $("#TypeOptVitesse").hide();
        $("#TypOptPuissance").hide();
    }
    else if (valeur == "Activité") {
        
    }
    else if (valeur == "Temps") {
        $("#SegmentTempsSelectBoxContenair").show();
    }
    else if (valeur == "Distance") {
        $("#SegmentDistanceSelectBoxContenair").show();
    }
})

$("#typeSelect").change(function () {
    let valeur = document.getElementById("typeSelect").value;

    $("#typeDistanceSelectBoxContenair").hide();
    $("#typeDeniveleSelectBoxContenair").hide();
    $("#typeTempsSelectBoxContenair").hide();
    $("#typeVitesseSelectBoxContenair").hide();
    $("#typePuissanceSelectBoxContenair").hide();

    $("#SegmentOptAnnuelle").show();

    if (valeur == "Distance") {
        $("#typeDistanceSelectBoxContenair").show();
    }
    else if (valeur == "Dénivelé") {
        $("#typeDeniveleSelectBoxContenair").show();
    }
    else if (valeur == "Temps") {
        $("#typeTempsSelectBoxContenair").show();
    }
    else if (valeur == "Vitesse") {
        $("#typeVitesseSelectBoxContenair").show();
        $("#SegmentOptAnnuelle").hide();
    }
    else if (valeur == "Puissance") {
        $("#typePuissanceSelectBoxContenair").show();
    }
})

$("#showDateInput").click(function () {
    $("#showDateInput").hide(300);
    setTimeout(() => {
        $("#DateInputBox").show(300);
        $("#dateCloseBox").show(300);
    }, 300);
})

$("#dateCloseBox").click(function () {
    $("#DateInputBox").hide(300);
    $("#dateCloseBox").hide(300);
    setTimeout(() => {
        $("#showDateInput").show(300);
    }, 300);
})

function getAujourdHui() {
    d = new Date();
    annee = d.getFullYear();
    mois = d.getMonth() + 1;
    date = d.getDate();
    if(annee == 2020) {
        if(mois == 1) { return 1 + date - 1 }
        else if(mois == 2) { return 32 + date - 1 }
        else if(mois == 3) { return 61 + date - 1 }
        else if(mois == 4) { return 92 + date - 1 }
        else if(mois == 5) { return 122 + date - 1 }
        else if(mois == 6) { return 153 + date - 1 }
        else if(mois == 7) { return 183 + date - 1 }
        else if(mois == 8) { return 214 + date - 1 }
        else if(mois == 9) { return 245 + date - 1 }
        else if(mois == 10) { return 275 + date - 1 }
        else if(mois == 11) { return 306 + date - 1 }
        else if (mois == 12) { return 336 + date - 1 }  
    }
}

function addZero(number) {
    if (number < 10) {
        return "0" + number;
    }
    else {
        return number;
    }
}

function setMinData() {
    document.getElementById("DateInput").value = annee + "-" + addZero(mois) + "-" + addZero(date);
    document.getElementById("DateInput").min = annee + "-" + addZero(mois) + "-" + addZero(date);
}

$("#addValidation").click(function () {
    let SegmentSelectValue = document.getElementById("SegmentSelect").value;
    let typeSelectValue = document.getElementById("typeSelect").value;
    if (SegmentSelectValue && typeSelect) {
        alert()
    }
})