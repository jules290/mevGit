$("#save").click(function() {
    let année = document.getElementById('anneeV').value;
    let mois = document.getElementById('moisV').value;
    let nbd = document.getElementById('nbdV').value;
    let prgT = document.getElementById("prgTV").value;
    let prgJ = document.getElementById("prgJV").value;
    let nbAnnée = Number(localStorage.année);
    let nbMois = Number(localStorage.mois);
    let nbNbd = Number(localStorage.nbd);
    let nbObjectif = Number(localStorage.objectif);  
    localStorage.prg = 1;
    localStorage.année = année;
    localStorage.mois = mois;
    localStorage.nbd = nbd;
    localStorage.prgT = prgT;
    localStorage.prgJ = prgJ;
    
    //2020
    if(nbAnnée == 2020) {
        //janvier 01
        if(nbMois == 1) {
            localStorage.objectif = 1 + nbNbd - 1;
        }
        //fevrier 02
        else if(nbMois == 2) {
            if(nbNbd <= 29) {
                localStorage.objectif = 32 + nbNbd - 1;
            }
            else {
                alert("veuillez sélectionner une date valide");
                localStorage.année = 0;
                localStorage.mois = 0;
                localStorage.nbd = 0;
            }
        } 
        //mars 03
        else if(nbMois == 3) {
            localStorage.objectif = 61 + nbNbd - 1;
        }
        //avril 04
        else if(nbMois == 4) {
            if(nbNbd <= 30) {
                localStorage.objectif = 92 + nbNbd - 1;
            }
            else {
                alert("veuillez sélectionner une date valide");
                localStorage.année = 0;
                localStorage.mois = 0;
                localStorage.nbd = 0;
            }
        }
        //mai 05
        else if(nbMois == 5) {
            localStorage.objectif = 122 + nbNbd - 1;
        }
        //juin 06
        else if(nbMois == 6) {
            if (nbNbd <= 30) {
                localStorage.objectif = 153 + nbNbd - 1;
            }
            else {
                alert("veuillez sélectionner une date valide");
                localStorage.année = 0;
                localStorage.mois = 0;
                localStorage.nbd = 0;
            }
        }
        //juillet 07
        else if(nbMois == 7) {
            localStorage.objectif = 183 + nbNbd - 1;
        }
        //aout 08
        else if(nbMois == 8) {
            localStorage.objectif = 214 + nbNbd - 1;
        }
        //septembre 09
        else if(nbMois == 9) {
            if (nbNbd <= 30) {
                localStorage.objectif = 245 + nbNbd - 1;
            }
            else {
                alert("veuillez sélectionner une date valide");
                localStorage.année = 0;
                localStorage.mois = 0;
                localStorage.nbd = 0;
            }
        }
        //octobre 10
        else if(nbMois == 10) {
            localStorage.objectif = 275 + nbNbd - 1;
        }
        //novembre 11
        else if(nbMois == 11) {
            if (nbNbd <= 30) {
            localStorage.objectif = 306 + nbNbd - 1;
            }
            else {
                alert("veuillez sélectionner une date valide");
                localStorage.année = 0;
                localStorage.mois = 0;
                localStorage.nbd = 0;
            } 
        }
        //decembre 12
        else if (nbMois == 12) {
            localStorage.objectif = 336 + nbNbd - 1;
        }  
    }
    window.location.reload();
})
