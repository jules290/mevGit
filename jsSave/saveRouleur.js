$("#save").click(function() {
    save();
    lcExo();
    window.location.reload()
})

save = () => {
    let année = document.getElementById('anneeV').value;
    let mois = document.getElementById('moisV').value;
    let nbd = document.getElementById('nbdV').value;
    let prgT = document.getElementById("prgTV").value;
    let prgJ = document.getElementById("prgJV").value; 
    localStorage.prg = 3;
    localStorage.année = année;
    localStorage.mois = mois;
    localStorage.nbd = nbd;
    localStorage.prgT = prgT;
    localStorage.prgJ = prgJ;
    let nbAnnée = Number(localStorage.année);
    let nbMois = Number(localStorage.mois);
    let nbNbd = Number(localStorage.nbd);
    let nbObjectif = Number(localStorage.objectif);  
    let nbPrgT = Number(localStorage.prgT); 
    let nbPrgJ = Number(localStorage.prgJ);
}

lcExo = () => {
    let nbAnnée = Number(localStorage.année);
    let nbMois = Number(localStorage.mois);
    let nbNbd = Number(localStorage.nbd);
    let nbObjectif = Number(localStorage.objectif);  
    let nbPrgT = Number(localStorage.prgT); 
    let nbPrgJ = Number(localStorage.prgJ);
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
    
    localStorage.exo1 = "";
    localStorage.exo2 = "";
    localStorage.exo3 = "";
    localStorage.exo4 = "";
    localStorage.exo5 = "";
    localStorage.exo6 = "";
    localStorage.exo7 = "";
    localStorage.exo8 = "";
    localStorage.exo9 = "";
    localStorage.exo10 = "";
    localStorage.exo11 = "";
    localStorage.exo12 = "";
    localStorage.exo13 = "";
    localStorage.exo14 = "";
    localStorage.exo15 = "";
    localStorage.exo16 = "";
    localStorage.exo17 = "";
    localStorage.exo18 = "";
    localStorage.exo19 = "";
    localStorage.exo20 = "";
    localStorage.exo21 = "";
    localStorage.exo22 = "";
    localStorage.exo23 = "";
    localStorage.exo24 = "";
    localStorage.exo25 = "";
    localStorage.exo26 = "";
    localStorage.exo27 = "";
    localStorage.exo28 = "";
    localStorage.exo29 = "";
    localStorage.exo30 = "";
    localStorage.exo31 = "";
    localStorage.exo32 = "";
    localStorage.exo33 = "";
    localStorage.exo34 = "";
    localStorage.exo35 = "";
    localStorage.exo36 = "";
    localStorage.exo37 = "";
    localStorage.exo38 = "";
    localStorage.exo39 = "";
    localStorage.exo40 = "";
    localStorage.exo41 = "";
    localStorage.exo42 = "";
    localStorage.exo43 = "";
    localStorage.exo44 = "";
    localStorage.exo45 = "";
    localStorage.exo46 = "";
    localStorage.exo47 = "";
    localStorage.exo48 = "";
    localStorage.exo49 = "";
    localStorage.exo50 = "";
    localStorage.exo51 = "";
    localStorage.exo52 = "";
    localStorage.exo53 = "";
    localStorage.exo54 = "";
    localStorage.exo55 = "";
    localStorage.exo56 = "";
    localStorage.exo57 = "";
    localStorage.exo58 = "";
    localStorage.exo59 = "";
    localStorage.exo60 = "";
    localStorage.exo61 = "";
    localStorage.exo62 = "";
    localStorage.exo63 = "";
    localStorage.exo64 = "";
    localStorage.exo65 = "";
    localStorage.exo66 = "";
    localStorage.exo67 = "";
    localStorage.exo68 = "";
    localStorage.exo69 = "";
    localStorage.exo70 = "";
    localStorage.exo71 = "";
    localStorage.exo72 = "";
    localStorage.exo73 = "";
    localStorage.exo74 = "";
    localStorage.exo75 = "";
    localStorage.exo76 = "";
    localStorage.exo77 = "";
    localStorage.exo78 = "";
    localStorage.exo79 = "";
    localStorage.exo80 = "";
    localStorage.exo81 = "";
    localStorage.exo82 = "";
    localStorage.exo83 = "";
    localStorage.exo84 = "";
    localStorage.exo85 = "";
    localStorage.exo86 = "";
    localStorage.exo87 = "";
    localStorage.exo88 = "";
    localStorage.exo89 = "";
    localStorage.exo90 = "";
    localStorage.exo91 = "";
    localStorage.exo92 = "";
    localStorage.exo93 = "";
    localStorage.exo94 = "";
    localStorage.exo95 = "";
    localStorage.exo96 = "";
    localStorage.exo97 = "";
    localStorage.exo98 = "";
    localStorage.exo99 = "";
    localStorage.exo100 = "";
    localStorage.exo101 = "";
    localStorage.exo102 = "";
    localStorage.exo103 = "";
    localStorage.exo104 = "";
    localStorage.exo105 = "";
    localStorage.exo106 = "";
    localStorage.exo107 = "";
    localStorage.exo108 = "";
    localStorage.exo109 = "";
    localStorage.exo110 = "";
    localStorage.exo111 = "";
        
    localStorage.exoClr1 = "";
    localStorage.exoClr2 = "";
    localStorage.exoClr3 = "";
    localStorage.exoClr4 = "";
    localStorage.exoClr5 = "";
    localStorage.exoClr6 = "";
    localStorage.exoClr7 = "";
    localStorage.exoClr8 = "";
    localStorage.exoClr9 = "";
    localStorage.exoClr10 = "";
    localStorage.exoClr11 = "";
    localStorage.exoClr12 = "";
    localStorage.exoClr13 = "";
    localStorage.exoClr14 = "";
    localStorage.exoClr15 = "";
    localStorage.exoClr16 = "";
    localStorage.exoClr17 = "";
    localStorage.exoClr18 = "";
    localStorage.exoClr19 = "";
    localStorage.exoClr20 = "";
    localStorage.exoClr21 = "";
    localStorage.exoClr22 = "";
    localStorage.exoClr23 = "";
    localStorage.exoClr24 = "";
    localStorage.exoClr25 = "";
    localStorage.exoClr26 = "";
    localStorage.exoClr27 = "";
    localStorage.exoClr28 = "";
    localStorage.exoClr29 = "";
    localStorage.exoClr30 = "";
    localStorage.exoClr31 = "";
    localStorage.exoClr32 = "";
    localStorage.exoClr33 = "";
    localStorage.exoClr34 = "";
    localStorage.exoClr35 = "";
    localStorage.exoClr36 = "";
    localStorage.exoClr37 = "";
    localStorage.exoClr38 = "";
    localStorage.exoClr39 = "";
    localStorage.exoClr40 = "";
    localStorage.exoClr41 = "";
    localStorage.exoClr42 = "";
    localStorage.exoClr43 = "";
    localStorage.exoClr44 = "";
    localStorage.exoClr45 = "";
    localStorage.exoClr46 = "";
    localStorage.exoClr47 = "";
    localStorage.exoClr48 = "";
    localStorage.exoClr49 = "";
    localStorage.exoClr50 = "";
    localStorage.exoClr51 = "";
    localStorage.exoClr52 = "";
    localStorage.exoClr53 = "";
    localStorage.exoClr54 = "";
    localStorage.exoClr55 = "";
    localStorage.exoClr56 = "";
    localStorage.exoClr57 = "";
    localStorage.exoClr58 = "";
    localStorage.exoClr59 = "";
    localStorage.exoClr60 = "";
    localStorage.exoClr61 = "";
    localStorage.exoClr62 = "";
    localStorage.exoClr63 = "";
    localStorage.exoClr64 = "";
    localStorage.exoClr65 = "";
    localStorage.exoClr66 = "";
    localStorage.exoClr67 = "";
    localStorage.exoClr68 = "";
    localStorage.exoClr69 = "";
    localStorage.exoClr70 = "";
    localStorage.exoClr71 = "";
    localStorage.exoClr72 = "";
    localStorage.exoClr73 = "";
    localStorage.exoClr74 = "";
    localStorage.exoClr75 = "";
    localStorage.exoClr76 = "";
    localStorage.exoClr77 = "";
    localStorage.exoClr78 = "";
    localStorage.exoClr79 = "";
    localStorage.exoClr80 = "";
    localStorage.exoClr81 = "";
    localStorage.exoClr82 = "";
    localStorage.exoClr83 = "";
    localStorage.exoClr84 = "";
    localStorage.exoClr85 = "";
    localStorage.exoClr86 = "";
    localStorage.exoClr87 = "";
    localStorage.exoClr88 = "";
    localStorage.exoClr89 = "";
    localStorage.exoClr90 = "";
    localStorage.exoClr91 = "";
    localStorage.exoClr92 = "";
    localStorage.exoClr93 = "";
    localStorage.exoClr94 = "";
    localStorage.exoClr95 = "";
    localStorage.exoClr96 = "";
    localStorage.exoClr97 = "";
    localStorage.exoClr98 = "";
    localStorage.exoClr99 = "";
    localStorage.exoClr100 = "";
    localStorage.exoClr101 = "";
    localStorage.exoClr102 = "";
    localStorage.exoClr103 = "";
    localStorage.exoClr104 = "";
    localStorage.exoClr105 = "";
    localStorage.exoClr106 = "";
    localStorage.exoClr107 = "";
    localStorage.exoClr108 = "";
    localStorage.exoClr109 = "";
    localStorage.exoClr110 = "";
    localStorage.exoClr111 = "";
    
    if (nbPrgT == 4) {
        //semaine 1
        if (nbPrgJ >= 4) {localStorage.exo1 = ""}
        localStorage.exo2 = "jour de repos"
        localStorage.exo3 = ""
        if (nbPrgJ >= 5) {localStorage.exo4 = ""}
        if (nbPrgJ >= 6) {localStorage.exo5 = ""}
        localStorage.exo6 = ""
        localStorage.exo7 = ""
        
        //semaine 2
        localStorage.exo8 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo9 = ""}
        localStorage.exo10 = ""
        if (nbPrgJ >= 6) {
        localStorage.exo11 = ""}
        if (nbPrgJ >= 5) {localStorage.exo12 = ""}
        localStorage.exo13 = ""
        localStorage.exo14 = ""
    
        //semaine 3
        localStorage.exo15 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo16 = ""}
        localStorage.exo17 = ""
        if (nbPrgJ >= 6) {localStorage.exo18 = ""}
        if (nbPrgJ >= 5) {localStorage.exo19 = ""}
        localStorage.exo20 = ""
        localStorage.exo21 = ""
       
        //semaine 4
        localStorage.exo22 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo23 = ""}
        localStorage.exo24 = ""
        if (nbPrgJ >= 6) {localStorage.exo25 = ""}
        if (nbPrgJ >= 5) {localStorage.exo26 = ""}
        localStorage.exo27 = ""
        localStorage.exo28 = ""
    
        //semaine 5
        localStorage.exo29 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo30 = ""}
        localStorage.exo31 = ""
        if (nbPrgJ >= 6) {localStorage.exo = ""}
        if (nbPrgJ >= 5) { localStorage.exo33 = ""} 
        localStorage.exo34 = ""
        localStorage.exo35 = ""
    
        //semaine 6
        localStorage.exo36 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo37 = ""}
        localStorage.exo38 = ""
        if (nbPrgJ >= 6) {localStorage.exo39 = ""}
        if (nbPrgJ >= 5) {localStorage.exo40 = ""}
        localStorage.exo41 = ""
        localStorage.exo42 = ""
    
        //semaine 7
        localStorage.exo43 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo44 = ""}
        localStorage.exo45 = ""
        if (nbPrgJ >= 6) {localStorage.exo46 = ""}
        if (nbPrgJ >= 5) {localStorage.exo47 = ""}
        localStorage.exo48 = ""
        localStorage.exo49 = ""
    
        //semaine 8
        localStorage.exo50 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo51 = ""}
        localStorage.exo52 = ""
        if (nbPrgJ >= 6) {localStorage.exo53 = ""}
        if (nbPrgJ >= 5) {localStorage.exo54 = ""}
        localStorage.exo55 = ""
        localStorage.exo56 = ""
       
        //semaine 9
        localStorage.exo57 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo58 = ""}
        localStorage.exo59 = ""
        if (nbPrgJ >= 6) {localStorage.exo60 = ""}
        if (nbPrgJ >= 5) {localStorage.exo61 = ""}
        localStorage.exo62 = ""
        localStorage.exo63 = ""
           
        //semaine 10
        localStorage.exo64 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo65 = ""}
        localStorage.exo66 = ""
        if (nbPrgJ >= 6) {localStorage.exo67 = ""}
        if (nbPrgJ >= 5) {localStorage.exo68 = ""}
        localStorage.exo69 = ""
        localStorage.exo70 = ""
    
        //semaine 11
        localStorage.exo71 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo72 = ""}
        localStorage.exo73 = ""
        if (nbPrgJ >= 6) {localStorage.exo74 = ""}
        if (nbPrgJ >= 5) {localStorage.exo75 = ""}
        localStorage.exo76 = ""
        localStorage.exo77 = ""
            
        //semaine 12
        localStorage.exo78 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo79 = ""}
        localStorage.exo80 = ""
        if (nbPrgJ >= 6) {localStorage.exo81 = ""}
        if (nbPrgJ >= 5) {localStorage.exo82 = ""}
        localStorage.exo83 = ""
        localStorage.exo84 = ""
        
        //semaine 13
        localStorage.exo85 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo86 = ""}
        localStorage.exo87 = ""
        if (nbPrgJ >= 6) {localStorage.exo88 = ""}
        if (nbPrgJ >= 5) {localStorage.exo89 = ""}
        localStorage.exo90 = ""
        localStorage.exo91 = ""
            
        //semaine 14
        localStorage.exo92 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo93 = ""}
        localStorage.exo94 = ""
        if (nbPrgJ >= 6) {localStorage.exo95 = ""}
        if (nbPrgJ >= 5) {localStorage.exo96 = ""}
        localStorage.exo97 = ""
        localStorage.exo98 = ""
         
        //semaine 15
        if (nbPrgJ >= 5) {
            localStorage.exo99 = "séance de sprint";
            localStorage.exoClr99 = "red";
        }
        else {
            localStorage.exo99 = "jour de repos"
            localStorage.exoClr99 = "";
        };
    
        localStorage.exo100 = "jour de repos";
        localStorage.exoClr100 = "";
    
        localStorage.exo101 = "séance d'endurance";
        localStorage.exoClr101 = "green";
    
        localStorage.exo102 = "jour de repos";
        localStorage.exoClr102 = "";
    
        localStorage.exo103 = "jour de repos";
        localStorage.exoClr103 = "";
    
        localStorage.exo104 = "séance de PMA";
        localStorage.exoClr104 = "orange";
    
        localStorage.exo105 = "jour de repos";
        localStorage.exoClr105 = "";
    
        //semaine 16
        if (nbPrgJ >= 5) {
            localStorage.exo106 = "séance d'endurance";
            localStorage.exoClr106 = "green";
        }
        else {
            localStorage.exo106 = "jour de repos"
            localStorage.exoClr106 = "";
        };
    
        localStorage.exo107 = "jour de repos";
        localStorage.exoClr107 = "";
    
        localStorage.exo108 = "séance de PMA";
        localStorage.exoClr108 = "orange";
    
        localStorage.exo109 = "jour de repos";
        localStorage.exoClr109 = "";
    
        localStorage.exo110 = "jour de repos";
        localStorage.exoClr110 = "";
    
        localStorage.exo111 = "séance d'endurance";
        localStorage.exoClr111 = "green";
    
        localStorage.exo112 = "objectif";
        localStorage.exoClr112 = "grey";
    }
    
    else if (nbPrgT == 3) {
        //semaine 1
        if (nbPrgJ >= 4) {localStorage.exo1 = ""}
        localStorage.exo2 = "jour de repos"
        localStorage.exo = ""
        if (nbPrgJ >= 5) {localStorage.exo4 = ""}
        if (nbPrgJ >= 6) {localStorage.exo5 = ""}
        localStorage.exo6 = ""
        localStorage.exo7 = ""
         
        //semaine 2
        localStorage.exo8 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo9 = ""}
        localStorage.exo10 = ""
        if (nbPrgJ >= 6) {localStorage.exo11 = ""}
        if (nbPrgJ >= 5) {localStorage.exo12 = ""}
        localStorage.exo13 = ""
        localStorage.exo14 = ""
         
        //semaine 3
        localStorage.exo15 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo16 = ""}
        localStorage.exo17 = ""
        if (nbPrgJ >= 6) {localStorage.exo18 = ""}
        if (nbPrgJ >= 5) {localStorage.exo19 = ""}
        localStorage.exo20 = ""
        localStorage.exo21 = ""
            
        //semaine 4
        localStorage.exo22 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo23 = ""}
        localStorage.exo24 = ""
        if (nbPrgJ >= 6) {localStorage.exo25 = ""}
        if (nbPrgJ >= 5) {localStorage.exo26 = ""}
        localStorage.exo27 = ""
        localStorage.exo28 = ""
         
        //semaine 5
        localStorage.exo29 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo30 = ""}
        localStorage.exo31 = ""
        if (nbPrgJ >= 6) {localStorage.exo32 = ""}
        if (nbPrgJ >= 5) {localStorage.exo33 = ""}
        localStorage.exo34 = ""
        localStorage.exo35 = ""
           
        //semaine 6
        localStorage.exo36 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo37 = ""}
        localStorage.exo38 = ""
        if (nbPrgJ >= 6) {localStorage.exo39 = ""}
        if (nbPrgJ >= 5) {localStorage.exo40 = ""}
        localStorage.exo41 = ""
        localStorage.exo42 = ""
         
        //semaine 7
        localStorage.exo43 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo44 = ""}
        localStorage.exo45 = ""
        if (nbPrgJ >= 6) {localStorage.exo46 = ""}
        if (nbPrgJ >= 5) {localStorage.exo47 = ""}
        localStorage.exo48 = ""
        localStorage.exo49 = ""
    
        //semaine 8
        localStorage.exo = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo51 = ""}
        localStorage.exo52 = ""
        if (nbPrgJ >= 6) {localStorage.exo53 = ""}
        if (nbPrgJ >= 5) {localStorage.exo54 = ""}
        localStorage.exo55 = ""
        localStorage.exo56 = ""
       
        //semaine 9
        localStorage.exo57 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo58 = ""}
        localStorage.exo59 = ""
        if (nbPrgJ >= 6) {localStorage.exo60 = ""}
        if (nbPrgJ >= 5) {localStorage.exo61 = ""}
        localStorage.exo62 = ""
        localStorage.exo63 = ""
    
        //semaine 10
        localStorage.exo64 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo65 = ""}
        localStorage.exo66 = ""
        if (nbPrgJ >= 6) {localStorage.exo67 = ""}
        if (nbPrgJ >= 5) {localStorage.exo68 = ""}
        localStorage.exo69 = ""
        localStorage.exo70 = ""
     
        //semaine 11
        if (nbPrgJ >= 5) {
            localStorage.exo71 = "séance de sprint";
            localStorage.exoClr71 = "red";
        }
        else {
            localStorage.exo71 = "jour de repos"
            localStorage.exoClr71 = "";
        };
    
        localStorage.exo72 = "jour de repos";
        localStorage.exoClr72 = "";
    
        localStorage.exo73 = "séance d'endurance";
        localStorage.exoClr73 = "green";
    
        localStorage.exo74 = "jour de repos";
        localStorage.exoClr74 = "";
    
        localStorage.exo75 = "jour de repos";
        localStorage.exoClr75 = "";
    
        localStorage.exo76 = "séance de PMA";
        localStorage.exoClr76 = "orange";
    
        localStorage.exo77 = "jour de repos";
        localStorage.exoClr77 = "";
    
        //semaine 12
        if (nbPrgJ >= 5) {
            localStorage.exo78 = "séance d'endurance";
            localStorage.exoClr78 = "green";
        }
        else {
            localStorage.exo78 = "jour de repos"
            localStorage.exoClr78 = "";
        };
    
        localStorage.exo79 = "jour de repos";
        localStorage.exoClr79 = "";
    
        localStorage.exo80 = "séance de PMA";
        localStorage.exoClr80 = "orange";
    
        localStorage.exo81 = "jour de repos";
        localStorage.exoClr81 = "";
    
        localStorage.exo82 = "jour de repos";
        localStorage.exoClr82 = "";
    
        localStorage.exo83 = "séance d'endurance";
        localStorage.exoClr83 = "green";
    
        localStorage.exo84 = "objectif";
        localStorage.exoClr84 = "grey";
    }
    
        else if (nbPrgT == 2) {
        //semaine 1
        if (nbPrgJ >= 4) {localStorage.exo1 = ""}
        localStorage.exo2 = "jour de repos"
        localStorage.exo3 = ""
        if (nbPrgJ >= 5) {localStorage.exo4 = ""}
        if (nbPrgJ >= 6) {localStorage.exo5 = ""}
        localStorage.exo6 = ""
        localStorage.exo7 = ""
      
        //semaine 2
        localStorage.exo8 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo9 = ""}
        localStorage.exo10 = ""
        if (nbPrgJ >= 6) {localStorage.exo11 = ""}
        if (nbPrgJ >= 5) {localStorage.exo12 = ""}
        localStorage.exo13 = ""
        localStorage.exo14 = ""
      
        //semaine 3
        localStorage.exo15 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo16 = ""}
        localStorage.exo17 = ""
        if (nbPrgJ >= 6) {localStorage.exo18 = ""}
        if (nbPrgJ >= 5) {localStorage.exo19 = ""}
        localStorage.exo20 = ""
        localStorage.exo21 = ""
           
        //semaine 4
        localStorage.exo22 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo23 = ""}
        localStorage.exo24 = ""
        if (nbPrgJ >= 6) {localStorage.exo25 = ""}
        if (nbPrgJ >= 5) {localStorage.exo26 = ""}
        localStorage.exo27 = ""
        localStorage.exo28 = ""
        
        //semaine 5
        localStorage.exo29 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo30 = ""}
        localStorage.exo31 = ""
        if (nbPrgJ >= 6) {localStorage.exo32 = ""}
        if (nbPrgJ >= 5) {localStorage.exo33 = ""}
        localStorage.exo34 = ""
        localStorage.exo35 = ""
           
        //semaine 6
        localStorage.exo36 = "jour de repos"
        if (nbPrgJ >= 4) {localStorage.exo37 = ""}
        localStorage.exo38 = ""
        if (nbPrgJ >= 6) {localStorage.exo39 = ""}
        if (nbPrgJ >= 5) {localStorage.exo40 = ""}
        localStorage.exo41 = ""
        localStorage.exo42 = ""
    
        //semaine 7
        if (nbPrgJ >= 5) {
            localStorage.exo43 = "séance de sprint";
            localStorage.exoClr = "red";
        }
        else {
            localStorage.exo43 = "jour de repos"
            localStorage.exoClr = "";
        };
    
        localStorage.exo44 = "jour de repos";
        localStorage.exoClr = "";
    
        localStorage.exo45 = "séance d'endurance";
        localStorage.exoClr = "green";
    
        localStorage.exo46 = "jour de repos";
        localStorage.exoClr = "";
    
        localStorage.exo47 = "jour de repos";
        localStorage.exoClr = "";
    
        localStorage.exo48 = "séance de PMA";
        localStorage.exoClr = "";
    
        localStorage.exo49 = "jour de repos";
        localStorage.exoClr = "";
    
        //semaine 8
        if (nbPrgJ >= 5) {
            localStorage.exo50 = "séance d'endurance";
            localStorage.exoClr = "green";
        }
        else {
            localStorage.exo = "jour de repos"
            localStorage.exoClr = "";
        };
    
        localStorage.exo51 = "jour de repos";
        localStorage.exoClr = "";
    
        localStorage.exo52 = "séance de PMA";
        localStorage.exoClr = "orange";
    
        localStorage.exo53 = "jour de repos";
        localStorage.exoClr = "";
    
        localStorage.exo54 = "jour de repos";
        localStorage.exoClr = "";
    
        localStorage.exo55 = "séance d'endurance";
        localStorage.exoClr = "green";
    
        localStorage.exo56 = "objectif";
        localStorage.exoClr = "";
    }
}
