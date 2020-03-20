let monthA = new Array(12);
    monthA[1] = "janvier";
    monthA[2] = "fevrier";
    monthA[3] = "mars";
    monthA[4] = "avril";
    monthA[5] = "mai";
    monthA[6] = "juin";
    monthA[7] = "juillet";
    monthA[8] = "aout";
    monthA[9] = "septembre";
    monthA[10] = "octobre";
    monthA[11] = "novembre";
    monthA[12] = "decembre";
let date = new Date();
let monthN = date.getMonth() + 1;
let year = date.getFullYear();
let month = monthA[monthN]
sessionStorage.month = monthN;
sessionStorage.year = year;
let init = 1;
$(document).ready(function() {
    calendar();
})

$("#up").click(function() {
    if (sessionStorage.month < 12) {
        sessionStorage.month ++;
    }
    calendar();
})

$("#down").click(function() {
    if (sessionStorage.month > 1) {
        sessionStorage.month --;
    }
    calendar();
})

function calendar() {
    document.getElementById("titre_cld").innerText = monthA[sessionStorage.month] + " " + sessionStorage.year;
    init = 1;
    while (init < 42) {
        document.getElementsByClassName("dt_nb")[init].id = "";
        init ++;
    }
    init = 0
    while (init < 42) {
        document.getElementsByClassName("dt_nb")[init].innerText = "";
        init ++;
    }
    switch (Number(sessionStorage.month)) {
        case 1:
            dt = 0;
            nb = 1;
            plc_dt = 2;
            cls_r =  1;
            while (dt < 31) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 2:
            dt = 0;
            nb = 1;
            plc_dt = 5;
            cls_r =  32;
            while (dt < 29) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 3:
            dt = 0;
            nb = 1;
            plc_dt = 6;
            cls_r =  61;
            while (dt < 31) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 4:
            dt = 0;
            nb = 1;
            plc_dt = 2;
            cls_r =  92;
            while (dt < 30) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 5:
            dt = 0;
            nb = 1;
            plc_dt = 4;
            cls_r =  122;
            while (dt < 31) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 6:
            dt = 0;
            nb = 1;
            plc_dt = 0;
            cls_r =  153;
            while (dt < 30) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 7:
            dt = 0;
            nb = 1;
            plc_dt = 2;
            cls_r =  183;
            while (dt < 31) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 8:
            dt = 0;
            nb = 1;
            plc_dt = 5;
            cls_r =  214;
            while (dt < 31) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 9:
            dt = 0;
            nb = 1;
            plc_dt = 1;
            cls_r =  245;
            while (dt < 30) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 10:
            dt = 0;
            nb = 1;
            plc_dt = 3;
            cls_r =  275;
            while (dt < 31) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 11:
            dt = 0;
            nb = 1;
            plc_dt = 6;
            cls_r =  306;
            while (dt < 30) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
        case 12:
            dt = 0;
            nb = 1;
            plc_dt = 1;
            cls_r =  336;
            while (dt < 31) {
                document.getElementsByClassName("dt_nb")[plc_dt].innerText = nb;
                document.getElementsByClassName("dt_nb")[plc_dt].id = cls_r;
                dt ++;
                nb ++;
                plc_dt ++;
                cls_r ++;
            }
            break;
    }
}