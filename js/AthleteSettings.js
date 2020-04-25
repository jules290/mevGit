$(document).ready(function () {
    $("#alert").animate({height: '0px'}, 0);
    $(".alertBtn").hide()
    $("#filter").hide()
    $(".settingInputDiv").hide()
    $(".settingInputTitle").hide()
    $(".settingInput").hide()
    if (!localStorage.date) {localStorage.date = ""}
    if (!localStorage.poids) {localStorage.poids = ""}
    if (!localStorage.fcMax) {localStorage.fcMax = ""}
    if (!localStorage.fcRepos) {localStorage.fcRepos = ""}
    if (!localStorage.PMA) {localStorage.PMA = ""}
    if (!localStorage.seuil) {localStorage.seuil = ""}
    if (!localStorage.ftp) {localStorage.ftp = ""}
    postAthleteSettings()
    if (localStorage.checkPois == 1) {document.querySelector('#checkPois').checked = true}
    if (localStorage.checkFcMax == 1) {document.querySelector('#checkFcMax').checked = true}
    if (localStorage.checkFcRepos == 1) {document.querySelector('#checkFcRepos').checked = true}
    if (localStorage.checkPMA == 1) {document.querySelector('#checkPMA').checked = true}
    if (localStorage.checkSeuil == 1) {document.querySelector('#checkSeuil').checked = true}
    if (localStorage.checkFtp == 1) {document.querySelector('#checkFtp').checked = true}
})

$("#settingEdit").click(function () {
    editAthleteSettings()
})

$("#filter").click(function () {
    alertHide()
})

$("#sauvegarder").click(function () {
    var date = new Date();
    var heure = date.getHours();
    var minute = date.getMinutes();
    var jour = date.getDate();
    var mois = date.getMonth() + 1;
    var annee = date.getFullYear();

    localStorage.date = heure + ":" + minute + "<br>" + jour + "/" + mois + "/" + annee;
    localStorage.poids = document.getElementById("settingInputPoids").value;
    localStorage.fcMax = document.getElementById("settingInputFcMax").value;
    localStorage.fcRepos = document.getElementById("settingInputFcRepos").value;

    if (
        document.getElementById("settingInputPMA").value 
        && document.getElementById("settingInputSeuil").value 
        && document.getElementById("settingInputFtp").value
    ) {
        localStorage.PMA = Math.round(document.getElementById("settingInputPMA").value);
        localStorage.seuil = Math.round(document.getElementById("settingInputSeuil").value);
        localStorage.ftp = Math.round(document.getElementById("settingInputFtp").value);
    }


    else if (
        document.getElementById("settingInputPMA").value 
        && document.getElementById("settingInputSeuil").value 
        && !document.getElementById("settingInputFtp").value
    ) {
            localStorage.PMA = Math.round(document.getElementById("settingInputPMA").value);
            localStorage.seuil = Math.round(document.getElementById("settingInputSeuil").value)
            localStorage.ftp = Math.round(document.getElementById("settingInputSeuil").value * 0.95);
    }


    else if (
        document.getElementById("settingInputPMA").value 
        && !document.getElementById("settingInputSeuil").value 
        && document.getElementById("settingInputFtp").value
    ) {
        if (document.getElementById("settingInputPMA").value * 0.76 < document.getElementById("settingInputFtp").value) {
            localStorage.PMA = Math.round(document.getElementById("settingInputPMA").value);
            localStorage.seuil = Math.round(document.getElementById("settingInputFtp").value * 1.05263158)
            localStorage.ftp = Math.round(document.getElementById("settingInputFtp").value);
        }
        else {
            localStorage.PMA = Math.round(document.getElementById("settingInputPMA").value);
            localStorage.seuil = Math.round(document.getElementById("settingInputPMA").value * 0.80);
            localStorage.ftp = Math.round(document.getElementById("settingInputFtp").value);
        }
    }


    else if (
        document.getElementById("settingInputPMA").value 
        && !document.getElementById("settingInputSeuil").value 
        && !document.getElementById("settingInputFtp").value
    ) {
        localStorage.PMA = Math.round(document.getElementById("settingInputPMA").value);
        localStorage.seuil = Math.round(document.getElementById("settingInputPMA").value * 0.80);
        localStorage.ftp = Math.round(document.getElementById("settingInputPMA").value * 0.76);
    }


    else if (
        !document.getElementById("settingInputPMA").value 
        && document.getElementById("settingInputSeuil").value 
        && document.getElementById("settingInputFtp").value
    ) {
        localStorage.PMA = Math.round(document.getElementById("settingInputSeuil").value * 1.25);
        localStorage.seuil = Math.round(document.getElementById("settingInputSeuil").value);
        localStorage.ftp = Math.round(document.getElementById("settingInputFtp").value);
    }
 

    else if (
        !document.getElementById("settingInputPMA").value 
        && document.getElementById("settingInputSeuil").value 
        && !document.getElementById("settingInputFtp").value
    ) {
        localStorage.PMA = Math.round(document.getElementById("settingInputSeuil").value * 1.25);
        localStorage.seuil = Math.round(document.getElementById("settingInputSeuil").value);
        localStorage.ftp = Math.round(document.getElementById("settingInputSeuil").value * 0.95);
    }


    else if (
        !document.getElementById("settingInputPMA").value 
        && !document.getElementById("settingInputSeuil").value 
        && document.getElementById("settingInputFtp").value
    ) {
        localStorage.PMA = Math.round(document.getElementById("settingInputFtp").value * 1.31578947);
        localStorage.seuil = Math.round(document.getElementById("settingInputFtp").value * 1.05263158);
        localStorage.ftp = Math.round(document.getElementById("settingInputFtp").value); 
    }


    postAthleteSettings()
    alertHide()
})

