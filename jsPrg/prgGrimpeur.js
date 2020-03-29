$("#up").click(function() {
    prgGrimpeur();
})

$("#down").click(function() {
    prgGrimpeur();
})

$(document).ready(function() {
    prgGrimpeur();
})

function prgGrimpeur() {
    if(Number(localStorage.prg) == 1) {
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
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 100)) {document.getElementById(nbObjectif - 100).style.backgroundColor = "yellow"}}
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
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 82)) {document.getElementById(nbObjectif - 82).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 81)) {document.getElementById(nbObjectif - 81).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 80)) {document.getElementById(nbObjectif - 80).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 79)) {document.getElementById(nbObjectif - 79).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 78)) {document.getElementById(nbObjectif - 78).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 77)) {document.getElementById(nbObjectif - 77).style.backgroundColor = "green"}}  
        //semaine 6     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 76)) {document.getElementById(nbObjectif - 76).style.backgroundColor = ""}} 
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 75)) {document.getElementById(nbObjectif - 75).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 74)) {document.getElementById(nbObjectif - 74).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 73)) {document.getElementById(nbObjectif - 73).style.backgroundColor = "red"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 72)) {document.getElementById(nbObjectif - 72).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 71)) {document.getElementById(nbObjectif - 71).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 70)) {document.getElementById(nbObjectif - 70).style.backgroundColor = "green"}}
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
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 60)) {document.getElementById(nbObjectif - 60).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 59)) {document.getElementById(nbObjectif - 59).style.backgroundColor = "yellow"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 58)) {document.getElementById(nbObjectif - 58).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 57)) {document.getElementById(nbObjectif - 57).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 56)) {document.getElementById(nbObjectif - 56).style.backgroundColor = "green"}}
        //semaine 9     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 55)) {document.getElementById(nbObjectif - 55).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 54)) {document.getElementById(nbObjectif - 54).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 53)) {document.getElementById(nbObjectif - 53).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 52)) {document.getElementById(nbObjectif - 52).style.backgroundColor = "yellow"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 51)) {document.getElementById(nbObjectif - 51).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 50)) {document.getElementById(nbObjectif - 50).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 49)) {document.getElementById(nbObjectif - 49).style.backgroundColor = "green"}} 
        //semaine 10      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 48)) {document.getElementById(nbObjectif - 48).style.backgroundColor = ""}}
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 47)) {document.getElementById(nbObjectif - 47).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 46)) {document.getElementById(nbObjectif - 46).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 45)) {document.getElementById(nbObjectif - 45).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 44)) {document.getElementById(nbObjectif - 44).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 43)) {document.getElementById(nbObjectif - 43).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 42)) {document.getElementById(nbObjectif - 42).style.backgroundColor = "green"}} 
        //semaine 11     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 41)) {document.getElementById(nbObjectif - 41).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 40)) {document.getElementById(nbObjectif - 40).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 39)) {document.getElementById(nbObjectif - 39).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 38)) {document.getElementById(nbObjectif - 38).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 37)) {document.getElementById(nbObjectif - 37).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 36)) {document.getElementById(nbObjectif - 36).style.backgroundColor = "orange"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 35)) {document.getElementById(nbObjectif - 35).style.backgroundColor = "green"}}   
        //semaine 12   
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 34)) {document.getElementById(nbObjectif - 34).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 33)) {document.getElementById(nbObjectif - 33).style.backgroundColor = "orange"}}   
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
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 19)) {document.getElementById(nbObjectif - 19).style.backgroundColor = "green"}}   
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
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 75)) {document.getElementById(nbObjectif - 75).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 74)) {document.getElementById(nbObjectif - 74).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 73)) {document.getElementById(nbObjectif - 73).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 72)) {document.getElementById(nbObjectif - 72).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 71)) {document.getElementById(nbObjectif - 71).style.backgroundColor = "green"}} 
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
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 59)) {document.getElementById(nbObjectif - 59).style.backgroundColor = "orange"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 58)) {document.getElementById(nbObjectif - 58).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 57)) {document.getElementById(nbObjectif - 57).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 56)) {document.getElementById(nbObjectif - 56).style.backgroundColor = "green"}}
        //semaine 5    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 55)) {document.getElementById(nbObjectif - 55).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 54)) {document.getElementById(nbObjectif - 54).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 53)) {document.getElementById(nbObjectif - 53).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 52)) {document.getElementById(nbObjectif - 52).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 51)) {document.getElementById(nbObjectif - 51).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 50)) {document.getElementById(nbObjectif - 50).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 49)) {document.getElementById(nbObjectif - 49).style.backgroundColor = "green"}} 
        //semaine 6     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 48)) {document.getElementById(nbObjectif - 48).style.backgroundColor = ""}}
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 47)) {document.getElementById(nbObjectif - 47).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 46)) {document.getElementById(nbObjectif - 46).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 45)) {document.getElementById(nbObjectif - 45).style.backgroundColor = "yellow"}}  
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
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 33)) {document.getElementById(nbObjectif - 33).style.backgroundColor = "green"}}   
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
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 19)) {document.getElementById(nbObjectif - 19).style.backgroundColor = "green"}}   
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
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 44)) {document.getElementById(nbObjectif - 44).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 43)) {document.getElementById(nbObjectif - 43).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 42)) {document.getElementById(nbObjectif - 42).style.backgroundColor = "green"}} 
        //semaine 3    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 41)) {document.getElementById(nbObjectif - 41).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 40)) {document.getElementById(nbObjectif - 40).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 39)) {document.getElementById(nbObjectif - 39).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 38)) {document.getElementById(nbObjectif - 38).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 37)) {document.getElementById(nbObjectif - 37).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 36)) {document.getElementById(nbObjectif - 36).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 35)) {document.getElementById(nbObjectif - 35).style.backgroundColor = "yellow"}}   
        //semaine 4   
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 34)) {document.getElementById(nbObjectif - 34).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 33)) {document.getElementById(nbObjectif - 33).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 32)) {document.getElementById(nbObjectif - 32).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 31)) {document.getElementById(nbObjectif - 31).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 30)) {document.getElementById(nbObjectif - 30).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 29)) {document.getElementById(nbObjectif - 29).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 28)) {document.getElementById(nbObjectif - 28).style.backgroundColor = "green"}}
        //semaine 5       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 27)) {document.getElementById(nbObjectif - 27).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 26)) {document.getElementById(nbObjectif - 26).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 25)) {document.getElementById(nbObjectif - 25).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 24)) {document.getElementById(nbObjectif - 24).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 23)) {document.getElementById(nbObjectif - 23).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 22)) {document.getElementById(nbObjectif - 22).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 21)) {document.getElementById(nbObjectif - 21).style.backgroundColor = "green"}}  
        //semaine 6    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 20)) {document.getElementById(nbObjectif - 20).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 19)) {document.getElementById(nbObjectif - 19).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 18)) {document.getElementById(nbObjectif - 18).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 17)) {document.getElementById(nbObjectif - 17).style.backgroundColor = "green"}}  
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
            }
        }  
        if(document.getElementById(nbObjectif - 110)) {
            document.getElementById(nbObjectif - 110).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 110).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo2
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr2
            }
        }
        if(document.getElementById(nbObjectif - 109)) {
            document.getElementById(nbObjectif - 109).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 109).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo3
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr3
            }
        }   
        if(document.getElementById(nbObjectif - 108)) {
            document.getElementById(nbObjectif - 108).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 108).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo4
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr4
            }
        }
        if(document.getElementById(nbObjectif - 107)) {
            document.getElementById(nbObjectif - 107).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 107).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo5
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr5
            }
        }
        if(document.getElementById(nbObjectif - 106)) {
            document.getElementById(nbObjectif - 106).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 106).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo6
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr6
            }
        }
        if(document.getElementById(nbObjectif -105 )) {
            document.getElementById(nbObjectif - 105).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 105).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo7
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr7
            }
        }
        if(document.getElementById(nbObjectif - 104)) {
            document.getElementById(nbObjectif - 104).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 104).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo8
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr8
            }
        }
        if(document.getElementById(nbObjectif - 103)) {
            document.getElementById(nbObjectif - 103).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 103).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo9
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr9
            }
        }
        if(document.getElementById(nbObjectif - 102)) {
            document.getElementById(nbObjectif - 102).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 102).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo10
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr10
            }
        }
        if(document.getElementById(nbObjectif - 101)) {
            document.getElementById(nbObjectif - 101).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 101).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo11
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr11
            }
        }
        if(document.getElementById(nbObjectif - 100)) {
            document.getElementById(nbObjectif - 100).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 100).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo12
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr12
            }
        }
        if(document.getElementById(nbObjectif - 99)) {
            document.getElementById(nbObjectif - 99).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 99).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo13
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr13
            }
        }
        if(document.getElementById(nbObjectif - 98)) {
            document.getElementById(nbObjectif - 98).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 98).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo14
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr14
            }
        }
        if(document.getElementById(nbObjectif - 97)) {
            document.getElementById(nbObjectif - 97).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 97).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo15
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr15
            }
        }
        if(document.getElementById(nbObjectif - 96)) {
            document.getElementById(nbObjectif - 96).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 96).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo16
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr16
            }  
        }
        if(document.getElementById(nbObjectif - 95)) {
            document.getElementById(nbObjectif - 95).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 95).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo17
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr17
            }
        }
        if(document.getElementById(nbObjectif - 94)) {
            document.getElementById(nbObjectif - 94).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 94).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo18
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr18
            }
        }
        if(document.getElementById(nbObjectif - 93)) {
            document.getElementById(nbObjectif - 93).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 93).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo19
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr19
            }
        }
        if(document.getElementById(nbObjectif - 92)) {
            document.getElementById(nbObjectif - 92).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 92).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo20
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr20
            }
        }
        if(document.getElementById(nbObjectif - 91)) {
            document.getElementById(nbObjectif - 91).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 91).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo21
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr21
            }
        }
        if(document.getElementById(nbObjectif - 90)) {
            document.getElementById(nbObjectif - 90).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 90).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo22
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr22
            }
        }
        if(document.getElementById(nbObjectif - 89)) {
            document.getElementById(nbObjectif - 89).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 89).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo23
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr23
            }
        }
        if(document.getElementById(nbObjectif - 88)) {
            document.getElementById(nbObjectif - 88).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 88).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo24
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr24
            }
        }
        if(document.getElementById(nbObjectif - 87)) {
            document.getElementById(nbObjectif - 87).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 87).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo25
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr25
            }
        }
        if(document.getElementById(nbObjectif - 86)) {
            document.getElementById(nbObjectif - 86).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 86).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo26
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr26
            }
        }
        if(document.getElementById(nbObjectif - 85)) {
            document.getElementById(nbObjectif - 85).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 85).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo27
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr27
            }
        }
        if(document.getElementById(nbObjectif - 84)) {
            document.getElementById(nbObjectif - 84).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 84).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo28
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr28
            }
        }
        if(document.getElementById(nbObjectif - 83)) {
            document.getElementById(nbObjectif - 83).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 83).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo29
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr29
            }
        }
        if(document.getElementById(nbObjectif - 82)) {
            document.getElementById(nbObjectif - 82).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 82).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo30
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr30
            }
        }
        if(document.getElementById(nbObjectif - 81)) {
            document.getElementById(nbObjectif - 81).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 81).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo31
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr31
            }
        }
        if(document.getElementById(nbObjectif - 80)) {
            document.getElementById(nbObjectif - 80).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 80).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo32
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr32
            }
        }
        if(document.getElementById(nbObjectif - 79)) {
            document.getElementById(nbObjectif - 79).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 79).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo33
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr33
            }
        }
        if(document.getElementById(nbObjectif - 78)) {
            document.getElementById(nbObjectif - 78).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 78).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo34
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr34
            }
        }
        if(document.getElementById(nbObjectif - 77)) {
            document.getElementById(nbObjectif - 77).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 77).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo35
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr35
            }
        }
        if(document.getElementById(nbObjectif - 76)) {
            document.getElementById(nbObjectif - 76).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 76).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo36
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr36
            }
        }
        if(document.getElementById(nbObjectif - 75)) {
            document.getElementById(nbObjectif - 75).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 75).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo37
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr37
            }
        }
        if(document.getElementById(nbObjectif - 74)) {
            document.getElementById(nbObjectif - 74).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 74).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo38
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr38
            }
        }
        if(document.getElementById(nbObjectif - 73)) {
            document.getElementById(nbObjectif - 73).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 73).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo39
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr39
            }
        }
        if(document.getElementById(nbObjectif - 72)) {
            document.getElementById(nbObjectif - 72).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 72).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo40
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr40
            }
        }
        if(document.getElementById(nbObjectif - 71)) {
            document.getElementById(nbObjectif - 71).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 71).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo41
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr41
            }
        }
        if(document.getElementById(nbObjectif - 70)) {
            document.getElementById(nbObjectif - 70).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 70).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo42
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr42
            }
        }
        if(document.getElementById(nbObjectif - 69)) {
            document.getElementById(nbObjectif - 69).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 69).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo43
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr43
            }
        }
        if(document.getElementById(nbObjectif - 68)) {
            document.getElementById(nbObjectif - 68).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 68).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo44
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr44
            }    
        }
        if(document.getElementById(nbObjectif - 67)) {
            document.getElementById(nbObjectif - 67).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 67).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo45
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr45
            } 
        }
        if(document.getElementById(nbObjectif - 66)) {
            document.getElementById(nbObjectif - 66).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 66).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo46
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr46
            }
        }
        if(document.getElementById(nbObjectif - 65)) {
            document.getElementById(nbObjectif - 65).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 65).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo47
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr47
            }
        }
        if(document.getElementById(nbObjectif - 64)) {
            document.getElementById(nbObjectif - 64).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 64).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo48
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr48
            }
        }
        if(document.getElementById(nbObjectif - 63)) {
            document.getElementById(nbObjectif - 63).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 63).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo49
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr49
            }
        }
        if(document.getElementById(nbObjectif - 62)) {
            document.getElementById(nbObjectif - 62).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 62).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo50
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr50
            }
        }
        if(document.getElementById(nbObjectif - 61)) {
            document.getElementById(nbObjectif - 61).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 61).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo51
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr51
            }
        }
        if(document.getElementById(nbObjectif - 60)) {
            document.getElementById(nbObjectif - 60).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 60).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo52
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr52
            }
        }
        if(document.getElementById(nbObjectif - 59)) {
            document.getElementById(nbObjectif - 59).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 59).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo53
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr53
            }
        }
        if(document.getElementById(nbObjectif - 58)) {
            document.getElementById(nbObjectif - 58).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 58).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo54
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr54
            }
        }
        if(document.getElementById(nbObjectif - 57)) {
            document.getElementById(nbObjectif - 57).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 57).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo55
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr55
            }
        }
        if(document.getElementById(nbObjectif - 56)) {
            document.getElementById(nbObjectif - 56).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 56).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo56
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr56
            }
        }
        if(document.getElementById(nbObjectif - 55)) {
            document.getElementById(nbObjectif - 55).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo57
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr57
            }
        }
        if(document.getElementById(nbObjectif - 54)) {
            document.getElementById(nbObjectif - 54).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo58
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr58
            }
        }
        if(document.getElementById(nbObjectif - 53)) {
            document.getElementById(nbObjectif - 53).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]  
                document.getElementById("exoInstruction").innerText = localStorage.exo59
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr59
            }
        }
        if(document.getElementById(nbObjectif - 52)) {
            document.getElementById(nbObjectif - 52).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo60
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr60
            }
        }
        if(document.getElementById(nbObjectif - 51)) {
            document.getElementById(nbObjectif - 51).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo61
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr61
            }
        }
        if(document.getElementById(nbObjectif - 50)) {
            document.getElementById(nbObjectif - 50).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo62
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr62
            }
        }
        if(document.getElementById(nbObjectif - 49)) {
            document.getElementById(nbObjectif - 49).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo63
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr63
            }
        }
        if(document.getElementById(nbObjectif - 48)) {
            document.getElementById(nbObjectif - 48).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo64
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr64
            }
        }
        if(document.getElementById(nbObjectif - 47)) {
            document.getElementById(nbObjectif - 47).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo65
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr65
            }
        }
        if(document.getElementById(nbObjectif - 46)) {
            document.getElementById(nbObjectif - 46).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo66
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr66
            }
        }
        if(document.getElementById(nbObjectif - 45)) {
            document.getElementById(nbObjectif - 45).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo67
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr67
            }
        }
        if(document.getElementById(nbObjectif - 44)) {
            document.getElementById(nbObjectif - 44).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo68
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr68
            }
        }
        if(document.getElementById(nbObjectif - 43)) {
            document.getElementById(nbObjectif - 43).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo69
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr69
            }
        }
        if(document.getElementById(nbObjectif - 42)) {
            document.getElementById(nbObjectif - 42).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo70
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr70
            }
        }
        if(document.getElementById(nbObjectif - 41)) {
            document.getElementById(nbObjectif - 41).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo71
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr71
            }
        }
        if(document.getElementById(nbObjectif - 40)) {
            document.getElementById(nbObjectif - 40).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo72
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr72
            }
        }
        if(document.getElementById(nbObjectif - 39)) {
            document.getElementById(nbObjectif - 39).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo73
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr73
            }
        }
        if(document.getElementById(nbObjectif - 38)) {
            document.getElementById(nbObjectif - 38).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo74
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr74
            }
        }
        if(document.getElementById(nbObjectif - 37)) {
            document.getElementById(nbObjectif - 37).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo75
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr75
            }
        }
        if(document.getElementById(nbObjectif - 36)) {
            document.getElementById(nbObjectif - 36).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo76
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr76
            }
        }
        if(document.getElementById(nbObjectif - 35)) {
            document.getElementById(nbObjectif - 35).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo77
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr77
            }
        }
        if(document.getElementById(nbObjectif - 34)) {
            document.getElementById(nbObjectif - 34).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo78
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr78
            }
        }
        if(document.getElementById(nbObjectif - 33)) {
            document.getElementById(nbObjectif - 33).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo79
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr79
            }
        }
        if(document.getElementById(nbObjectif - 32)) {
            document.getElementById(nbObjectif - 32).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo80
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr80
            }
        }
        if(document.getElementById(nbObjectif - 31)) {
            document.getElementById(nbObjectif - 31).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo81
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr81
            }
        }
        if(document.getElementById(nbObjectif - 30)) {
            document.getElementById(nbObjectif - 30).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo82
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr82
            }
        }
        if(document.getElementById(nbObjectif - 29)) {
            document.getElementById(nbObjectif - 29).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo83
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr83
            }
        }
        if(document.getElementById(nbObjectif - 28)) {
            document.getElementById(nbObjectif - 28).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo84
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr84
            }
        }
        if(document.getElementById(nbObjectif - 27)) {
            document.getElementById(nbObjectif - 27).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo85
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr85
            }
        }
        if(document.getElementById(nbObjectif - 26)) {
            document.getElementById(nbObjectif - 26).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo86
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr86
            }
        }
        if(document.getElementById(nbObjectif - 25)) {
            document.getElementById(nbObjectif - 25).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo87
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr87
            }
        }
        if(document.getElementById(nbObjectif - 24)) {
            document.getElementById(nbObjectif - 24).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo88
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr88
            }
        }
        if(document.getElementById(nbObjectif - 23)) {
            document.getElementById(nbObjectif - 23).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo89
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr89
            }
        }
        if(document.getElementById(nbObjectif - 22)) {
            document.getElementById(nbObjectif - 22).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo90
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr90
            }
        }
        if(document.getElementById(nbObjectif - 21)) {
            document.getElementById(nbObjectif - 21).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo91
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr91
            }
        }
        if(document.getElementById(nbObjectif - 20)) {
            document.getElementById(nbObjectif - 20).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo92
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr92
            }
        }
        if(document.getElementById(nbObjectif - 19)) {
            document.getElementById(nbObjectif - 19).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo93
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr93
            }
        }
        if(document.getElementById(nbObjectif - 18)) {
            document.getElementById(nbObjectif - 18).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo94
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr94
            }
        }
        if(document.getElementById(nbObjectif - 17)) {
            document.getElementById(nbObjectif - 17).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo95
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr95
            }
        }
        if(document.getElementById(nbObjectif - 16)) {
            document.getElementById(nbObjectif - 16).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo96
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr96
            }
        }
        if(document.getElementById(nbObjectif - 15)) {
            document.getElementById(nbObjectif - 15).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo97
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr97
            }
        }
        if(document.getElementById(nbObjectif - 14)) {
            document.getElementById(nbObjectif - 14).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo98
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr98
            }
        }
        if(document.getElementById(nbObjectif - 13)) {
            document.getElementById(nbObjectif - 13).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo99
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr99
            }
        }
        if(document.getElementById(nbObjectif - 12)) {
            document.getElementById(nbObjectif - 12).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo100
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr100
            }
        }
        if(document.getElementById(nbObjectif - 11)) {
            document.getElementById(nbObjectif - 11).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo101
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr101
            }
        }
        if(document.getElementById(nbObjectif - 10)) {
            document.getElementById(nbObjectif - 10).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo102
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr102
            }
        }
        if(document.getElementById(nbObjectif - 9)) {
            document.getElementById(nbObjectif - 9).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo103
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr103
            } 
        }
        if(document.getElementById(nbObjectif - 8)) {
            document.getElementById(nbObjectif - 8).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo104
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr104
            }
        }
        if(document.getElementById(nbObjectif - 7)) {
            document.getElementById(nbObjectif - 7).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo105
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr105
            }
        }
        if(document.getElementById(nbObjectif - 6)) {
            document.getElementById(nbObjectif - 6).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo106
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr106
            }
        }
        if(document.getElementById(nbObjectif - 5)) {
            document.getElementById(nbObjectif - 5).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo107
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr107
            }
        }
        if(document.getElementById(nbObjectif - 4)) {
            document.getElementById(nbObjectif - 4).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo108
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr108
            }
        }
        if(document.getElementById(nbObjectif - 3)) {
            document.getElementById(nbObjectif - 3).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo109
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr109
            }
        }
        if(document.getElementById(nbObjectif - 2)) {
            document.getElementById(nbObjectif - 2).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo110
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr110
            }
        }
        if(document.getElementById(nbObjectif - 1)) {
            document.getElementById(nbObjectif - 1).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo111
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr111
            }
        }  
        if(document.getElementById(nbObjectif)) {
            document.getElementById(nbObjectif).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo112
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr
            }
        }  
    }
        
    if (nbPrgT == 3) {
        if(document.getElementById(nbObjectif - 83)) {
            document.getElementById(nbObjectif - 83).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 83).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo1
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr1
            }
        }
        if(document.getElementById(nbObjectif - 82)) {
            document.getElementById(nbObjectif - 82).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 82).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo2
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr2
            }
        }
        if(document.getElementById(nbObjectif - 81)) {
            document.getElementById(nbObjectif - 81).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 81).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo3
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr3
            }
        }
        if(document.getElementById(nbObjectif - 80)) {
            document.getElementById(nbObjectif - 80).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 80).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo4
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr4
            }
        }
        if(document.getElementById(nbObjectif - 79)) {
            document.getElementById(nbObjectif - 79).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 79).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo5
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr5
            }
        }
        if(document.getElementById(nbObjectif - 78)) {
            document.getElementById(nbObjectif - 78).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 78).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo6
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr6
            }
        }
        if(document.getElementById(nbObjectif - 77)) {
            document.getElementById(nbObjectif - 77).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 77).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo7
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr7
            }
        }
        if(document.getElementById(nbObjectif - 76)) {
            document.getElementById(nbObjectif - 76).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 76).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo8
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr8
            }
        }
        if(document.getElementById(nbObjectif - 75)) {
            document.getElementById(nbObjectif - 75).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 75).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo9
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr9
            }
        }
        if(document.getElementById(nbObjectif - 74)) {
            document.getElementById(nbObjectif - 74).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 74).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo10
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr10
            }
        }
        if(document.getElementById(nbObjectif - 73)) {
            document.getElementById(nbObjectif - 73).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 73).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo11
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr11
            }
        }
        if(document.getElementById(nbObjectif - 72)) {
            document.getElementById(nbObjectif - 72).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 72).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo12
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr12
            }
        }
        if(document.getElementById(nbObjectif - 71)) {
            document.getElementById(nbObjectif - 71).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 71).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo13
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr13
            }
        }
        if(document.getElementById(nbObjectif - 70)) {
            document.getElementById(nbObjectif - 70).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 70).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo14
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr14
            }
        }
        if(document.getElementById(nbObjectif - 69)) {
            document.getElementById(nbObjectif - 69).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 69).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo15
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr15
            }
        }
        if(document.getElementById(nbObjectif - 68)) {
            document.getElementById(nbObjectif - 68).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 68).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo16
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr16
            }    
        }
        if(document.getElementById(nbObjectif - 67)) {
            document.getElementById(nbObjectif - 67).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 67).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo17
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr17
            } 
        }
        if(document.getElementById(nbObjectif - 66)) {
            document.getElementById(nbObjectif - 66).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 66).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo18
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr18
            }
        }
        if(document.getElementById(nbObjectif - 65)) {
            document.getElementById(nbObjectif - 65).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 65).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo19
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr19
            }
        }
        if(document.getElementById(nbObjectif - 64)) {
            document.getElementById(nbObjectif - 64).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 64).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo20
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr20
            }
        }
        if(document.getElementById(nbObjectif - 63)) {
            document.getElementById(nbObjectif - 63).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 63).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo21
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr21
            }
        }
        if(document.getElementById(nbObjectif - 62)) {
            document.getElementById(nbObjectif - 62).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 62).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo22
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr22
            }
        }
        if(document.getElementById(nbObjectif - 61)) {
            document.getElementById(nbObjectif - 61).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 61).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo23
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr23
            }
        }
        if(document.getElementById(nbObjectif - 60)) {
            document.getElementById(nbObjectif - 60).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 60).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo24
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr24
            }
        }
        if(document.getElementById(nbObjectif - 59)) {
            document.getElementById(nbObjectif - 59).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 59).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo25
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr25
            }
        }
        if(document.getElementById(nbObjectif - 58)) {
            document.getElementById(nbObjectif - 58).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 58).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo26
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr26
            }
        }
        if(document.getElementById(nbObjectif - 57)) {
            document.getElementById(nbObjectif - 57).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 57).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo27
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr27
            }
        }
        if(document.getElementById(nbObjectif - 56)) {
            document.getElementById(nbObjectif - 56).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 56).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo28
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr28
            }
        }
        if(document.getElementById(nbObjectif - 55)) {
            document.getElementById(nbObjectif - 55).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo29
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr29
            }
        }
        if(document.getElementById(nbObjectif - 54)) {
            document.getElementById(nbObjectif - 54).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo30
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr30
            }
        }
        if(document.getElementById(nbObjectif - 53)) {
            document.getElementById(nbObjectif - 53).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]  
                document.getElementById("exoInstruction").innerText = localStorage.exo31
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr31
            }
        }
        if(document.getElementById(nbObjectif - 52)) {
            document.getElementById(nbObjectif - 52).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo32
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr32
            }
        }
        if(document.getElementById(nbObjectif - 51)) {
            document.getElementById(nbObjectif - 51).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo33
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr33
            }
        }
        if(document.getElementById(nbObjectif - 50)) {
            document.getElementById(nbObjectif - 50).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo34
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr34
            }
        }
        if(document.getElementById(nbObjectif - 49)) {
            document.getElementById(nbObjectif - 49).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo35
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr35
            }
        }
        if(document.getElementById(nbObjectif - 48)) {
            document.getElementById(nbObjectif - 48).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo36
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr36
            }
        }
        if(document.getElementById(nbObjectif - 47)) {
            document.getElementById(nbObjectif - 47).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo37
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr37
            }
        }
        if(document.getElementById(nbObjectif - 46)) {
            document.getElementById(nbObjectif - 46).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo38
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr38
            }
        }
        if(document.getElementById(nbObjectif - 45)) {
            document.getElementById(nbObjectif - 45).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo39
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr39
            }
        }
        if(document.getElementById(nbObjectif - 44)) {
            document.getElementById(nbObjectif - 44).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo40
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr40
            }
        }
        if(document.getElementById(nbObjectif - 43)) {
            document.getElementById(nbObjectif - 43).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo41
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr41
            }
        }
        if(document.getElementById(nbObjectif - 42)) {
            document.getElementById(nbObjectif - 42).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo42
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr42
            }
        }
        if(document.getElementById(nbObjectif - 41)) {
            document.getElementById(nbObjectif - 41).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo43
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr43
            }
        }
        if(document.getElementById(nbObjectif - 40)) {
            document.getElementById(nbObjectif - 40).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo44
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr44
            }
        }
        if(document.getElementById(nbObjectif - 39)) {
            document.getElementById(nbObjectif - 39).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo45
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr45
            }
        }
        if(document.getElementById(nbObjectif - 38)) {
            document.getElementById(nbObjectif - 38).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo46
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr46
            }
        }
        if(document.getElementById(nbObjectif - 37)) {
            document.getElementById(nbObjectif - 37).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo47
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr47
            }
        }
        if(document.getElementById(nbObjectif - 36)) {
            document.getElementById(nbObjectif - 36).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo48
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr48
            }
        }
        if(document.getElementById(nbObjectif - 35)) {
            document.getElementById(nbObjectif - 35).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo49
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr49
            }
        }
        if(document.getElementById(nbObjectif - 34)) {
            document.getElementById(nbObjectif - 34).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo50
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr50
            }
        }
        if(document.getElementById(nbObjectif - 33)) {
            document.getElementById(nbObjectif - 33).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo51
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr51
            }
        }
        if(document.getElementById(nbObjectif - 32)) {
            document.getElementById(nbObjectif - 32).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo52
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr52
            }
        }
        if(document.getElementById(nbObjectif - 31)) {
            document.getElementById(nbObjectif - 31).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo53
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr53
            }
        }
        if(document.getElementById(nbObjectif - 30)) {
            document.getElementById(nbObjectif - 30).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo54
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr54
            }
        }
        if(document.getElementById(nbObjectif - 29)) {
            document.getElementById(nbObjectif - 29).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo55
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr55
            }
        }
        if(document.getElementById(nbObjectif - 28)) {
            document.getElementById(nbObjectif - 28).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo56
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr56
            }
        }
        if(document.getElementById(nbObjectif - 27)) {
            document.getElementById(nbObjectif - 27).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo57
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr57
            }
        }
        if(document.getElementById(nbObjectif - 26)) {
            document.getElementById(nbObjectif - 26).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo58
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr58
            }
        }
        if(document.getElementById(nbObjectif - 25)) {
            document.getElementById(nbObjectif - 25).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo59
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr59
            }
        }
        if(document.getElementById(nbObjectif - 24)) {
            document.getElementById(nbObjectif - 24).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo60
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr60
            }
        }
        if(document.getElementById(nbObjectif - 23)) {
            document.getElementById(nbObjectif - 23).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo61
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr61
            }
        }
        if(document.getElementById(nbObjectif - 22)) {
            document.getElementById(nbObjectif - 22).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo62
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr62
            }
        }
        if(document.getElementById(nbObjectif - 21)) {
            document.getElementById(nbObjectif - 21).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo63
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr63
            }
        }
        if(document.getElementById(nbObjectif - 20)) {
            document.getElementById(nbObjectif - 20).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo64
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr64
            }
        }
        if(document.getElementById(nbObjectif - 19)) {
            document.getElementById(nbObjectif - 19).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo65
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr65
            }
        }
        if(document.getElementById(nbObjectif - 18)) {
            document.getElementById(nbObjectif - 18).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo66
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr66
            }
        }
        if(document.getElementById(nbObjectif - 17)) {
            document.getElementById(nbObjectif - 17).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo67
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr67
            }
        }
        if(document.getElementById(nbObjectif - 16)) {
            document.getElementById(nbObjectif - 16).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo68
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr68
            }
        }
        if(document.getElementById(nbObjectif - 15)) {
            document.getElementById(nbObjectif - 15).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo69
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr69
            }
        }
        if(document.getElementById(nbObjectif - 14)) {
            document.getElementById(nbObjectif - 14).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo70
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr70
            }
        }
        if(document.getElementById(nbObjectif - 13)) {
            document.getElementById(nbObjectif - 13).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo71
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr71
            }
        }
        if(document.getElementById(nbObjectif - 12)) {
            document.getElementById(nbObjectif - 12).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo72
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr72
            }
        }
        if(document.getElementById(nbObjectif - 11)) {
            document.getElementById(nbObjectif - 11).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo73
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr73
            }
        }
        if(document.getElementById(nbObjectif - 10)) {
            document.getElementById(nbObjectif - 10).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo74
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr74
            }
        }
        if(document.getElementById(nbObjectif - 9)) {
            document.getElementById(nbObjectif - 9).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo75
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr75
            } 
        }
        if(document.getElementById(nbObjectif - 8)) {
            document.getElementById(nbObjectif - 8).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo76
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr76
            }
        }
        if(document.getElementById(nbObjectif - 7)) {
            document.getElementById(nbObjectif - 7).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo77
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr77
            }
        }
        if(document.getElementById(nbObjectif - 6)) {
            document.getElementById(nbObjectif - 6).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo78
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr78
            }
        }
        if(document.getElementById(nbObjectif - 5)) {
            document.getElementById(nbObjectif - 5).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo79
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr79
            }
        }
        if(document.getElementById(nbObjectif - 4)) {
            document.getElementById(nbObjectif - 4).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo80
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr80
            }
        }
        if(document.getElementById(nbObjectif - 3)) {
            document.getElementById(nbObjectif - 3).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo81
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr81
            }
        }
        if(document.getElementById(nbObjectif - 2)) {
            document.getElementById(nbObjectif - 2).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo82
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr82
            }
        }
        if(document.getElementById(nbObjectif - 1)) {
            document.getElementById(nbObjectif - 1).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo83
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr83
            }
        }  
        if(document.getElementById(nbObjectif)) {
            document.getElementById(nbObjectif).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo84
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr84
            }
        }  
    }

    if (nbPrgT == 2) {
        if(document.getElementById(nbObjectif - 55)) {
            document.getElementById(nbObjectif - 55).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo1
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr1
            }
        }
        if(document.getElementById(nbObjectif - 54)) {
            document.getElementById(nbObjectif - 54).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo2
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr2
            }
        }
        if(document.getElementById(nbObjectif - 53)) {
            document.getElementById(nbObjectif - 53).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]  
                document.getElementById("exoInstruction").innerText = localStorage.exo3
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr3
            }
        }
        if(document.getElementById(nbObjectif - 52)) {
            document.getElementById(nbObjectif - 52).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo4
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr4
            }
        }
        if(document.getElementById(nbObjectif - 51)) {
            document.getElementById(nbObjectif - 51).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo5
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr5
            }
        }
        if(document.getElementById(nbObjectif - 50)) {
            document.getElementById(nbObjectif - 50).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo6
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr6
            }
        }
        if(document.getElementById(nbObjectif - 49)) {
            document.getElementById(nbObjectif - 49).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo7
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr7
            }
        }
        if(document.getElementById(nbObjectif - 48)) {
            document.getElementById(nbObjectif - 48).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo8
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr8
            }
        }
        if(document.getElementById(nbObjectif - 47)) {
            document.getElementById(nbObjectif - 47).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo9
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr9
            }
        }
        if(document.getElementById(nbObjectif - 46)) {
            document.getElementById(nbObjectif - 46).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo10
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr10
            }
        }
        if(document.getElementById(nbObjectif - 45)) {
            document.getElementById(nbObjectif - 45).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo11
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr11
            }
        }
        if(document.getElementById(nbObjectif - 44)) {
            document.getElementById(nbObjectif - 44).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo12
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr12
            }
        }
        if(document.getElementById(nbObjectif - 43)) {
            document.getElementById(nbObjectif - 43).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo13
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr13
            }
        }
        if(document.getElementById(nbObjectif - 42)) {
            document.getElementById(nbObjectif - 42).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo14
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr14
            }
        }
        if(document.getElementById(nbObjectif - 41)) {
            document.getElementById(nbObjectif - 41).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo15
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr15
            }
        }
        if(document.getElementById(nbObjectif - 40)) {
            document.getElementById(nbObjectif - 40).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo16
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr16
            }
        }
        if(document.getElementById(nbObjectif - 39)) {
            document.getElementById(nbObjectif - 39).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo17
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr17
            }
        }
        if(document.getElementById(nbObjectif - 38)) {
            document.getElementById(nbObjectif - 38).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo18
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr18
            }
        }
        if(document.getElementById(nbObjectif - 37)) {
            document.getElementById(nbObjectif - 37).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo19
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr19
            }
        }
        if(document.getElementById(nbObjectif - 36)) {
            document.getElementById(nbObjectif - 36).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo20
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr20
            }
        }
        if(document.getElementById(nbObjectif - 35)) {
            document.getElementById(nbObjectif - 35).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo21
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr21
            }
        }
        if(document.getElementById(nbObjectif - 34)) {
            document.getElementById(nbObjectif - 34).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo22
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr22
            }
        }
        if(document.getElementById(nbObjectif - 33)) {
            document.getElementById(nbObjectif - 33).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo23
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr23
            }
        }
        if(document.getElementById(nbObjectif - 32)) {
            document.getElementById(nbObjectif - 32).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo24
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr24
            }
        }
        if(document.getElementById(nbObjectif - 31)) {
            document.getElementById(nbObjectif - 31).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo25
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr25
            }
        }
        if(document.getElementById(nbObjectif - 30)) {
            document.getElementById(nbObjectif - 30).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo26
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr26
            }
        }
        if(document.getElementById(nbObjectif - 29)) {
            document.getElementById(nbObjectif - 29).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo27
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr27
            }
        }
        if(document.getElementById(nbObjectif - 28)) {
            document.getElementById(nbObjectif - 28).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo28
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr28
            }
        }
        if(document.getElementById(nbObjectif - 27)) {
            document.getElementById(nbObjectif - 27).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo29
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr29
            }
        }
        if(document.getElementById(nbObjectif - 26)) {
            document.getElementById(nbObjectif - 26).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo30
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr30
            }
        }
        if(document.getElementById(nbObjectif - 25)) {
            document.getElementById(nbObjectif - 25).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo31
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr31
            }
        }
        if(document.getElementById(nbObjectif - 24)) {
            document.getElementById(nbObjectif - 24).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo32
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr32
            }
        }
        if(document.getElementById(nbObjectif - 23)) {
            document.getElementById(nbObjectif - 23).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo33
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr33
            }
        }
        if(document.getElementById(nbObjectif - 22)) {
            document.getElementById(nbObjectif - 22).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo34
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr34
            }
        }
        if(document.getElementById(nbObjectif - 21)) {
            document.getElementById(nbObjectif - 21).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo35
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr35
            }
        }
        if(document.getElementById(nbObjectif - 20)) {
            document.getElementById(nbObjectif - 20).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo36
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr36
            }
        }
        if(document.getElementById(nbObjectif - 19)) {
            document.getElementById(nbObjectif - 19).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo37
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr37
            }
        }
        if(document.getElementById(nbObjectif - 18)) {
            document.getElementById(nbObjectif - 18).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo38
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr38
            }
        }
        if(document.getElementById(nbObjectif - 17)) {
            document.getElementById(nbObjectif - 17).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo39
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr39
            }
        }
        if(document.getElementById(nbObjectif - 16)) {
            document.getElementById(nbObjectif - 16).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo40
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr40
            }
        }
        if(document.getElementById(nbObjectif - 15)) {
            document.getElementById(nbObjectif - 15).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo41
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr41
            }
        }
        if(document.getElementById(nbObjectif - 14)) {
            document.getElementById(nbObjectif - 14).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo42
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr42
            }
        }
        if(document.getElementById(nbObjectif - 13)) {
            document.getElementById(nbObjectif - 13).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo43
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr43
            }
        }
        if(document.getElementById(nbObjectif - 12)) {
            document.getElementById(nbObjectif - 12).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo44
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr44
            }
        }
        if(document.getElementById(nbObjectif - 11)) {
            document.getElementById(nbObjectif - 11).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo45
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr45
            }
        }
        if(document.getElementById(nbObjectif - 10)) {
            document.getElementById(nbObjectif - 10).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo46
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr46
            }
        }
        if(document.getElementById(nbObjectif - 9)) {
            document.getElementById(nbObjectif - 9).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo47
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr47
            } 
        }
        if(document.getElementById(nbObjectif - 8)) {
            document.getElementById(nbObjectif - 8).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo48
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr48
            }
        }
        if(document.getElementById(nbObjectif - 7)) {
            document.getElementById(nbObjectif - 7).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo49
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr49
            }
        }
        if(document.getElementById(nbObjectif - 6)) {
            document.getElementById(nbObjectif - 6).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo50
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr50
            }
        }
        if(document.getElementById(nbObjectif - 5)) {
            document.getElementById(nbObjectif - 5).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo51
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr51
            }
        }
        if(document.getElementById(nbObjectif - 4)) {
            document.getElementById(nbObjectif - 4).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo52
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr52
            }
        }
        if(document.getElementById(nbObjectif - 3)) {
            document.getElementById(nbObjectif - 3).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo53
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr53
            }
        }
        if(document.getElementById(nbObjectif - 2)) {
            document.getElementById(nbObjectif - 2).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo54
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr54
            }
        }
        if(document.getElementById(nbObjectif - 1)) {
            document.getElementById(nbObjectif - 1).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo55
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr55
            }
        }  
        if(document.getElementById(nbObjectif)) {
            document.getElementById(nbObjectif).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo56
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr56
            }
        }  
    }

