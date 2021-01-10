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