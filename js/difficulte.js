$(document).ready(function () {
    $("#alert").animate({height: '0px'}, 0);
    $("#alertT").hide()
    $(".alertBtn").hide()
    $("#reinitialiser").click(function() {
        localStorage.lvlSprint = 0;
        localStorage.lvlPMA = 0;
        localStorage.lvlSeuil = 0;
        localStorage.lvlGimenez = 0;
        localStorage.lvlEndurance = 0;
        window.location.reload()
    })
    $("#non").click(function () {
        hideAlertPerso()
    })

    if(sessionStorage.lvlSprint >= 2) {
        $("#STlvlProgressBar4").css("background-color", "white");
    }
    if(sessionStorage.lvlSprint >= 1) {
        $("#STlvlProgressBar3").css("background-color", "white");
    }
    if(sessionStorage.lvlSprint >= 0) {
        $("#STlvlProgressBar2").css("background-color", "white");
    }
    if(sessionStorage.lvlSprint >= -1) {
        $("#STlvlProgressBar1").css("background-color", "white");
    }


    if(sessionStorage.lvlPMA >= 2) {
        $("#PMAlvlProgressBar4").css("background-color", "white");
    }
    if(sessionStorage.lvlPMA >= 1) {
        $("#PMAlvlProgressBar3").css("background-color", "white");
    }
    if(sessionStorage.lvlPMA >= 0) {
        $("#PMAlvlProgressBar2").css("background-color", "white");
    }
    if(sessionStorage.lvlPMA >= -1) {
        $("#PMAlvlProgressBar1").css("background-color", "white");
    }


    if(sessionStorage.lvlSeuil >= 2) {
        $("#SeuillvlProgressBar4").css("background-color", "white");
    }
    if(sessionStorage.lvlSeuil >= 1) {
        $("#SeuillvlProgressBar3").css("background-color", "white");
    }
    if(sessionStorage.lvlSeuil >= 0) {
        $("#SeuillvlProgressBar2").css("background-color", "white");
    }
    if(sessionStorage.lvlSeuil >= -1) {
        $("#SeuillvlProgressBar1").css("background-color", "white");
    }
    

    if(sessionStorage.lvlGimenez >= 2) {
        $("#GimenezlvlProgressBar4").css("background-color", "white");
    }
    if(sessionStorage.lvlGimenez >= 1) {
        $("#GimenezlvlProgressBar3").css("background-color", "white");
    }
    if(sessionStorage.lvlGimenez >= 0) {
        $("#GimenezlvlProgressBar2").css("background-color", "white");
    }
    if(sessionStorage.lvlGimenez >= -1) {
        $("#GimenezlvlProgressBar1").css("background-color", "white");
    }
    

    if(sessionStorage.lvlEndurance >= 2) {
        $("#EndurancelvlProgressBar4").css("background-color", "white");
    }
    if(sessionStorage.lvlEndurance >= 1) {
        $("#EndurancelvlProgressBar3").css("background-color", "white");
    }
    if(sessionStorage.lvlEndurance >= 0) {
        $("#EndurancelvlProgressBar2").css("background-color", "white");
    }
    if(sessionStorage.lvlEndurance >= -1) {
        $("#EndurancelvlProgressBar1").css("background-color", "white");
    }
})

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

sessionStorage.lvlSprint = localStorage.lvlSprint;
sessionStorage.lvlPMA = localStorage.lvlPMA;
sessionStorage.lvlSeuil = localStorage.lvlSeuil;
sessionStorage.lvlEndurance = localStorage.lvlEndurance;
sessionStorage.lvlGimenez = localStorage.lvlGimenez;
$("#upSprint").click(function () {
    if (sessionStorage.lvlSprint < 2) {
        sessionStorage.lvlSprint++;

        if(sessionStorage.lvlSprint >= 2) {
            $("#STlvlProgressBar4").css("background-color", "white");
        }
        if(sessionStorage.lvlSprint >= 1) {
            $("#STlvlProgressBar3").css("background-color", "white");
        }
        if(sessionStorage.lvlSprint >= 0) {
            $("#STlvlProgressBar2").css("background-color", "white");
        }
        if(sessionStorage.lvlSprint >= -1) {
            $("#STlvlProgressBar1").css("background-color", "white");
        }
    }
})

$("#downSprint").click(function () {
    if (sessionStorage.lvlSprint > -2) {
        sessionStorage.lvlSprint--;

        if(sessionStorage.lvlSprint < 2) {
            $("#STlvlProgressBar4").css("background-color", "");
        }
        if(sessionStorage.lvlSprint < 1) {
            $("#STlvlProgressBar3").css("background-color", "");
        }
        if(sessionStorage.lvlSprint < 0) {
            $("#STlvlProgressBar2").css("background-color", "");
        }
        if(sessionStorage.lvlSprint < -1) {
            $("#STlvlProgressBar1").css("background-color", "");
        }
    }
})

$("#upPMA").click(function () {
    if (sessionStorage.lvlPMA < 2) {
        sessionStorage.lvlPMA++;

        if(sessionStorage.lvlPMA >= 2) {
            $("#PMAlvlProgressBar4").css("background-color", "white");
        }
        if(sessionStorage.lvlPMA >= 1) {
            $("#PMAlvlProgressBar3").css("background-color", "white");
        }
        if(sessionStorage.lvlPMA >= 0) {
            $("#PMAlvlProgressBar2").css("background-color", "white");
        }
        if(sessionStorage.lvlPMA >= -1) {
            $("#PMAlvlProgressBar1").css("background-color", "white");
        }
    }
})

