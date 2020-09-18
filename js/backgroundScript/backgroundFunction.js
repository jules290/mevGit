function checkUrl() {
    const url = window.location.href;
    
    if (url.endsWith("index.html") == true) {
        
    }
    else if (url.endsWith("activite.html") == true) {
        
    }
    else if (url.endsWith("objectif.html") == true) {
        
    }
    else if (url.endsWith("stravaConnect.html") == true) {
        
    }
    else if (url.endsWith("activityMap.html") == true) {
        
    }
    else if (url.endsWith("AthleteSettings.html") == true) {
        
    }
    else if (url.endsWith("prgPageRouleur.html") == true) {
        
    }
    else if (url.endsWith("prgPagePuncheur.html") == true) {
        
    }
    else if (url.endsWith("prgPageGrimpeur.html") == true) {
        
    }
    else if (url.endsWith("prgMyDifficulte.html") == true) {
        
    }
    else if (url.endsWith("prgmy.html") == true) {
        
    }
    else if (url.endsWith("prgchc.html") == true) {
        
    }
    else if (url.endsWith("V02max.html") == true) {
        
    }
    else if (url.endsWith("seuil.html") == true) {
        
    }
    else if (url.endsWith("PMA.html") == true) {
        
    }
    else if (url.endsWith("ftp.html") == true) {
        
    }
}

function getDayNB365(day, month, year) {
    if (year == 2020) {
        if (month == 1) return day + 1
        else if (month == 2) return day + 32
        else if (month == 3) return day + 61
        else if (month == 4) return day + 92
        else if (month == 5) return day + 122
        else if (month == 6) return day + 153
        else if (month == 7) return day + 183
        else if (month == 8) return day + 214
        else if (month == 9) return day + 245
        else if (month == 10) return day + 275
        else if (month == 11) return day + 306
        else if (month == 12) return day + 336
    }
}

function getWeek(day, month, year) {
    if (year == 2020) {
        if (month == 1) {
            if (day <= 5) return 1
            else if (day <= 12) return 2
            else if (day <= 19) return 3
            else if (day <= 26) return 4
            else if (day <= 31) return 5
        }
        else if (month == 2) {
            if (day <= 2) return 5
            else if (day <= 9) return 6
            else if (day <= 16) return 7
            else if (day <= 23) return 8
            else if (day <= 29) return 9
        }
        else if (month == 3) {
            if (day <= 1) return 9
            else if (day <= 8) return 10
            else if (day <= 15) return 11
            else if (day <= 22) return 12
            else if (day <= 29) return 13
            else if (day <= 31) return 14
        }
        else if (month == 4) {
            if (day <= 5) return 14
            else if (day <= 12) return 15
            else if (day <= 19) return 16
            else if (day <= 26) return 17
            else if (day <= 30) return 18
        }
        else if (month == 5) {
            if (day <= 3) return 18
            else if (day <= 10) return 19
            else if (day <= 17) return 20
            else if (day <= 24) return 21
            else if (day <= 31) return 22
        }
        else if (month == 6) {
            if (day <= 7) return 23
            else if (day <= 14) return 24
            else if (day <= 21) return 25
            else if (day <= 28) return 26
            else if (day <= 30) return 27
        }
        else if (month == 7) {
            if (day <= 5) return 27
            else if (day <= 12) return 28
            else if (day <= 19) return 29
            else if (day <= 26) return 30
            else if (day <= 31) return 31
        }
        else if (month == 8) {
            if (day <= 2) return 31
            else if (day <= 9) return 32
            else if (day <= 16) return 33
            else if (day <= 23) return 34
            else if (day <= 30) return 35
            else if (day <= 31) return 36
        }
        else if (month == 9) {
            if (day <= 6) return 36
            else if (day <= 13) return 37
            else if (day <= 20) return 38
            else if (day <= 27) return 39
            else if (day <= 30) return 40
        }
        else if (month == 10) {
            if (day <= 4) return 40
            else if (day <= 11) return 41
            else if (day <= 18) return 42
            else if (day <= 25) return 43
            else if (day <= 31) return 44
        }
        else if (month == 11) {
            if (day <= 1) return 44
            else if (day <= 8) return 45
            else if (day <= 15) return 46
            else if (day <= 22) return 47
            else if (day <= 29) return 48
            else if (day <= 30) return 49
        }
        else if (month == 12) {
            if (day <= 6) return 49
            else if (day <= 13) return 50
            else if (day <= 20) return 51
            else if (day <= 27) return 52
            else if (day <= 31) return 53
        }
    }
    else if (year == 2021) {
        if (month == 1) {
            if (day <= 3) return 1
            else if (day <= 10) return 2
            else if (day <= 17) return 3
            else if (day <= 24) return 4
            else if (day <= 31) return 5
        }
        else if (month == 2) {
            if (day <= 7) return 6
            else if (day <= 14) return 7
            else if (day <= 21) return 8
            else if (day <= 28) return 9
        }
        else if (month == 3) {
            if (day <= 7) return 10
            else if (day <= 14) return 11
            else if (day <= 21) return 12
            else if (day <= 28) return 13
            else if (day <= 31) return 14
        }
        else if (month == 4) {
            if (day <= 4) return 14
            else if (day <= 11) return 15
            else if (day <= 18) return 16
            else if (day <= 25) return 17
            else if (day <= 30) return 18
        }
        else if (month == 5) {
            if (day <= 2) return 18
            else if (day <= 9) return 19
            else if (day <= 16) return 20
            else if (day <= 23) return 21
            else if (day <= 30) return 22
            else if (day <= 31) return 23
        }
        else if (month == 6) {
            if (day <= 6) return 23
            else if (day <= 13) return 24
            else if (day <= 20) return 25
            else if (day <= 28) return 26
            else if (day <= 30) return 27
        }
        else if (month == 7) {
            if (day <= 4) return 27
            else if (day <= 11) return 28
            else if (day <= 18) return 29
            else if (day <= 25) return 30
            else if (day <= 31) return 31
        }
        else if (month == 8) {
            if (day <= 1) return 31
            else if (day <= 8) return 32
            else if (day <= 15) return 33
            else if (day <= 22) return 34
            else if (day <= 29) return 35
            else if (day <= 31) return 36
        }
        else if (month == 9) {
            if (day <= 5) return 36
            else if (day <= 12) return 37
            else if (day <= 19) return 38
            else if (day <= 26) return 39
            else if (day <= 30) return 40
        }
        else if (month == 10) {
            if (day <= 3) return 40
            else if (day <= 10) return 41
            else if (day <= 17) return 42
            else if (day <= 24) return 43
            else if (day <= 31) return 44
        }
        else if (month == 11) {
            if (day <= 7) return 45
            else if (day <= 14) return 46
            else if (day <= 21) return 47
            else if (day <= 28) return 48
            else if (day <= 30) return 49
        }
        else if (month == 12) {
            if (day <= 5) return 49
            else if (day <= 12) return 50
            else if (day <= 19) return 51
            else if (day <= 26) return 52
            else if (day <= 31) return 53
        }
    }
}

