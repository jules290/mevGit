$("#save").click(function() {
    let année = document.getElementById('annee').value;
    let mois = document.getElementById('mois').value;
    let nbd = document.getElementById('nbd').value;
    let prgT = document.getElementById("prgT").value;
    let prgJ = document.getElementById("prgJ").value;
    let nbAnnée = Number(localStorage.année);
    let nbMois = Number(localStorage.mois);
    let nbNbd = Number(localStorage.nbd);
    let nbObjectif = Number(localStorage.objectif);  
    localStorage.prg = 3;
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
    if (nbPrgT == 4) {
        //semaine 1
        if (nbPrgJ >= 4) {
            localStorage.exo1 = "séance d'endurance";
            localStorage.exoClr1 = "green";
        }
        else {
            localStorage.exo1 = "jour de repos"
            localStorage.exoClr1 = "";
        };

        localStorage.exo2 = "jour de repos";
        localStorage.exoClr2 = "";

        localStorage.exo3 = "séance d'endurance";
        localStorage.exoClr3 = "green";

        if (nbPrgJ >= 5) {
            localStorage.exo4 = "séance d'endurance";
            localStorage.exoClr4 = "green";
        }
        else {
            localStorage.exo4 = "jour de repos"
            localStorage.exoClr4 = "";
        };
        if (nbPrgJ >= 6) {
            localStorage.exo5 = "séance d'endurance";
            localStorage.exoClr5 = "green";
        }
        else {
            localStorage.exo5 = "jour de repos"
            localStorage.exoClr5 = "";
        };

        localStorage.exo6 = "séance d'endurance";
        localStorage.exoClr6 = "green";

        localStorage.exo7 = "séance d'endurance";
        localStorage.exoClr7 = "green";

        //semaine 2
        localStorage.exo8 = "jour de repos";
        localStorage.exoClr8 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo9 = "séance d'endurance";
            localStorage.exoClr9 = "green";
        }
        else {
            localStorage.exo9 = "jour de repos"
            localStorage.exoClr9 = "";
        };

        localStorage.exo10 = "séance de sprint";
        localStorage.exoClr10 = "red";

        if (nbPrgJ >= 6) {
            localStorage.exo11 = "séance d'endurance"
            localStorage.exoClr11 = "green";
            }
        else {
            localStorage.exo11 = "jour de repos"
            localStorage.exoClr11 ="" ;
        };
        if (nbPrgJ >= 5) {
            localStorage.exo12 = "séance de seuil";
            localStorage.exoClr12 = "#bebe02";
        }
        else {
            localStorage.exo12 = "jour de repos"
            localStorage.exoClr12 = "";
        };

        localStorage.exo13 = "séance d'endurance";
        localStorage.exoClr13 = "green";

        localStorage.exo14 = "séance d'endurance";
        localStorage.exoClr14 = "green";

        //semaine 3
        localStorage.exo15 = "jour de repos";
        localStorage.exoClr15 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo16 = "séance de sprint";
            localStorage.exoClr16 = "red";
        }
        else {
            localStorage.exo16 = "jour de repos"
            localStorage.exoClr16 = "";
        };

        localStorage.exo17 = "séance d'endurance";
        localStorage.exoClr17 = "green";

        if (nbPrgJ >= 6) {
            localStorage.exo18 = "séance de PMA";
            localStorage.exoClr18 = "orange";
        }
        else {
            localStorage.exo18 = "jour de repos"
            localStorage.exoClr18 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo19 = "séance d'endurance";
            localStorage.exoClr19 = "green";
        }
        else {
            localStorage.exo19 = "jour de repos"
            localStorage.exoClr19 = "";
        };

        localStorage.exo20 = "séance d'endurance";
        localStorage.exoClr20 = "green";

        localStorage.exo21 = "séance d'endurance";
        localStorage.exoClr21 = "green";

        //semaine 4
        localStorage.exo22 = "jour de repos";
        localStorage.exoClr22 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo23 = "séance de seuil";
            localStorage.exoClr23 = "#bebe02";
        }
        else {
            localStorage.exo23 = "jour de repos"
            localStorage.exoClr23 = "";
        };

        localStorage.exo24 = "séance d'endurance";
        localStorage.exoClr24 = "green";

        if (nbPrgJ >= 6) {
            localStorage.exo25 = "séance d'endurance";
            localStorage.exoClr25 = "green";
        }
        else {
            localStorage.exo25 = "jour de repos"
            localStorage.exoClr25 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo26 = "séance de sprint";
            localStorage.exoClr26 = "red";
        }
        else {
            localStorage.exo26 = "jour de repos"
            localStorage.exoClr26 = "";
        };

        localStorage.exo27 = "séance d'endurance";
        localStorage.exoClr27 = "green";

        localStorage.exo28 = "séance d'endurance";
        localStorage.exoClr28 = "green";

        //semaine 5
        localStorage.exo29 = "jour de repos";
        localStorage.exoClr29 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo30 = "séance d'endurance";
            localStorage.exoClr30 = "green";
        }
        else {
            localStorage.exo30 = "jour de repos"
            localStorage.exoClr30 = "";
        };

        localStorage.exo31 = "séance d'endurance";
        localStorage.exoClr31 = "green";

        if (nbPrgJ >= 6) {
            localStorage.exo32 = "séance d'endurance";
            localStorage.exoClr32 = "green";
        }
        else {
            localStorage.exo32 = "jour de repos"
            localStorage.exoClr32 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo33 = "séance de PMA";
            localStorage.exoClr33 = "orange";
        }
        else {
            localStorage.exo33 = "jour de repos"
            localStorage.exoClr33 = "";
        };

        localStorage.exo34 = "séance d'endurance";
        localStorage.exoClr34 = "green";

        localStorage.exo35 = "séance d'endurance";
        localStorage.exoClr35 = "green";

        //semaine 6
        localStorage.exo36 = "jour de repos";
        localStorage.exoClr36 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo37 = "séance d'endurance";
            localStorage.exoClr37 = "green";
        }
        else {
            localStorage.exo37 = "jour de repos"
            localStorage.exoClr37 = "";
        };

        localStorage.exo38 = "séance de seuil";
        localStorage.exoClr38 = "#bebe02";

        if (nbPrgJ >= 6) {
            localStorage.exo39 = "séance de sprint";
            localStorage.exoClr39 = "red";
        }
        else {
            localStorage.exo39 = "jour de repos"
            localStorage.exoClr39 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo40 = "séance d'endurance";
            localStorage.exoClr40 = "green";
        }
        else {
            localStorage.exo40 = "jour de repos"
            localStorage.exoClr40 = "";
        };

        localStorage.exo41 = "séance d'endurance";
        localStorage.exoClr41 = "green";

        localStorage.exo42 = "séance d'endurance";
        localStorage.exoClr42 = "green";

        //semaine 7
        localStorage.exo43 = "jour de repos";
        localStorage.exoClr43 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo44 = "séance de sprint";
            localStorage.exoClr44 = "red";
        }
        else {
            localStorage.exo44 = "jour de repos"
            localStorage.exoClr44 = "";
        };

        localStorage.exo45 = "séance de seuil";
        localStorage.exoClr45 = "#bebe02";

        if (nbPrgJ >= 6) {
            localStorage.exo46 = "séance d'endurance";
            localStorage.exoClr46 = "green";
        }
        else {
            localStorage.exo46 = "jour de repos"
            localStorage.exoClr46 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo47 = "séance de seuil";
            localStorage.exoClr47 = "#bebe02";
        }
        else {
            localStorage.exo47 = "jour de repos"
            localStorage.exoClr47 = "";
        };

        localStorage.exo48 = "séance d'endurance";
        localStorage.exoClr48 = "green";

        localStorage.exo49 = "séance de seuil";
        localStorage.exoClr49 = "#bebe02";

        //semaine 8
        localStorage.exo50 = "jour de repos";
        localStorage.exoClr50 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo51 = "séance de seuil";
            localStorage.exoClr51 = "#bebe02";
        }
        else {
            localStorage.exo51 = "jour de repos"
            localStorage.exoClr51 = "";
        };

        localStorage.exo52 = "séance d'endurance";
        localStorage.exoClr52 = "green";

        if (nbPrgJ >= 6) {
            localStorage.exo53 = "séance de seuil";
            localStorage.exoClr53 = "#bebe02";
        }
        else {
            localStorage.exo53 = "jour de repos"
            localStorage.exoClr53 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo54 = "séance d'endurance";
            localStorage.exoClr54 = "green";
        }
        else {
            localStorage.exo54 = "jour de repos"
            localStorage.exoClr54 = "";
        };

        localStorage.exo55 = "séance de seuil";
        localStorage.exoClr55 = "#bebe02";

        localStorage.exo56 = "séance d'endurance";
        localStorage.exoClr56 = "green";

        //semaine 9
        localStorage.exo57 = "jour de repos";
        localStorage.exoClr57 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo58 = "séance de sprint";
            localStorage.exoClr58 = "red";
        }
        else {
            localStorage.exo58 = "jour de repos"
            localStorage.exoClr58 = "";
        };

        localStorage.exo59 = "séance d'endurance";
        localStorage.exoClr59 = "green";

        if (nbPrgJ >= 6) {
            localStorage.exo60 = "séance de seuil";
            localStorage.exoClr60 = "#bebe02";
        }
        else {
            localStorage.exo60 = "jour de repos"
            localStorage.exoClr60 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo61 = "séance d'endurance";
            localStorage.exoClr61 = "green";
        }
        else {
            localStorage.exo61 = "jour de repos"
            localStorage.exoClr61 = "";
        };

        localStorage.exo62 = "séance de seuil";
        localStorage.exoClr62 = "#bebe02";

        localStorage.exo63 = "séance d'endurance";
        localStorage.exoClr63 = "green";

        //semaine 10
        localStorage.exo64 = "jour de repos";
        localStorage.exoClr64 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo65 = "séance d'endurance";
            localStorage.exoClr65 = "green";
        }
        else {
            localStorage.exo65 = "jour de repos"
            localStorage.exoClr65 = "";
        };

        localStorage.exo66 = "séance de seuil";
        localStorage.exoClr66 = "#bebe02";

        if (nbPrgJ >= 6) {
            localStorage.exo67 = "séance d'endurance";
            localStorage.exoClr67 = "green";
        }
        else {
            localStorage.exo67 = "jour de repos"
            localStorage.exoClr67 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo68 = "séance d'endurance";
            localStorage.exoClr68 = "green";
        }
        else {
            localStorage.exo68 = "jour de repos"
            localStorage.exoClr68 = "";
        };

        localStorage.exo69 = "séance de seuil";
        localStorage.exoClr69 = "#bebe02";

        localStorage.exo70 = "séance d'endurance";
        localStorage.exoClr70 = "green";

        //semaine 11
        localStorage.exo71 = "jour de repos";
        localStorage.exoClr71 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo72 = "séance de sprint";
            localStorage.exoClr72 = "red";
        }
        else {
            localStorage.exo72 = "jour de repos"
            localStorage.exoClr72 = "";
        };

        localStorage.exo73 = "séance de PMA";
        localStorage.exoClr73 = "orange";

        if (nbPrgJ >= 6) {
            localStorage.exo74 = "séance d'endurance";
            localStorage.exoClr74 = "green";
        }
        else {
            localStorage.exo74 = "jour de repos"
            localStorage.exoClr74 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo75 = "séance de PMA";
            localStorage.exoClr75 = "orange";
        }
        else {
            localStorage.exo75  = "jour de repos"
            localStorage.exoClr75 = "";
        };

        localStorage.exo76 = "séance de PMA";
        localStorage.exoClr76 = "orange";

        localStorage.exo77 = "séance d'endurance";
        localStorage.exoClr77 = "green";

        //semaine 12
        localStorage.exo78 = "jour de repos";
        localStorage.exoClr78 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo79 = "séance de PMA";
            localStorage.exoClr79 = "orange";
        }
        else {
            localStorage.exo79 = "jour de repos"
            localStorage.exoClr79 = "";
        };

        localStorage.exo80 = "séance d'endurance";
        localStorage.exoClr80 = "green";

        if (nbPrgJ >= 6) {
            localStorage.exo81 = "séance de PMA";
            localStorage.exoClr81 = "orange";
        }
        else {
            localStorage.exo81 = "jour de repos"
            localStorage.exoClr81 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo82 = "séance d'endurance";
            localStorage.exoClr82 = "green";
        }
        else {
            localStorage.exo82 = "jour de repos"
            localStorage.exoClr82 = "";
        };

        localStorage.exo83 = "séance de PMA";
        localStorage.exoClr83 = "orange";

        localStorage.exo84 = "séance d'endurance";
        localStorage.exoClr84 = "green";

        //semaine 13
        localStorage.exo85 = "jour de repos";
        localStorage.exoClr85 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo86 = "séance de sprint";
            localStorage.exoClr86 = "red";
        }
        else {
            localStorage.exo86 = "jour de repos"
            localStorage.exoClr86 = "";
        };

        localStorage.exo87 = "séance de PMA";
        localStorage.exoClr87 = "orange";

        if (nbPrgJ >= 6) {
            localStorage.exo88 = "séance d'endurance";
            localStorage.exoClr88 = "green";
        }
        else {
            localStorage.exo88 = "jour de repos"
            localStorage.exoClr88 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo89 = "séance d'endurance";
            localStorage.exoClr89 = "green";
        }
        else {
            localStorage.exo89 = "jour de repos"
            localStorage.exoClr89 = "";
        };

        localStorage.exo90 = "séance de PMA";
        localStorage.exoClr90 = "orange";

        localStorage.exo91 = "séance d'endurance";
        localStorage.exoClr91 = "green";

        //semaine 14
        localStorage.exo92 = "jour de repos";
        localStorage.exoClr92 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo93 = "séance d'endurance";
            localStorage.exoClr93 = "green";
        }
        else {
            localStorage.exo93 = "jour de repos"
            localStorage.exoClr93 = "";
        };

        localStorage.exo94 = "séance de PMA";
        localStorage.exoClr94 = "orange";

        if (nbPrgJ >= 6) {
            localStorage.exo95 = "séance d'endurance";
            localStorage.exoClr95 = "green";
        }
        else {
            localStorage.exo95 = "jour de repos"
            localStorage.exoClr95 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo96 = "séance d'endurance";
            localStorage.exoClr96 = "green";
        }
        else {
            localStorage.exo96 = "jour de repos"
            localStorage.exoClr96 = "";
        };

        localStorage.exo97 = "séance de PMA";
        localStorage.exoClr97 = "orange";

        localStorage.exo98 = "séance d'endurance";
        localStorage.exoClr98 = "green";

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
        localStorage.exoClr15 = "";

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
        if (nbPrgJ >= 4) {
            localStorage.exo1 = "séance d'endurance";
            localStorage.exoClr1 = "green";
        }
        else {
            localStorage.exo1 = "jour de repos"
            localStorage.exoClr1 = "";
        };

        localStorage.exo2 = "jour de repos";
        localStorage.exoClr2 = "";

        localStorage.exo3 = "séance d'endurance";
        localStorage.exoClr3 = "green";

        if (nbPrgJ >= 5) {
            localStorage.exo4 = "séance d'endurance";
            localStorage.exoClr4 = "green";
        }
        else {
            localStorage.exo4 = "jour de repos"
            localStorage.exoClr4 = "";
        };
        if (nbPrgJ >= 6) {
            localStorage.exo5 = "séance d'endurance";
            localStorage.exoClr5 = "green";
        }
        else {
            localStorage.exo5 = "jour de repos"
            localStorage.exoClr5 = "";
        };

        localStorage.exo6 = "séance d'endurance";
        localStorage.exoClr6 = "green";

        localStorage.exo7 = "séance d'endurance";
        localStorage.exoClr7 = "green";

        //semaine 2
        localStorage.exo8 = "jour de repos";
        localStorage.exoClr8 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo9 = "séance d'endurance";
            localStorage.exoClr9 = "green";
        }
        else {
            localStorage.exo9 = "jour de repos"
            localStorage.exoClr9 = "";
        };
    
        localStorage.exo10 = "séance de sprint";
        localStorage.exoClr10 = "red";

        if (nbPrgJ >= 6) {
            localStorage.exo11 = "séance d'endurance";
            localStorage.exoClr11 = "green";
        }
        else {
            localStorage.exo11 = "jour de repos"
            localStorage.exoClr11 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo12 = "séance de seuil";
            localStorage.exoClr12 = "#bebe02";
        }
        else {
            localStorage.exo12 = "jour de repos"
            localStorage.exoClr12 = "";
        };

        localStorage.exo13 = "séance d'endurance";
        localStorage.exoClr13 = "green";

        localStorage.exo14 = "séance d'endurance";
        localStorage.exoClr14 = "green";

        //semaine 3
        localStorage.exo15 = "jour de repos";
        localStorage.exoClr15 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo16 = "séance de sprint";
            localStorage.exoClr16 = "red";
        }
        else {
            localStorage.exo16 = "jour de repos"
            localStorage.exoClr16 = "";
        };

        localStorage.exo17 = "séance de seuil";
        localStorage.exoClr17 = "#bebe02";

        if (nbPrgJ >= 6) {
            localStorage.exo18 = "séance d'endurance";
            localStorage.exoClr18 = "green";
        }
        else {
            localStorage.exo18 = "jour de repos"
            localStorage.exoClr18 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo19 = "séance d'endurance";
            localStorage.exoClr19 = "green";
        }
        else {
            localStorage.exo19 = "jour de repos"
            localStorage.exoClr19 = "";
        };

        localStorage.exo20 = "séance d'endurance";
        localStorage.exoClr20 = "green";

        localStorage.exo21 = "séance d'endurance";
        localStorage.exoClr21 = "green";

        //semaine 4
        localStorage.exo22 = "jour de repos";
        localStorage.exoClr22 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo23 = "séance d'endurance";
            localStorage.exoClr23 = "green";
        }
        else {
            localStorage.exo23 = "jour de repos"
            localStorage.exoClr23 = "";
        };

        localStorage.exo24 = "séance d'endurance";
        localStorage.exoClr24 = "green";

        if (nbPrgJ >= 6) {
            localStorage.exo25 = "séance de PMA";
            localStorage.exoClr25 = "orange";
        }
        else {
            localStorage.exo25 = "jour de repos"
            localStorage.exoClr25 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo26 = "séance d'endurance";
            localStorage.exoClr26 = "green";
        }
        else {
            localStorage.exo26 = "jour de repos"
            localStorage.exoClr26 = "";
        };

        localStorage.exo27 = "séance d'endurance";
        localStorage.exoClr27 = "green";

        localStorage.exo28 = "séance d'endurance";
        localStorage.exoClr28 = "green";

        //semaine 5
        localStorage.exo29 = "jour de repos";
        localStorage.exoClr29 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo30 = "séance de sprint";
            localStorage.exoClr30 = "red";
        }
        else {
            localStorage.exo30 = "jour de repos"
            localStorage.exoClr30 = "";
        };

        localStorage.exo31 = "séance de seuil";
        localStorage.exoClr31 = "#bebe02";

        if (nbPrgJ >= 6) {
            localStorage.exo32 = "séance d'endurance";
            localStorage.exoClr32 = "green";
        }
        else {
            localStorage.exo32 = "jour de repos"
            localStorage.exoClr32 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo33 = "séance de seuil";
            localStorage.exoClr33 = "#bebe02";
        }
        else {
            localStorage.exo33 = "jour de repos"
            localStorage.exoClr33 = "";
        };

        localStorage.exo34 = "séance de seuil";
        localStorage.exoClr34 = "#bebe02";

        localStorage.exo35 = "séance d'endurance";
        localStorage.exoClr35 = "green";

        //semaine 6
        localStorage.exo36 = "jour de repos";
        localStorage.exoClr36 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo37 = "séance d'endurance";
            localStorage.exoClr37 = "green";
        }
        else {
            localStorage.exo37 = "jour de repos"
            localStorage.exoClr37 = "";
        };

        localStorage.exo38 = "séance de seuil";
        localStorage.exoClr38 = "#bebe02";

        if (nbPrgJ >= 6) {
            localStorage.exo39 = "séance de seuil";
            localStorage.exoClr39 = "";
        }
        else {
            localStorage.exo39 = "jour de repos"
            localStorage.exoClr39 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo40 = "séance d'endurance";
            localStorage.exoClr40 = "green";
        }
        else {
            localStorage.exo40 = "jour de repos"
            localStorage.exoClr40 = "";
        };

        localStorage.exo41 = "séance de seuil";
        localStorage.exoClr41 = "#bebe02";

        localStorage.exo42 = "séance d'endurance";
        localStorage.exoClr42 = "green";

        //semaine 7
        localStorage.exo43 = "jour de repos";
        localStorage.exoClr43 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo44 = "séance de sprint";
            localStorage.exoClr44 = "red";
        }
        else {
            localStorage.exo44 = "jour de repos"
            localStorage.exoClr44 = "";
        };

        localStorage.exo45 = "séance de PMA";
        localStorage.exoClr45 = "orange";

        if (nbPrgJ >= 6) {
            localStorage.exo46 = "séance d'endurance";
            localStorage.exoClr46 = "green";
        }
        else {
            localStorage.exo46 = "jour de repos"
            localStorage.exoClr46 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo47 = "séance de PMA";
            localStorage.exoClr47 = "orange";
        }
        else {
            localStorage.exo47 = "jour de repos"
            localStorage.exoClr47 = "";
        };

        localStorage.exo48 = "séance d'endurance";
        localStorage.exoClr48 = "green";

        localStorage.exo49 = "séance de PMA";
        localStorage.exoClr49 = "orange";

        //semaine 8
        localStorage.exo50 = "jour de repos";
        localStorage.exoClr50 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo51 = "séance d'endurance";
            localStorage.exoClr51 = "green";
        }
        else {
            localStorage.exo51 = "jour de repos"
            localStorage.exoClr51 = "";
        };

        localStorage.exo52 = "séance de PMA";
        localStorage.exoClr52 = "orange";

        if (nbPrgJ >= 6) {
            localStorage.exo53 = "séance d'endurance";
            localStorage.exoClr53 = "green";
        }
        else {
            localStorage.exo53 = "jour de repos"
            localStorage.exoClr53 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo54 = "séance de PMA";
            localStorage.exoClr54 = "orange";
        }
        else {
            localStorage.exo54 = "jour de repos"
            localStorage.exoClr54 = "";
        };

        localStorage.exo55 = "séance d'endurance";
        localStorage.exoClr55 = "green";

        localStorage.exo56 = "séance de PMA";
        localStorage.exoClr56 = "orange";

        //semaine 9
        localStorage.exo57 = "jour de repos";
        localStorage.exoClr57 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo58 = "séance de sprint";
            localStorage.exoClr58 = "red";
        }
        else {
            localStorage.exo58 = "jour de repos"
            localStorage.exoClr58 = "";
        };

        localStorage.exo59 = "séance de PMA";
        localStorage.exoClr59 = "orange";

        if (nbPrgJ >= 6) {
            localStorage.exo60 = "séance d'endurance";
            localStorage.exoClr60 = "green";
        }
        else {
            localStorage.exo60 = "jour de repos"
            localStorage.exoClr60 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo61 = "séance de PMA";
            localStorage.exoClr61 = "orange";
        }
        else {
            localStorage.exo61 = "jour de repos"
            localStorage.exoClr61 = "";
        };

        localStorage.exo62 = "séance d'endurance";
        localStorage.exoClr62 = "green";

        localStorage.exo63 = "séance de PMA";
        localStorage.exoClr63 = "orange";

        //semaine 10
        localStorage.exo64 = "jour de repos";
        localStorage.exoClr64 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo65 = "séance d'endurance";
            localStorage.exoClr65 = "green";
        }
        else {
            localStorage.exo65 = "jour de repos"
            localStorage.exoClr65 = "";
        };

        localStorage.exo66 = "séance de PMA";
        localStorage.exoClr66 = "orange";

        if (nbPrgJ >= 6) {
            localStorage.exo67 = "séance d'endurance";
            localStorage.exoClr67 = "green";
        }
        else {
            localStorage.exo67 = "jour de repos"
            localStorage.exoClr67 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo68 = "séance d'endurance";
            localStorage.exoClr68 = "green";
        }
        else {
            localStorage.exo68 = "jour de repos"
            localStorage.exoClr68 = "";
        };

        localStorage.exo69 = "séance de PMA";
        localStorage.exoClr69 = "orange";

        localStorage.exo70 = "séance d'endurance";
        localStorage.exoClr70 = "green";

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
        localStorage.exoClr79 = "orange";

        localStorage.exo80 = "séance de PMA";
        localStorage.exoClr80 = "orange";

        localStorage.exo81 = "jour de repos";
        localStorage.exoClr81 = "";

        localStorage.exo82 = "jour de repos";
        localStorage.exoClr82 = "";

        localStorage.exo83 = "séance d'endurance";
        localStorage.exoClr83 = "green";

        localStorage.exo83 = "objectif";
        localStorage.exoClr83 = "grey";

    }

    
    else if (nbPrgT == 2) {
        //semaine 1
        if (nbPrgJ >= 4) {
            localStorage.exo1 = "séance d'endurance";
            localStorage.exoClr1 = "green";
        }
        else {
            localStorage.exo1 = "jour de repos"
            localStorage.exoClr1 = "";
        };

        localStorage.exo2 = "jour de repos";
        localStorage.exoClr2 = "";

        localStorage.exo3 = "séance d'endurance";
        localStorage.exoClr3 = "green";

        if (nbPrgJ >= 5) {
            localStorage.exo4 = "séance d'endurance";
            localStorage.exoClr4 = "green";
        }
        else {
            localStorage.exo4 = "jour de repos"
            localStorage.exoClr4 = "";
        };
        if (nbPrgJ >= 6) {
            localStorage.exo5 = "séance d'endurance";
            localStorage.exoClr5 = "green";
        }
        else {
            localStorage.exo5 = "jour de repos"
            localStorage.exoClr5 = "";
        };

        localStorage.exo6 = "séance d'endurance";
        localStorage.exoClr6 = "green";

        localStorage.exo7 = "séance d'endurance";
        localStorage.exoClr7 = "green";

        //semaine 2
        localStorage.exo8 = "jour de repos";
        localStorage.exoClr8 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo9 = "séance d'endurance";
            localStorage.exoClr9 = "green";
        }
        else {
            localStorage.exo9 = "jour de repos"
            localStorage.exoClr9 = "";
        };

        localStorage.exo10 = "séance de sprint";
        localStorage.exoClr10 = "red";

        if (nbPrgJ >= 6) {
            localStorage.exo11 = "séance d'endurance";
            localStorage.exoClr11 = "green";
        }
        else {
            localStorage.exo11 = "jour de repos"
            localStorage.exoClr11 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo12 = "séance d'endurance";
            localStorage.exoClr12 = "green";
        }
        else {
            localStorage.exo12 = "jour de repos"
            localStorage.exoClr12 = "";
        };

        localStorage.exo13 = "séance de seuil";
        localStorage.exoClr13 = "#bebe02";

        localStorage.exo14 = "séance d'endurance";
        localStorage.exoClr14 = "green";

        //semaine 3
        localStorage.exo15 = "jour de repos";
        localStorage.exoClr15 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo16 = "séance d'endurance";
            localStorage.exoClr16 = "green";
        }
        else {
            localStorage.exo16 = "jour de repos"
            localStorage.exoClr16 = "";
        };

        localStorage.exo17 = "séance de seuil";
        localStorage.exoClr17 = "#bebe02";

        if (nbPrgJ >= 6) {
            localStorage.exo18 = "séance d'endurance";
            localStorage.exoClr18 = "green";
        }
        else {
            localStorage.exo18 = "jour de repos"
            localStorage.exoClr18 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo19 = "séance de seuil";
            localStorage.exoClr19 = "";
        }
        else {
            localStorage.exo19 = "jour de repos"
            localStorage.exoClr19 = "#bebe02";
        };

        localStorage.exo20 = "séance d'endurance";
        localStorage.exoClr20 = "green";

        localStorage.exo21 = "séance de seuil";
        localStorage.exoClr21 = "#bebe02";

        //semaine 4
        localStorage.exo22 = "jour de repos";
        localStorage.exoClr22 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo23 = "séance de sprint";
            localStorage.exoClr23 = "red";
        }
        else {
            localStorage.exo23 = "jour de repos"
            localStorage.exoClr23 = "";
        };

        localStorage.exo24 = "séance de seuil";
        localStorage.exoClr24 = "#bebe02";

        if (nbPrgJ >= 6) {
            localStorage.exo25 = "séance d'endurance";
            localStorage.exoClr25 = "green";
        }
        else {
            localStorage.exo25 = "jour de repos"
            localStorage.exoClr25 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo26 = "séance d'endurance";
            localStorage.exoClr26 = "green";
        }
        else {
            localStorage.exo26 = "jour de repos"
            localStorage.exoClr26 = "";
        };

        localStorage.exo27 = "séance de seuil";
        localStorage.exoClr27 = "#bebe02";

        localStorage.exo28 = "séance d'endurance";
        localStorage.exoClr28 = "green";

        //semaine 5
        localStorage.exo29 = "jour de repos";
        localStorage.exoClr29 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo30 = "séance d'endurance";
            localStorage.exoClr30 = "green";
        }
        else {
            localStorage.exo30 = "jour de repos"
            localStorage.exoClr30 = "";
        };

        localStorage.exo31 = "séance de PMA";
        localStorage.exoClr31 = "orange";

        if (nbPrgJ >= 6) {
            localStorage.exo32 = "séance d'endurance";
            localStorage.exoClr32 = "green";
        }
        else {
            localStorage.exo32 = "jour de repos"
            localStorage.exoClr32 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo33 = "séance de PMA";
            localStorage.exoClr33 = "orange";
        }
        else {
            localStorage.exo33 = "jour de repos"
            localStorage.exoClr33 = "";
        };

        localStorage.exo34 = "séance de PMA";
        localStorage.exoClr34 = "orange";

        localStorage.exo35 = "séance d'endurance";
        localStorage.exoClr35 = "green";

        //semaine 6
        localStorage.exo36 = "jour de repos";
        localStorage.exoClr36 = "";

        if (nbPrgJ >= 4) {
            localStorage.exo37 = "séance de sprint";
            localStorage.exoClr37 = "red";
        }
        else {
            localStorage.exo37 = "jour de repos"
            localStorage.exoClr37 = "";
        };

        localStorage.exo38 = "séance de PMA";
        localStorage.exoClr38 = "orange";

        if (nbPrgJ >= 6) {
            localStorage.exo39 = "séance d'endurance";
            localStorage.exoClr39 = "green";
        }
        else {
            localStorage.exo39 = "jour de repos"
            localStorage.exoClr39 = "";
        };
        if (nbPrgJ >= 5) {
            localStorage.exo40 = "séance d'endurance";
            localStorage.exoClr40 = "green";
        }
        else {
            localStorage.exo40 = "jour de repos"
            localStorage.exoClr40 = "";
        };

        localStorage.exo41 = "séance de PMA";
        localStorage.exoClr41 = "orange";

        localStorage.exo42 = "séance d'endurance";
        localStorage.exoClr42 = "green";

        //semaine 7
        if (nbPrgJ >= 5) {
            localStorage.exo43 = "séance de sprint";
            localStorage.exoClr43 = "red";
        }
        else {
            localStorage.exo43 = "jour de repos"
            localStorage.exoClr43 = "";
        };

        localStorage.exo44 = "jour de repos";
        localStorage.exoClr44 = "";

        localStorage.exo45 = "séance d'endurance";
        localStorage.exoClr45 = "green";

        localStorage.exo46 = "jour de repos";
        localStorage.exoClr46 = "";

        localStorage.exo47 = "jour de repos";
        localStorage.exoClr47 = "";

        localStorage.exo48 = "séance de PMA";
        localStorage.exoClr48 = "orange";

        localStorage.exo49 = "jour de repos";
        localStorage.exoClr49 = "";

        //semaine 8
        if (nbPrgJ >= 5) {
            localStorage.exo50 = "séance d'endurance";
            localStorage.exoClr50 = "green";
        }
        else {
            localStorage.exo50 = "jour de repos"
            localStorage.exoClr50 = "";
        };

        localStorage.exo51 = "jour de repos";
        localStorage.exoClr51 = "";

        localStorage.exo52 = "séance de PMA";
        localStorage.exoClr52 = "orange";

        localStorage.exo53 = "jour de repos";
        localStorage.exoClr53 = "";

        localStorage.exo54 = "jour de repos";
        localStorage.exoClr54 = "";

        localStorage.exo55 = "séance d'endurance";
        localStorage.exoClr55 = "green";

        localStorage.exo55 = "objectif";
        localStorage.exoClr55 = "grey";

    }
    window.location.reload();
})
