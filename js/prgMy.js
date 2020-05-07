$(document).ready(function () {
    $("#alert").animate({height: '0px'}, 0);
    $("#alertT").hide()
    $(".alertBtn").hide()
    $("#filter").hide()
})

$("#annulerPrg").click(function () {
    ShowAlertPerso()
})

$("#oui").click(function () {
    localStorage.prg = 0;
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