let d = new Date();
let annee = d.getFullYear();
let mois = d.getMonth() + 1;
let date = d.getDate();
let nbObjectif = Number(localStorage.objectif);  
let nbPrgT = Number(localStorage.prgT); 
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

$(document).ready(function() {
    getAujourdHui()
})

function getAujourdHui() {
    document.getElementById("dateSeanceDuJour").innerText = date + " " + monthA[mois] + " " + annee
    let dayNB = getDayNB365(date, mois, annee);
    
    let nbExo = nbObjectif - dayNB;

    if (nbPrgT == 4) {
        if(nbExo == 1) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo111
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr111
        }
        else if(nbExo == 2) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo110
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr110
        }
        else if(nbExo == 3) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo109
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr109
        }
        else if(nbExo == 4) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo108
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr108
        }
        else if(nbExo == 5) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo107
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr107
        }
        else if(nbExo == 6) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo106
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr106
        }
        else if(nbExo == 7) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo105
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr105
        }
        else if(nbExo == 8) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo104
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr104
        }
        else if(nbExo == 9) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo103
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr103
        }
        else if(nbExo == 10) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo102
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr102
        }
        else if(nbExo == 11) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo101
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr101
        }
        else if(nbExo == 12) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo100
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr100
        }
        else if(nbExo == 13) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo99
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr99
        }
        else if(nbExo == 14) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo98
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr98
        }
        else if(nbExo == 15) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo97
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr97
        }
        else if(nbExo == 16) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo96
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr96
        }
        else if(nbExo == 17) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo95
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr95
        }
        else if(nbExo == 18) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo94
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr94
        }
        else if(nbExo == 19) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo93
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr93
        }
        else if(nbExo == 20) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo92
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr92
        }
        else if(nbExo == 21) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo91
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr91
        }
        else if(nbExo == 22) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo90
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr90
        }
        else if(nbExo == 23) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo89
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr89
        }
        else if(nbExo == 24) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo88
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr88
        }
        else if(nbExo == 25) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo87
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr87
        }
        else if(nbExo == 26) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo86
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr86
        }
        else if(nbExo == 27) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo85
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr85
        }
        else if(nbExo == 28) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo84
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr84
        }
        else if(nbExo == 29) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo83
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr83
        }
        else if(nbExo == 30) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo82
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr82
        }
        else if(nbExo == 31) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo81
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr81
        }
        else if(nbExo == 32) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo80
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr80
        }
        else if(nbExo == 33) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo79
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr79
        }
        else if(nbExo == 34) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo78
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr78
        }
        else if(nbExo == 35) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo77
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr77
        }
        else if(nbExo == 36) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo76
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr76
        }
        else if(nbExo == 37) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo75
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr75
        }
        else if(nbExo == 38) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo74
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr74
        }
        else if(nbExo == 39) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo73
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr73
        }
        else if(nbExo == 40) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo72
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr72
        }
        else if(nbExo == 41) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo71
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr71
        }
        else if(nbExo == 42) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo70
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr70
        }
        else if(nbExo == 43) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo69
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr69
        }
        else if(nbExo == 44) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo68
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr68
        }
        else if(nbExo == 45) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo67
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr67
        }
        else if(nbExo == 46) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo66
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr66
        }
        else if(nbExo == 47) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo65
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr65
        }
        else if(nbExo == 48) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo64
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr64
        }
        else if(nbExo == 49) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo63
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr63
        }
        else if(nbExo == 50) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo62
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr62
        }
        else if(nbExo == 51) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo61
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr61
        }
        else if(nbExo == 52) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo60
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr60
        }
        else if(nbExo == 53) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo59
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr59
        }
        else if(nbExo == 54) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo58
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr58
        }
        else if(nbExo == 55) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo57
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr57
        }
        else if(nbExo == 56) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo56
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr56
        }
        else if(nbExo == 57) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo55
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr55
        }
        else if(nbExo == 58) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo54
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr54
        }
        else if(nbExo == 59) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo53
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr53
        }
        else if(nbExo == 60) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo52
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr52
        }
        else if(nbExo == 61) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo51
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr51
        }
        else if(nbExo == 62) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo50
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr50
        }
        else if(nbExo == 63) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo49
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr49
        }
        else if(nbExo == 64) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo48
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr48
        }
        else if(nbExo == 65) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo47
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr47
        }
        else if(nbExo == 66) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo46
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr46
        }
        else if(nbExo == 67) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo45
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr45
        }
        else if(nbExo == 68) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo44
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr44
        }
        else if(nbExo == 69) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo43
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr43
        }
        else if(nbExo == 70) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo42
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr42
        }
        else if(nbExo == 71) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo41
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr41
        }
        else if(nbExo == 72) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo40
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr40
        }
        else if(nbExo == 73) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo39
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr39
        }
        else if(nbExo == 74) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo38
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr38
        }
        else if(nbExo == 75) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo37
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr37
        }
        else if(nbExo == 76) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo36
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr36
        }
        else if(nbExo == 77) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo35
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr35
        }
        else if(nbExo == 78) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo34
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr34
        }
        else if(nbExo == 79) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo33
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr33
        }
        else if(nbExo == 80) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo32
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr32
        }
        else if(nbExo == 81) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo31
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr31
        }
        else if(nbExo == 82) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo30
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr30
        }
        else if(nbExo == 83) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo29
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr29
        }
        else if(nbExo == 84) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo28
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr28
        }
        else if(nbExo == 85) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo27
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr27
        }
        else if(nbExo == 86) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo26
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr26
        }
        else if(nbExo == 87) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo25
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr25
        }
        else if(nbExo == 88) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo24
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr24
        }
        else if(nbExo == 89) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo23
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr23
        }
        else if(nbExo == 90) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo22
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr22
        }
        else if(nbExo == 91) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo21
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr21
        }
        else if(nbExo == 92) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo20
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr20
        }
        else if(nbExo == 93) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo19
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr19
        }
        else if(nbExo == 94) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo18
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr18
        }
        else if(nbExo == 95) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo17
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr17
        }
        else if(nbExo == 96) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo16
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr16
        }
        else if(nbExo == 97) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo15
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr15
        }
        else if(nbExo == 98) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo14
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr14
        }
        else if(nbExo == 99) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo13
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr13
        }
        else if(nbExo == 100) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo12
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr12
        }
        else if(nbExo == 101) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo11
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr11
        }
        else if(nbExo == 102) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo10
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr10
        }
        else if(nbExo == 103) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo9
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr9
        }
        else if(nbExo == 104) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo8
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr8
        }
        else if(nbExo == 105) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo7
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr7
        }
        else if(nbExo == 106) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo6
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr6
        }
        else if(nbExo == 107) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo5
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr5
        }
        else if(nbExo == 108) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo4
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr4
        }
        else if(nbExo == 109) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo3
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr3
        }
        else if(nbExo == 110) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo2
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr2
        }
        else if(nbExo == 111) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo1
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr1
        }
        else if (nbExo > 111) {
            start = nbExo - 111
            if (start == 1) {
                document.getElementById("SeanceSeanceDuJour").innerText = "début du programme dans" + " " + start + " " + "jour"
            }
            else {
                document.getElementById("SeanceSeanceDuJour").innerText = "début du programme dans" + " " + start + " " + "jours"
            }
        }
    }
    
    if (nbPrgT == 3) {
        if(nbExo == 1) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo83
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr83
        }
        else if(nbExo == 2) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo82
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr82
        }
        else if(nbExo == 3) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo81
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr81
        }
        else if(nbExo == 4) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo80
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr80
        }
        else if(nbExo == 5) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo79
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr79
        }
        else if(nbExo == 6) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo78
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr78
        }
        else if(nbExo == 7) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo77
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr77
        }
        else if(nbExo == 8) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo76
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr76
        }
        else if(nbExo == 9) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo75
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr75
        }
        else if(nbExo == 10) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo74
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr74
        }
        else if(nbExo == 11) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo73
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr73
        }
        else if(nbExo == 12) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo72
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr72
        }
        else if(nbExo == 13) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo71
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr71
        }
        else if(nbExo == 14) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo70
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr70
        }
        else if(nbExo == 15) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo69
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr69
        }
        else if(nbExo == 16) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo68
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr68
        }
        else if(nbExo == 17) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo67
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr67
        }
        else if(nbExo == 18) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo66
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr66
        }
        else if(nbExo == 19) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo65
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr65
        }
        else if(nbExo == 20) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo64
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr64
        }
        else if(nbExo == 21) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo63
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr63
        }
        else if(nbExo == 22) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo62
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr62
        }
        else if(nbExo == 23) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo61
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr61
        }
        else if(nbExo == 24) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo60
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr60
        }
        else if(nbExo == 25) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo59
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr59
        }
        else if(nbExo == 26) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo58
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr58
        }
        else if(nbExo == 27) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo57
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr57
        }
        else if(nbExo == 28) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo56
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr56
        }
        else if(nbExo == 29) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo55
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr55
        }
        else if(nbExo == 30) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo54
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr54
        }
        else if(nbExo == 31) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo53
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr53
        }
        else if(nbExo == 32) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo52
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr52
        }
        else if(nbExo == 33) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo51
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr51
        }
        else if(nbExo == 34) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo50
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr50
        }
        else if(nbExo == 35) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo49
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr49
        }
        else if(nbExo == 36) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo48
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr48
        }
        else if(nbExo == 37) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo47
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr47
        }
        else if(nbExo == 38) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo46
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr46
        }
        else if(nbExo == 39) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo45
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr45
        }
        else if(nbExo == 40) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo44
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr44
        }
        else if(nbExo == 41) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo43
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr43
        }
        else if(nbExo == 42) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo42
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr42
        }
        else if(nbExo == 43) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo41
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr41
        }
        else if(nbExo == 44) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo40
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr40
        }
        else if(nbExo == 45) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo39
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr39
        }
        else if(nbExo == 46) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo38
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr38
        }
        else if(nbExo == 47) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo37
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr37
        }
        else if(nbExo == 48) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo36
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr36
        }
        else if(nbExo == 49) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo35
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr35
        }
        else if(nbExo == 50) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo34
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr34
        }
        else if(nbExo == 51) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo33
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr33
        }
        else if(nbExo == 52) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo32
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr32
        }
        else if(nbExo == 53) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo31
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr31
        }
        else if(nbExo == 54) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo30
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr30
        }
        else if(nbExo == 55) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo29
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr29
        }
        else if(nbExo == 56) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo28
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr28
        }
        else if(nbExo == 57) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo27
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr27
        }
        else if(nbExo == 58) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo26
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr26
        }
        else if(nbExo == 59) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo25
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr25
        }
        else if(nbExo == 60) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo24
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr24
        }
        else if(nbExo == 61) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo23
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr23
        }
        else if(nbExo == 62) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo22
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr22
        }
        else if(nbExo == 63) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo21
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr21
        }
        else if(nbExo == 64) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo20
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr20
        }
        else if(nbExo == 65) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo19
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr19
        }
        else if(nbExo == 66) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo18
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr18
        }
        else if(nbExo == 67) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo17
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr17
        }
        else if(nbExo == 68) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo16
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr16
        }
        else if(nbExo == 69) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo15
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr15
        }
        else if(nbExo == 70) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo14
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr14
        }
        else if(nbExo == 71) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo13
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr13
        }
        else if(nbExo == 72) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo12
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr12
        }
        else if(nbExo == 73) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo11
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr11
        }
        else if(nbExo == 74) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo10
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr10
        }
        else if(nbExo == 75) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo9
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr9
        }
        else if(nbExo == 76) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo8
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr8
        }
        else if(nbExo == 77) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo7
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr7
        }
        else if(nbExo == 78) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo6
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr6
        }
        else if(nbExo == 79) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo5
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr5
        }
        else if(nbExo == 80) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo4
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr4
        }
        else if(nbExo == 81) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo3
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr3
        }
        else if(nbExo == 82) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo2
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr2
        }
        else if(nbExo == 83) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo1
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr1
        }
        else if (nbExo > 83) {
            start = nbExo - 83
            if (start == 1) {
                document.getElementById("SeanceSeanceDuJour").innerText = "début du programme dans" + " " + start + " " + "jour"
            }
            else {
                document.getElementById("SeanceSeanceDuJour").innerText = "début du programme dans" + " " + start + " " + "jours"
            }
        }
    }
    
    if (nbPrgT == 2) {
        if(nbExo == 1) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo55
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr55
        }
        else if(nbExo == 2) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo54
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr54
        }
        else if(nbExo == 3) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo53
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr53
        }
        else if(nbExo == 4) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo52
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr52
        }
        else if(nbExo == 5) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo51
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr51
        }
        else if(nbExo == 6) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo50
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr50
        }
        else if(nbExo == 7) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo49
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr49
        }
        else if(nbExo == 8) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo48
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr48
        }
        else if(nbExo == 9) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo47
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr47
        }
        else if(nbExo == 10) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo46
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr46
        }
        else if(nbExo == 11) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo45
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr45
        }
        else if(nbExo == 12) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo44
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr44
        }
        else if(nbExo == 13) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo43
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr43
        }
        else if(nbExo == 14) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo42
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr42
        }
        else if(nbExo == 15) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo41
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr41
        }
        else if(nbExo == 16) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo40
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr40
        }
        else if(nbExo == 17) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo39
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr39
        }
        else if(nbExo == 18) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo38
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr38
        }
        else if(nbExo == 19) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo37
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr37
        }
        else if(nbExo == 20) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo36
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr36
        }
        else if(nbExo == 21) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo35
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr35
        }
        else if(nbExo == 22) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo34
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr34
        }
        else if(nbExo == 23) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo33
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr33
        }
        else if(nbExo == 24) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo32
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr32
        }
        else if(nbExo == 25) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo31
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr31
        }
        else if(nbExo == 26) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo30
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr30
        }
        else if(nbExo == 27) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo29
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr29
        }
        else if(nbExo == 28) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo28
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr28
        }
        else if(nbExo == 29) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo27
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr27
        }
        else if(nbExo == 30) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo26
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr26
        }
        else if(nbExo == 31) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo25
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr25
        }
        else if(nbExo == 32) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo24
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr24
        }
        else if(nbExo == 33) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo23
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr23
        }
        else if(nbExo == 34) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo22
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr22
        }
        else if(nbExo == 35) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo21
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr21
        }
        else if(nbExo == 36) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo20
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr20
        }
        else if(nbExo == 37) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo19
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr19
        }
        else if(nbExo == 38) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo18
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr18
        }
        else if(nbExo == 39) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo17
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr17
        }
        else if(nbExo == 40) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo16
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr16
        }
        else if(nbExo == 41) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo15
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr15
        }
        else if(nbExo == 42) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo14
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr14
        }
        else if(nbExo == 43) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo13
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr13
        }
        else if(nbExo == 44) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo12
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr12
        }
        else if(nbExo == 45) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo11
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr11
        }
        else if(nbExo == 46) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo10
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr10
        }
        else if(nbExo == 47) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo9
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr9
        }
        else if(nbExo == 48) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo8
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr8
        }
        else if(nbExo == 49) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo7
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr7
        }
        else if(nbExo == 50) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo6
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr6
        }
        else if(nbExo == 51) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo5
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr5
        }
        else if(nbExo == 52) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo4
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr4
        }
        else if(nbExo == 53) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo3
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr3
        }
        else if(nbExo == 54) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo2
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr2
        }
        else if(nbExo == 55) {
            document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo1
            document.getElementById("exoSeanceDuJour").style.backgroundColor = localStorage.exoClr1
        }
        else if (nbExo > 55) {
            start = nbExo - 55
            if (start == 1) {
                document.getElementById("SeanceSeanceDuJour").innerText = "début du programme dans" + " " + start + " " + "jour"
            }
            else {
                document.getElementById("SeanceSeanceDuJour").innerText = "début du programme dans" + " " + start + " " + "jours"
            }
        }
    }
}