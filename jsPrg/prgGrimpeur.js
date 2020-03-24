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
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 46)) {document.getElementById(nbObjectif - 46).style.backgroundColor = "orange"}}   
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
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 65)) {document.getElementById(nbObjectif - 65).style.backgroundColor = "red"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 64)) {document.getElementById(nbObjectif - 64).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 63)) {document.getElementById(nbObjectif - 63).style.backgroundColor = "green"}}
        //semaine 4      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 62)) {document.getElementById(nbObjectif - 62).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 61)) {document.getElementById(nbObjectif - 61).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 60)) {document.getElementById(nbObjectif - 60).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 59)) {document.getElementById(nbObjectif - 59).style.backgroundColor = "orange"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 58)) {document.getElementById(nbObjectif - 58).style.backgroundColor = ""}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 57)) {document.getElementById(nbObjectif - 57).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 56)) {document.getElementById(nbObjectif - 56).style.backgroundColor = "orange"}}
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
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 39)) {document.getElementById(nbObjectif - 39).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 38)) {document.getElementById(nbObjectif - 38).style.backgroundColor = "orange"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 37)) {document.getElementById(nbObjectif - 37).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 36)) {document.getElementById(nbObjectif - 36).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 35)) {document.getElementById(nbObjectif - 35).style.backgroundColor = "green"}}   
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
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 37)) {document.getElementById(nbObjectif - 37).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 36)) {document.getElementById(nbObjectif - 36).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 35)) {document.getElementById(nbObjectif - 35).style.backgroundColor = "green"}}   
        //semaine 4   
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 34)) {document.getElementById(nbObjectif - 34).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 33)) {document.getElementById(nbObjectif - 33).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 32)) {document.getElementById(nbObjectif - 32).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 31)) {document.getElementById(nbObjectif - 31).style.backgroundColor = "orange"}}  
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
    document.getElementById(11001).innerText = ""
    document.getElementById(11002).innerText = ""
    document.getElementById(11003).innerText = ""
    document.getElementById(11004).innerText = ""
    document.getElementById(11005).innerText = ""
    document.getElementById(11006).innerText = ""
    document.getElementById(11007).innerText = ""
    document.getElementById(11008).innerText = ""
    document.getElementById(11009).innerText = ""
    document.getElementById(11010).innerText = ""
    document.getElementById(11011).innerText = ""
    document.getElementById(11012).innerText = ""
    document.getElementById(11013).innerText = ""
    document.getElementById(11014).innerText = ""
    document.getElementById(11015).innerText = ""
    document.getElementById(11016).innerText = ""
    document.getElementById(11017).innerText = ""
    document.getElementById(11018).innerText = ""
    document.getElementById(11019).innerText = ""
    document.getElementById(11020).innerText = ""
    document.getElementById(11021).innerText = ""
    document.getElementById(11022).innerText = ""
    document.getElementById(11023).innerText = ""
    document.getElementById(11024).innerText = ""
    document.getElementById(11025).innerText = ""
    document.getElementById(11026).innerText = ""
    document.getElementById(11027).innerText = ""
    document.getElementById(11028).innerText = ""
    document.getElementById(11029).innerText = ""
    document.getElementById(11030).innerText = ""
    document.getElementById(11031).innerText = ""
    document.getElementById(11032).innerText = ""
    document.getElementById(11033).innerText = ""
    document.getElementById(11034).innerText = ""
    document.getElementById(11035).innerText = ""
    document.getElementById(11036).innerText = ""
    document.getElementById(11037).innerText = ""
    document.getElementById(11038).innerText = ""
    document.getElementById(11039).innerText = ""
    document.getElementById(11040).innerText = ""
    document.getElementById(11041).innerText = ""
    document.getElementById(11042).innerText = ""
    document.getElementById(11043).innerText = ""
    document.getElementById(11044).innerText = ""
    document.getElementById(11045).innerText = ""
    document.getElementById(11046).innerText = ""
    document.getElementById(11047).innerText = ""
    document.getElementById(11048).innerText = ""
    document.getElementById(11049).innerText = ""
    document.getElementById(11050).innerText = ""
    document.getElementById(11051).innerText = ""
    document.getElementById(11052).innerText = ""
    document.getElementById(11053).innerText = ""
    document.getElementById(11054).innerText = ""
    document.getElementById(11055).innerText = ""
    document.getElementById(11056).innerText = ""
    document.getElementById(11057).innerText = ""
    document.getElementById(11058).innerText = ""
    document.getElementById(11059).innerText = ""
    document.getElementById(11060).innerText = ""
    document.getElementById(11061).innerText = ""
    document.getElementById(11062).innerText = ""
    document.getElementById(11063).innerText = ""
    document.getElementById(11064).innerText = ""
    document.getElementById(11065).innerText = ""
    document.getElementById(11066).innerText = ""
    document.getElementById(11067).innerText = ""
    document.getElementById(11068).innerText = ""
    document.getElementById(11069).innerText = ""
    document.getElementById(11070).innerText = ""
    document.getElementById(11071).innerText = ""
    document.getElementById(11072).innerText = ""
    document.getElementById(11073).innerText = ""
    document.getElementById(11074).innerText = ""
    document.getElementById(11075).innerText = ""
    document.getElementById(11076).innerText = ""
    document.getElementById(11077).innerText = ""
    document.getElementById(11078).innerText = ""
    document.getElementById(11079).innerText = ""
    document.getElementById(11080).innerText = ""
    document.getElementById(11081).innerText = ""
    document.getElementById(11082).innerText = ""
    document.getElementById(11083).innerText = ""
    document.getElementById(11084).innerText = ""
    document.getElementById(11085).innerText = ""
    document.getElementById(11086).innerText = ""
    document.getElementById(11087).innerText = ""
    document.getElementById(11088).innerText = ""
    document.getElementById(11089).innerText = ""
    document.getElementById(11090).innerText = ""
    document.getElementById(11091).innerText = ""
    document.getElementById(11092).innerText = ""
    document.getElementById(11093).innerText = ""
    document.getElementById(11094).innerText = ""
    document.getElementById(11095).innerText = ""
    document.getElementById(11096).innerText = ""
    document.getElementById(11097).innerText = ""
    document.getElementById(11098).innerText = ""
    document.getElementById(11099).innerText = ""
    document.getElementById(11100).innerText = ""
    document.getElementById(11101).innerText = ""
    document.getElementById(11102).innerText = ""
    document.getElementById(11103).innerText = ""
    document.getElementById(11104).innerText = ""
    document.getElementById(11105).innerText = ""
    document.getElementById(11106).innerText = ""
    document.getElementById(11107).innerText = ""
    document.getElementById(11108).innerText = ""
    document.getElementById(11109).innerText = ""
    document.getElementById(11110).innerText = ""
    document.getElementById(11111).innerText = ""

    if (nbPrgT == 4) {
        if (document.getElementById(nbObjectif - 111)) {
            document.getElementById(11001).innerText = document.getElementById(nbObjectif - 111).innerText + " " + monthA[Number(sessionStorage.month)]
            document.getElementById(10001).style.height = "100px"
        }
        else{document.getElementById(10001).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 110)) {
            document.getElementById(11002).innerText = document.getElementById(nbObjectif - 110).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10002).style.height = "100px"
        }
        else{document.getElementById(10002).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 109)) {
            document.getElementById(11003).innerText = document.getElementById(nbObjectif - 109).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10003).style.height = "100px"
        }
        else{document.getElementById(10003).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 108)) {
            document.getElementById(11004).innerText = document.getElementById(nbObjectif - 108).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10004).style.height = "100px"
        }
        else{document.getElementById(10004).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 107)) {
            document.getElementById(11005).innerText = document.getElementById(nbObjectif - 107).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10005).style.height = "100px"
        }
        else{document.getElementById(10005).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 106)) {
            document.getElementById(11006).innerText = document.getElementById(nbObjectif - 106).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10006).style.height = "100px"
        }
        else{document.getElementById(10006).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 105)) {
            document.getElementById(11007).innerText = document.getElementById(nbObjectif - 105).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10007).style.height = "100px"
        }
        else{document.getElementById(10007).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 104)) {
            document.getElementById(11008).innerText = document.getElementById(nbObjectif - 104).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10008).style.height = "100px"
        }
        else{document.getElementById(10008).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 103)) {
            document.getElementById(11009).innerText = document.getElementById(nbObjectif - 103).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10009).style.height = "100px"
        }
        else{document.getElementById(10009).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 102)) {
            document.getElementById(11010).innerText = document.getElementById(nbObjectif - 102).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10010).style.height = "100px"
        }
        else{document.getElementById(10010).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 101)) {
            document.getElementById(11011).innerText = document.getElementById(nbObjectif - 101).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10011).style.height = "100px"
        }
        else{document.getElementById(10011).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 100)) {
            document.getElementById(11012).innerText = document.getElementById(nbObjectif - 100).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10012).style.height = "100px"
        }
        else{document.getElementById(10012).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 99)) {
            document.getElementById(11013).innerText = document.getElementById(nbObjectif - 99).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10013).style.height = "100px"
        }
        else{document.getElementById(10013).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 98)) {
            document.getElementById(11014).innerText = document.getElementById(nbObjectif - 98).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10014).style.height = "100px"
        }
        else{document.getElementById(10014).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 97)) {
            document.getElementById(11015).innerText = document.getElementById(nbObjectif - 97).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10015).style.height = "100px"
        }
        else{document.getElementById(10015).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 96)) {
            document.getElementById(11016).innerText = document.getElementById(nbObjectif - 96).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10016).style.height = "100px"
        }
        else{document.getElementById(10016).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 95)) {
            document.getElementById(11017).innerText = document.getElementById(nbObjectif - 95).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10017).style.height = "100px"
        }
        else{document.getElementById(10017).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 94)) {
            document.getElementById(11018).innerText = document.getElementById(nbObjectif - 94).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10018).style.height = "100px"
        }
        else{document.getElementById(10018).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 93)) {
            document.getElementById(11019).innerText = document.getElementById(nbObjectif - 93).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10019).style.height = "100px"
        }
        else{document.getElementById(10019).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 92)) {
            document.getElementById(11020).innerText = document.getElementById(nbObjectif - 92).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10020).style.height = "100px"
        }
        else{document.getElementById(10020).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 91)) {
            document.getElementById(11021).innerText = document.getElementById(nbObjectif - 91).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10021).style.height = "100px"
        }
        else{document.getElementById(10021).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 90)) {
            document.getElementById(11022).innerText = document.getElementById(nbObjectif - 90).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10022).style.height = "100px"
        }
        else{document.getElementById(10022).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 89)) {
            document.getElementById(11023).innerText = document.getElementById(nbObjectif - 89).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10023).style.height = "100px"
        }
        else{document.getElementById(10023).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 88)) {
            document.getElementById(11024).innerText = document.getElementById(nbObjectif - 88).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10024).style.height = "100px"
        }
        else{document.getElementById(10024).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 87)) {
            document.getElementById(11025).innerText = document.getElementById(nbObjectif - 87).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10025).style.height = "100px"
        }
        else{document.getElementById(10025).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 86)) {
            document.getElementById(11026).innerText = document.getElementById(nbObjectif - 86).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10026).style.height = "100px"
        }
        else{document.getElementById(10026).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 85)) {
            document.getElementById(11027).innerText = document.getElementById(nbObjectif - 85).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10027).style.height = "100px"
        }
        else{document.getElementById(10027).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 84)) {
            document.getElementById(11028).innerText = document.getElementById(nbObjectif - 84).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10028).style.height = "100px"
        }
        else{document.getElementById(10028).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 83)) {
            document.getElementById(11029).innerText = document.getElementById(nbObjectif - 83).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10029).style.height = "100px"
        }
        else{document.getElementById(10029).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 82)) {
            document.getElementById(11030).innerText = document.getElementById(nbObjectif - 82).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10030).style.height = "100px"
        }
        else{document.getElementById(10030).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 81)) {
            document.getElementById(11031).innerText = document.getElementById(nbObjectif - 81).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10031).style.height = "100px"
        }
        else{document.getElementById(10031).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 80)) {
            document.getElementById(11032).innerText = document.getElementById(nbObjectif - 80).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10032).style.height = "100px"
        }
        else{document.getElementById(10032).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 79)) {
            document.getElementById(11033).innerText = document.getElementById(nbObjectif - 79).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10033).style.height = "100px"
        }
        else{document.getElementById(10033).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 78)) {
            document.getElementById(11034).innerText = document.getElementById(nbObjectif - 78).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10034).style.height = "100px"
        }
        else{document.getElementById(10034).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 77)) {
            document.getElementById(11035).innerText = document.getElementById(nbObjectif - 77).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10035).style.height = "100px"
        }
        else{document.getElementById(10035).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 76)) {
            document.getElementById(11036).innerText = document.getElementById(nbObjectif - 76).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10036).style.height = "100px"
        }
        else{document.getElementById(10036).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 75)) {
            document.getElementById(11037).innerText = document.getElementById(nbObjectif - 75).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10037).style.height = "100px"
        }
        else{document.getElementById(10037).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 74)) {
            document.getElementById(11038).innerText = document.getElementById(nbObjectif - 74).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10038).style.height = "100px"
        }
        else{document.getElementById(10038).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 73)) {
            document.getElementById(11039).innerText = document.getElementById(nbObjectif - 73).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10039).style.height = "100px"
        }
        else{document.getElementById(10039).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 72)) {
            document.getElementById(11040).innerText = document.getElementById(nbObjectif - 72).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10040).style.height = "100px"
        }
        else{document.getElementById(10040).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 71)) {
            document.getElementById(11041).innerText = document.getElementById(nbObjectif - 71).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10041).style.height = "100px"
        }
        else{document.getElementById(10041).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 70)) {
            document.getElementById(11042).innerText = document.getElementById(nbObjectif - 70).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10042).style.height = "100px"
        }
        else{document.getElementById(10042).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 69)) {
            document.getElementById(11043).innerText = document.getElementById(nbObjectif - 69).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10043).style.height = "100px"
        }
        else{document.getElementById(10043).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 68)) {
            document.getElementById(11044).innerText = document.getElementById(nbObjectif - 68).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10044).style.height = "100px"
        }
        else{document.getElementById(10044).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 67)) {
            document.getElementById(11045).innerText = document.getElementById(nbObjectif - 67).innerText + " " + monthA[Number(sessionStorage.month)]
            document.getElementById(10045).style.height = "100px"
        }
        else{document.getElementById(10045).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 66)) {
            document.getElementById(11046).innerText = document.getElementById(nbObjectif - 66).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10046).style.height = "100px"
        }
        else{document.getElementById(10046).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 65)) {
            document.getElementById(11047).innerText = document.getElementById(nbObjectif - 65).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10047).style.height = "100px"
        }
        else{document.getElementById(10047).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 64)) {
            document.getElementById(11048).innerText = document.getElementById(nbObjectif - 64).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10048).style.height = "100px"
        }
        else{document.getElementById(10048).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 63)) {
            document.getElementById(11049).innerText = document.getElementById(nbObjectif - 63).innerText + " " + monthA[Number(sessionStorage.month)]
            document.getElementById(10049).style.height = "100px"
        }
        else{document.getElementById(10049).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 62)) {
            document.getElementById(11050).innerText = document.getElementById(nbObjectif - 62).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10050).style.height = "100px"
        }
        else{document.getElementById(10050).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 61)) {
            document.getElementById(11051).innerText = document.getElementById(nbObjectif - 61).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10051).style.height = "100px"
        }
        else{document.getElementById(10051).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 60)) {
            document.getElementById(11052).innerText = document.getElementById(nbObjectif - 60).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10052).style.height = "100px"
        }
        else{document.getElementById(10052).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 59)) {
            document.getElementById(11053).innerText = document.getElementById(nbObjectif - 59).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10053).style.height = "100px"
        }
        else{document.getElementById(10053).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 58)) {
            document.getElementById(11054).innerText = document.getElementById(nbObjectif - 58).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10054).style.height = "100px"
        }
        else{document.getElementById(10054).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 57)) {
            document.getElementById(11055).innerText = document.getElementById(nbObjectif - 57).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10055).style.height = "100px"
        }
        else{document.getElementById(10055).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 56)) {
            document.getElementById(11056).innerText = document.getElementById(nbObjectif - 56).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10056).style.height = "100px"
        }
        else{document.getElementById(10056).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 55)) {
            document.getElementById(11057).innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10057).style.height = "100px"
        }
        else{document.getElementById(10057).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 54)) {
            document.getElementById(11058).innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10058).style.height = "100px"
        }
        else{document.getElementById(10058).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 53)) {
            document.getElementById(11059).innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10059).style.height = "100px"
        }
        else{document.getElementById(10059).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 52)) {
            document.getElementById(11060).innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10060).style.height = "100px"
        }
        else{document.getElementById(10060).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 51)) {
            document.getElementById(11061).innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
            document.getElementById(10061).style.height = "100px"
        }
        else{document.getElementById(10061).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 50)) {
            document.getElementById(11062).innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10062).style.height = "100px"
        }
        else{document.getElementById(10062).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 49)) {
            document.getElementById(11063).innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10063).style.height = "100px"
        }
        else{document.getElementById(10063).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 48)) {
            document.getElementById(11064).innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10064).style.height = "100px"
        }
        else{document.getElementById(10064).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 47)) {
            document.getElementById(11065).innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10065).style.height = "100px"
        }
        else{document.getElementById(10065).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 46)) {
            document.getElementById(11066).innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10066).style.height = "100px"
        }
        else{document.getElementById(10066).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 45)) {
            document.getElementById(11067).innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10067).style.height = "100px"
        }
        else{document.getElementById(10067).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 44)) {
            document.getElementById(11068).innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10068).style.height = "100px"
        }
        else{document.getElementById(10068).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 43)) {
            document.getElementById(11069).innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10069).style.height = "100px"
        }
        else{document.getElementById(10069).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 42)) {
            document.getElementById(11070).innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
            document.getElementById(10070).style.height = "100px"
        }
        else{document.getElementById(10070).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 41)) {
            document.getElementById(11071).innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10071).style.height = "100px"
        }
        else{document.getElementById(10071).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 40)) {
            document.getElementById(11072).innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10072).style.height = "100px"
        }
        else{document.getElementById(10072).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 39)) {
            document.getElementById(11073).innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10073).style.height = "100px"
        }
        else{document.getElementById(10073).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 38)) {
            document.getElementById(11074).innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10074).style.height = "100px"
        }
        else{document.getElementById(10074).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 37)) {
            document.getElementById(11075).innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10075).style.height = "100px"
        }
        else{document.getElementById(10075).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 36)) {
            document.getElementById(11076).innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10076).style.height = "100px"
        }
        else{document.getElementById(10076).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 35)) {
            document.getElementById(11077).innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10077).style.height = "100px"
        }
        else{document.getElementById(10077).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 34)) {
            document.getElementById(11078).innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10078).style.height = "100px"
        }
        else{document.getElementById(10078).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 33)) {
            document.getElementById(11079).innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10079).style.height = "100px"
        }
        else{document.getElementById(10079).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 32)) {
            document.getElementById(11080).innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10080).style.height = "100px"
        }
        else{document.getElementById(10080).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 31)) {
            document.getElementById(11081).innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10081).style.height = "100px"
        }
        else{document.getElementById(10081).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 30)) {
            document.getElementById(11082).innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10082).style.height = "100px"
        }
        else{document.getElementById(10082).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 29)) {
            document.getElementById(11083).innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10083).style.height = "100px"
        }
        else{document.getElementById(10083).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 28)) {
            document.getElementById(11084).innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10084).style.height = "100px"
        }
        else{document.getElementById(10084).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 27)) {
            document.getElementById(11085).innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10085).style.height = "100px"
        }
        else{document.getElementById(10085).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 26)) {
            document.getElementById(11086).innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10086).style.height = "100px"
        }
        else{document.getElementById(10086).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 25)) {
            document.getElementById(11087).innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10087).style.height = "100px"
        }
        else{document.getElementById(10087).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 24)) {
            document.getElementById(11088).innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10088).style.height = "100px"
        }
        else{document.getElementById(10088).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 23)) {
            document.getElementById(11089).innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10089).style.height = "100px"
        }
        else{document.getElementById(10089).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 22)) {
            document.getElementById(11090).innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10090).style.height = "100px"
        }
        else{document.getElementById(10090).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 21)) {
            document.getElementById(11091).innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10091).style.height = "100px"
        }
        else{document.getElementById(10091).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 20)) {
            document.getElementById(11092).innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10092).style.height = "100px"
        }
        else{document.getElementById(10092).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 19)) {
            document.getElementById(11093).innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10093).style.height = "100px"
        }
        else{document.getElementById(10093).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 18)) {
            document.getElementById(11094).innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10094).style.height = "100px"
        }
        else{document.getElementById(10094).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 17)) {
            document.getElementById(11095).innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10095).style.height = "100px"
        }
        else{document.getElementById(10095).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 16)) {
            document.getElementById(11096).innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10096).style.height = "100px"
        }
        else{document.getElementById(10096).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 15)) {
            document.getElementById(11097).innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10097).style.height = "100px"
        }
        else{document.getElementById(10097).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 14)) {
            document.getElementById(11098).innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
            document.getElementById(10098).style.height = "100px"
        }
        else{document.getElementById(10098).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 13)) {
            document.getElementById(11099).innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10099).style.height = "100px"
        }
        else{document.getElementById(10099).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 12)) {
            document.getElementById(11100).innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10100).style.height = "100px"
        }
        else{document.getElementById(10100).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 11)) {
            document.getElementById(11101).innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10101).style.height = "100px"
        }
        else{document.getElementById(10101).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 10)) {
            document.getElementById(11102).innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10102).style.height = "100px"
        }
        else{document.getElementById(10102).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 9)) {
            document.getElementById(11103).innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10103).style.height = "100px"
        }
        else{document.getElementById(10103).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 8)) {
            document.getElementById(11104).innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10104).style.height = "100px"
        }
        else{document.getElementById(10104).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 7)) {
            document.getElementById(11105).innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10105).style.height = "100px"
        }
        else{document.getElementById(10105).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 6)) {
            document.getElementById(11106).innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10106).style.height = "100px"
        }
        else{document.getElementById(10106).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 5)) {
            document.getElementById(11107).innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10107).style.height = "100px"
        }
        else{document.getElementById(10107).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 4)) {
            document.getElementById(11108).innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
            document.getElementById(10108).style.height = "100px"
        }
        else{document.getElementById(10108).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 3)) {
            document.getElementById(11109).innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10109).style.height = "100px"
        }
        else{document.getElementById(10109).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 2)) {
            document.getElementById(11110).innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10110).style.height = "100px"
        }
        else{document.getElementById(10110).style.height = "0px"}
        
        if (document.getElementById(nbObjectif - 1)) {
            document.getElementById(11111).innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)] 
            document.getElementById(10111).style.height = "100px"
        }
        else{document.getElementById(10111).style.height = "0px"}
    }

    document.getElementById(12001).innerText = "";
    document.getElementById(12002).innerText = "";
    document.getElementById(12003).innerText = "";
    document.getElementById(12004).innerText = "";
    document.getElementById(12005).innerText = "";
    document.getElementById(12006).innerText = "";
    document.getElementById(12007).innerText = "";
    document.getElementById(12008).innerText = "";
    document.getElementById(12009).innerText = "";
    document.getElementById(12010).innerText = "";
    document.getElementById(12011).innerText = "";
    document.getElementById(12012).innerText = "";
    document.getElementById(12013).innerText = "";
    document.getElementById(12014).innerText = "";
    document.getElementById(12015).innerText = "";
    document.getElementById(12016).innerText = "";
    document.getElementById(12017).innerText = "";
    document.getElementById(12018).innerText = "";
    document.getElementById(12019).innerText = "";
    document.getElementById(12020).innerText = "";
    document.getElementById(12021).innerText = "";
    document.getElementById(12022).innerText = "";
    document.getElementById(12023).innerText = "";
    document.getElementById(12024).innerText = "";
    document.getElementById(12025).innerText = "";
    document.getElementById(12026).innerText = "";
    document.getElementById(12027).innerText = "";
    document.getElementById(12028).innerText = "";
    document.getElementById(12029).innerText = "";
    document.getElementById(12030).innerText = "";
    document.getElementById(12031).innerText = "";
    document.getElementById(12032).innerText = "";
    document.getElementById(12033).innerText = "";
    document.getElementById(12034).innerText = "";
    document.getElementById(12035).innerText = "";
    document.getElementById(12036).innerText = "";
    document.getElementById(12037).innerText = "";
    document.getElementById(12038).innerText = "";
    document.getElementById(12039).innerText = "";
    document.getElementById(12040).innerText = "";
    document.getElementById(12041).innerText = "";
    document.getElementById(12042).innerText = "";
    document.getElementById(12043).innerText = "";
    document.getElementById(12044).innerText = "";
    document.getElementById(12045).innerText = "";
    document.getElementById(12046).innerText = "";
    document.getElementById(12047).innerText = "";
    document.getElementById(12048).innerText = "";
    document.getElementById(12049).innerText = "";
    document.getElementById(12050).innerText = "";
    document.getElementById(12051).innerText = "";
    document.getElementById(12052).innerText = "";
    document.getElementById(12053).innerText = "";
    document.getElementById(12054).innerText = "";
    document.getElementById(12055).innerText = "";
    document.getElementById(12056).innerText = "";
    document.getElementById(12057).innerText = "";
    document.getElementById(12058).innerText = "";
    document.getElementById(12059).innerText = "";
    document.getElementById(12060).innerText = "";
    document.getElementById(12061).innerText = "";
    document.getElementById(12062).innerText = "";
    document.getElementById(12063).innerText = "";
    document.getElementById(12064).innerText = "";
    document.getElementById(12065).innerText = "";
    document.getElementById(12066).innerText = "";
    document.getElementById(12067).innerText = "";
    document.getElementById(12068).innerText = "";
    document.getElementById(12069).innerText = "";
    document.getElementById(12070).innerText = "";
    document.getElementById(12071).innerText = "";
    document.getElementById(12072).innerText = "";
    document.getElementById(12073).innerText = "";
    document.getElementById(12074).innerText = "";
    document.getElementById(12075).innerText = "";
    document.getElementById(12076).innerText = "";
    document.getElementById(12077).innerText = "";
    document.getElementById(12078).innerText = "";
    document.getElementById(12079).innerText = "";
    document.getElementById(12080).innerText = "";
    document.getElementById(12081).innerText = "";
    document.getElementById(12082).innerText = "";
    document.getElementById(12083).innerText = "";
    document.getElementById(12084).innerText = "";
    document.getElementById(12085).innerText = "";
    document.getElementById(12086).innerText = "";
    document.getElementById(12087).innerText = "";
    document.getElementById(12088).innerText = "";
    document.getElementById(12089).innerText = "";
    document.getElementById(12090).innerText = "";
    document.getElementById(12091).innerText = "";
    document.getElementById(12092).innerText = "";
    document.getElementById(12093).innerText = "";
    document.getElementById(12094).innerText = "";
    document.getElementById(12095).innerText = "";
    document.getElementById(12096).innerText = "";
    document.getElementById(12097).innerText = "";
    document.getElementById(12098).innerText = "";
    document.getElementById(12099).innerText = "";
    document.getElementById(12100).innerText = "";
    document.getElementById(12101).innerText = "";
    document.getElementById(12102).innerText = "";
    document.getElementById(12103).innerText = "";
    document.getElementById(12104).innerText = "";
    document.getElementById(12105).innerText = "";
    document.getElementById(12106).innerText = "";
    document.getElementById(12107).innerText = "";
    document.getElementById(12108).innerText = "";
    document.getElementById(12109).innerText = "";
    document.getElementById(12110).innerText = "";
    document.getElementById(12111).innerText = "";

    if (nbPrgT == 4) {
        //semaine 1     
        if (nbPrgJ >= 4) {document.getElementById("10001").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {document.getElementById("10002").style.backgroundColor = ""}
        if (nbPrgJ >= 3) {document.getElementById("10003").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10004").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10005").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10006").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10007").style.backgroundColor = "green"}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 111)) { document.getElementById(12001).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 110)) { document.getElementById(12002).innerText = "";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 109)) { document.getElementById(12003).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 108)) { document.getElementById(12004).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 107)) { document.getElementById(12005).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 106)) { document.getElementById(12006).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 105)) { document.getElementById(12007).innerText = "séance d'endurance";}}
        //semaine 2       
        if (nbPrgJ >= 7) {document.getElementById("10008").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10009").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10010").style.backgroundColor = "red"}
        if (nbPrgJ >= 6) {document.getElementById("10011").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10012").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10013").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10014").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 104)) { document.getElementById(12008).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 103)) { document.getElementById(12009).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 102)) { document.getElementById(12010).innerText = "séance de sprint";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 101)) { document.getElementById(12011).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 100)) { document.getElementById(12012).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 99)) { document.getElementById(12013).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 98)) { document.getElementById(12014).innerText = "séance d'endurance";}}
        //semaine 3       
        if (nbPrgJ >= 7) {document.getElementById("10015").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10016").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10017").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10018").style.backgroundColor = "orange"}
        if (nbPrgJ >= 5) {document.getElementById("10019").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10020").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10021").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 97)) {document.getElementById(12015).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 96)) {document.getElementById(12016).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 95)) {document.getElementById(12017).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 94)) {document.getElementById(12018).innerText = "séance de PMA";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 93)) {document.getElementById(12019).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 92)) {document.getElementById(12020).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 91)) {document.getElementById(12021).innerText = "séance d'endurance";}}
        //semaine 4      
        if (nbPrgJ >= 7) {document.getElementById("10022").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10023").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10024").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10025").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10026").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10027").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10028").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 90)) { document.getElementById(12022).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 89)) { document.getElementById(12023).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 88)) { document.getElementById(12024).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 87)) { document.getElementById(12025).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 86)) { document.getElementById(12026).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 85)) { document.getElementById(12027).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 84)) { document.getElementById(12028).innerText = "séance d'endurance";}}
        //semaine 5     
        if (nbPrgJ >= 7) {document.getElementById("10029").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10030").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10031").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10032").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10033").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10034").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10035").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 83)) { document.getElementById(12029).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 82)) { document.getElementById(12030).innerText = "séance d'edurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 81)) { document.getElementById(12031).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 80)) { document.getElementById(12032).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 79)) { document.getElementById(12033).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 78)) { document.getElementById(12034).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 77)) { document.getElementById(12035).innerText = "séance d'endurance";}}
        //semaine 6     
        if (nbPrgJ >= 7) {document.getElementById("10036").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10037").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10038").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 6) {document.getElementById("10039").style.backgroundColor = "red"}
        if (nbPrgJ >= 5) {document.getElementById("10040").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10041").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10042").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 76)) { document.getElementById(12036).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 75)) { document.getElementById(12037).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 74)) { document.getElementById(12038).innerText = "séance de seuil";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 73)) { document.getElementById(12039).innerText = "séance de sprint";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 72)) { document.getElementById(12040).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 71)) { document.getElementById(12041).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 70)) { document.getElementById(12042).innerText = "séance d'endurance";}}
        //semaine 7       
        if (nbPrgJ >= 7) {document.getElementById("10043").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10044").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10045").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 6) {document.getElementById("10046").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10047").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10048").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10049").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 69)) { document.getElementById(12043).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 68)) { document.getElementById(12044).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 67)) { document.getElementById(12045).innerText = "séance de seuil";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 66)) { document.getElementById(12046).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 65)) { document.getElementById(12047).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 64)) { document.getElementById(12048).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 63)) { document.getElementById(12049).innerText = "séance de seuil";}}
        //semaine 8       
        if (nbPrgJ >= 7) {document.getElementById("10050").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10051").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10052").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10053").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 5) {document.getElementById("10054").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10055").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10056").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 62)) { document.getElementById(12050).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 61)) { document.getElementById(12051).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 60)) { document.getElementById(12052).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 59)) { document.getElementById(12053).innerText = "séance de seuil";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 58)) { document.getElementById(12054).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 57)) { document.getElementById(12055).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 56)) { document.getElementById(12056).innerText = "séance d'endurance";}}
        //semaine 9     
        if (nbPrgJ >= 7) {document.getElementById("10057").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10058").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10059").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10060").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 5) {document.getElementById("10061").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10062").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10063").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 55)) { document.getElementById(12057).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 54)) { document.getElementById(12058).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 53)) { document.getElementById(12059).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 52)) { document.getElementById(12060).innerText = "séance de seuil";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 51)) { document.getElementById(12061).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 50)) { document.getElementById(12062).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 49)) { document.getElementById(12063).innerText = "séance d'endurance";}}
        //semaine 10      
        if (nbPrgJ >= 7) {document.getElementById("10064").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10065").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10066").style.backgroundColor = "orange"}
        if (nbPrgJ >= 6) {document.getElementById("10067").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10068").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10069").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10070").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 48)) { document.getElementById(12064).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 47)) { document.getElementById(12065).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 46)) { document.getElementById(12066).innerText = "séance de PMA";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 45)) { document.getElementById(12067).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 44)) { document.getElementById(12068).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 43)) { document.getElementById(12069).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 42)) { document.getElementById(12070).innerText = "séance d'endurance";}}
        //semaine 11     
        if (nbPrgJ >= 7) {document.getElementById("10071").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10072").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10073").style.backgroundColor = "orange"}
        if (nbPrgJ >= 6) {document.getElementById("10074").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10075").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10076").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10077").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 41)) { document.getElementById(12071).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 40)) { document.getElementById(12072).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 39)) { document.getElementById(12073).innerText = "séance de PMA";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 38)) { document.getElementById(12074).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 37)) { document.getElementById(12075).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 36)) { document.getElementById(12076).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 35)) { document.getElementById(12077).innerText = "séance d'endurance";}}
        //semaine 12   
        if (nbPrgJ >= 7) {document.getElementById("10078").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10079").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10080").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10081").style.backgroundColor = "orange"}
        if (nbPrgJ >= 5) {document.getElementById("10082").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10083").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10084").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 34)) { document.getElementById(12078).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 33)) { document.getElementById(12079).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 32)) { document.getElementById(12080).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 31)) { document.getElementById(12081).innerText = "séance de PMA";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 30)) { document.getElementById(12082).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 29)) { document.getElementById(12083).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 28)) { document.getElementById(12084).innerText = "séance d'endurance";}}
        //semaine 13       
        if (nbPrgJ >= 7) {document.getElementById("10085").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10086").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10087").style.backgroundColor = "orange"}
        if (nbPrgJ >= 6) {document.getElementById("10088").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10089").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10090").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10091").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 27)) { document.getElementById(12085).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 26)) { document.getElementById(12086).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 25)) { document.getElementById(12087).innerText = "séance de PMA";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 24)) { document.getElementById(12088).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 23)) { document.getElementById(12089).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 22)) { document.getElementById(12090).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 21)) { document.getElementById(12091).innerText = "séance d'endurance";}}
        //semaine 14    
        if (nbPrgJ >= 7) {document.getElementById("10092").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10093").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10094").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 6) {document.getElementById("10095").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10096").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10097").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10098").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 20)) { document.getElementById(12092).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 19)) { document.getElementById(12093).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 18)) { document.getElementById(12094).innerText = "séance de PMA";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 17)) { document.getElementById(12095).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 16)) { document.getElementById(12096).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 15)) { document.getElementById(12097).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 14)) { document.getElementById(12098).innerText = "séance d'endurance";}}
        //semaine 15     
        if (nbPrgJ >= 5) {document.getElementById("10099").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10101").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10104").style.backgroundColor = "orange"}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 13)) {document.getElementById(12099).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 11)) { document.getElementById(12101).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 8)) { document.getElementById(12104).innerText = "séance de PMA";}}
        //semaine 16      
        if (nbPrgJ >= 5) {document.getElementById("10106").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10108").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10111").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 6)) { document.getElementById(12106).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 4)) { document.getElementById(12108).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 1)) { document.getElementById(12111).innerText = "séance de débloquage";}}
    }
    
    else if (nbPrgT == 3) {
        //semaine 1     
        if (nbPrgJ >= 7) {document.getElementById("10001").style.backgroundColor = "green"}
        if (nbPrgJ >= 4) {document.getElementById("10002").style.backgroundColor = ""}
        if (nbPrgJ >= 3) {document.getElementById("10003").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10004").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10005").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10006").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10007").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 83)) { document.getElementById(12001).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 82)) { document.getElementById(12002).innerText = "";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 81)) { document.getElementById(12003).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 80)) { document.getElementById(12004).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 79)) { document.getElementById(12005).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 78)) { document.getElementById(12006).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 77)) { document.getElementById(12007).innerText = "séance d'endurance";}}
        //semaine 2       
        if (nbPrgJ >= 7) {document.getElementById("10008").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10009").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10010").style.backgroundColor = "red"}
        if (nbPrgJ >= 6) {document.getElementById("10011").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10012").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10013").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10014").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 76)) { document.getElementById(12008).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 75)) { document.getElementById(12009).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 74)) { document.getElementById(120010).innerText = "séance de sprint";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 73)) { document.getElementById(120011).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 72)) { document.getElementById(120012).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 71)) { document.getElementById(120013).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 70)) { document.getElementById(120014).innerText = "séance d'endurance";}}
        //semaine 3       
        if (nbPrgJ >= 7) {document.getElementById("10015").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10016").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10017").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 6) {document.getElementById("10018").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10019").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10020").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10021").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 69)) { document.getElementById(120015).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 68)) { document.getElementById(120016).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 67)) { document.getElementById(120017).innerText = "séance de seuil";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 66)) { document.getElementById(120018).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 65)) { document.getElementById(120019).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 64)) { document.getElementById(120020).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 63)) { document.getElementById(120021).innerText = "séance d'endurance";}}
        //semaine 4      
        if (nbPrgJ >= 7) {document.getElementById("10022").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10023").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10024").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10025").style.backgroundColor = "orange"}
        if (nbPrgJ >= 5) {document.getElementById("10026").style.backgroundColor = ""}
        if (nbPrgJ >= 3) {document.getElementById("10027").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10028").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 62)) { document.getElementById(120022).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 61)) { document.getElementById(120023).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 60)) { document.getElementById(120024).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 59)) { document.getElementById(120025).innerText = "séance de PMA";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 58)) { document.getElementById(120026).innerText = "";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 57)) { document.getElementById(120027).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 56)) { document.getElementById(120028).innerText = "séance d'endurance";}}
        //semaine 5     
        if (nbPrgJ >= 7) {document.getElementById("10029").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10030").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10031").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 6) {document.getElementById("10032").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10033").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10034").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10035").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 55)) { document.getElementById(120029).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 54)) { document.getElementById(120030).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 53)) { document.getElementById(120031).innerText = "séance de seuil";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 52)) { document.getElementById(120032).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 51)) { document.getElementById(120033).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 50)) { document.getElementById(120034).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 49)) { document.getElementById(120035).innerText = "séance d'endurance";}}
        //semaine 6     
        if (nbPrgJ >= 7) {document.getElementById("10036").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10037").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10038").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 6) {document.getElementById("10039").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 5) {document.getElementById("10040").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10041").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10042").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 48)) { document.getElementById(120036).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 47)) { document.getElementById(120037).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 46)) { document.getElementById(120038).innerText = "séance de seuil";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 45)) { document.getElementById(120039).innerText = "séance de seuil";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 44)) { document.getElementById(120040).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 43)) { document.getElementById(120041).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 42)) { document.getElementById(120042).innerText = "séance d'endurance";}}
        //semaine 7       
        if (nbPrgJ >= 7) {document.getElementById("10043").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10044").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10045").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10046").style.backgroundColor = "orange"}
        if (nbPrgJ >= 5) {document.getElementById("10047").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10048").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10049").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 41)) { document.getElementById(120043).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 40)) { document.getElementById(120044).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 39)) { document.getElementById(120045).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 38)) { document.getElementById(120046).innerText = "séance de PMA";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 37)) { document.getElementById(120047).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 36)) { document.getElementById(120048).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 35)) { document.getElementById(120049).innerText = "séance d'endurance";}}
        //semaine 8       
        if (nbPrgJ >= 7) {document.getElementById("10050").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10051").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10052").style.backgroundColor = "orange"}
        if (nbPrgJ >= 6) {document.getElementById("10053").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10054").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10055").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10056").style.backgroundColor = "orange"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 34)) { document.getElementById(120050).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 33)) { document.getElementById(120051).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 32)) { document.getElementById(120052).innerText = "séance de PMA";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 31)) { document.getElementById(120053).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 30)) { document.getElementById(120054).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 29)) { document.getElementById(120055).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 28)) { document.getElementById(120056).innerText = "séance de PMA";}}
        //semaine 9     
        if (nbPrgJ >= 7) {document.getElementById("10057").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10058").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10059").style.backgroundColor = "orange"}
        if (nbPrgJ >= 6) {document.getElementById("10060").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10061").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10062").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10063").style.backgroundColor = "orange"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 27)) { document.getElementById(120057).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 26)) { document.getElementById(120058).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 25)) { document.getElementById(120059).innerText = "séance de PMA";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 24)) { document.getElementById(120060).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 23)) { document.getElementById(120061).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 22)) { document.getElementById(120062).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 21)) { document.getElementById(120063).innerText = "séance de PMA";}}
        //semaine 10      
        if (nbPrgJ >= 7) {document.getElementById("10064").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10065").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10066").style.backgroundColor = "orange"}
        if (nbPrgJ >= 6) {document.getElementById("10067").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10068").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10069").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10070").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 20)) { document.getElementById(120064).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 19)) { document.getElementById(120065).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 18)) { document.getElementById(120066).innerText = "séance de PMA";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 17)) { document.getElementById(120067).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 16)) { document.getElementById(120068).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 15)) { document.getElementById(120069).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 14)) { document.getElementById(120070).innerText = "séance d'endurance";}}
        //semaine 11     
        if (nbPrgJ >= 5) {document.getElementById("10071").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10073").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10076").style.backgroundColor = "orange"}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 13)) { document.getElementById(120071).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 11)) { document.getElementById(120073).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 8)) { document.getElementById(120076).innerText = "séance de PMA";}}
        //semaine 12   
        if (nbPrgJ >= 5) {document.getElementById("10078").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10080").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10083").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 6)) { document.getElementById(120078).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 4)) { document.getElementById(120080).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 1)) { document.getElementById(120083).innerText = "séance de débloquage";}}
    }
    
    else if (nbPrgT == 2) {
        //semaine 1     
        if (nbPrgJ >= 4) {document.getElementById("10001").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {document.getElementById("10002").style.backgroundColor = ""}
        if (nbPrgJ >= 3) {document.getElementById("10003").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10004").style.backgroundColor = "green"}
        if (nbPrgJ >= 6) {document.getElementById("10005").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10006").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10007").style.backgroundColor = "green"}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 55)) { document.getElementById(12001).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 54)) { document.getElementById(12002).innerText = "";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 53)) { document.getElementById(12003).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 52)) { document.getElementById(12004).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 51)) { document.getElementById(12005).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 50)) { document.getElementById(12006).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 49)) { document.getElementById(12007).innerText = "séance d'endurance";}}
        //semaine 2       
        if (nbPrgJ >= 7) {document.getElementById("10008").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10009").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10010").style.backgroundColor = "red"}
        if (nbPrgJ >= 6) {document.getElementById("10011").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10012").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10013").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10014").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 48)) { document.getElementById(12008).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 47)) { document.getElementById(12009).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 46)) { document.getElementById(120010).innerText = "séance de sprint";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 45)) { document.getElementById(120011).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 44)) { document.getElementById(120012).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 43)) { document.getElementById(120013).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 42)) { document.getElementById(120014).innerText = "séance d'endurance";}}
        //semaine 3       
        if (nbPrgJ >= 7) {document.getElementById("10015").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10016").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10017").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 6) {document.getElementById("10018").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10019").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10020").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10021").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 41)) { document.getElementById(120015).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 40)) { document.getElementById(120016).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 39)) { document.getElementById(120017).innerText = "séance de seuil";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 38)) { document.getElementById(120018).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 37)) { document.getElementById(120019).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 36)) { document.getElementById(120020).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 35)) { document.getElementById(120021).innerText = "séance d'endurance";}}
        //semaine 4      
        if (nbPrgJ >= 7) {document.getElementById("10022").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10023").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10024").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 6) {document.getElementById("10025").style.backgroundColor = "orange"}
        if (nbPrgJ >= 5) {document.getElementById("10026").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10027").style.backgroundColor = "yellow"}
        if (nbPrgJ >= 3) {document.getElementById("10028").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 34)) { document.getElementById(120022).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 33)) { document.getElementById(120023).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 32)) { document.getElementById(120024).innerText = "séance de seuil";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 31)) { document.getElementById(120025).innerText = "séance de PMA";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 30)) { document.getElementById(120026).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 29)) { document.getElementById(120027).innerText = "séance de seuil";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 28)) { document.getElementById(120028).innerText = "séance d'endurance";}}
        //semaine 5     
        if (nbPrgJ >= 7) {document.getElementById("10029").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10030").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10031").style.backgroundColor = "orange"}
        if (nbPrgJ >= 6) {document.getElementById("10032").style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {document.getElementById("10033").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10034").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10035").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 27)) {  document.getElementById(120029).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 26)) {  document.getElementById(120030).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 25)) { document.getElementById(120031).innerText = "séance de PMA";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 24)) { document.getElementById(120032).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 23)) { document.getElementById(120033).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 22)) { document.getElementById(120034).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 21)) { document.getElementById(120035).innerText = "séance d'endurance";}}
        //semaine 6     
        if (nbPrgJ >= 7) {document.getElementById("10036").style.backgroundColor = ""}
        if (nbPrgJ >= 4) {document.getElementById("10037").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10038").style.backgroundColor = "orange"}
        if (nbPrgJ >= 6) {document.getElementById("10039").style.backgroundColor = "orange"}
        if (nbPrgJ >= 5) {document.getElementById("10040").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10041").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10042").style.backgroundColor = "green"}
        if (nbPrgJ >= 7) {if(document.getElementById(nbObjectif - 20)) { document.getElementById(120036).innerText = "";}}
        if (nbPrgJ >= 4) {if(document.getElementById(nbObjectif - 19)) { document.getElementById(120037).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 18)) { document.getElementById(120038).innerText = "séance de PMA";}}
        if (nbPrgJ >= 6) {if(document.getElementById(nbObjectif - 17)) { document.getElementById(120039).innerText = "séance de PMA";}}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 16)) { document.getElementById(120040).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 15)) {document.getElementById(120041).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 14)) {document.getElementById(120042).innerText = "séance d'endurance";}}
        //semaine 7       
        if (nbPrgJ >= 5) {document.getElementById("10043").style.backgroundColor = "red"}
        if (nbPrgJ >= 3) {document.getElementById("10045").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10048").style.backgroundColor = "orange"}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 13)) {document.getElementById(120043).innerText = "séance de sprint";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 11)) {document.getElementById(120045).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 8)) {document.getElementById(120048).innerText = "séance de PMA";}}
        //semaine 8       
        if (nbPrgJ >= 5) {document.getElementById("10050").style.backgroundColor = "green"}
        if (nbPrgJ >= 3) {document.getElementById("10052").style.backgroundColor = "orange"}
        if (nbPrgJ >= 3) {document.getElementById("10055") .style.backgroundColor = "green"}
        if (nbPrgJ >= 5) {if(document.getElementById(nbObjectif - 6)) {document.getElementById(120050).innerText = "séance d'endurance";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 4)) {document.getElementById(120052).innerText = "séance de PMA";}}
        if (nbPrgJ >= 3) {if(document.getElementById(nbObjectif - 1)) {document.getElementById(120055).innerText = "séance de débloquage";}}
    }
}
}