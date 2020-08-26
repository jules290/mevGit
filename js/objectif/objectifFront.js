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
        postListObjectifs()
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
    }
}

$("#SegmentSelect").change(function () {
    $("#SegmentTempsSelectBoxContenair").hide()
    $("#SegmentDistanceSelectBoxContenair").hide()

    $("#TypeOptVitesse").show();
    $("#TypeOptPuissance").show();
    $("#TypeOptTemps").show();
    $("#TypeOptDistance").show();

    let valeur = document.getElementById("SegmentSelect").value;

    switch (valeur) {
        case "Annuelle":
            $("#TypeOptVitesse").hide();
            $("#TypeOptPuissance").hide();
            break;

        case "Activité":
            break;

        case "Temps":
            $("#SegmentTempsSelectBoxContenair").show();
            $("#TypeOptTemps").hide();
            break;
            
        case "Distance":
            $("#SegmentDistanceSelectBoxContenair").show();
            $("#TypeOptDistance").hide();
            break;
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
    $("#SegmentOptTemps").show();
    $("#SegmentOptDistance").show();

    switch (valeur) {
        case "Distance":
            $("#typeDistanceSelectBoxContenair").show();
            $("#SegmentOptDistance").hide();
            break;

        case "Dénivelé":
            $("#typeDeniveleSelectBoxContenair").show();
            break;

        case "Temps":
            $("#typeTempsSelectBoxContenair").show();
            $("#SegmentOptTemps").hide();
            break;

        case "Vitesse":
            $("#typeVitesseSelectBoxContenair").show();
            $("#SegmentOptAnnuelle").hide();
            break;

        case "Puissance":
            $("#typePuissanceSelectBoxContenair").show();
            $("#SegmentOptAnnuelle").hide();
            break;
    }
})