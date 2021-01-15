const reducer = (accumulator, currentValue) => accumulator + currentValue;

function hideAllByClassName(className) { $(`.${className}`).hide() }

function getDayNB365(day, month, year) {
    if (year % 4 == 0) {
        if (month == 1) return day
        else if (month == 2) return day + 31
        else if (month == 3) return day + 60
        else if (month == 4) return day + 91
        else if (month == 5) return day + 121
        else if (month == 6) return day + 152
        else if (month == 7) return day + 182
        else if (month == 8) return day + 213
        else if (month == 9) return day + 244
        else if (month == 10) return day + 274
        else if (month == 11) return day + 305
        else if (month == 12) return day + 335
    }
    else {
        if (month == 1) return day
        else if (month == 2) return day + 31
        else if (month == 3) return day + 59
        else if (month == 4) return day + 90
        else if (month == 5) return day + 120
        else if (month == 6) return day + 151
        else if (month == 7) return day + 181
        else if (month == 8) return day + 212
        else if (month == 9) return day + 243
        else if (month == 10) return day + 273
        else if (month == 11) return day + 304
        else if (month == 12) return day + 334
    }
}

function getDateWithDayNb(dayNb, year) {
    if (year % 4 == 0) {
        if (dayNb <= 31) return {day: (dayNb), month: 1, year: year}
        else if (dayNb <= 60) return {day: (dayNb - 31), month: 2, year: year}
        else if (dayNb <= 91) return {day: (dayNb - 60), month: 3, year: year}
        else if (dayNb <= 121) return {day: (dayNb - 91), month: 4, year: year}
        else if (dayNb <= 152) return {day: (dayNb - 121), month: 5, year: year}
        else if (dayNb <= 182) return {day: (dayNb - 152), month: 6, year: year}
        else if (dayNb <= 213) return {day: (dayNb - 182), month: 7, year: year}
        else if (dayNb <= 244) return {day: (dayNb - 213), month: 8, year: year}
        else if (dayNb <= 274) return {day: (dayNb - 244), month: 9, year: year}
        else if (dayNb <= 305) return {day: (dayNb - 274), month: 10, year: year}
        else if (dayNb <= 335) return {day: (dayNb - 305), month: 11, year: year}
        else if (dayNb <= 366) return {day: (dayNb - 335), month: 12, year: year}
    }
    else {
        if (dayNb <= 31) return {day: (dayNb), month: 1, year: year}
        else if (dayNb <= 59) return {day: (dayNb - 31), month: 2, year: year}
        else if (dayNb <= 90) return {day: (dayNb - 59), month: 3, year: year}
        else if (dayNb <= 120) return {day: (dayNb - 90), month: 4, year: year}
        else if (dayNb <= 151) return {day: (dayNb - 120), month: 5, year: year}
        else if (dayNb <= 181) return {day: (dayNb - 151), month: 6, year: year}
        else if (dayNb <= 212) return {day: (dayNb - 181), month: 7, year: year}
        else if (dayNb <= 243) return {day: (dayNb - 212), month: 8, year: year}
        else if (dayNb <= 273) return {day: (dayNb - 243), month: 9, year: year}
        else if (dayNb <= 304) return {day: (dayNb - 273), month: 10, year: year}
        else if (dayNb <= 334) return {day: (dayNb - 304), month: 11, year: year}
        else if (dayNb <= 365) return {day: (dayNb - 334), month: 12, year: year}
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

function getIndexMax(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
            index = i
        }
    }
    return index;
}

function getActivities() {
    if (localStorage.Activities) {
        return JSON.parse(localStorage.Activities)
    }
    else {

    }
}

function dayActivities(day, activities, ActivitieDayNB) {
    const ActivitiesLenght = Activities.length;
    let nbActivities = 0;
    let DayActivities = new Array();

    for (let i = 0; i < ActivitiesLenght; i++) {
        if (day == ActivitieDayNB[i]) {
            DayActivities[nbActivities] = activities[i];
            nbActivities ++;
        }
    }

    return DayActivities;
}

