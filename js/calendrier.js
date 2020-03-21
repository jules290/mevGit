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
$(".dt_nb").click(function() {exo()})

    exo = () => {
        let nbObjectif = Number(localStorage.objectif);
        let nbPrgT = Number(localStorage.prgT);
        let TousLesH1 = document.getElementsByTagName('h1');
        let id;
        for (let i=0; i<TousLesH1.length; i++) {
            TousLesH1.item(i).onclick = function () {
                id = this.id;
                //2 mois
        if (nbPrgT == 2) {
            if(this.id == nbObjectif - 55) {window.location.href = "#10001"}
            else if(this.id == nbObjectif - 54) {window.location.href = "#10002"}
            else if(this.id == nbObjectif - 53) {window.location.href = "#10003"}
            else if(this.id == nbObjectif - 52) {window.location.href = "#10004"}
            else if(this.id == nbObjectif - 51) {window.location.href = "1000#5"}
            else if(this.id == nbObjectif - 50) {window.location.href = "#10006"}
            else if(this.id == nbObjectif - 49) {window.location.href = "#10007"}
            else if(this.id == nbObjectif - 48) {window.location.href = "#10008"}
            else if(this.id == nbObjectif - 47) {window.location.href = "#10009"}
            else if(this.id == nbObjectif - 46) {window.location.href = "#10010"}
            else if(this.id == nbObjectif - 45) {window.location.href = "#10011"}
            else if(this.id == nbObjectif - 44) {window.location.href = "#10012"}
            else if(this.id == nbObjectif - 43) {window.location.href = "#10013"}
            else if(this.id == nbObjectif - 42) {window.location.href = "#10014"}
            else if(this.id == nbObjectif - 41) {window.location.href = "#10015"}
            else if(this.id == nbObjectif - 40) {window.location.href = "#10016"}
            else if(this.id == nbObjectif - 39) {window.location.href = "#10017"}
            else if(this.id == nbObjectif - 38) {window.location.href = "#10018"}
            else if(this.id == nbObjectif - 37) {window.location.href = "#10019"}
            else if(this.id == nbObjectif - 36) {window.location.href = "#10020"}
            else if(this.id == nbObjectif - 35) {window.location.href = "#10021"}
            else if(this.id == nbObjectif - 34) {window.location.href = "#10022"}
            else if(this.id == nbObjectif - 33) {window.location.href = "#10023"}
            else if(this.id == nbObjectif - 32) {window.location.href = "#10024"}
            else if(this.id == nbObjectif - 31) {window.location.href = "#10025"}
            else if(this.id == nbObjectif - 30) {window.location.href = "#10026"}
            else if(this.id == nbObjectif - 29) {window.location.href = "#10027"}
            else if(this.id == nbObjectif - 28) {window.location.href = "#10028"}
            else if(this.id == nbObjectif - 27) {window.location.href = "#10029"}
            else if(this.id == nbObjectif - 26) {window.location.href = "#10030"}
            else if(this.id == nbObjectif - 25) {window.location.href = "#10031"}
            else if(this.id == nbObjectif - 24) {window.location.href = "#10032"}
            else if(this.id == nbObjectif - 23) {window.location.href = "#10033"}
            else if(this.id == nbObjectif - 22) {window.location.href = "#10034"}
            else if(this.id == nbObjectif - 21) {window.location.href = "#10035"}
            else if(this.id == nbObjectif - 20) {window.location.href = "#10036"}
            else if(this.id == nbObjectif - 19) {window.location.href = "#10037"}
            else if(this.id == nbObjectif - 18) {window.location.href = "#10038"}
            else if(this.id == nbObjectif - 17) {window.location.href = "#10039"}
            else if(this.id == nbObjectif - 16) {window.location.href = "#10040"}
            else if(this.id == nbObjectif - 15) {window.location.href = "#10041"}
            else if(this.id == nbObjectif - 14) {window.location.href = "#10042"}
            else if(this.id == nbObjectif - 13) {window.location.href = "#10043"}
            else if(this.id == nbObjectif - 12) {window.location.href = "#10044"}
            else if(this.id == nbObjectif - 11) {window.location.href = "#10045"}
            else if(this.id == nbObjectif - 10) {window.location.href = "#10046"}
            else if(this.id == nbObjectif - 9) {window.location.href = "#10047"}
            else if(this.id == nbObjectif - 8) {window.location.href = "#10048"}
            else if(this.id == nbObjectif - 7) {window.location.href = "#10049"}
            else if(this.id == nbObjectif - 6) {window.location.href = "#10050"}
            else if(this.id == nbObjectif - 5) {window.location.href = "#10051"}
            else if(this.id == nbObjectif - 4) {window.location.href = "#10052"}
            else if(this.id == nbObjectif - 3) {window.location.href = "#10053"}
            else if(this.id == nbObjectif - 2) {window.location.href = "#10054"}
            else if(this.id == nbObjectif - 1) {window.location.href = "#10055"}
        }
        //3 mois 
        else if (nbPrgT == 3) {
            if(this.id == nbObjectif - 83) {window.location.href = "#10001"}
            else if(this.id == nbObjectif - 82) {window.location.href = "#10002"}
            else if(this.id == nbObjectif - 81) {window.location.href = "#10003"}
            else if(this.id == nbObjectif - 80) {window.location.href = "#10004"}
            else if(this.id == nbObjectif - 79) {window.location.href = "#10005"}
            else if(this.id == nbObjectif - 78) {window.location.href = "#10006"}
            else if(this.id == nbObjectif - 77) {window.location.href = "#10007"}
            else if(this.id == nbObjectif - 76) {window.location.href = "#10008"}
            else if(this.id == nbObjectif - 75) {window.location.href = "#10009"}
            else if(this.id == nbObjectif - 74) {window.location.href = "#10010"}
            else if(this.id == nbObjectif - 73) {window.location.href = "#10011"}
            else if(this.id == nbObjectif - 72) {window.location.href = "#10012"}
            else if(this.id == nbObjectif - 71) {window.location.href = "#10013"}
            else if(this.id == nbObjectif - 70) {window.location.href = "#10014"}
            else if(this.id == nbObjectif - 69) {window.location.href = "#10015"}
            else if(this.id == nbObjectif - 68) {window.location.href = "#10016"}
            else if(this.id == nbObjectif - 67) {window.location.href = "#10017"}
            else if(this.id == nbObjectif - 66) {window.location.href = "#10018"}
            else if(this.id == nbObjectif - 65) {window.location.href = "#10019"}
            else if(this.id == nbObjectif - 64) {window.location.href = "#10020"}
            else if(this.id == nbObjectif - 63) {window.location.href = "#10021"}
            else if(this.id == nbObjectif - 62) {window.location.href = "#10022"}
            else if(this.id == nbObjectif - 61) {window.location.href = "#10023"}
            else if(this.id == nbObjectif - 60) {window.location.href = "#10024"}
            else if(this.id == nbObjectif - 59) {window.location.href = "#10025"}
            else if(this.id == nbObjectif - 58) {window.location.href = "#10026"}
            else if(this.id == nbObjectif - 57) {window.location.href = "#10027"}
            else if(this.id == nbObjectif - 56) {window.location.href = "#10028"}
            else if(this.id == nbObjectif - 55) {window.location.href = "#10029"}
            else if(this.id == nbObjectif - 54) {window.location.href = "#10030"}
            else if(this.id == nbObjectif - 53) {window.location.href = "#10031"}
            else if(this.id == nbObjectif - 52) {window.location.href = "#10032"}
            else if(this.id == nbObjectif - 51) {window.location.href = "#10033"}
            else if(this.id == nbObjectif - 50) {window.location.href = "#10034"}
            else if(this.id == nbObjectif - 49) {window.location.href = "#10035"}
            else if(this.id == nbObjectif - 48) {window.location.href = "#10036"}
            else if(this.id == nbObjectif - 47) {window.location.href = "#10037"}
            else if(this.id == nbObjectif - 46) {window.location.href = "#10038"}
            else if(this.id == nbObjectif - 45) {window.location.href = "#10039"}
            else if(this.id == nbObjectif - 44) {window.location.href = "#10040"}
            else if(this.id == nbObjectif - 43) {window.location.href = "#10041"}
            else if(this.id == nbObjectif - 42) {window.location.href = "#10042"}
            else if(this.id == nbObjectif - 41) {window.location.href = "#10043"}
            else if(this.id == nbObjectif - 40) {window.location.href = "#10044"}
            else if(this.id == nbObjectif - 39) {window.location.href = "#10045"}
            else if(this.id == nbObjectif - 38) {window.location.href = "#10046"}
            else if(this.id == nbObjectif - 37) {window.location.href = "#10047"}
            else if(this.id == nbObjectif - 36) {window.location.href = "#10048"}
            else if(this.id == nbObjectif - 35) {window.location.href = "#10049"}
            else if(this.id == nbObjectif - 34) {window.location.href = "#10050"}
            else if(this.id == nbObjectif - 33) {window.location.href = "#10051"}
            else if(this.id == nbObjectif - 32) {window.location.href = "#10052"}
            else if(this.id == nbObjectif - 31) {window.location.href = "#10053"}
            else if(this.id == nbObjectif - 30) {window.location.href = "#10054"}
            else if(this.id == nbObjectif - 29) {window.location.href = "#10055"}
            else if(this.id == nbObjectif - 28) {window.location.href = "#10056"}
            else if(this.id == nbObjectif - 27) {window.location.href = "#10057"}
            else if(this.id == nbObjectif - 26) {window.location.href = "#10058"}
            else if(this.id == nbObjectif - 25) {window.location.href = "#10059"}
            else if(this.id == nbObjectif - 24) {window.location.href = "#10060"}
            else if(this.id == nbObjectif - 23) {window.location.href = "#10061"}
            else if(this.id == nbObjectif - 22) {window.location.href = "#10062"}
            else if(this.id == nbObjectif - 21) {window.location.href = "#10063"}
            else if(this.id == nbObjectif - 20) {window.location.href = "#10064"}
            else if(this.id == nbObjectif - 19) {window.location.href = "#10065"}
            else if(this.id == nbObjectif - 18) {window.location.href = "#10066"}
            else if(this.id == nbObjectif - 17) {window.location.href = "#10067"}
            else if(this.id == nbObjectif - 16) {window.location.href = "#10068"}
            else if(this.id == nbObjectif - 15) {window.location.href = "#10069"}
            else if(this.id == nbObjectif - 14) {window.location.href = "#10070"}
            else if(this.id == nbObjectif - 13) {window.location.href = "#10071"}
            else if(this.id == nbObjectif - 12) {window.location.href = "#10072"}
            else if(this.id == nbObjectif - 11) {window.location.href = "#10073"}
            else if(this.id == nbObjectif - 10) {window.location.href = "#10074"}
            else if(this.id == nbObjectif - 9) {window.location.href = "#10075"}
            else if(this.id == nbObjectif - 8) {window.location.href = "#10076"}
            else if(this.id == nbObjectif - 7) {window.location.href = "#10077"}
            else if(this.id == nbObjectif - 6) {window.location.href = "#10078"}
            else if(this.id == nbObjectif - 5) {window.location.href = "#10079"}
            else if(this.id == nbObjectif - 4) {window.location.href = "#10080"}
            else if(this.id == nbObjectif - 3) {window.location.href = "#10081"}
            else if(this.id == nbObjectif - 2) {window.location.href = "#10082"}
            else if(this.id == nbObjectif - 1) {window.location.href = "#10083"}
        }
        //4 mois 
        else if (nbPrgT == 4) {
            if(this.id == nbObjectif - 111) {window.location.href = "#10001"}
            else if(this.id == nbObjectif - 110) {window.location.href = "#10002"}
            else if(this.id == nbObjectif - 109) {window.location.href = "#10003"}
            else if(this.id == nbObjectif - 108) {window.location.href = "#10004"}
            else if(this.id == nbObjectif - 107) {window.location.href = "#10005"}
            else if(this.id == nbObjectif - 106) {window.location.href = "#10006"}
            else if(this.id == nbObjectif - 105) {window.location.href = "#10007"}
            else if(this.id == nbObjectif - 104) {window.location.href = "#10008"}
            else if(this.id == nbObjectif - 103) {window.location.href = "#10009"}
            else if(this.id == nbObjectif - 102) {window.location.href = "#10010"}
            else if(this.id == nbObjectif - 101) {window.location.href = "#10011"}
            else if(this.id == nbObjectif - 100) {window.location.href = "#10012"}
            else if(this.id == nbObjectif - 99) {window.location.href = "#10013"}
            else if(this.id == nbObjectif - 98) {window.location.href = "#10014"}
            else if(this.id == nbObjectif - 97) {window.location.href = "#10015"}
            else if(this.id == nbObjectif - 96) {window.location.href = "#10016"}
            else if(this.id == nbObjectif - 95) {window.location.href = "#10017"}
            else if(this.id == nbObjectif - 94) {window.location.href = "#10018"}
            else if(this.id == nbObjectif - 93) {window.location.href = "#10019"}
            else if(this.id == nbObjectif - 92) {window.location.href = "#10020"}
            else if(this.id == nbObjectif - 91) {window.location.href = "#10021"}
            else if(this.id == nbObjectif - 90) {window.location.href = "#10022"}
            else if(this.id == nbObjectif - 89) {window.location.href = "#10023"}
            else if(this.id == nbObjectif - 88) {window.location.href = "#10024"}
            else if(this.id == nbObjectif - 87) {window.location.href = "#10025"}
            else if(this.id == nbObjectif - 86) {window.location.href = "#10026"}
            else if(this.id == nbObjectif - 85) {window.location.href = "#10027"}
            else if(this.id == nbObjectif - 84) {window.location.href = "#10028"}
            else if(this.id == nbObjectif - 83) {window.location.href = "#10029"}
            else if(this.id == nbObjectif - 82) {window.location.href = "#10030"}
            else if(this.id == nbObjectif - 81) {window.location.href = "#10031"}
            else if(this.id == nbObjectif - 80) {window.location.href = "#10032"}
            else if(this.id == nbObjectif - 79) {window.location.href = "#10033"}
            else if(this.id == nbObjectif - 78) {window.location.href = "#10034"}
            else if(this.id == nbObjectif - 77) {window.location.href = "#10035"}
            else if(this.id == nbObjectif - 76) {window.location.href = "#10036"}
            else if(this.id == nbObjectif - 75) {window.location.href = "#10037"}
            else if(this.id == nbObjectif - 74) {window.location.href = "#10038"}
            else if(this.id == nbObjectif - 73) {window.location.href = "#10039"}
            else if(this.id == nbObjectif - 72) {window.location.href = "#10040"}
            else if(this.id == nbObjectif - 71) {window.location.href = "#10041"}
            else if(this.id == nbObjectif - 70) {window.location.href = "#10042"}
            else if(this.id == nbObjectif - 69) {window.location.href = "#10043"}
            else if(this.id == nbObjectif - 68) {window.location.href = "#10044"}
            else if(this.id == nbObjectif - 67) {window.location.href = "#10045"}
            else if(this.id == nbObjectif - 66) {window.location.href = "#10046"}
            else if(this.id == nbObjectif - 65) {window.location.href = "#10047"}
            else if(this.id == nbObjectif - 64) {window.location.href = "#10048"}
            else if(this.id == nbObjectif - 63) {window.location.href = "#10049"}
            else if(this.id == nbObjectif - 62) {window.location.href = "#10050"}
            else if(this.id == nbObjectif - 61) {window.location.href = "#10051"}
            else if(this.id == nbObjectif - 60) {window.location.href = "#10052"}
            else if(this.id == nbObjectif - 59) {window.location.href = "#10053"}
            else if(this.id == nbObjectif - 58) {window.location.href = "#10054"}
            else if(this.id == nbObjectif - 57) {window.location.href = "#10055"}
            else if(this.id == nbObjectif - 56) {window.location.href = "#10056"}
            else if(this.id == nbObjectif - 55) {window.location.href = "#10057"}
            else if(this.id == nbObjectif - 54) {window.location.href = "#10058"}
            else if(this.id == nbObjectif - 53) {window.location.href = "#10059"}
            else if(this.id == nbObjectif - 52) {window.location.href = "#10060"}
            else if(this.id == nbObjectif - 51) {window.location.href = "#10061"}
            else if(this.id == nbObjectif - 50) {window.location.href = "#10062"}
            else if(this.id == nbObjectif - 49) {window.location.href = "#10063"}
            else if(this.id == nbObjectif - 48) {window.location.href = "#10064"}
            else if(this.id == nbObjectif - 47) {window.location.href = "#10065"}
            else if(this.id == nbObjectif - 46) {window.location.href = "#10066"}
            else if(this.id == nbObjectif - 45) {window.location.href = "#10067"}
            else if(this.id == nbObjectif - 44) {window.location.href = "#10068"}
            else if(this.id == nbObjectif - 43) {window.location.href = "#10069"}
            else if(this.id == nbObjectif - 42) {window.location.href = "#10070"}
            else if(this.id == nbObjectif - 41) {window.location.href = "#10071"}
            else if(this.id == nbObjectif - 40) {window.location.href = "#10072"}
            else if(this.id == nbObjectif - 39) {window.location.href = "#10073"}
            else if(this.id == nbObjectif - 38) {window.location.href = "#10074"}
            else if(this.id == nbObjectif - 37) {window.location.href = "#10075"}
            else if(this.id == nbObjectif - 36) {window.location.href = "#10076"}
            else if(this.id == nbObjectif - 35) {window.location.href = "#10077"}
            else if(this.id == nbObjectif - 34) {window.location.href = "#10078"}
            else if(this.id == nbObjectif - 33) {window.location.href = "#10079"}
            else if(this.id == nbObjectif - 32) {window.location.href = "#10080"}
            else if(this.id == nbObjectif - 31) {window.location.href = "#10081"}
            else if(this.id == nbObjectif - 30) {window.location.href = "#10082"}
            else if(this.id == nbObjectif - 29) {window.location.href = "#10083"}
            else if(this.id == nbObjectif - 28) {window.location.href = "#10084"}
            else if(this.id == nbObjectif - 27) {window.location.href = "#10085"}
            else if(this.id == nbObjectif - 26) {window.location.href = "#10086"}
            else if(this.id == nbObjectif - 25) {window.location.href = "#10087"}
            else if(this.id == nbObjectif - 24) {window.location.href = "#10088"}
            else if(this.id == nbObjectif - 23) {window.location.href = "#10089"}
            else if(this.id == nbObjectif - 22) {window.location.href = "#10090"}
            else if(this.id == nbObjectif - 21) {window.location.href = "#10091"}
            else if(this.id == nbObjectif - 20) {window.location.href = "#10092"}
            else if(this.id == nbObjectif - 19) {window.location.href = "#10093"}
            else if(this.id == nbObjectif - 18) {window.location.href = "#10094"}
            else if(this.id == nbObjectif - 17) {window.location.href = "#10095"}
            else if(this.id == nbObjectif - 16) {window.location.href = "#10096"}
            else if(this.id == nbObjectif - 15) {window.location.href = "#10097"}
            else if(this.id == nbObjectif - 14) {window.location.href = "#10098"}
            else if(this.id == nbObjectif - 13) {window.location.href = "#10099"}
            else if(this.id == nbObjectif - 12) {window.location.href = "#10100"}
            else if(this.id == nbObjectif - 11) {window.location.href = "#10101"}
            else if(this.id == nbObjectif - 10) {window.location.href = "#10102"}
            else if(this.id == nbObjectif - 9) {window.location.href = "#10103"}
            else if(this.id == nbObjectif - 8) {window.location.href = "#10104"}
            else if(this.id == nbObjectif - 7) {window.location.href = "#10105"}
            else if(this.id == nbObjectif - 6) {window.location.href = "#10106"}
            else if(this.id == nbObjectif - 5) {window.location.href = "#10107"}
            else if(this.id == nbObjectif - 4) {window.location.href = "#10108"}
            else if(this.id == nbObjectif - 3) {window.location.href = "#10109"}
            else if(this.id == nbObjectif - 2) {window.location.href = "#10110"}
            else if(this.id == nbObjectif - 1) {window.location.href = "#10111"}
        }
    }
}
}

        
    