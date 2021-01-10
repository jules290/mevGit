option = document.getElementsByClassName("option");
main = document.getElementsByClassName("main");
ActifNav = document.getElementById("ActifNav");
HistoriqueNav = document.getElementById("HistoriqueNav");
NouveauNav = document.getElementById("NouveauNav");

$(document).ready(function () {
    for (let i = 0; i < main.length; i++) {
        $(`#${main[i].id}`).hide();
    }

    if (localStorage.programme && localStorage.programme.length > 2) mainState("ActifNav");
    else mainState("NouveauNav");
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
    if (elementId == "ActifNav") postPrgList()
    else if (elementId == "HistoriqueNav") postListHstrq()
}

function btnActiv() {
    for (let i = 0; i < option.length; i++) {
        option[i].style.borderBottom = "";
    }
}