function get00i00i00(sec) {
    function addZero(nb) {
        if (nb >= 10) {
            return nb.toString();
        }
        else {
            return "0" + nb.toString();
        }
    }

    heure = addZero(Math.floor(sec / 3600));
    minute = addZero(Math.floor((sec / 60) % 60));
    seconde = addZero(Math.floor(sec % 60));

    return heure + ":" + minute + ":" + seconde;
}

function hiddenStr(str, Lenght) {
    if (str.length > Lenght) {
        return str.slice(0, Lenght) + "...";
    }
    else {
        return str;
    }
}

function checkPair(nbr) {
    if(nbr%2 == 0) {
        return true; 
    }
    else {
        return false; 
    }
}

function getAfterUrl() {
    let position = window.location.href.indexOf("?") + 1;
    
    if (position != -1) {
        let code = window.location.href.slice(position);
        return code;
    }
    else {
        return false;
    }
}

function getAujourdHui() {
    var d = new Date();
    return { day: d.getDate(), month: (d.getMonth() + 1), year: d.getFullYear() };
}

function getEndPrgDay(i) {
    let endOfPrg = JSON.parse(localStorage.programme)[i].dateCourse;
    let endOfPrgDay = endOfPrg.slice(0, 2);
    let endOfPrgMonth = endOfPrg.slice(3, 5);
    let endOfPrgYear = endOfPrg.slice(6, 10);

    let endDate = new Date(`${endOfPrgYear}-${endOfPrgMonth}-${endOfPrgDay}`);
    var days = [6, 0, 1, 2, 3, 4, 5];
    let endDateDay = days[endDate.getDay()];
    let endDateDate = endDate.getDate();
    let endDateMonth = endDate.getMonth() + 1;
    let endDateYear = endDate.getFullYear();

    let EndPrg = {
        dayIndex: endDateDay,
        date: endDateDate,
        month: endDateMonth,
        year: endDateYear,
        dayNb: getDayNB365(endDateDate, endDateMonth, endDateYear)
    }
    return EndPrg;
}

function getProgrammeStart(i) {
    let addDay;
    endDate = getEndPrgDay(i);

    if (endDate.dayIndex >= 4) {
        nbDayPrg = ( Number(JSON.parse(localStorage.programme)[i].longueurProgramme) * 7 ) - ( 7 - endDate.dayIndex);
        addDay = false;
    }
    else {
        nbDayPrg = ( Number(JSON.parse(localStorage.programme)[i].longueurProgramme) * 7 ) + endDate.dayIndex;
        addDay = true;
    }

    startDayNb = endDate.dayNb - nbDayPrg;
    startYear = endDate.year;
    if (startDayNb < 0) {
        startYear--;
        if (startYear % 4 == 0) startDayNb += 366
        else startDayNb += 365
    }

    return {dayNb: startDayNb, year: startYear, addDay: addDay};
}

function getPage() {
    url = window.location.href;
    htmlIndex = url.search(".html");
    
    if (url.slice(htmlIndex - 7, htmlIndex) == "accueil") return "accueil"
    else if (url.slice(htmlIndex - 10, htmlIndex) == "calendrier") return "calendrier"
    else if (url.slice(htmlIndex - 6, htmlIndex) == "seance") return "seance"
    else if (url.slice(htmlIndex - 9, htmlIndex) == "programme") return "programme"
    else if (url.slice(htmlIndex - 11, htmlIndex) == "statistique") return "statistique"
    else if (url.slice(htmlIndex - 9, htmlIndex) == "parametre") return "parametre"
    else if (url.slice(htmlIndex - 10, htmlIndex) == "tablBrdPrg") return "tablBrdPrg"
    else if (url.slice(htmlIndex - 6, htmlIndex) == "newPrg") return "newPrg"
    else if (url.slice(htmlIndex - 13, htmlIndex) == "viewNewSeance") return "viewNewSeance"
}