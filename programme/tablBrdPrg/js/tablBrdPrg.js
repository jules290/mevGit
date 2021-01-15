var index = getAfterUrl();
var programme = JSON.parse(localStorage.programme)[index];
var PRG = JSON.parse(localStorage.PRG);

$(document).ready(function () {
    postMainAvancement(programme.type);
    calendrier(programme.type);
    getProchaineSeance(programme.type);
    getRepartitionChart(programme.type);
    getTps_semChart(programme.type);
    postIsemChart(programme.type);
})