//     if (nbPrgT == 4) {
//         //semaine 1     
//         if (nbPrgJ >= 4) {document.getElementById("10001").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {document.getElementById("10002").style.backgroundColor = ""}
//         if (nbPrgJ >= 3) {document.getElementById("10003").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10004").style.backgroundColor = "green"}
//         if (nbPrgJ >= 6) {document.getElementById("10005").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10006").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10007").style.backgroundColor = "green"}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 111)) { document.getElementById(12001).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 110)) { document.getElementById(12002).innerText = "";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 109)) { document.getElementById(12003).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 108)) { document.getElementById(12004).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 107)) { document.getElementById(12005).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 106)) { document.getElementById(12006).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 105)) { document.getElementById(12007).innerText = "séance d'endurance";}}
//         //semaine 2       
//         if (nbPrgJ >= 7) {document.getElementById("10008").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10009").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10010").style.backgroundColor = "red"}
//         if (nbPrgJ >= 6) {document.getElementById("10011").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10012").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10013").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10014").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 104)) { document.getElementById(12008).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 103)) { document.getElementById(12009).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 102)) { document.getElementById(12010).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 101)) { document.getElementById(12011).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 100)) { document.getElementById(12012).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 99)) { document.getElementById(12013).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 98)) { document.getElementById(12014).innerText = "séance d'endurance";}}
//         //semaine 3       
//         if (nbPrgJ >= 7) {document.getElementById("10015").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10016").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10017").style.backgroundColor = "green"}
//         if (nbPrgJ >= 6) {document.getElementById("10018").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 5) {document.getElementById("10019").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10020").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10021").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 97)) {document.getElementById(12015).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 96)) {document.getElementById(12016).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 95)) {document.getElementById(12017).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 94)) {document.getElementById(12018).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 93)) {document.getElementById(12019).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 92)) {document.getElementById(12020).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 91)) {document.getElementById(12021).innerText = "séance d'endurance";}}
//         //semaine 4      
//         if (nbPrgJ >= 7) {document.getElementById("10022").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10023").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10024").style.backgroundColor = "green"}
//         if (nbPrgJ >= 6) {document.getElementById("10025").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10026").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10027").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10028").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 90)) { document.getElementById(12022).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 89)) { document.getElementById(12023).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 88)) { document.getElementById(12024).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 87)) { document.getElementById(12025).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 86)) { document.getElementById(12026).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 85)) { document.getElementById(12027).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 84)) { document.getElementById(12028).innerText = "séance d'endurance";}}
//         //semaine 5     
//         if (nbPrgJ >= 7) {document.getElementById("10029").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10030").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10031").style.backgroundColor = "green"}
//         if (nbPrgJ >= 6) {document.getElementById("10032").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10033").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10034").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10035").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 83)) { document.getElementById(12029).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 82)) { document.getElementById(12030).innerText = "séance d'edurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 81)) { document.getElementById(12031).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 80)) { document.getElementById(12032).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 79)) { document.getElementById(12033).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 78)) { document.getElementById(12034).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 77)) { document.getElementById(12035).innerText = "séance d'endurance";}}
//         //semaine 6     
//         if (nbPrgJ >= 7) {document.getElementById("10036").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10037").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10038").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 6) {document.getElementById("10039").style.backgroundColor = "red"}
//         if (nbPrgJ >= 5) {document.getElementById("10040").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10041").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10042").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 76)) { document.getElementById(12036).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 75)) { document.getElementById(12037).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 74)) { document.getElementById(12038).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 73)) { document.getElementById(12039).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 72)) { document.getElementById(12040).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 71)) { document.getElementById(12041).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 70)) { document.getElementById(12042).innerText = "séance d'endurance";}}
//         //semaine 7       
//         if (nbPrgJ >= 7) {document.getElementById("10043").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10044").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10045").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 6) {document.getElementById("10046").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10047").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10048").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10049").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 69)) { document.getElementById(12043).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 68)) { document.getElementById(12044).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 67)) { document.getElementById(12045).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 66)) { document.getElementById(12046).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 65)) { document.getElementById(12047).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 64)) { document.getElementById(12048).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 63)) { document.getElementById(12049).innerText = "séance de seuil";}}
//         //semaine 8       
//         if (nbPrgJ >= 7) {document.getElementById("10050").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10051").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10052").style.backgroundColor = "green"}
//         if (nbPrgJ >= 6) {document.getElementById("10053").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 5) {document.getElementById("10054").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10055").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10056").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 62)) { document.getElementById(12050).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 61)) { document.getElementById(12051).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 60)) { document.getElementById(12052).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 59)) { document.getElementById(12053).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 58)) { document.getElementById(12054).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 57)) { document.getElementById(12055).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 56)) { document.getElementById(12056).innerText = "séance d'endurance";}}
//         //semaine 9     
//         if (nbPrgJ >= 7) {document.getElementById("10057").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10058").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10059").style.backgroundColor = "green"}
//         if (nbPrgJ >= 6) {document.getElementById("10060").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 5) {document.getElementById("10061").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10062").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10063").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 55)) { document.getElementById(12057).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 54)) { document.getElementById(12058).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 53)) { document.getElementById(12059).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 52)) { document.getElementById(12060).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 51)) { document.getElementById(12061).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 50)) { document.getElementById(12062).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 49)) { document.getElementById(12063).innerText = "séance d'endurance";}}
//         //semaine 10   
//         if (nbPrgJ >= 7) {document.getElementById("10064").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10065").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10066").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 6) {document.getElementById("10067").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10068").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10069").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10070").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 48)) { document.getElementById(12064).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 47)) { document.getElementById(12065).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 46)) { document.getElementById(12066).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 45)) { document.getElementById(12067).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 44)) { document.getElementById(12068).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 43)) { document.getElementById(12069).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 42)) { document.getElementById(12070).innerText = "séance d'endurance";}}
//         //semaine 11     
//         if (nbPrgJ >= 7) {document.getElementById("10071").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10072").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10073").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 6) {document.getElementById("10074").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10075").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10076").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10077").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 41)) { document.getElementById(12071).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 40)) { document.getElementById(12072).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 39)) { document.getElementById(12073).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 38)) { document.getElementById(12074).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 37)) { document.getElementById(12075).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 36)) { document.getElementById(12076).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 35)) { document.getElementById(12077).innerText = "séance d'endurance";}}
//         //semaine 12   
//         if (nbPrgJ >= 7) {document.getElementById("10078").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10079").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10080").style.backgroundColor = "green"}
//         if (nbPrgJ >= 6) {document.getElementById("10081").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 5) {document.getElementById("10082").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10083").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10084").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 34)) { document.getElementById(12078).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 33)) { document.getElementById(12079).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 32)) { document.getElementById(12080).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 31)) { document.getElementById(12081).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 30)) { document.getElementById(12082).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 29)) { document.getElementById(12083).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 28)) { document.getElementById(12084).innerText = "séance d'endurance";}}
//         //semaine 13       
//         if (nbPrgJ >= 7) {document.getElementById("10085").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10086").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10087").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 6) {document.getElementById("10088").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10089").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10090").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10091").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 27)) { document.getElementById(12085).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 26)) { document.getElementById(12086).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 25)) { document.getElementById(12087).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 24)) { document.getElementById(12088).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 23)) { document.getElementById(12089).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 22)) { document.getElementById(12090).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 21)) { document.getElementById(12091).innerText = "séance d'endurance";}}
//         //semaine 14    
//         if (nbPrgJ >= 7) {document.getElementById("10092").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10093").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10094").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 6) {document.getElementById("10095").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10096").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10097").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10098").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 20)) { document.getElementById(12092).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 19)) { document.getElementById(12093).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 18)) { document.getElementById(12094).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 17)) { document.getElementById(12095).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 16)) { document.getElementById(12096).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 15)) { document.getElementById(12097).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 14)) { document.getElementById(12098).innerText = "séance d'endurance";}}
//         //semaine 15     
//         if (nbPrgJ >= 5) {document.getElementById("10099").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10101").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10104").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 13)) {document.getElementById(12099).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 11)) { document.getElementById(12101).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 8)) { document.getElementById(12104).innerText = "séance de PMA";}}
//         //semaine 16      
//         if (nbPrgJ >= 5) {document.getElementById("10106").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10108").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10111").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 6)) { document.getElementById(12106).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 4)) { document.getElementById(12108).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 1)) { document.getElementById(12111).innerText = "séance de débloquage";}}
//     }
    
