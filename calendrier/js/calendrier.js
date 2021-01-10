let dt_box = document.getElementsByClassName("dt_box");
let dt_nb = document.getElementsByClassName("dt_nb");
let dt_seanceDay = document.getElementsByClassName("dt_seanceDay");
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day;
if (Number(getAfterUrl()) > 0) day = getAfterUrl() 
else day = date.getDate();
let monthName = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
calendrier(year, month);
postViewDay(day, monthName[month - 1], year);

$("#up").click(function() {
    resetViewDay();
    if (month < 12) month ++
    else {
        year++;
        month = 1;
    }
    calendrier(Number(year), Number(month));
    checkViewDayMonthAndYear(month, year);
})

$("#down").click(function() {
    resetViewDay();
    if (month > 1) month --
    else if (year > 2020) {
        year--;
        month = 12;
    }
    calendrier(Number(year), Number(month));
    checkViewDayMonthAndYear(month, year);
})

$(".dt").hover(function () {
    This = $(this)[0];
    if ($(this)[0].parentNode.style.backgroundColor != "rgb(90, 90, 90)") {
        $(this)[0].style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    $(".dt").click(function () {
        This.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    })
},function () {
    $(this)[0].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
})

function calendrier(actualYear, month) {
    monthNb = getMonthNb(month, actualYear);

    let jourDepart = [{startDay: 2, length: 31, year: 2020, month: "janvier"}];
    for (let i = 0; i < monthNb - 1; i++) {
        Year = 2020 + Math.floor(i / 12);
        monthsLength = [31, février(Year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        jourDepart[i + 1] = {
            startDay: (jourDepart[i].startDay + monthsLength[i - (Year - 2020) * 12]) % 7,
            length: monthsLength[(i + 1) - (Year - 2020) * 12],
            year: 2020 + Math.floor((i + 1) / 12),
            month: monthName[(i + 1) - (Year - 2020) * 12]
        }
        if (jourDepart[i + 1].month == undefined) {
            jourDepart[i + 1].month = "janvier";
            jourDepart[i + 1].length = 31;
        }
    }

    document.getElementById("cldT").innerText = jourDepart[jourDepart["length"] - 1].month.toLocaleUpperCase() + 
    " " + jourDepart[jourDepart["length"] - 1].year;

    for (let i = 0; i < dt_box.length; i++) {
        dt_nb[i].innerText = "";
        dt_box[i].className = "dt_box";
        dt_seanceDay[i].style.backgroundColor = "rgba(0, 0, 0, 0)"
    }

    for (let i = 1; i - 1 < jourDepart[jourDepart["length"] - 1].length; i++) {
        dt_nb[i - 1 + jourDepart[jourDepart["length"] - 1].startDay].innerText = i;
        daySeances = getDaySeances(i, month, actualYear);
        if (daySeances.length > 0) dt_seanceDay[i - 1 + jourDepart[jourDepart["length"] - 1].startDay].style.backgroundColor = "white";
    }

    $(".dt_box").click(function () {
        if ($(this)[0].innerText != "") {
            postViewDay(
                $(this)[0].innerText,
                jourDepart[jourDepart["length"] - 1].month.toLocaleUpperCase(),
                jourDepart[jourDepart["length"] - 1].year
            );   
        }
    })
}

function postViewDay(day, month, year) {
    resetViewDay();

    for (let i = 0; i < dt_box.length; i++) {
        if (dt_box[i].innerText == day) {
            dt_box[i].style.backgroundColor = "rgb(90, 90, 90)";
        }
    }
    document.getElementById("viewDayT").innerText = day + " " + month.toString().toLocaleUpperCase() + " " + year; 

    postListDaySeances(day, month, year);
}

function resetViewDay() {
    for (let i = 0; i < dt_box.length; i++) {
        dt_box[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

function checkViewDayMonthAndYear(month, year) {
    viewDayTDay = Number(document.getElementById("viewDayT").innerText.slice(0, 2));
    if (viewDayTDay >= 10) viewDayTDate = document.getElementById("viewDayT").innerText.slice(3)
    else viewDayTDate = document.getElementById("viewDayT").innerText.slice(2)
    
    if (monthName[month - 1].toString().toLocaleUpperCase() + " " + year == viewDayTDate) {
        for (let i = 0; i < dt_box.length; i++) {
            if (dt_box[i].innerText == viewDayTDay) dt_box[i].style.backgroundColor = "rgb(90, 90, 90)";
        }
    }
}

function getMonthNb(month, year) {
    return month + 12 * (year - 2020);
}

function février(year) {
    if (year % 4 == 0) return 29
    else return 28
}