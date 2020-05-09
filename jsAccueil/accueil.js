$(document).ready(function () {
    if (localStorage.prg == 0 || !localStorage.prg) {
        $("#seanceDuJour").hide()
        $("#choisirPrg").show()
    }
    else {
        $("#seanceDuJour").show()
        $("#choisirPrg").hide()
    }
})