//     else if (nbPrgT == 3) {
//         //semaine 1     
//         if (nbPrgJ >= 4) {document.getElementById("10001").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {document.getElementById("10002").style.backgroundColor = ""}
//         if (nbPrgJ >= 3) {document.getElementById("10003").style.backgroundColor = "green"}
//         if (nbPrgJ >= 6) {document.getElementById("10004").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10005").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10006").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10007").style.backgroundColor = "green"}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 83)) { document.getElementById(12001).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 82)) { document.getElementById(12002).innerText = "";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 81)) { document.getElementById(12003).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 80)) { document.getElementById(12004).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 79)) { document.getElementById(12005).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 78)) { document.getElementById(12006).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 77)) { document.getElementById(12007).innerText = "séance d'endurance";}}
//         //semaine 2       
//         if (nbPrgJ >= 7) {document.getElementById("10008").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10009").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10010").style.backgroundColor = "red"}
//         if (nbPrgJ >= 6) {document.getElementById("10011").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10012").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10013").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10014").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 76)) { document.getElementById(12008).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 75)) { document.getElementById(12009).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 74)) { document.getElementById(12010).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 73)) { document.getElementById(12011).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 72)) { document.getElementById(12012).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 71)) { document.getElementById(12013).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 70)) { document.getElementById(12014).innerText = "séance d'endurance";}}
//         //semaine 3       
//         if (nbPrgJ >= 7) {document.getElementById("10015").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10016").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10017").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 6) {document.getElementById("10018").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10019").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10020").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10021").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 69)) { document.getElementById(12015).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 68)) { document.getElementById(12016).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 67)) { document.getElementById(12017).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 66)) { document.getElementById(12018).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 65)) { document.getElementById(12019).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 64)) { document.getElementById(12020).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 63)) { document.getElementById(12021).innerText = "séance d'endurance";}}
//         //semaine 4      
//         if (nbPrgJ >= 7) {document.getElementById("10022").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10023").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10024").style.backgroundColor = "green"}
//         if (nbPrgJ >= 6) {document.getElementById("10025").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 5) {document.getElementById("10026").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10027").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10028").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 62)) { document.getElementById(12022).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 61)) { document.getElementById(12023).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 60)) { document.getElementById(12024).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 59)) { document.getElementById(12025).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 58)) { document.getElementById(12026).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 57)) { document.getElementById(12027).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 56)) { document.getElementById(12028).innerText = "séance d'endurance";}}
//         //semaine 5     
//         if (nbPrgJ >= 7) {document.getElementById("10029").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10030").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10031").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 6) {document.getElementById("10032").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10033").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10034").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10035").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 55)) { document.getElementById(12029).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 54)) { document.getElementById(12030).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 53)) { document.getElementById(12031).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 52)) { document.getElementById(12032).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 51)) { document.getElementById(12033).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 50)) { document.getElementById(12034).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 49)) { document.getElementById(12035).innerText = "séance d'endurance";}}
//         //semaine 6     
//         if (nbPrgJ >= 7) {document.getElementById("10036").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10037").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10038").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 6) {document.getElementById("10039").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 5) {document.getElementById("10040").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10041").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10042").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 48)) { document.getElementById(12036).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 47)) { document.getElementById(12037).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 46)) { document.getElementById(12038).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 45)) { document.getElementById(12039).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 44)) { document.getElementById(12040).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 43)) { document.getElementById(12041).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 42)) { document.getElementById(12042).innerText = "séance d'endurance";}}
//         //semaine 7       
//         if (nbPrgJ >= 7) {document.getElementById("10043").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10044").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10045").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 6) {document.getElementById("10046").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10047").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10048").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10049").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 41)) { document.getElementById(12043).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 40)) { document.getElementById(12044).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 39)) { document.getElementById(12045).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 38)) { document.getElementById(12046).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 37)) { document.getElementById(12047).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 36)) { document.getElementById(12048).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 35)) { document.getElementById(12049).innerText = "séance de PMA";}}
//         //semaine 8       
//         if (nbPrgJ >= 7) {document.getElementById("10050").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10051").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10052").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 6) {document.getElementById("10053").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10054").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10055").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10056").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 34)) { document.getElementById(12050).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 33)) { document.getElementById(12051).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 32)) { document.getElementById(12052).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 31)) { document.getElementById(12053).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 30)) { document.getElementById(12054).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 29)) { document.getElementById(12055).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 28)) { document.getElementById(12056).innerText = "séance de PMA";}}
//         //semaine 9     
//         if (nbPrgJ >= 7) {document.getElementById("10057").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10058").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10059").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 6) {document.getElementById("10060").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10061").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10062").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10063").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 27)) { document.getElementById(12057).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 26)) { document.getElementById(12058).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 25)) { document.getElementById(12059).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 24)) { document.getElementById(12060).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 23)) { document.getElementById(12061).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 22)) { document.getElementById(12062).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 21)) { document.getElementById(12063).innerText = "séance de PMA";}}
//         //semaine 10      
//         if (nbPrgJ >= 7) {document.getElementById("10064").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10065").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10066").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 6) {document.getElementById("10067").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10068").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10069").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10070").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 20)) { document.getElementById(12064).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 19)) { document.getElementById(12065).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 18)) { document.getElementById(12066).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 17)) { document.getElementById(12067).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 16)) { document.getElementById(12068).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 15)) { document.getElementById(12069).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 14)) { document.getElementById(12070).innerText = "séance d'endurance";}}
//         //semaine 11     
//         if (nbPrgJ >= 5) {document.getElementById("10071").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10073").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10076").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 13)) { document.getElementById(12071).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 11)) { document.getElementById(12073).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 8)) { document.getElementById(12076).innerText = "séance de PMA";}}
//         //semaine 12   
//         if (nbPrgJ >= 5) {document.getElementById("10078").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10080").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10083").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 6)) { document.getElementById(12078).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 4)) { document.getElementById(12080).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 1)) { document.getElementById(12083).innerText = "séance de débloquage";}}
//     }
    
