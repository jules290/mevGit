var index = getAfterUrl();
var programme = JSON.parse(localStorage.programme)[index];
var PRG = JSON.parse(localStorage.PRG);
var ZColor = ["rgb(140, 140, 140)", "rgb(41, 48, 255)", "rgb(15, 179, 238)", "rgb(62, 232, 28)", "rgb(220, 220, 0)",
"rgb(255, 150, 12)", "rgb(255, 12, 12)"];

$(document).ready(function () {
    postMainAvancement(programme.type);
    calendrier(programme.type);
    getProchaineSeance(programme.type);
    getRepartitionChart(programme.type);
    getTps_semChart(programme.type);
    postIsemChart(programme.type);
})