$("#retour").click(function () {
    alertHide()
})

function editAthleteSettings() {
    alertShow()
    document.getElementById("settingInputPoids").value = localStorage.poids;
    document.getElementById("settingInputFcMax").value = localStorage.fcMax;
    document.getElementById("settingInputFcRepos").value = localStorage.fcRepos;
    document.getElementById("settingInputPMA").value = localStorage.PMA;
    document.getElementById("settingInputSeuil").value = localStorage.seuil;
    document.getElementById("settingInputFtp").value = localStorage.ftp;
}

function postAthleteSettings() {
    document.getElementById("settingDate").innerHTML = localStorage.date

    if (Number(localStorage.poids) > 1) {document.getElementById("settingPoids").innerHTML = localStorage.poids + " " + "kg"}
    else {document.getElementById("settingPoids").innerHTML = localStorage.poids}

    if (Number(localStorage.fcMax) > 1) {document.getElementById("settingFcMax").innerHTML = localStorage.fcMax + " " + "bpm"}
    else {document.getElementById("settingFcMax").innerHTML = localStorage.fcMax}

    if (Number(localStorage.fcRepos) > 1) {document.getElementById("settingFcRepos").innerHTML = localStorage.fcRepos + " " + "bpm"}
    else {document.getElementById("settingFcRepos").innerHTML = localStorage.fcRepos }

    if (Number(localStorage.PMA) > 1) {document.getElementById("settingPMA").innerHTML = localStorage.PMA + " " + "W"}
    else {document.getElementById("settingPMA").innerHTML = localStorage.PMA}

    if (Number(localStorage.seuil) > 1) {document.getElementById("settingSeuil").innerHTML = localStorage.seuil + " " + "W"}
    else {document.getElementById("settingSeuil").innerHTML = localStorage.seuil}

    if (Number(localStorage.ftp) > 1) {document.getElementById("settingFtp").innerHTML = localStorage.ftp + " " + "W"}
    else {document.getElementById("settingFtp").innerHTML = localStorage.ftp}
}

function alertShow() {
    $("#alert").animate({height: '500px'}, 200);
    $(".settingInput").show()
    $(".alertBtn").show()
    $("#filter").show()
    $(".settingInputDiv").show()
    $(".settingInputTitle").show()
    $(".settingInput").show()
    $("input").focusin(function(){
        $(this).animate({width: '300px', marginLeft: '130px'}, 200);
      });
      $("input").focusout(function(){
        $(this).animate({width: '200px', marginLeft: '180px'}, 200);
      });
}

function alertHide() {
    $("#alert").animate({height: '0px'}, 200);
    $(".settingInput").hide()
    $(".alertBtn").hide()
    $("#filter").hide()
    $(".settingInputDiv").hide()
    $(".settingInputTitle").hide()
    $(".settingInput").hide()
}

$("#checkPois").click(function () {
    if (document.querySelector('#checkPois').checked == true) {
        localStorage.checkPois = 1;
    } else {
        localStorage.checkPois = 0;
    }
})

$("#checkFcMax").click(function () {
    if (document.querySelector('#checkFcMax').checked == true) {
        localStorage.checkFcMax = 1;
    } else {
        localStorage.checkFcMax = 0;
    }
})

$("#checkFcRepos").click(function () {
    if (document.querySelector('#checkFcRepos').checked == true) {
        localStorage.checkFcRepos = 1;
    } else {
        localStorage.checkFcRepos = 0;
    }
})

$("#checkPMA").click(function () {
    if (document.querySelector('#checkPMA').checked == true) {
        localStorage.checkPMA = 1;
    } else {
        localStorage.checkPMA = 0;
    }
    console.log(localStorage.checkPMA)
})

$("#checkSeuil").click(function () {
    if (document.querySelector('#checkSeuil').checked == true) {
        localStorage.checkSeuil = 1;
    } else {
        localStorage.checkSeuil = 0;
    }
})

$("#checkFtp").click(function () {
    if (document.querySelector('#checkFtp').checked == true) {
        localStorage.checkFtp = 1;
    } else {
        localStorage.checkFtp = 0;
    }
})