//     else if (nbPrgT == 2) {
//         //semaine 1     
//         if (nbPrgJ >= 4) {document.getElementById("10001").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {document.getElementById("10002").style.backgroundColor = ""}
//         if (nbPrgJ >= 3) {document.getElementById("10003").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10004").style.backgroundColor = "green"}
//         if (nbPrgJ >= 6) {document.getElementById("10005").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10006").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10007").style.backgroundColor = "green"}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 55)) { document.getElementById(12001).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 54)) { document.getElementById(12002).innerText = "";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 53)) { document.getElementById(12003).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 52)) { document.getElementById(12004).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 51)) { document.getElementById(12005).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 50)) { document.getElementById(12006).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 49)) { document.getElementById(12007).innerText = "séance d'endurance";}}
//         //semaine 2       
//         if (nbPrgJ >= 7) {document.getElementById("10008").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10009").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10010").style.backgroundColor = "red"}
//         if (nbPrgJ >= 6) {document.getElementById("10011").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10012").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10013").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10014").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 48)) { document.getElementById(12008).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 47)) { document.getElementById(12009).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 46)) { document.getElementById(12010).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 45)) { document.getElementById(12011).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 44)) { document.getElementById(12012).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 43)) { document.getElementById(12013).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 42)) { document.getElementById(12014).innerText = "séance d'endurance";}}
//         //semaine 3       
//         if (nbPrgJ >= 7) {document.getElementById("10015").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10016").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10017").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 6) {document.getElementById("10018").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10019").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10020").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10021").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 41)) { document.getElementById(12015).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 40)) { document.getElementById(12016).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 39)) { document.getElementById(12017).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 38)) { document.getElementById(12018).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 37)) { document.getElementById(12019).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 36)) { document.getElementById(12020).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 35)) { document.getElementById(12021).innerText = "séance de seuil";}}
//         //semaine 4      
//         if (nbPrgJ >= 7) {document.getElementById("10022").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10023").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10024").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 6) {document.getElementById("10025").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10026").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10027").style.backgroundColor = "yellow"}
//         if (nbPrgJ >= 3) {document.getElementById("10028").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 34)) { document.getElementById(12022).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 33)) { document.getElementById(12023).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 32)) { document.getElementById(12024).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 31)) { document.getElementById(12025).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 30)) { document.getElementById(12026).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 29)) { document.getElementById(12027).innerText = "séance de seuil";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 28)) { document.getElementById(12028).innerText = "séance d'endurance";}}
//         //semaine 5     
//         if (nbPrgJ >= 7) {document.getElementById("10029").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10030").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10031").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 6) {document.getElementById("10032").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10033").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10034").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10035").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 27)) {  document.getElementById(12029).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 26)) {  document.getElementById(12030).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 25)) { document.getElementById(12031).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 24)) { document.getElementById(12032).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 23)) { document.getElementById(12033).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 22)) { document.getElementById(12034).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 21)) { document.getElementById(12035).innerText = "séance d'endurance";}}
//         //semaine 6     
//         if (nbPrgJ >= 7) {document.getElementById("10036").style.backgroundColor = ""}
//         if (nbPrgJ >= 4) {document.getElementById("10037").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10038").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 6) {document.getElementById("10039").style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {document.getElementById("10040").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10041").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10042").style.backgroundColor = "green"}
//         if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 20)) { document.getElementById(12036).innerText = "";}}
//         if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 19)) { document.getElementById(12037).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 18)) { document.getElementById(12038).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 17)) { document.getElementById(12039).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 16)) { document.getElementById(12040).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 15)) {document.getElementById(12041).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 14)) {document.getElementById(12042).innerText = "séance d'endurance";}}
//         //semaine 7       
//         if (nbPrgJ >= 5) {document.getElementById("10043").style.backgroundColor = "red"}
//         if (nbPrgJ >= 3) {document.getElementById("10045").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10048").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 13)) {document.getElementById(12043).innerText = "séance de sprint";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 11)) {document.getElementById(12045).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 8)) {document.getElementById(12048).innerText = "séance de PMA";}}
//         //semaine 8       
//         if (nbPrgJ >= 5) {document.getElementById("10050").style.backgroundColor = "green"}
//         if (nbPrgJ >= 3) {document.getElementById("10052").style.backgroundColor = "orange"}
//         if (nbPrgJ >= 3) {document.getElementById("10055") .style.backgroundColor = "green"}
//         if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 6)) {document.getElementById(12050).innerText = "séance d'endurance";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 4)) {document.getElementById(12052).innerText = "séance de PMA";}}
//         if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 1)) {document.getElementById(12055).innerText = "séance de débloquage";}}
//     }
    }
}