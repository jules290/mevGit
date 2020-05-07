$(document).ready(function () {
    if (localStorage.prg == 0 || !localStorage.prg) {
        $("#seanceDuJour").hide()
    }
    else {
        $("#seanceDuJour").show()
    }
})

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

console.log(w + ", " + h)