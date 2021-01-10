function getDaySeances(day, month, year) {
    let Seances = new Array();

    if (month == "janvier") month = 1
    else if (month == "février") month = 2
    else if (month == "mars") month = 3
    else if (month == "avril") month = 4
    else if (month == "mai") month = 5
    else if (month == "juin") month = 6
    else if (month == "juillet") month = 7
    else if (month == "août") month = 8
    else if (month == "septembre") month = 9
    else if (month == "octobre") month = 10
    else if (month == "novembre") month = 11
    else if (month == "décembre") month = 12

    let aujourdHuiDayNb = {dayNb: getDayNB365(day, month, year), year: year};

    if (localStorage.programme) {
        if (JSON.parse(localStorage.programme).length > 0) {
            programme = JSON.parse(localStorage.programme);
            PRG = JSON.parse(localStorage.PRG);
        }
        else {
            programme = [];
        }
    }
    else programme = [];

    for (let i = 0; i < programme.length; i++) {
        endPrg =  getEndPrgDay(i);
        startPrg = getStartPrgDay(i);

        if (aujourdHuiDayNb.year == startPrg.year || aujourdHuiDayNb.year == endPrg.year) {
            if (aujourdHuiDayNb.dayNb >= startPrg.dayNb && aujourdHuiDayNb.dayNb <= endPrg.dayNb) {
                dayNbPRG = aujourdHuiDayNb.dayNb - startPrg.dayNb;
                semPRG = Math.floor(dayNbPRG / 7);
                dayPRG = dayNbPRG % 7;
                
                if (dayPRG == 0) jourViewed = PRG[i][semPRG].lundi
                else if (dayPRG == 1) jourViewed = PRG[i][semPRG].mardi
                else if (dayPRG == 2) jourViewed = PRG[i][semPRG].mercredi
                else if (dayPRG == 3) jourViewed = PRG[i][semPRG].jeudi
                else if (dayPRG == 4) jourViewed = PRG[i][semPRG].vendredi
                else if (dayPRG == 5) jourViewed = PRG[i][semPRG].samedi
                else if (dayPRG == 6) jourViewed = PRG[i][semPRG].dimanche

                if (jourViewed != "") Seances.push(jourViewed)
            }
        }
    }

    if (localStorage.seance) {
        if (JSON.parse(localStorage.seance).length > 0) {
            seance = JSON.parse(localStorage.seance);
        }
        else {
            seance = [];
        }
    }
    else seance = [];

    for (let i = 0; i < seance.length; i++) {
        seanceDate = {
            day: Number(seance[i].date.slice(0, 2)),
            month: Number(seance[i].date.slice(3, 5)),
            year: Number(seance[i].date.slice(6, 10))
        }

        if (day == seanceDate.day && 
            month == seanceDate.month && 
            year == seanceDate.year) {
                jourViewed = seance[i];

                if (jourViewed != "") Seances.push(jourViewed);
        }
    }

    return Seances;
}

function getEndPrgDay(index) {
    let endOfPrg = JSON.parse(localStorage.programme)[index].dateCourse;
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

function getStartPrgDay(index) {
    let addDay;
    programme = JSON.parse(localStorage.programme)[index];
    endDate = getEndPrgDay(index);

    if (endDate.dayIndex >= 4) {
        nbDayPrg = ( Number(programme.longueurProgramme) * 7 ) - ( 7 - endDate.dayIndex);
        addDay = false;
    }
    else {
        nbDayPrg = ( Number(programme.longueurProgramme) * 7 ) + endDate.dayIndex;
        addDay = true;
    }

    startDayNb = endDate.dayNb - nbDayPrg;
    startYear = endDate.year;
    if (startDayNb < 0) {
        startYear--;
        if (startYear % 4 == 0) startDayNb += 366
        else startDayNb += 365
    }

    return {dayNb: startDayNb, year: startYear};
}