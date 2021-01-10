$(document).ready(function () {
    if (!localStorage.date) {localStorage.date = ""}
    if (!localStorage.poids) {localStorage.poids = ""}
    if (!localStorage.fcMax) {localStorage.fcMax = ""}
    if (!localStorage.fcRepos) {localStorage.fcRepos = ""}
    if (!localStorage.PMA) {localStorage.PMA = ""}
    if (!localStorage.seuil) {localStorage.seuil = ""}
    if (!localStorage.ftp) {localStorage.ftp = ""}
    postAthleteSettings()
})

$("#sauvegarder").click(function () {
    localStorage.poids = document.getElementById("settingInputPoids").value;
    localStorage.fcMax = document.getElementById("settingInputFcMax").value;
    localStorage.fcRepos = document.getElementById("settingInputFcRepos").value;

    if (
        document.getElementById("settingInputPMA").value 
        && document.getElementById("settingInputSeuil").value 
        && document.getElementById("settingInputFtp").value
    ) 
    {
        localStorage.PMA = Math.round(document.getElementById("settingInputPMA").value);
        localStorage.seuil = Math.round(document.getElementById("settingInputSeuil").value);
        localStorage.ftp = Math.round(document.getElementById("settingInputFtp").value);
    }

    else if (
        document.getElementById("settingInputPMA").value 
        && document.getElementById("settingInputSeuil").value 
        && !document.getElementById("settingInputFtp").value
    ) 
    {
            localStorage.PMA = Math.round(document.getElementById("settingInputPMA").value);
            localStorage.seuil = Math.round(document.getElementById("settingInputSeuil").value)
            localStorage.ftp = Math.round(document.getElementById("settingInputSeuil").value * 0.93);
    }

    else if (
        document.getElementById("settingInputPMA").value 
        && !document.getElementById("settingInputSeuil").value 
        && document.getElementById("settingInputFtp").value
    ) 
    {
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
    ) 
    {
        localStorage.PMA = Math.round(document.getElementById("settingInputPMA").value);
        localStorage.seuil = Math.round(document.getElementById("settingInputPMA").value * 0.84);
        localStorage.ftp = Math.round(document.getElementById("settingInputPMA").value * 0.79);
    }

    else if (
        !document.getElementById("settingInputPMA").value 
        && document.getElementById("settingInputSeuil").value 
        && document.getElementById("settingInputFtp").value
    ) 
    {
        localStorage.PMA = Math.round(document.getElementById("settingInputSeuil").value * 1.25);
        localStorage.seuil = Math.round(document.getElementById("settingInputSeuil").value);
        localStorage.ftp = Math.round(document.getElementById("settingInputFtp").value);
    }

    else if (
        !document.getElementById("settingInputPMA").value 
        && document.getElementById("settingInputSeuil").value 
        && !document.getElementById("settingInputFtp").value
    ) 
    {
        localStorage.PMA = Math.round(document.getElementById("settingInputSeuil").value * 1.25);
        localStorage.seuil = Math.round(document.getElementById("settingInputSeuil").value);
        localStorage.ftp = Math.round(document.getElementById("settingInputSeuil").value * 0.93);
    }

    else if (
        !document.getElementById("settingInputPMA").value 
        && !document.getElementById("settingInputSeuil").value 
        && document.getElementById("settingInputFtp").value
    ) 
    {
        localStorage.PMA = Math.round(document.getElementById("settingInputFtp").value * 1.31578947);
        localStorage.seuil = Math.round(document.getElementById("settingInputFtp").value * 1.05263158);
        localStorage.ftp = Math.round(document.getElementById("settingInputFtp").value); 
    }
    
    window.location.reload();
})

function postAthleteSettings() {
    document.getElementById("settingInputPoids").value = localStorage.poids;
    document.getElementById("settingInputFcMax").value = localStorage.fcMax;
    document.getElementById("settingInputFcRepos").value = localStorage.fcRepos;
    document.getElementById("settingInputPMA").value = localStorage.PMA;
    document.getElementById("settingInputSeuil").value = localStorage.seuil;
    document.getElementById("settingInputFtp").value = localStorage.ftp;
}