$("#save").click(function() {
    let année = document.getElementById('année').value;
    let mois = document.getElementById('mois').value;
    let nbd = document.getElementById('nbd').value;
    let prgT = document.getElementById("prgT").value;
    let prgJ = document.getElementById("prgJ").value;
    localStorage.prg = 3;
    localStorage.année = année;
    localStorage.mois = mois;
    localStorage.nbd = nbd;
    localStorage.prgT = prgT;
    localStorage.prgJ = prgJ;
    window.location.reload();
})