function getDayWeek(week, day, month, year) {
    if (year == 2020) {
        if (month == 1) {
            if (week == 1) return day + 2;
            else if (week == 2) return day - 5;
            else if (week == 3) return day - 12;
            else if (week == 4) return day - 19;
            else if (week == 5) return day - 26;
        }
        else if (month == 2) {
            if (week == 5) return day + 5;
            else if (week == 6) return day - 2;
            else if (week == 7) return day - 9;
            else if (week == 8) return day - 16;
            else if (week == 9) return day - 23;
        }
        else if (month == 3) {
            if (week == 9) return day + 6;
            else if (week == 10) return day - 1;
            else if (week == 11) return day - 8;
            else if (week == 12) return day - 15;
            else if (week == 13) return day - 22;
            else if (week == 14) return day - 29;
        }
        else if (month == 4) {
            if (week == 14) return day + 2;
            else if (week == 15) return day - 5;
            else if (week == 16) return day - 12;
            else if (week == 17) return day - 19;
            else if (week == 18) return day - 26;
        }
        else if (month == 5) {
            if (week == 18) return day + 4;
            else if (week == 19) return day - 3;
            else if (week == 20) return day - 10;
            else if (week == 21) return day - 17;
            else if (week == 22) return day - 24;
        }
        else if (month == 6) {
            if (week == 23) return day;
            else if (week == 24) return day - 7;
            else if (week == 25) return day - 14;
            else if (week == 26) return day - 21;
            else if (week == 27) return day - 28;
        }
        else if (month == 7) {
            if (week == 27) return day + 2;
            else if (week == 28) return day - 5;
            else if (week == 29) return day - 12;
            else if (week == 30) return day - 19;
            else if (week == 31) return day - 26;
        }
        else if (month == 8) {
            if (week == 31) return day + 5;
            else if (week == 32) return day - 2;
            else if (week == 33) return day - 9;
            else if (week == 34) return day - 16;
            else if (week == 35) return day - 23;
            else if (week == 36) return day - 30;
        }
        else if (month == 9) {
            if (week == 36) return day + 1;
            else if (week == 37) return day - 6;
            else if (week == 38) return day - 13;
            else if (week == 39) return day - 20;
            else if (week == 40) return day - 27;
        }
        else if (month == 10) {
            if (week == 40) return day + 3;
            else if (week == 41) return day - 4;
            else if (week == 42) return day - 11;
            else if (week == 43) return day - 18;
            else if (week == 44) return day - 25;
        }
        else if (month == 11) {
            if (week == 44) return day + 6;
            else if (week == 45) return day - 1;
            else if (week == 46) return day - 8;
            else if (week == 47) return day - 15;
            else if (week == 48) return day - 22;
            else if (week == 49) return day - 29;
        }
        else if (month == 12) {
            if (week == 49) return day + 1;
            else if (week == 50) return day - 6;
            else if (week == 51) return day - 13;
            else if (week == 52) return day - 20;
            else if (week == 53) return day - 27;
        }
    }
}

function getMin(array) {
    let min = 99999999999999999;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min;
}

function getMax(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max;
}