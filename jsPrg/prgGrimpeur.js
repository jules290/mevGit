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
            }
        }  
        if(document.getElementById(nbObjectif - 110)) {
            document.getElementById(nbObjectif - 110).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 110).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo2
            }
        }
        if(document.getElementById(nbObjectif - 109)) {
            document.getElementById(nbObjectif - 109).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 109).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo3
            }
        }   
        if(document.getElementById(nbObjectif - 108)) {
            document.getElementById(nbObjectif - 108).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 108).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo4
            }
        }
        if(document.getElementById(nbObjectif - 107)) {
            document.getElementById(nbObjectif - 107).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 107).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo5
            }
        }
        if(document.getElementById(nbObjectif - 106)) {
            document.getElementById(nbObjectif - 106).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 106).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo6
            }
        }
        if(document.getElementById(nbObjectif -105 )) {
            document.getElementById(nbObjectif - 105).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 105).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo7
            }
        }
        if(document.getElementById(nbObjectif - 104)) {
            document.getElementById(nbObjectif - 104).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 104).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo8
            }
        }
        if(document.getElementById(nbObjectif - 103)) {
            document.getElementById(nbObjectif - 103).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 103).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo9
            }
        }
        if(document.getElementById(nbObjectif - 102)) {
            document.getElementById(nbObjectif - 102).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 102).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo10
            }
        }
        if(document.getElementById(nbObjectif - 101)) {
            document.getElementById(nbObjectif - 101).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 101).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo11
            }
        }
        if(document.getElementById(nbObjectif - 100)) {
            document.getElementById(nbObjectif - 100).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 100).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo12
            }
        }
        if(document.getElementById(nbObjectif - 99)) {
            document.getElementById(nbObjectif - 99).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 99).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo13
            }
        }
        if(document.getElementById(nbObjectif - 98)) {
            document.getElementById(nbObjectif - 98).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 98).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo14
            }
        }
        if(document.getElementById(nbObjectif - 97)) {
            document.getElementById(nbObjectif - 97).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 97).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo15
            }
        }
        if(document.getElementById(nbObjectif - 96)) {
            document.getElementById(nbObjectif - 96).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 96).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo16
            }  
        }
        if(document.getElementById(nbObjectif - 95)) {
            document.getElementById(nbObjectif - 95).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 95).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo17
            }
        }
        if(document.getElementById(nbObjectif - 94)) {
            document.getElementById(nbObjectif - 94).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 94).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo18
            }
        }
        if(document.getElementById(nbObjectif - 93)) {
            document.getElementById(nbObjectif - 93).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 93).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo19
            }
        }
        if(document.getElementById(nbObjectif - 92)) {
            document.getElementById(nbObjectif - 92).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 92).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo20
            }
        }
        if(document.getElementById(nbObjectif - 91)) {
            document.getElementById(nbObjectif - 91).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 91).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo21
            }
        }
        if(document.getElementById(nbObjectif - 90)) {
            document.getElementById(nbObjectif - 90).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 90).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo22
            }
        }
        if(document.getElementById(nbObjectif - 89)) {
            document.getElementById(nbObjectif - 89).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 89).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo23
            }
        }
        if(document.getElementById(nbObjectif - 88)) {
            document.getElementById(nbObjectif - 88).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 88).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo24
            }
        }
        if(document.getElementById(nbObjectif - 87)) {
            document.getElementById(nbObjectif - 87).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 87).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo25
            }
        }
        if(document.getElementById(nbObjectif - 86)) {
            document.getElementById(nbObjectif - 86).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 86).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo26
            }
        }
        if(document.getElementById(nbObjectif - 85)) {
            document.getElementById(nbObjectif - 85).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 85).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo27
            }
        }
        if(document.getElementById(nbObjectif - 84)) {
            document.getElementById(nbObjectif - 84).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 84).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo28
            }
        }
        if(document.getElementById(nbObjectif - 83)) {
            document.getElementById(nbObjectif - 83).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 83).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo29
            }
        }
        if(document.getElementById(nbObjectif - 82)) {
            document.getElementById(nbObjectif - 82).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 82).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo30
            }
        }
        if(document.getElementById(nbObjectif - 81)) {
            document.getElementById(nbObjectif - 81).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 81).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo31
            }
        }
        if(document.getElementById(nbObjectif - 80)) {
            document.getElementById(nbObjectif - 80).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 80).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo32
            }
        }
        if(document.getElementById(nbObjectif - 79)) {
            document.getElementById(nbObjectif - 79).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 79).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo33
            }
        }
        if(document.getElementById(nbObjectif - 78)) {
            document.getElementById(nbObjectif - 78).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 78).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo34
            }
        }
        if(document.getElementById(nbObjectif - 77)) {
            document.getElementById(nbObjectif - 77).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 77).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo35
            }
        }
        if(document.getElementById(nbObjectif - 76)) {
            document.getElementById(nbObjectif - 76).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 76).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo36
            }
        }
        if(document.getElementById(nbObjectif - 75)) {
            document.getElementById(nbObjectif - 75).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 75).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo37
            }
        }
        if(document.getElementById(nbObjectif - 74)) {
            document.getElementById(nbObjectif - 74).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 74).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo38
            }
        }
        if(document.getElementById(nbObjectif - 73)) {
            document.getElementById(nbObjectif - 73).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 73).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo39
            }
        }
        if(document.getElementById(nbObjectif - 72)) {
            document.getElementById(nbObjectif - 72).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 72).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo40
            }
        }
        if(document.getElementById(nbObjectif - 71)) {
            document.getElementById(nbObjectif - 71).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 71).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo41
            }
        }
        if(document.getElementById(nbObjectif - 70)) {
            document.getElementById(nbObjectif - 70).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 70).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo42
            }
        }
        if(document.getElementById(nbObjectif - 69)) {
            document.getElementById(nbObjectif - 69).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 69).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo43
            }
        }
        if(document.getElementById(nbObjectif - 68)) {
            document.getElementById(nbObjectif - 68).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 68).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo44
            }    
        }
        if(document.getElementById(nbObjectif - 67)) {
            document.getElementById(nbObjectif - 67).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 67).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo45
            } 
        }
        if(document.getElementById(nbObjectif - 66)) {
            document.getElementById(nbObjectif - 66).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 66).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo46
            }
        }
        if(document.getElementById(nbObjectif - 65)) {
            document.getElementById(nbObjectif - 65).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 65).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo47
            }
        }
        if(document.getElementById(nbObjectif - 64)) {
            document.getElementById(nbObjectif - 64).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 64).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo48
            }
        }
        if(document.getElementById(nbObjectif - 63)) {
            document.getElementById(nbObjectif - 63).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 63).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo49
            }
        }
        if(document.getElementById(nbObjectif - 62)) {
            document.getElementById(nbObjectif - 62).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 62).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo50
            }
        }
        if(document.getElementById(nbObjectif - 61)) {
            document.getElementById(nbObjectif - 61).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 61).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo51
            }
        }
        if(document.getElementById(nbObjectif - 60)) {
            document.getElementById(nbObjectif - 60).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 60).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo52
            }
        }
        if(document.getElementById(nbObjectif - 59)) {
            document.getElementById(nbObjectif - 59).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 59).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo53
            }
        }
        if(document.getElementById(nbObjectif - 58)) {
            document.getElementById(nbObjectif - 58).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 58).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo54
            }
        }
        if(document.getElementById(nbObjectif - 57)) {
            document.getElementById(nbObjectif - 57).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 57).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo55
            }
        }
        if(document.getElementById(nbObjectif - 56)) {
            document.getElementById(nbObjectif - 56).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 56).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo56
            }
        }
        if(document.getElementById(nbObjectif - 55)) {
            document.getElementById(nbObjectif - 55).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo57
            }
        }
        if(document.getElementById(nbObjectif - 54)) {
            document.getElementById(nbObjectif - 54).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo58
            }
        }
        if(document.getElementById(nbObjectif - 53)) {
            document.getElementById(nbObjectif - 53).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]  
                document.getElementById("exoInstruction").innerText = localStorage.exo59
            }
        }
        if(document.getElementById(nbObjectif - 52)) {
            document.getElementById(nbObjectif - 52).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo60
            }
        }
        if(document.getElementById(nbObjectif - 51)) {
            document.getElementById(nbObjectif - 51).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo61
            }
        }
        if(document.getElementById(nbObjectif - 50)) {
            document.getElementById(nbObjectif - 50).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo62
            }
        }
        if(document.getElementById(nbObjectif - 49)) {
            document.getElementById(nbObjectif - 49).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo63
            }
        }
        if(document.getElementById(nbObjectif - 48)) {
            document.getElementById(nbObjectif - 48).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo64
            }
        }
        if(document.getElementById(nbObjectif - 47)) {
            document.getElementById(nbObjectif - 47).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo65
            }
        }
        if(document.getElementById(nbObjectif - 46)) {
            document.getElementById(nbObjectif - 46).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo66
            }
        }
        if(document.getElementById(nbObjectif - 45)) {
            document.getElementById(nbObjectif - 45).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo67
            }
        }
        if(document.getElementById(nbObjectif - 44)) {
            document.getElementById(nbObjectif - 44).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo68
            }
        }
        if(document.getElementById(nbObjectif - 43)) {
            document.getElementById(nbObjectif - 43).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo69
            }
        }
        if(document.getElementById(nbObjectif - 42)) {
            document.getElementById(nbObjectif - 42).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo70
            }
        }
        if(document.getElementById(nbObjectif - 41)) {
            document.getElementById(nbObjectif - 41).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo71
            }
        }
        if(document.getElementById(nbObjectif - 40)) {
            document.getElementById(nbObjectif - 40).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo72
            }
        }
        if(document.getElementById(nbObjectif - 39)) {
            document.getElementById(nbObjectif - 39).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo73
            }
        }
        if(document.getElementById(nbObjectif - 38)) {
            document.getElementById(nbObjectif - 38).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo74
            }
        }
        if(document.getElementById(nbObjectif - 37)) {
            document.getElementById(nbObjectif - 37).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo75
            }
        }
        if(document.getElementById(nbObjectif - 36)) {
            document.getElementById(nbObjectif - 36).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo76
            }
        }
        if(document.getElementById(nbObjectif - 35)) {
            document.getElementById(nbObjectif - 35).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo77
            }
        }
        if(document.getElementById(nbObjectif - 34)) {
            document.getElementById(nbObjectif - 34).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo78
            }
        }
        if(document.getElementById(nbObjectif - 33)) {
            document.getElementById(nbObjectif - 33).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo79
            }
        }
        if(document.getElementById(nbObjectif - 32)) {
            document.getElementById(nbObjectif - 32).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo80
            }
        }
        if(document.getElementById(nbObjectif - 31)) {
            document.getElementById(nbObjectif - 31).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo81
            }
        }
        if(document.getElementById(nbObjectif - 30)) {
            document.getElementById(nbObjectif - 30).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo82
            }
        }
        if(document.getElementById(nbObjectif - 29)) {
            document.getElementById(nbObjectif - 29).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo83
            }
        }
        if(document.getElementById(nbObjectif - 28)) {
            document.getElementById(nbObjectif - 28).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo84
            }
        }
        if(document.getElementById(nbObjectif - 27)) {
            document.getElementById(nbObjectif - 27).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo85
            }
        }
        if(document.getElementById(nbObjectif - 26)) {
            document.getElementById(nbObjectif - 26).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo86
            }
        }
        if(document.getElementById(nbObjectif - 25)) {
            document.getElementById(nbObjectif - 25).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo87
            }
        }
        if(document.getElementById(nbObjectif - 24)) {
            document.getElementById(nbObjectif - 24).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo88
            }
        }
        if(document.getElementById(nbObjectif - 23)) {
            document.getElementById(nbObjectif - 23).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo89
            }
        }
        if(document.getElementById(nbObjectif - 22)) {
            document.getElementById(nbObjectif - 22).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo90
            }
        }
        if(document.getElementById(nbObjectif - 21)) {
            document.getElementById(nbObjectif - 21).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo91
            }
        }
        if(document.getElementById(nbObjectif - 20)) {
            document.getElementById(nbObjectif - 20).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo92
            }
        }
        if(document.getElementById(nbObjectif - 19)) {
            document.getElementById(nbObjectif - 19).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo93
            }
        }
        if(document.getElementById(nbObjectif - 18)) {
            document.getElementById(nbObjectif - 18).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo94
            }
        }
        if(document.getElementById(nbObjectif - 17)) {
            document.getElementById(nbObjectif - 17).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo95
            }
        }
        if(document.getElementById(nbObjectif - 16)) {
            document.getElementById(nbObjectif - 16).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo96
            }
        }
        if(document.getElementById(nbObjectif - 15)) {
            document.getElementById(nbObjectif - 15).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo97
            }
        }
        if(document.getElementById(nbObjectif - 14)) {
            document.getElementById(nbObjectif - 14).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo98
            }
        }
        if(document.getElementById(nbObjectif - 13)) {
            document.getElementById(nbObjectif - 13).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo99
            }
        }
        if(document.getElementById(nbObjectif - 12)) {
            document.getElementById(nbObjectif - 12).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo100
            }
        }
        if(document.getElementById(nbObjectif - 11)) {
            document.getElementById(nbObjectif - 11).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo101
            }
        }
        if(document.getElementById(nbObjectif - 10)) {
            document.getElementById(nbObjectif - 10).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo102
            }
        }
        if(document.getElementById(nbObjectif - 9)) {
            document.getElementById(nbObjectif - 9).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 9).innerText + " " +           monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo103
            } 
        }
        if(document.getElementById(nbObjectif - 8)) {
            document.getElementById(nbObjectif - 8).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo104
            }
        }
        if(document.getElementById(nbObjectif - 7)) {
            document.getElementById(nbObjectif - 7).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo105
            }
        }
        if(document.getElementById(nbObjectif - 6)) {
            document.getElementById(nbObjectif - 6).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo106
            }
        }
        if(document.getElementById(nbObjectif - 5)) {
            document.getElementById(nbObjectif - 5).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo107
            }
        }
        if(document.getElementById(nbObjectif - 4)) {
            document.getElementById(nbObjectif - 4).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo108
            }
        }
        if(document.getElementById(nbObjectif - 3)) {
            document.getElementById(nbObjectif - 3).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo109
            }
        }
        if(document.getElementById(nbObjectif - 2)) {
            document.getElementById(nbObjectif - 2).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo110
            }
        }
        if(document.getElementById(nbObjectif - 1)) {
            document.getElementById(nbObjectif - 1).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo111
            }
        }  
    }
        
    // else if (nbPrgT == 3) {
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 83).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11001).innerText = document.getElementById(nbObjectif - 83).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10001).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 82).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11002).innerText = document.getElementById(nbObjectif - 82).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10002).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 81).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11003).innerText = document.getElementById(nbObjectif - 81).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10003).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 80).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11004).innerText = document.getElementById(nbObjectif - 80).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10004).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 79).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11005).innerText = document.getElementById(nbObjectif - 79).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10005).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 78).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11006).innerText = document.getElementById(nbObjectif - 78).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10006).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 77).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11007).innerText = document.getElementById(nbObjectif - 77).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10007).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 76).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11008).innerText = document.getElementById(nbObjectif - 76).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10008).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 75).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11009).innerText = document.getElementById(nbObjectif - 75).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10009).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 74).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11010).innerText = document.getElementById(nbObjectif - 74).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10010).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 73).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11011).innerText = document.getElementById(nbObjectif - 73).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10011).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 72).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11012).innerText = document.getElementById(nbObjectif - 72).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10012).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 71).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11013).innerText = document.getElementById(nbObjectif - 71).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10013).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 70).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11014).innerText = document.getElementById(nbObjectif - 70).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10014).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 69).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11015).innerText = document.getElementById(nbObjectif - 69).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10015).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 68).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11016).innerText = document.getElementById(nbObjectif - 68).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10016).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 67).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11017).innerText = document.getElementById(nbObjectif - 67).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10017).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 66).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11018).innerText = document.getElementById(nbObjectif - 66).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10018).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 65).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11019).innerText = document.getElementById(nbObjectif - 65).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10019).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 64).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11020).innerText = document.getElementById(nbObjectif - 64).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10020).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 63).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11021).innerText = document.getElementById(nbObjectif - 63).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10021).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 62).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11022).innerText = document.getElementById(nbObjectif - 62).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10022).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 61).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11023).innerText = document.getElementById(nbObjectif - 61).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10023).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 60).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11024).innerText = document.getElementById(nbObjectif - 60).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10024).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 59).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11025).innerText = document.getElementById(nbObjectif - 59).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10025).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 58).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11026).innerText = document.getElementById(nbObjectif - 58).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10026).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 57).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11027).innerText = document.getElementById(nbObjectif - 57).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10027).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 56).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11028).innerText = document.getElementById(nbObjectif - 56).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10028).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 55).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11029).innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10029).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 54).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11030).innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10030).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 53).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11031).innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10031).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 52).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11032).innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10032).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 51).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11033).innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10033).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 50).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11034).innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10034).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 49).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11035).innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10035).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 48).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11036).innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10036).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 47).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11037).innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10037).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 46).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11038).innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10038).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 45).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11039).innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10039).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 44).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11040).innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10040).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 43).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11041).innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10041).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 42).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11042).innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10042).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 41).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11043).innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10043).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 40).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11044).innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10044).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 39).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11045).innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10045).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 38).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11046).innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10046).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 37).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11047).innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10047).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 36).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11048).innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10048).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 35).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11049).innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10049).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 34).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11050).innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10050).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 33).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11051).innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10051).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 32).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11052).innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10052).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 31).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11053).innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10053).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 30).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11054).innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10054).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 29).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11055).innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10055).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 28).onclick = function() {
    //                 resetExoHeigt();
    //         document.getElementById(11056).innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10056).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 27).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11057).innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10057).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 26).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11058).innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10058).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 25).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11059).innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10059).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 24).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11060).innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10060).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 23).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11061).innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10061).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 22).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11062).innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10062).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 21).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11063).innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10063).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 20).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11064).innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10064).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 19).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11065).innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10065).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 18).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11066).innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10066).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 17).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11067).innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10067).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 16).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11068).innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10068).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 15).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11069).innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10069).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 14).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11070).innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10070).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 13).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11071).innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10071).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 12).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11072).innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10072).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 11).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11073).innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10073).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 10).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11074).innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10074).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 9).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11075).innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10075).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 8).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11076).innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10076).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 7).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11077).innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10077).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 6).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11078).innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10078).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 5).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11079).innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10079).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 4).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11080).innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10080).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 3).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11081).innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10081).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 2).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11082).innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10082).style.height = "100px"
    //     }
    //     if(document.getElementById(nbObjectif - )) {
    //     document.getElementById(nbObjectif - 1).onclick = function() {
    //         resetExoHeigt();
    //         document.getElementById(11083).innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
    //         document.getElementById(10083).style.height = "100px"
    //     }  
    // }
        
//    else if (nbPrgT == 2) {
//        document.getElementById(nbObjectif - 55).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 54).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 53).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 52).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 51).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 50).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 49).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 48).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 47).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 46).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 45).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 44).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 43).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 42).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 41).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 40).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 39).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 38).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 37).onclick = function() {
//            resetExoHeigt() {
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 36).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 35).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 34).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(11001).innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(10001).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 33).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 32).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 31).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(11001).innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(10001).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 30).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(11001).innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(10001).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 29).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(11001).innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(10001).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 28).onclick = function() {
//                    resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 27).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 26).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 25).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 24).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 23).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 22).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 21).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 20).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 19).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 18).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 17).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 16).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 15).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 14).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 13).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 12).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 11).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 10).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 9).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 8).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 7).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 6).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 5).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 4).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 3).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 2).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }
//        document.getElementById(nbObjectif - 1).onclick = function() {
//            resetExoHeigt();
//            document.getElementById(1100).innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
//            document.getElementById(1000).style.height = "100px"
//        }  
//    }

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