$("#downPMA").click(function () {
    if (sessionStorage.lvlPMA > -2) {
        sessionStorage.lvlPMA--;

        if(sessionStorage.lvlPMA < 2) {
            $("#PMAlvlProgressBar4").css("background-color", "");
        }
        if(sessionStorage.lvlPMA < 1) {
            $("#PMAlvlProgressBar3").css("background-color", "");
        }
        if(sessionStorage.lvlPMA < 0) {
            $("#PMAlvlProgressBar2").css("background-color", "");
        }
        if(sessionStorage.lvlPMA < -1) {
            $("#PMAlvlProgressBar1").css("background-color", "");
        }
    }
})

$("#upSeuil").click(function () {
    if (sessionStorage.lvlSeuil < 2) {
        sessionStorage.lvlSeuil++;

        if(sessionStorage.lvlSeuil >= 2) {
            $("#SeuillvlProgressBar4").css("background-color", "white");
        }
        if(sessionStorage.lvlSeuil >= 1) {
            $("#SeuillvlProgressBar3").css("background-color", "white");
        }
        if(sessionStorage.lvlSeuil >= 0) {
            $("#SeuillvlProgressBar2").css("background-color", "white");
        }
        if(sessionStorage.lvlSeuil >= -1) {
            $("#SeuillvlProgressBar1").css("background-color", "white");
        }
    }
})

$("#downSeuil").click(function () {
    if (sessionStorage.lvlSeuil > -2) {
        sessionStorage.lvlSeuil--;
        
        if(sessionStorage.lvlSeuil < 2) {
            $("#SeuillvlProgressBar4").css("background-color", "");
        }
        if(sessionStorage.lvlSeuil < 1) {
            $("#SeuillvlProgressBar3").css("background-color", "");
        }
        if(sessionStorage.lvlSeuil < 0) {
            $("#SeuillvlProgressBar2").css("background-color", "");
        }
        if(sessionStorage.lvlSeuil < -1) {
            $("#SeuillvlProgressBar1").css("background-color", "");
        }
    }
})

$("#upGimenez").click(function () {
    if (sessionStorage.lvlGimenez < 2) {
        sessionStorage.lvlGimenez++;

        if(sessionStorage.lvlGimenez >= 2) {
            $("#GimenezlvlProgressBar4").css("background-color", "white");
        }
        if(sessionStorage.lvlGimenez >= 1) {
            $("#GimenezlvlProgressBar3").css("background-color", "white");
        }
        if(sessionStorage.lvlGimenez >= 0) {
            $("#GimenezlvlProgressBar2").css("background-color", "white");
        }
        if(sessionStorage.lvlGimenez >= -1) {
            $("#GimenezlvlProgressBar1").css("background-color", "white");
        }
    }
})

$("#downGimenez").click(function () {
    if (sessionStorage.lvlGimenez > -2) {
        sessionStorage.lvlGimenez--;
        
        if(sessionStorage.lvlGimenez < 2) {
            $("#GimenezlvlProgressBar4").css("background-color", "");
        }
        if(sessionStorage.lvlGimenez < 1) {
            $("#GimenezlvlProgressBar3").css("background-color", "");
        }
        if(sessionStorage.lvlGimenez < 0) {
            $("#GimenezlvlProgressBar2").css("background-color", "");
        }
        if(sessionStorage.lvlGimenez < -1) {
            $("#GimenezlvlProgressBar1").css("background-color", "");
        }
    }
})

// $("#upEndurance").click(function () {
//     if (sessionStorage.lvlEndurance <2) {
//         sessionStorage.lvlEndurance++;

//         if(sessionStorage.lvlEndurance >= 2) {
//             $("#EndurancelvlProgressBar4").css("background-color", "white");
//         }
//         if(sessionStorage.lvlEndurance >= 1) {
//             $("#EndurancelvlProgressBar3").css("background-color", "white");
//         }
//         if(sessionStorage.lvlEndurance >= 0) {
//             $("#EndurancelvlProgressBar2").css("background-color", "white");
//         }
//         if(sessionStorage.lvlEndurance >= -1) {
//             $("#EndurancelvlProgressBar1").css("background-color", "white");
//         }
//     }
// })

// $("#downEndurance").click(function () {
//     if (sessionStorage.lvlEndurance > -2) {
//         sessionStorage.lvlEndurance--;

//         if(sessionStorage.lvlEndurance < 2) {
//             $("#EndurancelvlProgressBar4").css("background-color", "");
//         }
//         if(sessionStorage.lvlEndurance < 1) {
//             $("#EndurancelvlProgressBar3").css("background-color", "");
//         }
//         if(sessionStorage.lvlEndurance < 0) {
//             $("#EndurancelvlProgressBar2").css("background-color", "");
//         }
//         if(sessionStorage.lvlEndurance < -1) {
//             $("#EndurancelvlProgressBar1").css("background-color", "");
//         }
//     }  
// })


function ShowAlertPerso() {
    $("#alert").animate({height: '170px'}, 200);
    $("#alertT").show()
    $(".alertBtn").show()
}

function hideAlertPerso() {
    $("#alert").animate({height: '0px'}, 200);
    $("#alertT").hide()
    $(".alertBtn").hide()
}