$(document).ready(function () {
    $("#alert").animate({height: '0px'}, 0);
    $("#alertT").hide()
    $(".alertBtn").hide()
    $("#filter").hide()
    $("#reinitialiser").click(function() {
        localStorage.lvlSprint = 0;
        localStorage.lvlPMA = 0;
        localStorage.lvlSeuil = 0;
        localStorage.lvlGimenez = 0;
        localStorage.lvlEndurance = 0;
        window.location.reload()
    })
    sessionStorage.lvlSprint = localStorage.lvlSprint;
    sessionStorage.lvlPMA = localStorage.lvlPMA;
    sessionStorage.lvlSeuil = localStorage.lvlSeuil;
    sessionStorage.lvlEndurance = localStorage.lvlEndurance;
    sessionStorage.lvlGimenez = localStorage.lvlGimenez;
    postDifficult();
})

$("#upSprint").click(function () {
    if (sessionStorage.lvlSprint < 2) {
        sessionStorage.lvlSprint++;
        postDifficult();
    }
})

$("#downSprint").click(function () {
    if (sessionStorage.lvlSprint > -2) {
        sessionStorage.lvlSprint--;
        postDifficult();
    }
})

$("#upPMA").click(function () {
    if (sessionStorage.lvlPMA < 2) {
        sessionStorage.lvlPMA++;
        postDifficult();
    }
})

$("#downPMA").click(function () {
    if (sessionStorage.lvlPMA > -2) {
        sessionStorage.lvlPMA--;
        postDifficult();
    }
})

$("#upSeuil").click(function () {
    if (sessionStorage.lvlSeuil < 2) {
        sessionStorage.lvlSeuil++;
        postDifficult();
    }
})

$("#downSeuil").click(function () {
    if (sessionStorage.lvlSeuil > -2) {
        sessionStorage.lvlSeuil--;
        postDifficult();
    }
})

$("#upGimenez").click(function () {
    if (sessionStorage.lvlGimenez < 2) {
        sessionStorage.lvlGimenez++;
        postDifficult();
    }
})

$("#downGimenez").click(function () {
    if (sessionStorage.lvlGimenez > -2) {
        sessionStorage.lvlGimenez--;
        postDifficult();
    }
})

function postDifficult() {
    const sprint = document.getElementById("sprintBar")
    if(sessionStorage.lvlSprint == 2) {
        sprint.classList.add("bar100PC");
        sprint.classList.remove("bar0_75PC");
        sprint.style.width = "auto";
    }
    else if(sessionStorage.lvlSprint == 1) {
        sprint.classList.add("bar0_75PC");
        sprint.classList.remove("bar100PC");
        sprint.style.width = "75%";
    }
    else if(sessionStorage.lvlSprint == 0) {
        sprint.classList.add("bar0_75PC");
        sprint.classList.remove("bar100PC");
        sprint.style.width = "50%";
    }
    else if(sessionStorage.lvlSprint == -1) {
        sprint.classList.add("bar0_75PC");
        sprint.classList.remove("bar100PC");
        sprint.style.width = "25%";
    }
    else if(sessionStorage.lvlSprint == -2) {
        sprint.classList.add("bar0_75PC");
        sprint.classList.remove("bar100PC");
        sprint.style.width = "0%";
    }

    const pma = document.getElementById("pmaBar")
    if(sessionStorage.lvlPMA == 2) {
        pma.classList.add("bar100PC");
        pma.classList.remove("bar0_75PC");
        pma.style.width = "auto";
    }
    else if(sessionStorage.lvlPMA == 1) {
        pma.classList.add("bar0_75PC");
        pma.classList.remove("bar100PC");
        pma.style.width = "75%";
    }
    else if(sessionStorage.lvlPMA == 0) {
        pma.classList.add("bar0_75PC");
        pma.classList.remove("bar100PC");
        pma.style.width = "50%";
    }
    else if(sessionStorage.lvlPMA == -1) {
        pma.classList.add("bar0_75PC");
        pma.classList.remove("bar100PC");
        pma.style.width = "25%";
    }
    else if(sessionStorage.lvlPMA == -2) {
        pma.classList.add("bar0_75PC");
        pma.classList.remove("bar100PC");
        pma.style.width = "0%";
    }

    const seuil = document.getElementById("seuilBar")
    if(sessionStorage.lvlSeuil == 2) {
        seuil.classList.add("bar100PC");
        seuil.classList.remove("bar0_75PC");
        seuil.style.width = "auto";
    }
    else if(sessionStorage.lvlSeuil == 1) {
        seuil.classList.add("bar0_75PC");
        seuil.classList.remove("bar100PC");
        seuil.style.width = "75%";
    }
    else if(sessionStorage.lvlSeuil == 0) {
        seuil.classList.add("bar0_75PC");
        seuil.classList.remove("bar100PC");
        seuil.style.width = "50%";
    }
    else if(sessionStorage.lvlSeuil == -1) {
        seuil.classList.add("bar0_75PC");
        seuil.classList.remove("bar100PC");
        seuil.style.width = "25%";
    }
    else if(sessionStorage.lvlSeuil == -2) {
        seuil.classList.add("bar0_75PC");
        seuil.classList.remove("bar100PC");
        seuil.style.width = "0%";
    }
    

    const gimenez = document.getElementById("gimenezBar")
    if(sessionStorage.lvlGimenez == 2) {
        gimenez.classList.add("bar100PC");
        gimenez.classList.remove("bar0_75PC");
        gimenez.style.width = "auto";
    }
    else if(sessionStorage.lvlGimenez == 1) {
        gimenez.classList.add("bar0_75PC");
        gimenez.classList.remove("bar100PC");
        gimenez.style.width = "75%";
    }
    else if(sessionStorage.lvlGimenez == 0) {
        gimenez.classList.add("bar0_75PC");
        gimenez.classList.remove("bar100PC");
        gimenez.style.width = "50%";
    }
    else if(sessionStorage.lvlGimenez == -1) {
        gimenez.classList.add("bar0_75PC");
        gimenez.classList.remove("bar100PC");
        gimenez.style.width = "25%";
    }
    else if(sessionStorage.lvlGimenez == -2) {
        gimenez.classList.add("bar0_75PC");
        gimenez.classList.remove("bar100PC");
        gimenez.style.width = "0%";
    }
}

$("#sauvegarder").click(function () {
    ShowAlertPerso()
})

$("#oui").click(function () {
    localStorage.lvlSprint = sessionStorage.lvlSprint;
    localStorage.lvlPMA = sessionStorage.lvlPMA;
    localStorage.lvlSeuil = sessionStorage.lvlSeuil;
    localStorage.lvlEndurance = sessionStorage.lvlEndurance;
    localStorage.lvlGimenez = sessionStorage.lvlGimenez;
    window.location.reload()
})

$("#non").click(function () {
    hideAlertPerso()
})

$("#filter").click(function () {
    hideAlertPerso()
})

function ShowAlertPerso() {
    $("#alert").animate({height: '170px'}, 200);
    $("#alertT").show()
    $(".alertBtn").show()
    $("#filter").show()
}

function hideAlertPerso() {
    $("#alert").animate({height: '0px'}, 200);
    $("#alertT").hide()
    $(".alertBtn").hide()
    $("#filter").hide()
}