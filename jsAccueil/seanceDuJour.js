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

$(document).ready(function() {getAujourdHui()})

function getAujourdHui() {
    document.getElementById("dateSeanceDuJour").innerText = date + " " + monthA[mois] + " " + annee
    
    //2020
    if(annee == 2020) {
        //janvier 01
        if(mois == 1) {
            localStorage.aujourdHui = 1 + date - 1;
        }
        //fevrier 02
        else if(mois == 2) {
            localStorage.aujourdHui = 32 + date - 1;
        } 
        //mars 03
        else if(mois == 3) {
            localStorage.aujourdHui = 61 + date - 1;
        }
        //avril 04
        else if(mois == 4) {
            localStorage.aujourdHui = 92 + date - 1;
        }
        //mai 05
        else if(mois == 5) {
            localStorage.aujourdHui = 122 + date - 1;
        }
        //juin 06
        else if(mois == 6) {
            localStorage.aujourdHui = 153 + date - 1;
        }
        //juillet 07
        else if(mois == 7) {
            localStorage.aujourdHui = 183 + date - 1;
        }
        //aout 08
        else if(mois == 8) {
            localStorage.aujourdHui = 214 + date - 1;
        }
        //septembre 09
        else if(mois == 9) {
            localStorage.aujourdHui = 245 + date - 1;
        }
        //octobre 10
        else if(mois == 10) {
            localStorage.aujourdHui = 275 + date - 1;
        }
        //novembre 11
        else if(mois == 11) {
            localStorage.aujourdHui = 306 + date - 1;
        }
        //decembre 12
        else if (mois == 12) {
            localStorage.aujourdHui = 336 + date - 1;
        }  
    }
    
    let nbExo = nbObjectif - Number(localStorage.aujourdHui);
    

    if (nbPrgT == 4) {
        if(nbExo == 1) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo111}
        else if(nbExo == 2) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo110}
        else if(nbExo == 3) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo109}
        else if(nbExo == 4) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo108}
        else if(nbExo == 5) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo107}
        else if(nbExo == 6) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo106}
        else if(nbExo == 7) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo105}
        else if(nbExo == 8) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo104}
        else if(nbExo == 9) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo103}
        else if(nbExo == 10) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo102}
        else if(nbExo == 11) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo101}
        else if(nbExo == 12) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo100}
        else if(nbExo == 13) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo99}
        else if(nbExo == 14) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo98}
        else if(nbExo == 15) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo97}
        else if(nbExo == 16) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo96}
        else if(nbExo == 17) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo95}
        else if(nbExo == 18) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo94}
        else if(nbExo == 19) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo93}
        else if(nbExo == 20) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo92}
        else if(nbExo == 21) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo91}
        else if(nbExo == 22) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo90}
        else if(nbExo == 23) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo89}
        else if(nbExo == 24) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo88}
        else if(nbExo == 25) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo87}
        else if(nbExo == 26) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo86}
        else if(nbExo == 27) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo85}
        else if(nbExo == 28) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo84}
        else if(nbExo == 29) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo83}
        else if(nbExo == 30) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo82}
        else if(nbExo == 31) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo81}
        else if(nbExo == 32) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo80}
        else if(nbExo == 33) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo79}
        else if(nbExo == 34) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo78}
        else if(nbExo == 35) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo77}
        else if(nbExo == 36) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo76}
        else if(nbExo == 37) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo75}
        else if(nbExo == 38) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo74}
        else if(nbExo == 39) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo73}
        else if(nbExo == 40) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo72}
        else if(nbExo == 41) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo71}
        else if(nbExo == 42) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo70}
        else if(nbExo == 43) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo69}
        else if(nbExo == 44) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo68}
        else if(nbExo == 45) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo67}
        else if(nbExo == 46) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo66}
        else if(nbExo == 47) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo65}
        else if(nbExo == 48) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo64}
        else if(nbExo == 49) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo63}
        else if(nbExo == 50) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo62}
        else if(nbExo == 51) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo61}
        else if(nbExo == 52) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo60}
        else if(nbExo == 53) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo59}
        else if(nbExo == 54) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo58}
        else if(nbExo == 55) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo57}
        else if(nbExo == 56) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo56}
        else if(nbExo == 57) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo55}
        else if(nbExo == 58) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo54}
        else if(nbExo == 59) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo53}
        else if(nbExo == 60) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo52}
        else if(nbExo == 61) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo51}
        else if(nbExo == 62) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo50}
        else if(nbExo == 63) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo49}
        else if(nbExo == 64) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo48}
        else if(nbExo == 65) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo47}
        else if(nbExo == 66) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo46}
        else if(nbExo == 67) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo45}
        else if(nbExo == 68) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo44}
        else if(nbExo == 69) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo43}
        else if(nbExo == 70) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo42}
        else if(nbExo == 71) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo41}
        else if(nbExo == 72) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo40}
        else if(nbExo == 73) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo39}
        else if(nbExo == 74) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo38}
        else if(nbExo == 75) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo37}
        else if(nbExo == 76) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo36}
        else if(nbExo == 77) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo35}
        else if(nbExo == 78) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo34}
        else if(nbExo == 79) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo33}
        else if(nbExo == 80) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo32}
        else if(nbExo == 81) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo31}
        else if(nbExo == 82) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo30}
        else if(nbExo == 83) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo29}
        else if(nbExo == 84) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo28}
        else if(nbExo == 85) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo27}
        else if(nbExo == 86) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo26}
        else if(nbExo == 87) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo25}
        else if(nbExo == 88) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo24}
        else if(nbExo == 89) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo23}
        else if(nbExo == 90) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo22}
        else if(nbExo == 91) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo21}
        else if(nbExo == 92) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo20}
        else if(nbExo == 93) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo19}
        else if(nbExo == 94) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo18}
        else if(nbExo == 95) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo17}
        else if(nbExo == 96) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo16}
        else if(nbExo == 97) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo15}
        else if(nbExo == 98) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo14}
        else if(nbExo == 99) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo13}
        else if(nbExo == 100) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo12}
        else if(nbExo == 101) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo11}
        else if(nbExo == 102) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo10}
        else if(nbExo == 103) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo9}
        else if(nbExo == 104) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo8}
        else if(nbExo == 105) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo7}
        else if(nbExo == 106) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo6}
        else if(nbExo == 107) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo5}
        else if(nbExo == 108) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo4}
        else if(nbExo == 109) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo3}
        else if(nbExo == 110) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo2}
        else if(nbExo == 111) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo1}
    }
    
    if (nbPrgT == 3) {
        if(nbExo == 1) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo83}
        else if(nbExo == 2) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo82}
        else if(nbExo == 3) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo81}
        else if(nbExo == 4) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo80}
        else if(nbExo == 5) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo79}
        else if(nbExo == 6) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo78}
        else if(nbExo == 7) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo77}
        else if(nbExo == 8) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo76}
        else if(nbExo == 9) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo75}
        else if(nbExo == 10) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo74}
        else if(nbExo == 11) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo73}
        else if(nbExo == 12) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo72}
        else if(nbExo == 13) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo71}
        else if(nbExo == 14) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo70}
        else if(nbExo == 15) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo69}
        else if(nbExo == 16) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo68}
        else if(nbExo == 17) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo67}
        else if(nbExo == 18) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo66}
        else if(nbExo == 19) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo65}
        else if(nbExo == 20) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo64}
        else if(nbExo == 21) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo63}
        else if(nbExo == 22) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo62}
        else if(nbExo == 23) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo61}
        else if(nbExo == 24) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo60}
        else if(nbExo == 25) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo59}
        else if(nbExo == 26) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo58}
        else if(nbExo == 27) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo57}
        else if(nbExo == 28) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo56}
        else if(nbExo == 29) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo55}
        else if(nbExo == 30) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo54}
        else if(nbExo == 31) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo53}
        else if(nbExo == 32) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo52}
        else if(nbExo == 33) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo51}
        else if(nbExo == 34) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo50}
        else if(nbExo == 35) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo49}
        else if(nbExo == 36) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo48}
        else if(nbExo == 37) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo47}
        else if(nbExo == 38) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo46}
        else if(nbExo == 39) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo45}
        else if(nbExo == 40) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo44}
        else if(nbExo == 41) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo43}
        else if(nbExo == 42) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo42}
        else if(nbExo == 43) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo41}
        else if(nbExo == 44) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo40}
        else if(nbExo == 45) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo39}
        else if(nbExo == 46) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo38}
        else if(nbExo == 47) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo37}
        else if(nbExo == 48) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo36}
        else if(nbExo == 49) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo35}
        else if(nbExo == 50) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo34}
        else if(nbExo == 51) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo33}
        else if(nbExo == 52) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo32}
        else if(nbExo == 53) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo31}
        else if(nbExo == 54) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo30}
        else if(nbExo == 55) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo29}
        else if(nbExo == 56) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo28}
        else if(nbExo == 57) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo27}
        else if(nbExo == 58) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo26}
        else if(nbExo == 59) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo25}
        else if(nbExo == 60) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo24}
        else if(nbExo == 61) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo23}
        else if(nbExo == 62) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo22}
        else if(nbExo == 63) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo21}
        else if(nbExo == 64) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo20}
        else if(nbExo == 65) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo19}
        else if(nbExo == 66) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo18}
        else if(nbExo == 67) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo17}
        else if(nbExo == 68) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo16}
        else if(nbExo == 69) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo15}
        else if(nbExo == 70) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo14}
        else if(nbExo == 71) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo13}
        else if(nbExo == 72) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo12}
        else if(nbExo == 73) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo11}
        else if(nbExo == 74) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo10}
        else if(nbExo == 75) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo9}
        else if(nbExo == 76) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo8}
        else if(nbExo == 77) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo7}
        else if(nbExo == 78) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo6}
        else if(nbExo == 79) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo5}
        else if(nbExo == 80) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo4}
        else if(nbExo == 81) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo3}
        else if(nbExo == 82) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo2}
        else if(nbExo == 83) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo1}
    }
    
    if (nbPrgT == 2) {
        if(nbExo == 1) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo55}
        else if(nbExo == 2) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo54}
        else if(nbExo == 3) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo53}
        else if(nbExo == 4) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo52}
        else if(nbExo == 5) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo51}
        else if(nbExo == 6) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo50}
        else if(nbExo == 7) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo49}
        else if(nbExo == 8) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo48}
        else if(nbExo == 9) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo47}
        else if(nbExo == 10) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo46}
        else if(nbExo == 11) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo45}
        else if(nbExo == 12) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo44}
        else if(nbExo == 13) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo43}
        else if(nbExo == 14) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo42}
        else if(nbExo == 15) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo41}
        else if(nbExo == 16) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo40}
        else if(nbExo == 17) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo39}
        else if(nbExo == 18) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo38}
        else if(nbExo == 19) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo37}
        else if(nbExo == 20) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo36}
        else if(nbExo == 21) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo35}
        else if(nbExo == 22) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo34}
        else if(nbExo == 23) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo33}
        else if(nbExo == 24) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo32}
        else if(nbExo == 25) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo31}
        else if(nbExo == 26) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo30}
        else if(nbExo == 27) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo29}
        else if(nbExo == 28) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo28}
        else if(nbExo == 29) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo27}
        else if(nbExo == 30) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo26}
        else if(nbExo == 31) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo25}
        else if(nbExo == 32) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo24}
        else if(nbExo == 33) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo23}
        else if(nbExo == 34) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo22}
        else if(nbExo == 35) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo21}
        else if(nbExo == 36) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo20}
        else if(nbExo == 37) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo19}
        else if(nbExo == 38) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo18}
        else if(nbExo == 39) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo17}
        else if(nbExo == 40) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo16}
        else if(nbExo == 41) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo15}
        else if(nbExo == 42) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo14}
        else if(nbExo == 43) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo13}
        else if(nbExo == 44) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo12}
        else if(nbExo == 45) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo11}
        else if(nbExo == 46) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo10}
        else if(nbExo == 47) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo9}
        else if(nbExo == 48) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo8}
        else if(nbExo == 49) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo7}
        else if(nbExo == 50) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo6}
        else if(nbExo == 51) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo5}
        else if(nbExo == 52) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo4}
        else if(nbExo == 53) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo3}
        else if(nbExo == 54) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo2}
        else if(nbExo == 55) {document.getElementById("SeanceSeanceDuJour").innerText = localStorage.exo1}
    }
}