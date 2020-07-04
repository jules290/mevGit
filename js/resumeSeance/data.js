function postAthleteName() {
    document.getElementById("resumeDeSeanceTitleName").innerText = localStorage.athleteName;
}

function postActivitiestempsDistance() {
    let moyenne;
    let Name;
    let Date;
    let Time;
    let Dst;

    switch (Number(sessionStorage.activityIndex)) {
        case 0:
            Name = localStorage.activityName0;
            Date = localStorage.activityDate0;
            Time = localStorage.activityTime0;
            Dst = localStorage.activityDst0;
            Moyenne = Number(localStorage.activityMoyenne0) * 3.6;
            break;

        case 1:
            Name = localStorage.activityName1;
            Date = localStorage.activityDate1;
            Time = localStorage.activityTime1;
            Dst = localStorage.activityDst1;
            Moyenne = Number(localStorage.activityMoyenne1) * 3.6;
            break;

        case 2:
            Name = localStorage.activityName2;
            Date = localStorage.activityDate2;
            Time = localStorage.activityTime2;
            Dst = localStorage.activityDst2;
            Moyenne = Number(localStorage.activityMoyenne2) * 3.6;
            break;

        case 3:
            Name = localStorage.activityName3;
            Date = localStorage.activityDate3;
            Time = localStorage.activityTime3;
            Dst = localStorage.activityDst3;
            Moyenne = Number(localStorage.activityMoyenne3) * 3.6;
            break;

        case 4:
            Name = localStorage.activityName4;
            Date = localStorage.activityDate4;
            Time = localStorage.activityTime4;
            Dst = localStorage.activityDst4;
            Moyenne = Number(localStorage.activityMoyenne4) * 3.6;
            break;

        case 5:
            Name = localStorage.activityName5;
            Date = localStorage.activityDate5;
            Time = localStorage.activityTime5;
            Dst = localStorage.activityDst5;
            Moyenne = Number(localStorage.activityMoyenne5) * 3.6;
            break;

        case 6:
            Name = localStorage.activityName6;
            Date = localStorage.activityDate6;
            Time = localStorage.activityTime6;
            Dst = localStorage.activityDst6;
            Moyenne = Number(localStorage.activityMoyenne6) * 3.6;
            break;

        case 7:
            Name = localStorage.activityName7;
            Date = localStorage.activityDate7;
            Time = localStorage.activityTime7;
            Dst = localStorage.activityDst7;
            Moyenne = Number(localStorage.activityMoyenne7) * 3.6;
            break;

        case 8:
            Name = localStorage.activityName8;
            Date = localStorage.activityDate8;
            Time = localStorage.activityTime8;
            Dst = localStorage.activityDst8;
            Moyenne = Number(localStorage.activityMoyenne8) * 3.6;
            break;

        case 9:
            Name = localStorage.activityName9;
            Date = localStorage.activityDate9;
            Time = localStorage.activityTime9;
            Dst = localStorage.activityDst9;
            Moyenne = Number(localStorage.activityMoyenne9) * 3.6;
            break;

        case 10:
            Name = localStorage.activityName10;
            Date = localStorage.activityDate10;
            Time = localStorage.activityTime10;
            Dst = localStorage.activityDst10;
            Moyenne = Number(localStorage.activityMoyenne10) * 3.6;
            break;

        case 11:
            Name = localStorage.activityName11;
            Date = localStorage.activityDate11;
            Time = localStorage.activityTime11;
            Dst = localStorage.activityDst11;
            Moyenne = Number(localStorage.activityMoyenne11) * 3.6;
            break;

        case 12:
            Name = localStorage.activityName12;
            Date = localStorage.activityDate12;
            Time = localStorage.activityTime12;
            Dst = localStorage.activityDst12;
            Moyenne = Number(localStorage.activityMoyenne12) * 3.6;
            break;

        case 13:
            Name = localStorage.activityName13;
            Date = localStorage.activityDate13;
            Time = localStorage.activityTime13;
            Dst = localStorage.activityDst13;
            Moyenne = Number(localStorage.activityMoyenne13) * 3.6;
            break;

        case 14:
            Name = localStorage.activityName14;
            Date = localStorage.activityDate14;
            Time = localStorage.activityTime14;
            Dst = localStorage.activityDst14;
            Moyenne = Number(localStorage.activityMoyenne14) * 3.6;
            break;

        case 15:
            Name = localStorage.activityName15;
            Date = localStorage.activityDate15;
            Time = localStorage.activityTime15;
            Dst = localStorage.activityDst15;
            Moyenne = Number(localStorage.activityMoyenne15) * 3.6;
            break;

        case 16:
            Name = localStorage.activityName16;
            Date = localStorage.activityDate16;
            Time = localStorage.activityTime16;
            Dst = localStorage.activityDst16;
            Moyenne = Number(localStorage.activityMoyenne16) * 3.6;
            break;

        case 17:
            Name = localStorage.activityName17;
            Date = localStorage.activityDate17;
            Time = localStorage.activityTime17;
            Dst = localStorage.activityDst17;
            Moyenne = Number(localStorage.activityMoyenne17) * 3.6;
            break;

        case 18:
            Name = localStorage.activityName18;
            Date = localStorage.activityDate18;
            Time = localStorage.activityTime18;
            Dst = localStorage.activityDst18;
            Moyenne = Number(localStorage.activityMoyenne18) * 3.6;
            break;

        case 19:
            Name = localStorage.activityName19;
            Date = localStorage.activityDate19;
            Time = localStorage.activityTime19;
            Dst = localStorage.activityDst19;
            Moyenne = Number(localStorage.activityMoyenne19) * 3.6;
            break;

        case 20:
            Name = localStorage.activityName20;
            Date = localStorage.activityDate20;
            Time = localStorage.activityTime20;
            Dst = localStorage.activityDst20;
            Moyenne = Number(localStorage.activityMoyenne20) * 3.6;

        case 21:
            Name = localStorage.activityName21;
            Date = localStorage.activityDate21;
            Time = localStorage.activityTime21;
            Dst = localStorage.activityDst21;
            Moyenne = Number(localStorage.activityMoyenne21) * 3.6;
            break;

        case 22:
            Name = localStorage.activityName22;
            Date = localStorage.activityDate22;
            Time = localStorage.activityTime22;
            Dst = localStorage.activityDst22;
            Moyenne = Number(localStorage.activityMoyenne22) * 3.6;
            break;

        case 23:
            Name = localStorage.activityName23;
            Date = localStorage.activityDate23;
            Time = localStorage.activityTime23;
            Dst = localStorage.activityDst23;
            Moyenne = Number(localStorage.activityMoyenne23) * 3.6;
            break;

        case 24:
            Name = localStorage.activityName24;
            Date = localStorage.activityDate24;
            Time = localStorage.activityTime24;
            Dst = localStorage.activityDst24;
            Moyenne = Number(localStorage.activityMoyenne24) * 3.6;
            break;

        case 25:
            Name = localStorage.activityName25;
            Date = localStorage.activityDate25;
            Time = localStorage.activityTime25;
            Dst = localStorage.activityDst25;
            Moyenne = Number(localStorage.activityMoyenne25) * 3.6;
            break;

        case 26:
            Name = localStorage.activityName26;
            Date = localStorage.activityDate26;
            Time = localStorage.activityTime26;
            Dst = localStorage.activityDst26;
            Moyenne = Number(localStorage.activityMoyenne26) * 3.6;
            break;

        case 27:
            Name = localStorage.activityName27;
            Date = localStorage.activityDate27;
            Time = localStorage.activityTime27;
            Dst = localStorage.activityDst27;
            Moyenne = Number(localStorage.activityMoyenne27) * 3.6;
            break;

        case 28:
            Name = localStorage.activityName28;
            Date = localStorage.activityDate28;
            Time = localStorage.activityTime28;
            Dst = localStorage.activityDst28;
            Moyenne = Number(localStorage.activityMoyenne28) * 3.6;
            break;

        case 29:
            Name = localStorage.activityName29;
            Date = localStorage.activityDate29;
            Time = localStorage.activityTime29;
            Dst = localStorage.activityDst29;
            Moyenne = Number(localStorage.activityMoyenne29) * 3.6;
            break;
    }

    document.getElementById("resumeDeSeanceTitleActivite").innerText = Name;

        if (Time / 60 >= 60) {
            let heure;
            let minute;
            if (Time / 3600 >= 10) {
                heure = (Time / 3600).toString().substr(0, 2);
                minute = (Math.round(Time / 60)) % 60
            } else {
                heure = (Time / 3600).toString().substr(0, 1);
                minute = (Math.round(Time/ 60)) % 60
            }
            document.getElementById("firstCaseDataTemps").innerText = heure + "h " + minute + "min"
        }
        else {
            document.getElementById("firstCaseDataTemps").innerText = (Math.round(Time / 60)) + "min"
        }
        document.getElementById("firstCaseDataDistance").innerText =  (Math.round(Dst / 10)) / 100 + "km"

        document.getElementById("firstCaseDataSpeed").innerText = Math.round(Moyenne * 100) / 100 + "km/h"
}

// function postActivitiesStreams(activitie, gear, latlng , altitude, vitesse, distance, grade) {
//         let totale = 0;
//         for (var i = 0; i <  vitesse.length; i++) {
//             totale += vitesse[i] / vitesse.length
//         }

//         moyenne = totale

//         document.getElementById("firstCaseDataSpeed").innerText = Math.round(moyenne * 100) / 100 + "km/h"
// }