$("#up").click(function() {
    prgPuncheur();
})

$("#down").click(function() {
    prgPuncheur();
})

$(document).ready(function() {
    prgPuncheur();
})

function prgPuncheur() {
    function animExo() {
        $("#exoInstruction").animate({paddingTop: '24%'}, 0);
        if(document.getElementById("exoInstruction").innerHTML !== "jour de repos") {
            $("#exoInstruction").animate({paddingTop: '0px'}, 500);
        }
    }
    if(Number(localStorage.prg) == 2) {
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
    let nbAnnée = Number(localStorage.année);
    let nbMois = Number(localStorage.mois);
    let nbNbd = Number(localStorage.nbd);
    let nbPrgT = Number(localStorage.prgT); 
    let nbPrgJ = Number(localStorage.prgJ); 
    let nbObjectif = Number(localStorage.objectif);
    let init = 0;

    init = 0;
    while (init < 41) {
        document.getElementsByClassName("dt_nb")[init].style.backgroundColor = ""
        init ++;
    } 

    //green = endurance
    //yellow = seuil
    //orange = pma
    //red = force
    //grey = objectif

    if (nbPrgT == 4) {
        //semaine 1     
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 111)) {document.getElementById(nbObjectif - 111).style.backgroundColor = "green"}}
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 110)) {document.getElementById(nbObjectif - 111).style.backgroundColor = ""}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 109)) {document.getElementById(nbObjectif - 109).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 108)) {document.getElementById(nbObjectif - 108).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 107)) {document.getElementById(nbObjectif - 107).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 106)) {document.getElementById(nbObjectif - 106).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 105)) {document.getElementById(nbObjectif - 105).style.backgroundColor = "green"}}
        //semaine 2       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 104)) {document.getElementById(nbObjectif - 104).style.backgroundColor = ""}}
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 103)) {document.getElementById(nbObjectif - 103).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 102)) {document.getElementById(nbObjectif - 102).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 101)) {document.getElementById(nbObjectif - 101).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 100)) {document.getElementById(nbObjectif - 100).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 99)) {document.getElementById(nbObjectif - 99).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 98)) {document.getElementById(nbObjectif - 98).style.backgroundColor = "green"}}
        //semaine 3       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 97)) {document.getElementById(nbObjectif - 97).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 96)) {document.getElementById(nbObjectif - 96).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 95)) {document.getElementById(nbObjectif - 95).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 94)) {document.getElementById(nbObjectif - 94).style.backgroundColor = "orange"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 93)) {document.getElementById(nbObjectif - 93).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 92)) {document.getElementById(nbObjectif - 92).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 91)) {document.getElementById(nbObjectif - 91).style.backgroundColor = "green"};} 
        //semaine 4      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 90)) {document.getElementById(nbObjectif - 90).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 89)) {document.getElementById(nbObjectif - 89).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 88)) {document.getElementById(nbObjectif - 88).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 87)) {document.getElementById(nbObjectif - 87).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 86)) {document.getElementById(nbObjectif - 86).style.backgroundColor = "red"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 85)) {document.getElementById(nbObjectif - 85).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 84)) {document.getElementById(nbObjectif - 84).style.backgroundColor = "green"}} 
        //semaine 5     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 83)) {document.getElementById(nbObjectif - 83).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 82)) {document.getElementById(nbObjectif - 82).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 81)) {document.getElementById(nbObjectif - 81).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 80)) {document.getElementById(nbObjectif - 80).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 79)) {document.getElementById(nbObjectif - 79).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 78)) {document.getElementById(nbObjectif - 78).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 77)) {document.getElementById(nbObjectif - 77).style.backgroundColor = "green"}}  
        //semaine 6     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 76)) {document.getElementById(nbObjectif - 76).style.backgroundColor = ""}} 
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 75)) {document.getElementById(nbObjectif - 75).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 74)) {document.getElementById(nbObjectif - 74).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 73)) {document.getElementById(nbObjectif - 73).style.backgroundColor = "red"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 72)) {document.getElementById(nbObjectif - 72).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 71)) {document.getElementById(nbObjectif - 71).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 70)) {document.getElementById(nbObjectif - 70).style.backgroundColor = "yellow"}}
        //semaine 7       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 69)) {document.getElementById(nbObjectif - 69).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 68)) {document.getElementById(nbObjectif - 68).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 67)) {document.getElementById(nbObjectif - 67).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 66)) {document.getElementById(nbObjectif - 66).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 65)) {document.getElementById(nbObjectif - 65).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 64)) {document.getElementById(nbObjectif - 64).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 63)) {document.getElementById(nbObjectif - 63).style.backgroundColor = "yellow"}}
        //semaine 8       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 62)) {document.getElementById(nbObjectif - 62).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 61)) {document.getElementById(nbObjectif - 61).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 60)) {document.getElementById(nbObjectif - 60).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 59)) {document.getElementById(nbObjectif - 59).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 58)) {document.getElementById(nbObjectif - 58).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 57)) {document.getElementById(nbObjectif - 57).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 56)) {document.getElementById(nbObjectif - 56).style.backgroundColor = "green"}}
        //semaine 9     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 55)) {document.getElementById(nbObjectif - 55).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 54)) {document.getElementById(nbObjectif - 54).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 53)) {document.getElementById(nbObjectif - 53).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 52)) {document.getElementById(nbObjectif - 52).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 51)) {document.getElementById(nbObjectif - 51).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 50)) {document.getElementById(nbObjectif - 50).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 49)) {document.getElementById(nbObjectif - 49).style.backgroundColor = "orange"}} 
        //semaine 10      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 48)) {document.getElementById(nbObjectif - 48).style.backgroundColor = ""}}
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 47)) {document.getElementById(nbObjectif - 47).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 46)) {document.getElementById(nbObjectif - 46).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 45)) {document.getElementById(nbObjectif - 45).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 44)) {document.getElementById(nbObjectif - 44).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 43)) {document.getElementById(nbObjectif - 43).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 42)) {document.getElementById(nbObjectif - 42).style.backgroundColor = "orange"}} 
        //semaine 11     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 41)) {document.getElementById(nbObjectif - 41).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 40)) {document.getElementById(nbObjectif - 40).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 39)) {document.getElementById(nbObjectif - 39).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 38)) {document.getElementById(nbObjectif - 38).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 37)) {document.getElementById(nbObjectif - 37).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 36)) {document.getElementById(nbObjectif - 36).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 35)) {document.getElementById(nbObjectif - 35).style.backgroundColor = "orange"}}   
        //semaine 12   
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 34)) {document.getElementById(nbObjectif - 34).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 33)) {document.getElementById(nbObjectif - 33).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 32)) {document.getElementById(nbObjectif - 32).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 31)) {document.getElementById(nbObjectif - 31).style.backgroundColor = "orange"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 30)) {document.getElementById(nbObjectif - 30).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 29)) {document.getElementById(nbObjectif - 29).style.backgroundColor = "orange"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 28)) {document.getElementById(nbObjectif - 28).style.backgroundColor = "green"}}
        //semaine 13       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 27)) {document.getElementById(nbObjectif - 27).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 26)) {document.getElementById(nbObjectif - 26).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 25)) {document.getElementById(nbObjectif - 25).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 24)) {document.getElementById(nbObjectif - 24).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 23)) {document.getElementById(nbObjectif - 23).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 22)) {document.getElementById(nbObjectif - 22).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 21)) {document.getElementById(nbObjectif - 21).style.backgroundColor = "green"}}  
        //semaine 14    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 20)) {document.getElementById(nbObjectif - 20).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 19)) {document.getElementById(nbObjectif - 19).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 18)) {document.getElementById(nbObjectif - 18).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 17)) {document.getElementById(nbObjectif - 17).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 16)) {document.getElementById(nbObjectif - 16).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 15)) {document.getElementById(nbObjectif - 15).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 14)) {document.getElementById(nbObjectif - 14).style.backgroundColor = "green"}} 
        //semaine 15     
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 13)) {document.getElementById(nbObjectif - 13).style.backgroundColor = "red"}}  
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 11)) {document.getElementById(nbObjectif - 11).style.backgroundColor = "green"}}    
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 8)) {document.getElementById(nbObjectif - 8).style.backgroundColor = "orange"}} 
        //semaine 16     
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 6)) {document.getElementById(nbObjectif - 6).style.backgroundColor = "green"}}
        if (document.getElementById(nbObjectif - 4)) {document.getElementById(nbObjectif - 4).style.backgroundColor = "orange"}   
        if (document.getElementById(nbObjectif - 1)) {document.getElementById(nbObjectif - 1).style.backgroundColor = "green"}
        if (document.getElementById(nbObjectif)) {document.getElementById(nbObjectif).style.backgroundColor = "gray"}
    }
    
    else if (nbPrgT == 3) {
        //semaine 1    
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 83)) {document.getElementById(nbObjectif - 83).style.backgroundColor = "green"}}
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 82)) {document.getElementById(nbObjectif - 82).style.backgroundColor = ""}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 81)) {document.getElementById(nbObjectif - 81).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 80)) {document.getElementById(nbObjectif - 80).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 79)) {document.getElementById(nbObjectif - 79).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 78)) {document.getElementById(nbObjectif - 78).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 77)) {document.getElementById(nbObjectif - 77).style.backgroundColor = "green"}}  
        //semaine 2    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 76)) {document.getElementById(nbObjectif - 76).style.backgroundColor = ""};} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 75)) {document.getElementById(nbObjectif - 75).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 74)) {document.getElementById(nbObjectif - 74).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 73)) {document.getElementById(nbObjectif - 73).style.backgroundColor = "red"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 72)) {document.getElementById(nbObjectif - 72).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 71)) {document.getElementById(nbObjectif - 71).style.backgroundColor = "red"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 70)) {document.getElementById(nbObjectif - 70).style.backgroundColor = "green"}}
        //semaine 3      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 69)) {document.getElementById(nbObjectif - 69).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 68)) {document.getElementById(nbObjectif - 68).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 67)) {document.getElementById(nbObjectif - 67).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 66)) {document.getElementById(nbObjectif - 66).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 65)) {document.getElementById(nbObjectif - 65).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 64)) {document.getElementById(nbObjectif - 64).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 63)) {document.getElementById(nbObjectif - 63).style.backgroundColor = "green"}}
        //semaine 4      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 62)) {document.getElementById(nbObjectif - 62).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 61)) {document.getElementById(nbObjectif - 61).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 60)) {document.getElementById(nbObjectif - 60).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 59)) {document.getElementById(nbObjectif - 59).style.backgroundColor = "yellow"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 58)) {document.getElementById(nbObjectif - 58).style.backgroundColor = "red"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 57)) {document.getElementById(nbObjectif - 57).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 56)) {document.getElementById(nbObjectif - 56).style.backgroundColor = "orange"}}
        //semaine 5    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 55)) {document.getElementById(nbObjectif - 55).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 54)) {document.getElementById(nbObjectif - 54).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 53)) {document.getElementById(nbObjectif - 53).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 52)) {document.getElementById(nbObjectif - 52).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 51)) {document.getElementById(nbObjectif - 51).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 50)) {document.getElementById(nbObjectif - 50).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 49)) {document.getElementById(nbObjectif - 49).style.backgroundColor = "yellow"}} 
        //semaine 6     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 48)) {document.getElementById(nbObjectif - 48).style.backgroundColor = ""}}
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 47)) {document.getElementById(nbObjectif - 47).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 46)) {document.getElementById(nbObjectif - 46).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 45)) {document.getElementById(nbObjectif - 45).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 44)) {document.getElementById(nbObjectif - 44).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 43)) {document.getElementById(nbObjectif - 43).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 42)) {document.getElementById(nbObjectif - 42).style.backgroundColor = "green"}} 
        //semaine 7    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 41)) {document.getElementById(nbObjectif - 41).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 40)) {document.getElementById(nbObjectif - 40).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 39)) {document.getElementById(nbObjectif - 39).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 38)) {document.getElementById(nbObjectif - 38).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 37)) {document.getElementById(nbObjectif - 37).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 36)) {document.getElementById(nbObjectif - 36).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 35)) {document.getElementById(nbObjectif - 35).style.backgroundColor = "orange"}}   
        //semaine 8
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 34)) {document.getElementById(nbObjectif - 34).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 33)) {document.getElementById(nbObjectif - 33).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 32)) {document.getElementById(nbObjectif - 32).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 31)) {document.getElementById(nbObjectif - 31).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 30)) {document.getElementById(nbObjectif - 30).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 29)) {document.getElementById(nbObjectif - 29).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 28)) {document.getElementById(nbObjectif - 28).style.backgroundColor = "orange"}}
        //semaine 9      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 27)) {document.getElementById(nbObjectif - 27).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 26)) {document.getElementById(nbObjectif - 26).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 25)) {document.getElementById(nbObjectif - 25).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 24)) {document.getElementById(nbObjectif - 24).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 23)) {document.getElementById(nbObjectif - 23).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 22)) {document.getElementById(nbObjectif - 22).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 21)) {document.getElementById(nbObjectif - 21).style.backgroundColor = "orange"}}  
        //semaine 10    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 20)) {document.getElementById(nbObjectif - 20).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 19)) {document.getElementById(nbObjectif - 19).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 18)) {document.getElementById(nbObjectif - 18).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 17)) {document.getElementById(nbObjectif - 17).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 16)) {document.getElementById(nbObjectif - 16).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 15)) {document.getElementById(nbObjectif - 15).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 14)) {document.getElementById(nbObjectif - 14).style.backgroundColor = "green"}} 
        //semaine 11  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 13)) {document.getElementById(nbObjectif - 13).style.backgroundColor = "red"}}  
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 11)) {document.getElementById(nbObjectif - 11).style.backgroundColor = "green"}}    
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 8)) {document.getElementById(nbObjectif - 8).style.backgroundColor = "orange"}} 
        //semaine 12  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 6)) {document.getElementById(nbObjectif - 6).style.backgroundColor = "green"}}
        if (document.getElementById(nbObjectif - 4)) {document.getElementById(nbObjectif - 4).style.backgroundColor = "orange"}
        if (document.getElementById(nbObjectif - 1)) {document.getElementById(nbObjectif - 1).style.backgroundColor = "green"} 
        if (document.getElementById(nbObjectif)) {document.getElementById(nbObjectif).style.backgroundColor = "gray"}
    }

    else if (nbPrgT == 2) {
        //semaine 1    
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 55)) {document.getElementById(nbObjectif - 55).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 54)) {document.getElementById(nbObjectif - 54).style.backgroundColor = ""}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 53)) {document.getElementById(nbObjectif - 53).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 52)) {document.getElementById(nbObjectif - 52).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 51)) {document.getElementById(nbObjectif - 51).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 50)) {document.getElementById(nbObjectif - 50).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 49)) {document.getElementById(nbObjectif - 49).style.backgroundColor = "green"}} 
        //semaine 2     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 48)) {document.getElementById(nbObjectif - 48).style.backgroundColor = ""}}
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 47)) {document.getElementById(nbObjectif - 47).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 46)) {document.getElementById(nbObjectif - 46).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 45)) {document.getElementById(nbObjectif - 45).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 44)) {document.getElementById(nbObjectif - 44).style.backgroundColor = "red"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 43)) {document.getElementById(nbObjectif - 43).style.backgroundColor = "orange"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 42)) {document.getElementById(nbObjectif - 42).style.backgroundColor = "green"}} 
        //semaine 3    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 41)) {document.getElementById(nbObjectif - 41).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 40)) {document.getElementById(nbObjectif - 40).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 39)) {document.getElementById(nbObjectif - 39).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 38)) {document.getElementById(nbObjectif - 38).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 37)) {document.getElementById(nbObjectif - 37).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 36)) {document.getElementById(nbObjectif - 36).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 35)) {document.getElementById(nbObjectif - 35).style.backgroundColor = "green"}}   
        //semaine 4   
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 34)) {document.getElementById(nbObjectif - 34).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 33)) {document.getElementById(nbObjectif - 33).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 32)) {document.getElementById(nbObjectif - 32).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 31)) {document.getElementById(nbObjectif - 31).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 30)) {document.getElementById(nbObjectif - 30).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 29)) {document.getElementById(nbObjectif - 29).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 28)) {document.getElementById(nbObjectif - 28).style.backgroundColor = "yellow"}}
        //semaine 5       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 27)) {document.getElementById(nbObjectif - 27).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 26)) {document.getElementById(nbObjectif - 26).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 25)) {document.getElementById(nbObjectif - 25).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 24)) {document.getElementById(nbObjectif - 24).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 23)) {document.getElementById(nbObjectif - 23).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 22)) {document.getElementById(nbObjectif - 22).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 21)) {document.getElementById(nbObjectif - 21).style.backgroundColor = "orange"}}  
        //semaine 6    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 20)) {document.getElementById(nbObjectif - 20).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 19)) {document.getElementById(nbObjectif - 19).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 18)) {document.getElementById(nbObjectif - 18).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 17)) {document.getElementById(nbObjectif - 17).style.backgroundColor = "orange"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 16)) {document.getElementById(nbObjectif - 16).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 15)) {document.getElementById(nbObjectif - 15).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 14)) {document.getElementById(nbObjectif - 14).style.backgroundColor = "green"}} 
        //semaine 7     
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 13)) {document.getElementById(nbObjectif - 13).style.backgroundColor = "red"}}  
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 11)) {document.getElementById(nbObjectif - 11).style.backgroundColor = "green"}}    
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 8)) {document.getElementById(nbObjectif - 8).style.backgroundColor = "orange"}} 
        //semaine 8     
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 6)) {document.getElementById(nbObjectif - 6).style.backgroundColor = "green"}}
        if (document.getElementById(nbObjectif - 4)) {document.getElementById(nbObjectif - 4).style.backgroundColor = "orange"}  
        if (document.getElementById(nbObjectif - 1)) {document.getElementById(nbObjectif - 1).style.backgroundColor = "green"}
        if (document.getElementById(nbObjectif)) {document.getElementById(nbObjectif).style.backgroundColor = "gray"} 
    }
   
    if (nbPrgT == 4) {
        if(document.getElementById(nbObjectif - 111)) {
            document.getElementById(nbObjectif - 111).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 111).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo1
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr1
                animExo()
            }
        }  
        if(document.getElementById(nbObjectif - 110)) {
            document.getElementById(nbObjectif - 110).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 110).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo2
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr2
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 109)) {
            document.getElementById(nbObjectif - 109).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 109).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo3
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr3
                animExo()
            }
        }   
        if(document.getElementById(nbObjectif - 108)) {
            document.getElementById(nbObjectif - 108).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 108).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo4
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr4
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 107)) {
            document.getElementById(nbObjectif - 107).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 107).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo5
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr5
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 106)) {
            document.getElementById(nbObjectif - 106).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 106).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo6
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr6
                animExo()
            }
        }
        if(document.getElementById(nbObjectif -105 )) {
            document.getElementById(nbObjectif - 105).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 105).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo7
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr7
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 104)) {
            document.getElementById(nbObjectif - 104).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 104).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo8
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr8
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 103)) {
            document.getElementById(nbObjectif - 103).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 103).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo9
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr9
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 102)) {
            document.getElementById(nbObjectif - 102).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 102).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo10
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr10
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 101)) {
            document.getElementById(nbObjectif - 101).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 101).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo11
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr11
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 100)) {
            document.getElementById(nbObjectif - 100).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 100).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo12
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr12
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 99)) {
            document.getElementById(nbObjectif - 99).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 99).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo13
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr13
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 98)) {
            document.getElementById(nbObjectif - 98).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 98).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo14
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr14
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 97)) {
            document.getElementById(nbObjectif - 97).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 97).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo15
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr15
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 96)) {
            document.getElementById(nbObjectif - 96).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 96).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo16
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr16
                animExo()
            }  
        }
        if(document.getElementById(nbObjectif - 95)) {
            document.getElementById(nbObjectif - 95).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 95).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo17
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr17
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 94)) {
            document.getElementById(nbObjectif - 94).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 94).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo18
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr18
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 93)) {
            document.getElementById(nbObjectif - 93).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 93).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo19
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr19
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 92)) {
            document.getElementById(nbObjectif - 92).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 92).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo20
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr20
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 91)) {
            document.getElementById(nbObjectif - 91).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 91).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo21
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr21
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 90)) {
            document.getElementById(nbObjectif - 90).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 90).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo22
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr22
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 89)) {
            document.getElementById(nbObjectif - 89).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 89).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo23
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr23
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 88)) {
            document.getElementById(nbObjectif - 88).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 88).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo24
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr24
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 87)) {
            document.getElementById(nbObjectif - 87).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 87).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo25
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr25
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 86)) {
            document.getElementById(nbObjectif - 86).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 86).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo26
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr26
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 85)) {
            document.getElementById(nbObjectif - 85).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 85).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo27
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr27
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 84)) {
            document.getElementById(nbObjectif - 84).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 84).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo28
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr28
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 83)) {
            document.getElementById(nbObjectif - 83).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 83).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo29
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr29
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 82)) {
            document.getElementById(nbObjectif - 82).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 82).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo30
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr30
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 81)) {
            document.getElementById(nbObjectif - 81).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 81).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo31
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr31
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 80)) {
            document.getElementById(nbObjectif - 80).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 80).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo32
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr32
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 79)) {
            document.getElementById(nbObjectif - 79).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 79).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo33
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr33
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 78)) {
            document.getElementById(nbObjectif - 78).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 78).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo34
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr34
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 77)) {
            document.getElementById(nbObjectif - 77).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 77).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo35
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr35
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 76)) {
            document.getElementById(nbObjectif - 76).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 76).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo36
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr36
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 75)) {
            document.getElementById(nbObjectif - 75).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 75).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo37
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr37
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 74)) {
            document.getElementById(nbObjectif - 74).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 74).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo38
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr38
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 73)) {
            document.getElementById(nbObjectif - 73).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 73).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo39
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr39
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 72)) {
            document.getElementById(nbObjectif - 72).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 72).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo40
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr40
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 71)) {
            document.getElementById(nbObjectif - 71).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 71).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo41
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr41
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 70)) {
            document.getElementById(nbObjectif - 70).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 70).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo42
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr42
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 69)) {
            document.getElementById(nbObjectif - 69).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 69).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo43
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr43
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 68)) {
            document.getElementById(nbObjectif - 68).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 68).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo44
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr44
                animExo()
            }    
        }
        if(document.getElementById(nbObjectif - 67)) {
            document.getElementById(nbObjectif - 67).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 67).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo45
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr45
                animExo()
            } 
        }
        if(document.getElementById(nbObjectif - 66)) {
            document.getElementById(nbObjectif - 66).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 66).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo46
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr46
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 65)) {
            document.getElementById(nbObjectif - 65).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 65).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo47
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr47
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 64)) {
            document.getElementById(nbObjectif - 64).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 64).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo48
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr48
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 63)) {
            document.getElementById(nbObjectif - 63).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 63).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo49
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr49
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 62)) {
            document.getElementById(nbObjectif - 62).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 62).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo50
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr50
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 61)) {
            document.getElementById(nbObjectif - 61).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 61).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo51
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr51
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 60)) {
            document.getElementById(nbObjectif - 60).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 60).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo52
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr52
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 59)) {
            document.getElementById(nbObjectif - 59).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 59).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo53
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr53
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 58)) {
            document.getElementById(nbObjectif - 58).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 58).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo54
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr54
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 57)) {
            document.getElementById(nbObjectif - 57).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 57).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo55
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr55
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 56)) {
            document.getElementById(nbObjectif - 56).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 56).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo56
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr56
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 55)) {
            document.getElementById(nbObjectif - 55).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo57
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr57
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 54)) {
            document.getElementById(nbObjectif - 54).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo58
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr58
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 53)) {
            document.getElementById(nbObjectif - 53).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]  
                document.getElementById("exoInstruction").innerText = localStorage.exo59
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr59
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 52)) {
            document.getElementById(nbObjectif - 52).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo60
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr60
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 51)) {
            document.getElementById(nbObjectif - 51).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo61
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr61
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 50)) {
            document.getElementById(nbObjectif - 50).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo62
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr62
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 49)) {
            document.getElementById(nbObjectif - 49).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo63
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr63
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 48)) {
            document.getElementById(nbObjectif - 48).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo64
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr64
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 47)) {
            document.getElementById(nbObjectif - 47).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo65
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr65
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 46)) {
            document.getElementById(nbObjectif - 46).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo66
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr66
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 45)) {
            document.getElementById(nbObjectif - 45).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo67
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr67
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 44)) {
            document.getElementById(nbObjectif - 44).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo68
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr68
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 43)) {
            document.getElementById(nbObjectif - 43).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo69
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr69
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 42)) {
            document.getElementById(nbObjectif - 42).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo70
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr70
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 41)) {
            document.getElementById(nbObjectif - 41).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo71
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr71
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 40)) {
            document.getElementById(nbObjectif - 40).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo72
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr72
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 39)) {
            document.getElementById(nbObjectif - 39).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo73
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr73
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 38)) {
            document.getElementById(nbObjectif - 38).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo74
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr74
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 37)) {
            document.getElementById(nbObjectif - 37).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo75
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr75
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 36)) {
            document.getElementById(nbObjectif - 36).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo76
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr76
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 35)) {
            document.getElementById(nbObjectif - 35).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo77
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr77
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 34)) {
            document.getElementById(nbObjectif - 34).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo78
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr78
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 33)) {
            document.getElementById(nbObjectif - 33).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo79
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr79
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 32)) {
            document.getElementById(nbObjectif - 32).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo80
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr80
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 31)) {
            document.getElementById(nbObjectif - 31).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo81
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr81
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 30)) {
            document.getElementById(nbObjectif - 30).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo82
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr82
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 29)) {
            document.getElementById(nbObjectif - 29).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo83
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr83
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 28)) {
            document.getElementById(nbObjectif - 28).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo84
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr84
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 27)) {
            document.getElementById(nbObjectif - 27).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo85
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr85
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 26)) {
            document.getElementById(nbObjectif - 26).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo86
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr86
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 25)) {
            document.getElementById(nbObjectif - 25).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo87
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr87
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 24)) {
            document.getElementById(nbObjectif - 24).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo88
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr88
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 23)) {
            document.getElementById(nbObjectif - 23).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo89
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr89
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 22)) {
            document.getElementById(nbObjectif - 22).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo90
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr90
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 21)) {
            document.getElementById(nbObjectif - 21).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo91
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr91
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 20)) {
            document.getElementById(nbObjectif - 20).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo92
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr92
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 19)) {
            document.getElementById(nbObjectif - 19).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo93
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr93
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 18)) {
            document.getElementById(nbObjectif - 18).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo94
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr94
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 17)) {
            document.getElementById(nbObjectif - 17).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo95
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr95
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 16)) {
            document.getElementById(nbObjectif - 16).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo96
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr96
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 15)) {
            document.getElementById(nbObjectif - 15).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo97
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr97
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 14)) {
            document.getElementById(nbObjectif - 14).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo98
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr98
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 13)) {
            document.getElementById(nbObjectif - 13).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo99
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr99
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 12)) {
            document.getElementById(nbObjectif - 12).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo100
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr100
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 11)) {
            document.getElementById(nbObjectif - 11).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo101
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr101
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 10)) {
            document.getElementById(nbObjectif - 10).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo102
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr102
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 9)) {
            document.getElementById(nbObjectif - 9).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo103
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr103
                animExo()
            } 
        }
        if(document.getElementById(nbObjectif - 8)) {
            document.getElementById(nbObjectif - 8).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo104
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr104
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 7)) {
            document.getElementById(nbObjectif - 7).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo105
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr105
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 6)) {
            document.getElementById(nbObjectif - 6).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo106
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr106
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 5)) {
            document.getElementById(nbObjectif - 5).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo107
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr107
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 4)) {
            document.getElementById(nbObjectif - 4).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo108
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr108
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 3)) {
            document.getElementById(nbObjectif - 3).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo109
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr109
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 2)) {
            document.getElementById(nbObjectif - 2).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo110
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr110
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 1)) {
            document.getElementById(nbObjectif - 1).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo111
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr111
                animExo()
            }
        }  
        if(document.getElementById(nbObjectif)) {
            document.getElementById(nbObjectif).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo112
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr112
                animExo()
            }
        }  
    }
        
    if (nbPrgT == 3) {
        if(document.getElementById(nbObjectif - 83)) {
            document.getElementById(nbObjectif - 83).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 83).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo1
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr1
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 82)) {
            document.getElementById(nbObjectif - 82).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 82).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo2
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr2
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 81)) {
            document.getElementById(nbObjectif - 81).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 81).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo3
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr3
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 80)) {
            document.getElementById(nbObjectif - 80).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 80).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo4
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr4
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 79)) {
            document.getElementById(nbObjectif - 79).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 79).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo5
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr5
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 78)) {
            document.getElementById(nbObjectif - 78).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 78).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo6
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr6
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 77)) {
            document.getElementById(nbObjectif - 77).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 77).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo7
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr7
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 76)) {
            document.getElementById(nbObjectif - 76).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 76).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo8
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr8
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 75)) {
            document.getElementById(nbObjectif - 75).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 75).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo9
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr9
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 74)) {
            document.getElementById(nbObjectif - 74).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 74).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo10
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr10
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 73)) {
            document.getElementById(nbObjectif - 73).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 73).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo11
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr11
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 72)) {
            document.getElementById(nbObjectif - 72).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 72).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo12
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr12
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 71)) {
            document.getElementById(nbObjectif - 71).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 71).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo13
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr13
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 70)) {
            document.getElementById(nbObjectif - 70).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 70).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo14
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr14
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 69)) {
            document.getElementById(nbObjectif - 69).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 69).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo15
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr15
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 68)) {
            document.getElementById(nbObjectif - 68).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 68).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo16
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr16
                animExo()
            }    
        }
        if(document.getElementById(nbObjectif - 67)) {
            document.getElementById(nbObjectif - 67).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 67).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo17
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr17
                animExo()
            } 
        }
        if(document.getElementById(nbObjectif - 66)) {
            document.getElementById(nbObjectif - 66).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 66).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo18
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr18
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 65)) {
            document.getElementById(nbObjectif - 65).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 65).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo19
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr19
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 64)) {
            document.getElementById(nbObjectif - 64).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 64).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo20
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr20
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 63)) {
            document.getElementById(nbObjectif - 63).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 63).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo21
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr21
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 62)) {
            document.getElementById(nbObjectif - 62).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 62).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo22
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr22
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 61)) {
            document.getElementById(nbObjectif - 61).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 61).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo23
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr23
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 60)) {
            document.getElementById(nbObjectif - 60).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 60).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo24
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr24
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 59)) {
            document.getElementById(nbObjectif - 59).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 59).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo25
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr25
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 58)) {
            document.getElementById(nbObjectif - 58).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 58).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo26
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr26
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 57)) {
            document.getElementById(nbObjectif - 57).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 57).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo27
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr27
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 56)) {
            document.getElementById(nbObjectif - 56).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 56).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo28
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr28
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 55)) {
            document.getElementById(nbObjectif - 55).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo29
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr29
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 54)) {
            document.getElementById(nbObjectif - 54).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo30
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr30
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 53)) {
            document.getElementById(nbObjectif - 53).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]  
                document.getElementById("exoInstruction").innerText = localStorage.exo31
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr31
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 52)) {
            document.getElementById(nbObjectif - 52).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo32
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr32
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 51)) {
            document.getElementById(nbObjectif - 51).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo33
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr33
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 50)) {
            document.getElementById(nbObjectif - 50).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo34
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr34
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 49)) {
            document.getElementById(nbObjectif - 49).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo35
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr35
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 48)) {
            document.getElementById(nbObjectif - 48).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo36
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr36
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 47)) {
            document.getElementById(nbObjectif - 47).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo37
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr37
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 46)) {
            document.getElementById(nbObjectif - 46).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo38
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr38
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 45)) {
            document.getElementById(nbObjectif - 45).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo39
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr39
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 44)) {
            document.getElementById(nbObjectif - 44).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo40
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr40
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 43)) {
            document.getElementById(nbObjectif - 43).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo41
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr41
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 42)) {
            document.getElementById(nbObjectif - 42).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo42
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr42
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 41)) {
            document.getElementById(nbObjectif - 41).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo43
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr43
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 40)) {
            document.getElementById(nbObjectif - 40).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo44
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr44
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 39)) {
            document.getElementById(nbObjectif - 39).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo45
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr45
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 38)) {
            document.getElementById(nbObjectif - 38).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo46
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr46
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 37)) {
            document.getElementById(nbObjectif - 37).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo47
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr47
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 36)) {
            document.getElementById(nbObjectif - 36).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo48
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr48
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 35)) {
            document.getElementById(nbObjectif - 35).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo49
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr49
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 34)) {
            document.getElementById(nbObjectif - 34).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo50
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr50
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 33)) {
            document.getElementById(nbObjectif - 33).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo51
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr51
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 32)) {
            document.getElementById(nbObjectif - 32).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo52
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr52
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 31)) {
            document.getElementById(nbObjectif - 31).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo53
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr53
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 30)) {
            document.getElementById(nbObjectif - 30).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo54
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr54
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 29)) {
            document.getElementById(nbObjectif - 29).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo55
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr55
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 28)) {
            document.getElementById(nbObjectif - 28).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo56
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr56
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 27)) {
            document.getElementById(nbObjectif - 27).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo57
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr57
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 26)) {
            document.getElementById(nbObjectif - 26).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo58
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr58
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 25)) {
            document.getElementById(nbObjectif - 25).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo59
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr59
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 24)) {
            document.getElementById(nbObjectif - 24).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo60
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr60
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 23)) {
            document.getElementById(nbObjectif - 23).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo61
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr61
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 22)) {
            document.getElementById(nbObjectif - 22).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo62
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr62
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 21)) {
            document.getElementById(nbObjectif - 21).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo63
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr63
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 20)) {
            document.getElementById(nbObjectif - 20).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo64
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr64
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 19)) {
            document.getElementById(nbObjectif - 19).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo65
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr65
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 18)) {
            document.getElementById(nbObjectif - 18).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo66
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr66
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 17)) {
            document.getElementById(nbObjectif - 17).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo67
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr67
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 16)) {
            document.getElementById(nbObjectif - 16).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo68
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr68
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 15)) {
            document.getElementById(nbObjectif - 15).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo69
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr69
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 14)) {
            document.getElementById(nbObjectif - 14).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo70
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr70
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 13)) {
            document.getElementById(nbObjectif - 13).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo71
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr71
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 12)) {
            document.getElementById(nbObjectif - 12).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo72
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr72
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 11)) {
            document.getElementById(nbObjectif - 11).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo73
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr73
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 10)) {
            document.getElementById(nbObjectif - 10).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo74
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr74
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 9)) {
            document.getElementById(nbObjectif - 9).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo75
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr75
                animExo()
            } 
        }
        if(document.getElementById(nbObjectif - 8)) {
            document.getElementById(nbObjectif - 8).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo76
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr76
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 7)) {
            document.getElementById(nbObjectif - 7).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo77
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr77
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 6)) {
            document.getElementById(nbObjectif - 6).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo78
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr78
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 5)) {
            document.getElementById(nbObjectif - 5).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo79
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr79
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 4)) {
            document.getElementById(nbObjectif - 4).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo80
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr80
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 3)) {
            document.getElementById(nbObjectif - 3).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo81
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr81
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 2)) {
            document.getElementById(nbObjectif - 2).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo82
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr82
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 1)) {
            document.getElementById(nbObjectif - 1).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo83
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr83
                animExo()
            }
        }  
        if(document.getElementById(nbObjectif)) {
            document.getElementById(nbObjectif).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo84
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr84
                animExo()
            }
        }  
    }

    if (nbPrgT == 2) {
        if(document.getElementById(nbObjectif - 55)) {
            document.getElementById(nbObjectif - 55).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo1
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr1
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 54)) {
            document.getElementById(nbObjectif - 54).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo2
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr2
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 53)) {
            document.getElementById(nbObjectif - 53).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]  
                document.getElementById("exoInstruction").innerText = localStorage.exo3
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr3
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 52)) {
            document.getElementById(nbObjectif - 52).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo4
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr4
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 51)) {
            document.getElementById(nbObjectif - 51).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo5
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr5
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 50)) {
            document.getElementById(nbObjectif - 50).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo6
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr6
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 49)) {
            document.getElementById(nbObjectif - 49).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo7
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr7
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 48)) {
            document.getElementById(nbObjectif - 48).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo8
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr8
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 47)) {
            document.getElementById(nbObjectif - 47).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo9
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr9
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 46)) {
            document.getElementById(nbObjectif - 46).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo10
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr10
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 45)) {
            document.getElementById(nbObjectif - 45).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo11
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr11
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 44)) {
            document.getElementById(nbObjectif - 44).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo12
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr12
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 43)) {
            document.getElementById(nbObjectif - 43).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo13                
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr13
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 42)) {
            document.getElementById(nbObjectif - 42).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo14
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr14
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 41)) {
            document.getElementById(nbObjectif - 41).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo15
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr15
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 40)) {
            document.getElementById(nbObjectif - 40).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo16
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr16
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 39)) {
            document.getElementById(nbObjectif - 39).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo17
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr17
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 38)) {
            document.getElementById(nbObjectif - 38).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo18
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr18
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 37)) {
            document.getElementById(nbObjectif - 37).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo19
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr19
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 36)) {
            document.getElementById(nbObjectif - 36).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo20
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr20
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 35)) {
            document.getElementById(nbObjectif - 35).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo21
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr21
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 34)) {
            document.getElementById(nbObjectif - 34).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo22
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr22
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 33)) {
            document.getElementById(nbObjectif - 33).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo23
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr23
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 32)) {
            document.getElementById(nbObjectif - 32).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo24
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr24
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 31)) {
            document.getElementById(nbObjectif - 31).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo25
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr25
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 30)) {
            document.getElementById(nbObjectif - 30).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo26
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr26
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 29)) {
            document.getElementById(nbObjectif - 29).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo27
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr27
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 28)) {
            document.getElementById(nbObjectif - 28).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo28
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr28
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 27)) {
            document.getElementById(nbObjectif - 27).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo29
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr29
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 26)) {
            document.getElementById(nbObjectif - 26).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo30
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr30
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 25)) {
            document.getElementById(nbObjectif - 25).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo31
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr31
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 24)) {
            document.getElementById(nbObjectif - 24).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo32
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr32
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 23)) {
            document.getElementById(nbObjectif - 23).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo33
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr33
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 22)) {
            document.getElementById(nbObjectif - 22).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo34
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr34
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 21)) {
            document.getElementById(nbObjectif - 21).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo35
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr35
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 20)) {
            document.getElementById(nbObjectif - 20).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo36
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr36
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 19)) {
            document.getElementById(nbObjectif - 19).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo37
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr37
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 18)) {
            document.getElementById(nbObjectif - 18).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo38
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr38
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 17)) {
            document.getElementById(nbObjectif - 17).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo39
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr39
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 16)) {
            document.getElementById(nbObjectif - 16).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo40
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr40
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 15)) {
            document.getElementById(nbObjectif - 15).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo41
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr41
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 14)) {
            document.getElementById(nbObjectif - 14).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo42
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr42
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 13)) {
            document.getElementById(nbObjectif - 13).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo43
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr43
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 12)) {
            document.getElementById(nbObjectif - 12).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo44
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr44
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 11)) {
            document.getElementById(nbObjectif - 11).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo45
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr45
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 10)) {
            document.getElementById(nbObjectif - 10).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo46
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr46
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 9)) {
            document.getElementById(nbObjectif - 9).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo47
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr47
                animExo()
            } 
        }
        if(document.getElementById(nbObjectif - 8)) {
            document.getElementById(nbObjectif - 8).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo48
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr48
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 7)) {
            document.getElementById(nbObjectif - 7).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo49
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr49
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 6)) {
            document.getElementById(nbObjectif - 6).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo50
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr50
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 5)) {
            document.getElementById(nbObjectif - 5).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo51
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr51
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 4)) {
            document.getElementById(nbObjectif - 4).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo52
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr52
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 3)) {
            document.getElementById(nbObjectif - 3).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo53
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr53
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 2)) {
            document.getElementById(nbObjectif - 2).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo54
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr54
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 1)) {
            document.getElementById(nbObjectif - 1).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo55
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr55
                animExo()
            }
        }  
        if(document.getElementById(nbObjectif)) {
            document.getElementById(nbObjectif).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo56
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr56
                animExo()
            }
        }  
    }
}
}