$(document).ready(function () {
    index = getAfterUrl();
    postViewSeance(index);
})

function postViewSeance(index) {
    let seance = JSON.parse(localStorage.seance)[index];
    seanceHeaderT.innerText = seance.titre;

    let canvas = document.getElementById("graphSeance");
    let seanceEtapes = seance.seance;

    postSeanceListEtape(seanceEtapes);

    resizeCanvas();
    postSeanceGraph(seanceEtapes, canvas);

    window.onresize = function () {
        resizeCanvas();
        postSeanceGraph(seanceEtapes, canvas);
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth * 0.60;
        canvas.height = window.innerHeight * 0.96 * 0.40;
    }
}