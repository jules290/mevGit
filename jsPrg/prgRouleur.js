$("#up").click(function() {
    prgRouleur();
})

$("#down").click(function() {
    prgRouleur();
})

$(document).ready(function() {
    prgRouleur();
    $("#graphMy").hide()
})

function prgRouleur() {
    let pSprint;
    let p30sec;
    let p1min;
    let pPMA;
    let pI3;
    let p10min;
    let pSeuil;
    let pFTP;
    let pEndurance;
    if (Number(localStorage.PMA) > 1 || Number(localStorage.FTP) > 1) {
        pSprint = localStorage.pSprint;
        p30sec = localStorage.p30sec;
        p1min = localStorage.p1min;
        pPMA30sec_30sec = localStorage.pPMA30sec_30sec;
        pPMA = localStorage.PMA;
        p10min = localStorage.p10min;
        pSeuil = localStorage.pSeuil;
        pFTP = localStorage.pFTP;
        pEndurance = localStorage.pEndurance;
    }
    else if (Number(localStorage.fcMax) > 1) {

    }
    else {
        pSprint = "300% PMA"
        pPMA30sec_30sec = "130% PMA"
        pPMA = "100% PMA"
        pSeuil = "90% PMA"
        pI3 = "80% PMA"
        pEndurance = "50% - 65% PMA"
    }

    function animExo() {
        $("#graphMy").hide()
        $("#exoInstruction").animate({paddingTop: '24%'}, 0);
        if(document.getElementById("exoInstruction").innerHTML !== "jour de repos" && document.getElementById("exoInstruction").innerHTML !== "objectif") {
            $("#exoInstruction").animate({paddingTop: '0px'}, 500);
            $("#graphMy").show(500)
        }
    }

    const canvas = document.getElementById("graphExo");
    const ctx = canvas.getContext("2d");
    const maxH = 220;
    const maxL = 350;

    $(".dt_nb").click(function () {
        $("#detailsSeance").empty()
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })

    function endurance(){
        $("#detailsSeance").empty()
        var div = document.createElement("div");
        var h1 = document.createElement("h1");
        div.style.width = "96%";
        div.style.height = "30px";
        div.style.marginLeft = "2%";
        div.style.marginRight = "2%";
        div.style.marginTop = "-10px";
        div.style.background = "green";
        div.style.borderRadius = "5px"
        div.style.color = "white";
        h1.style.fontSize ="15px"
        h1.style.padding = "5px";
        h1.style.textAlign = "end"
        h1.innerHTML = 
        "entre" + " " + sessionStorage.tpsEndurance + "H" + " " + "et" + " " + sessionStorage.tpsEndurance * 2 + "H" + " " + "@" + " " + pEndurance;
        div.appendChild(h1);
        document.getElementById("detailsSeance").appendChild(div);

        let iEndurance = maxH * 0.10

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(0, maxH - iEndurance, maxL, iEndurance)
    }

    function seuil(){
        let rep;
        let rep1 = Number(sessionStorage.rep1) + Number(localStorage.lvlSeuil);
        let rep2 = Number(sessionStorage.rep2) + Number(localStorage.lvlSeuil);
        let rep3 = Number(sessionStorage.rep3) + Number(localStorage.lvlSeuil);
        let rep4 = Number(sessionStorage.rep4) + Number(localStorage.lvlSeuil);
        $("#detailsSeance").empty()
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let iRecup = maxH * 0.10;
        let iSeuil = maxH * 0.60;
        let LgrExo = 0;
        let tpsEffort1 = 10 * rep1;
        let tpsEffort2 = 10 * rep2;
        let tpsEffort3 = 10 * rep3;
        let tpsEffort4 = 10 * rep4;
        let tps = 0;
        let init = 0;
        let lgrEchauffement = 0;
        let lgrSeuil;

        switch(Number(sessionStorage.serie)) {
            case 1:
                LgrExo = 10 + tpsEffort1 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrSeuil = 5 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL;
                rep = rep1;
                seuilDetails()
                while (init < rep1) {
                    seuilRep()
                    tps = tps + lgrSeuil * maxL + lgrSeuil * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
            case 2:
                LgrExo = 10 + tpsEffort1 + 10 + tpsEffort2 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrSeuil = 5 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL;
                rep = rep1;
                seuilDetails()
                while (init < rep1) {
                    seuilRep()
                    tps = tps + lgrSeuil * maxL + lgrSeuil * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                init = 0
                rep = rep2;
                seuilDetails()
                while (init < rep2) {
                    seuilRep()
                    tps = tps + lgrSeuil * maxL + lgrSeuil * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
            case 3:
                LgrExo = 10 + tpsEffort1 + 10 + tpsEffort2 + 10 + tpsEffort3 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrSeuil = 5 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL;
                rep = rep1;
                seuilDetails()
                while (init < rep1) {
                    seuilRep()
                    tps = tps + lgrSeuil * maxL + lgrSeuil * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                init = 0
                rep = rep2;
                seuilDetails()
                while (init < rep2) {
                    seuilRep()
                    tps = tps + lgrSeuil * maxL + lgrSeuil * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                init = 0
                rep = rep3;
                seuilDetails()
                while (init < rep3) {
                    seuilRep()
                    tps = tps + lgrSeuil * maxL + lgrSeuil * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
            case 4:
                LgrExo = 10 + tpsEffort1 + 10 + tpsEffort2 + 10 + tpsEffort3 + 10 + tpsEffort4 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrSeuil = 5 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL
                rep = rep1;
                seuilDetails()
                while (init < rep1) {
                    seuilRep()
                    tps = tps + lgrSeuil * maxL + lgrSeuil * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                init = 0
                rep = rep2;
                seuilDetails()
                while (init < rep2) {
                    seuilRep()
                    tps = tps + lgrSeuil * maxL + lgrSeuil * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                init = 0
                rep = rep3;
                seuilDetails()
                while (init < rep3) {
                    seuilRep()
                    tps = tps + lgrSeuil * maxL + lgrSeuil * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                init = 0
                rep = rep4;
                seuilDetails()
                while (init < rep4) {
                    seuilRep()
                    tps = tps + lgrSeuil * maxL + lgrSeuil * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
        }

        

        function recupDetails() {
            var div = document.createElement("div");
            var h1 = document.createElement("h1");
            div.style.width = "96%";
            div.style.height = "30px";
            div.style.marginLeft = "2%";
            div.style.marginRight = "2%";
            div.style.marginTop = "-10px";
            div.style.marginBottom = "13px";
            div.style.background = "green";
            div.style.borderRadius = "5px";
            h1.style.fontSize ="15px";
            h1.style.padding = "5px";
            h1.style.textAlign = "end"
            h1.innerHTML = "10 min" + " " + "@" + " " + pEndurance;
            div.appendChild(h1);
            document.getElementById("detailsSeance").appendChild(div);
        }

        function seuilDetails() {
            var div = document.createElement("div");
            var X = document.createElement("h1");
            var h1 = document.createElement("h1");
            var h1_2 = document.createElement("h1");
            div.style.width = "96%";
            div.style.height = "50px";
            div.style.marginLeft = "2%";
            div.style.marginRight = "2%";
            div.style.marginTop = "-10px";
            div.style.background = "#bebe02";
            div.style.borderRadius = "5px";
            X.style.fontSize ="15px";
            X.style.padding = "5px";
            X.innerHTML = "X" + " " + rep;
            X.style.position = "relativ"
            X.style.marginTop = "10px"
            h1.style.fontSize ="15px";
            h1.style.padding = "5px";
            h1.style.marginTop = "-45px"
            h1.style.textAlign = "end"
            h1.innerHTML = "5 min" + " " + "@" + " " + pSeuil;
            h1_2.style.marginTop = "-21px"
            h1_2.style.fontSize ="15px";
            h1_2.style.padding = "5px";
            h1_2.style.textAlign = "end"
            h1_2.innerHTML = "5 min" + " " + "@" + " " + pEndurance;
            div.appendChild(X);
            div.appendChild(h1);
            div.appendChild(h1_2);
            document.getElementById("detailsSeance").appendChild(div);
        }

        function échauffement() {
            let lgrEchauffement = 10 / LgrExo;
            ctx.fillStyle = "green";
            ctx.fillRect(tps, maxH - iRecup, lgrEchauffement * maxL, iRecup)
        }
        function seuilRep() {
            ctx.fillStyle = "yellow";
            ctx.fillRect(tps, maxH - iSeuil, lgrSeuil * maxL, iSeuil)
            ctx.fillStyle = "green";
            ctx.fillRect(tps + lgrSeuil * maxL, maxH - iRecup, lgrSeuil * maxL, iRecup)
        }
        function recup() {
            ctx.fillStyle = "green";
            ctx.fillRect(tps, maxH - iRecup, lgrEchauffement * maxL, iRecup)
        }
    }

    function gimenez(){
        let rep = Number(sessionStorage.rep) + Number(localStorage.lvlGimenez);
        console.log(localStorage.lvlGimenez)
        $("#detailsSeance").empty()
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let tpsPMAGimenez = sessionStorage.lgrPMAGimenez * rep;
        let tpsI3Gimenez = sessionStorage.lgrI3Gimenez * rep;
        let tpsRecupGimenez = sessionStorage.lgrRecupGimenez * rep;
        let iRecup = maxH * 0.10;
        let I3 = maxH * 0.60;
        let iPMA = maxH * 0.75;
        let LgrExo = 0;
        let tpsEffort = tpsPMAGimenez + tpsI3Gimenez + tpsRecupGimenez;
        let tps = 0;
        let init = 0;
        let lgrEchauffement = 0;
        LgrExo = 10 + tpsEffort + 10;
        let lgrPMAGimenez = sessionStorage.lgrPMAGimenez / LgrExo;
        let lgrI3Gimenez = sessionStorage.lgrI3Gimenez / LgrExo;
        let lgrRecupGimenez = sessionStorage.lgrRecupGimenez / LgrExo;
        lgrEchauffement = 10 / LgrExo;
        lgrSeuil = 5 / LgrExo;
        tps = 0 ; 
        recupDetails()
        échauffement()
        tps =  lgrEchauffement * maxL;
        gimenezDetails()
        while (init < rep) {
            gimenezRep()
            tps = tps + lgrPMAGimenez * maxL + lgrI3Gimenez * maxL + lgrRecupGimenez * maxL;
            init++;
        }
        recupDetails()
        recup()

        function recupDetails() {
            var div = document.createElement("div");
            var h1 = document.createElement("h1");
            div.style.width = "96%";
            div.style.height = "30px";
            div.style.marginLeft = "2%";
            div.style.marginRight = "2%";
            div.style.marginTop = "-10px";
            div.style.marginBottom = "13px";
            div.style.background = "green";
            div.style.borderRadius = "5px";
            h1.style.fontSize ="15px";
            h1.style.padding = "5px";
            h1.style.textAlign = "end"
            h1.innerHTML = "10 min" + " " + "@" + " " + pEndurance;
            div.appendChild(h1);
            document.getElementById("detailsSeance").appendChild(div);
        }

        function gimenezDetails() {
            var div = document.createElement("div");
            var X = document.createElement("h1");
            var h1 = document.createElement("h1");
            var h1_2 = document.createElement("h1");
            var h1_3 = document.createElement("h1");
            if (sessionStorage.lgrRecupGimenez == 0) {
                div.style.width = "96%";
                div.style.height = "50px";
                div.style.marginLeft = "2%";
                div.style.marginRight = "2%";
                div.style.marginTop = "-10px";
                div.style.background = "#bebe02";
                div.style.borderRadius = "5px";
                X.style.fontSize ="15px";
                X.style.padding = "5px";
                X.innerHTML = "X" + " " + rep;
                X.style.position = "relativ"
                X.style.marginTop = "10px"
                h1.style.fontSize ="15px";
                h1.style.padding = "5px";
                h1.style.marginTop = "-45px"
                h1.style.textAlign = "end"
                h1.innerHTML = sessionStorage.lgrPMAGimenez + "min" + " " + "@" + " " + pPMA;
                h1_2.style.marginTop = "-21px"
                h1_2.style.fontSize ="15px";
                h1_2.style.padding = "5px";
                h1_2.style.textAlign = "end"
                h1_2.innerHTML = sessionStorage.lgrI3Gimenez + "min" + " " + "@" + " " + pI3;
                div.appendChild(X);
                div.appendChild(h1);
                div.appendChild(h1_2);
                document.getElementById("detailsSeance").appendChild(div);
            }
            else {
                div.style.width = "96%";
                div.style.height = "70px";
                div.style.marginLeft = "2%";
                div.style.marginRight = "2%";
                div.style.marginTop = "-10px";
                div.style.background = "#bebe02";
                div.style.borderRadius = "5px";
                X.style.fontSize ="15px";
                X.style.padding = "5px";
                X.innerHTML = "X" + " " + rep;
                X.style.position = "relativ"
                X.style.marginTop = "10px"
                h1.style.fontSize ="15px";
                h1.style.padding = "5px";
                h1.style.marginTop = "-45px"
                h1.style.textAlign = "end"
                h1.innerHTML = sessionStorage.lgrPMAGimenez + "min" + " " + "@" + " " + pPMA;
                h1_2.style.marginTop = "-21px"
                h1_2.style.fontSize ="15px";
                h1_2.style.padding = "5px";
                h1_2.style.textAlign = "end"
                h1_2.innerHTML = sessionStorage.lgrI3Gimenez + "min" + " " + "@" + " " + pI3;
                h1_3.style.marginTop = "-21px"
                h1_3.style.fontSize ="15px";
                h1_3.style.padding = "5px";
                h1_3.style.textAlign = "end"
                h1_3.innerHTML = sessionStorage.lgrRecupGimenez + "min" + " " + "@" + " " + pEndurance;
                div.appendChild(X);
                div.appendChild(h1);
                div.appendChild(h1_2);
                div.appendChild(h1_3);
                document.getElementById("detailsSeance").appendChild(div);
            }
        }

        function échauffement() {
            let lgrEchauffement = 10 / LgrExo;
            ctx.fillStyle = "green";
            ctx.fillRect(tps, maxH - iRecup, lgrEchauffement * maxL, iRecup)
        }
        function gimenezRep() {
            let lgrPMAGimenez = sessionStorage.lgrPMAGimenez / LgrExo;
            let lgrI3Gimenez = sessionStorage.lgrI3Gimenez / LgrExo;
            let lgrRecupGimenez = sessionStorage.lgrRecupGimenez / LgrExo;

            ctx.fillStyle = "orange";
            ctx.fillRect(tps, maxH - iPMA, lgrPMAGimenez * maxL, iPMA)
            ctx.fillStyle = "yellow";
            ctx.fillRect(tps + lgrPMAGimenez * maxL, maxH - I3, lgrI3Gimenez * maxL, I3)
            ctx.fillStyle = "green";
            ctx.fillRect(tps + (lgrPMAGimenez * maxL) + (lgrI3Gimenez * maxL), maxH - iRecup, lgrRecupGimenez * maxL, iRecup)
        }

        function recup() {
            ctx.fillStyle = "green";
            ctx.fillRect(tps, maxH - iRecup, lgrEchauffement * maxL, iRecup)
        }
    }

    function PMA(){
        let rep;
        let rep1 = Number(sessionStorage.rep1) + Number(localStorage.lvlPMA);
        let rep2 = Number(sessionStorage.rep2) + Number(localStorage.lvlPMA);
        let rep3 = Number(sessionStorage.rep3) + Number(localStorage.lvlPMA);
        let rep4 = Number(sessionStorage.rep4) + Number(localStorage.lvlPMA);
        $("#detailsSeance").empty()
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let iRecup = maxH * 0.10;
        let iPMA30_30 = maxH * 0.80;
        let LgrExo = 0;
        let tpsEffort1 = 1 * rep1;
        let tpsEffort2 = 1 * rep2;
        let tpsEffort3 = 1 * rep3;
        let tpsEffort4 = 1 * rep4;
        let tps = 0;
        let init = 0;
        let lgrEchauffement = 0;
        let lgrPMA;

        switch(Number(sessionStorage.serie)) {
            case 1:
                LgrExo = 10 + tpsEffort1 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrPMA = 0.5 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL;
                rep = rep1;
                PMADetails()
                while (init < rep1) {
                    PMARep()
                    tps = tps + lgrPMA * maxL + lgrPMA * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
            case 2:
                LgrExo = 10 + tpsEffort1 + 10 + tpsEffort2 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrPMA = 0.5 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL;
                rep = rep1;
                PMADetails()
                while (init < rep1) {
                    PMARep()
                    tps = tps + lgrPMA * maxL + lgrPMA * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep2;
                init = 0
                PMADetails()
                while (init < rep2) {
                    PMARep()
                    tps = tps + lgrPMA * maxL + lgrPMA * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
            case 3:
                LgrExo = 10 + tpsEffort1 + 10 + tpsEffort2 + 10 + tpsEffort3 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrPMA = 0.5 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL;
                rep = rep1;
                PMADetails()
                while (init < rep1) {
                    PMARep()
                    tps = tps + lgrPMA * maxL + lgrPMA * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep2;
                init = 0
                PMADetails()
                while (init < rep2) {
                    PMARep()
                    tps = tps + lgrPMA * maxL + lgrPMA * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep3;
                init = 0
                PMADetails()
                while (init < rep3) {
                    PMARep()
                    tps = tps + lgrPMA * maxL + lgrPMA * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
            case 4:
                LgrExo = 10 + tpsEffort1 + 10 + tpsEffort2 + 10 + tpsEffort3 + 10 + tpsEffort4 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrPMA = 0.5 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL
                rep = rep1;
                PMADetails()
                while (init < rep1) {
                    PMARep()
                    tps = tps + lgrPMA * maxL + lgrPMA * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep2;
                init = 0
                PMADetails()
                while (init < rep2) {
                    PMARep()
                    tps = tps + lgrPMA * maxL + lgrPMA * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep3;
                init = 0
                PMADetails()
                while (init < rep3) {
                    PMARep()
                    tps = tps + lgrPMA * maxL + lgrPMA * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep4;
                init = 0
                PMADetails()
                while (init < rep4) {
                    PMARep()
                    tps = tps + lgrPMA * maxL + lgrPMA * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
        }

        function recupDetails() {
            var div = document.createElement("div");
            var h1 = document.createElement("h1");
            div.style.width = "96%";
            div.style.height = "30px";
            div.style.marginLeft = "2%";
            div.style.marginRight = "2%";
            div.style.marginTop = "-10px";
            div.style.marginBottom = "13px";
            div.style.background = "green";
            div.style.borderRadius = "5px";
            h1.style.fontSize ="15px";
            h1.style.padding = "5px";
            h1.style.textAlign = "end"
            h1.innerHTML = "10 min" + " " + "@" + " " + pEndurance;
            div.appendChild(h1);
            document.getElementById("detailsSeance").appendChild(div);
        }

        function PMADetails() {
            var div = document.createElement("div");
            var X = document.createElement("h1");
            var h1 = document.createElement("h1");
            var h1_2 = document.createElement("h1");
            div.style.width = "96%";
            div.style.height = "50px";
            div.style.marginLeft = "2%";
            div.style.marginRight = "2%";
            div.style.marginTop = "-10px";
            div.style.background = "orange";
            div.style.borderRadius = "5px";
            X.style.fontSize ="15px";
            X.style.padding = "5px";
            X.innerHTML = "X" + " " + rep;
            X.style.position = "relativ"
            X.style.marginTop = "10px"
            h1.style.fontSize ="15px";
            h1.style.padding = "5px";
            h1.style.marginTop = "-45px"
            h1.style.textAlign = "end"
            h1.innerHTML = "30 sec" + " " + "@" + " " + pPMA30sec_30sec;
            h1_2.style.marginTop = "-21px"
            h1_2.style.fontSize ="15px";
            h1_2.style.padding = "5px";
            h1_2.style.textAlign = "end"
            h1_2.innerHTML = "30 sec" + " " + "@" + " " + pEndurance;
            div.appendChild(X);
            div.appendChild(h1);
            div.appendChild(h1_2);
            document.getElementById("detailsSeance").appendChild(div);
        }

        function échauffement() {
            let lgrEchauffement = 10 / LgrExo;
            ctx.fillStyle = "green";
            ctx.fillRect(tps, maxH - iRecup, lgrEchauffement * maxL, iRecup)
        }
        function PMARep() {
            let lgrPMA = 0.5 / LgrExo;
            ctx.fillStyle = "orange";
            ctx.fillRect(tps, maxH - iPMA30_30, lgrPMA * maxL, iPMA30_30)
            ctx.fillStyle = "green";
            ctx.fillRect(tps + lgrPMA * maxL, maxH - iRecup, lgrPMA * maxL, iRecup)
        }
        function recup() {
            ctx.fillStyle = "green";
            ctx.fillRect(tps, maxH - iRecup, lgrEchauffement * maxL, iRecup)
        }
    }

    function sprint(){
        let rep;
        let rep1 = Number(sessionStorage.rep1) + Number(localStorage.lvlSprint);
        let rep2 = Number(sessionStorage.rep2) + Number(localStorage.lvlSprint);
        let rep3 = Number(sessionStorage.rep3) + Number(localStorage.lvlSprint);
        let rep4 = Number(sessionStorage.rep4) + Number(localStorage.lvlSprint);
        $("#detailsSeance").empty()
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let iRecup = maxH * 0.10;
        let iSprint = maxH * 0.90;
        let LgrExo = 0;
        let tpsEffort1 = 0.4 * rep1;
        let tpsEffort2 = 0.4 * rep2;
        let tpsEffort3 = 0.4 * rep3;
        let tpsEffort4 = 0.4  * rep4;
        let tps = 0;
        let init = 0;
        let lgrEchauffement = 0;
        let lgrSprint ;

        switch(Number(sessionStorage.serie)) {
            case 1:
                LgrExo = 10 + tpsEffort1 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrSprint = 0.2 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL;
                rep = rep1;
                sprintDetails()
                while (init < rep1) {
                    sprintRep()
                    tps = tps + lgrSprint * maxL + lgrSprint * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
            case 2:
                LgrExo = 10 + tpsEffort1 + 10 + tpsEffort2 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrSprint = 0.2 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL;
                rep = rep1;
                sprintDetails()
                while (init < rep1) {
                    sprintRep()
                    tps = tps + lgrSprint * maxL + lgrSprint * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep2;
                init = 0
                sprintDetails()
                while (init < rep2) {
                    sprintRep()
                    tps = tps + lgrSprint * maxL + lgrSprint * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
            case 3:
                LgrExo = 10 + tpsEffort1 + 10 + tpsEffort2 + 10 + tpsEffort3 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrSprint = 0.2 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL;
                rep = rep1;
                sprintDetails()
                while (init < rep1) {
                    sprintRep()
                    tps = tps + lgrSprint * maxL + lgrSprint * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep2;
                init = 0
                sprintDetails()
                while (init < rep2) {
                    sprintRep()
                    tps = tps + lgrSprint * maxL + lgrSprint * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep3;
                init = 0
                sprintDetails()
                while (init < rep3) {
                    sprintRep()
                    tps = tps + lgrSprint * maxL + lgrSprint * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
            case 4:
                LgrExo = 10 + tpsEffort1 + 10 + tpsEffort2 + 10 + tpsEffort3 + 10 + tpsEffort4 + 10;
                lgrEchauffement = 10 / LgrExo;
                lgrSprint = 0.2 / LgrExo;
                tps = 0 ; 
                recupDetails()
                échauffement()
                tps =  lgrEchauffement * maxL;
                rep = rep1;
                sprintDetails()
                while (init < rep1) {
                    sprintRep()
                    tps = tps + lgrSprint * maxL + lgrSprint * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep2;
                init = 0
                sprintDetails()
                while (init < rep2) {
                    sprintRep()
                    tps = tps + lgrSprint * maxL + lgrSprint * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep3;
                init = 0
                sprintDetails()
                while (init < rep3) {
                    sprintRep()
                    tps = tps + lgrSprint * maxL + lgrSprint * maxL;
                    init++;
                }
                recupDetails()
                recup()
                tps = tps + lgrEchauffement * maxL
                rep = rep4;
                init = 0
                sprintDetails()
                while (init < rep4) {
                    sprintRep()
                    tps = tps + lgrSprint * maxL + lgrSprint * maxL;
                    init++;
                }
                recupDetails()
                recup()
              break;
        }

        function recupDetails() {
            var div = document.createElement("div");
            var h1 = document.createElement("h1");
            div.style.width = "96%";
            div.style.height = "30px";
            div.style.marginLeft = "2%";
            div.style.marginRight = "2%";
            div.style.marginTop = "-10px";
            div.style.marginBottom = "13px";
            div.style.background = "green";
            div.style.borderRadius = "5px";
            h1.style.fontSize ="15px";
            h1.style.padding = "5px";
            h1.style.textAlign = "end"
            h1.innerHTML = "10 min" + " " + "@" + " " + pEndurance;
            div.appendChild(h1);
            document.getElementById("detailsSeance").appendChild(div);
        }

        function sprintDetails() {
            var div = document.createElement("div");
            var X = document.createElement("h1");
            var h1 = document.createElement("h1");
            var h1_2 = document.createElement("h1");
            div.style.width = "96%";
            div.style.height = "50px";
            div.style.marginLeft = "2%";
            div.style.marginRight = "2%";
            div.style.marginTop = "-10px";
            div.style.background = "red";
            div.style.borderRadius = "5px";
            X.style.fontSize ="15px";
            X.style.padding = "5px";
            X.innerHTML = "X" + " " + rep;
            X.style.position = "relativ"
            X.style.marginTop = "10px"
            h1.style.fontSize ="15px";
            h1.style.padding = "5px";
            h1.style.marginTop = "-45px"
            h1.style.textAlign = "end"
            h1.innerHTML = "12 sec" + " " + "@" + " " + pSprint;
            h1_2.style.marginTop = "-21px"
            h1_2.style.fontSize ="15px";
            h1_2.style.padding = "5px";
            h1_2.style.textAlign = "end"
            h1_2.innerHTML = "2 min" + " " + "@" + " " + pEndurance;
            div.appendChild(X);
            div.appendChild(h1);
            div.appendChild(h1_2);
            document.getElementById("detailsSeance").appendChild(div);
        }

        function échauffement() {
            let lgrEchauffement = 10 / LgrExo;
            ctx.fillStyle = "green";
            ctx.fillRect(tps, maxH - iRecup, lgrEchauffement * maxL, iRecup)
        }
        function sprintRep() {
            ctx.fillStyle = "red";
            ctx.fillRect(tps, maxH - iSprint, lgrSprint * maxL, iSprint)
            ctx.fillStyle = "green";
            ctx.fillRect(tps + lgrSprint * maxL, maxH - iRecup, lgrSprint * maxL, iRecup)
        }
        function recup() {
            ctx.fillStyle = "green";
            ctx.fillRect(tps, maxH - iRecup, lgrEchauffement * maxL, iRecup)
        }
    }

    if(Number(localStorage.prg) == 3) {
    let monthA = new Array(12);
    monthA[1] = "janvier";
    monthA[2] = "fevrier";
    monthA[3] = "mars";
    monthA[4] = "avril";
    monthA[5] = "mai";
    monthA[6] = "juin";
    monthA[7] = "juillet";
    monthA[8] = "aout";
    monthA[9] = "septembre";
    monthA[10] = "octobre";
    monthA[11] = "novembre";
    monthA[12] = "decembre";
    let nbAnnée = Number(localStorage.année);
    let nbMois = Number(localStorage.mois);
    let nbNbd = Number(localStorage.nbd);
    let nbPrgT = Number(localStorage.prgT); 
    let nbPrgJ = Number(localStorage.prgJ); 
    let nbObjectif = Number(localStorage.objectif);
    let init = 0;

    init = 0;
    while (init < 41) {
        document.getElementsByClassName("dt_nb")[init].style.backgroundColor = ""
        init ++;
    } 

    //green = endurance
    //yellow = seuil
    //orange = pma
    //red = force
    //grey = objectif

    if (nbPrgT == 4) {
        //semaine 1     
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 111)) {document.getElementById(nbObjectif - 111).style.backgroundColor = "green"}}
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 110)) {document.getElementById(nbObjectif - 110).style.backgroundColor = ""}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 109)) {document.getElementById(nbObjectif - 109).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 108)) {document.getElementById(nbObjectif - 108).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 107)) {document.getElementById(nbObjectif - 107).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 106)) {document.getElementById(nbObjectif - 106).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 105)) {document.getElementById(nbObjectif - 105).style.backgroundColor = "green"}}
        //semaine 2       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 104)) {document.getElementById(nbObjectif - 104).style.backgroundColor = ""}}
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 103)) {document.getElementById(nbObjectif - 103).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 102)) {document.getElementById(nbObjectif - 102).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 101)) {document.getElementById(nbObjectif - 101).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 100)) {document.getElementById(nbObjectif - 100).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 99)) {document.getElementById(nbObjectif - 99).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 98)) {document.getElementById(nbObjectif - 98).style.backgroundColor = "green"}}
        //semaine 3       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 97)) {document.getElementById(nbObjectif - 97).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 96)) {document.getElementById(nbObjectif - 96).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 95)) {document.getElementById(nbObjectif - 95).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 94)) {document.getElementById(nbObjectif - 94).style.backgroundColor = "orange"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 93)) {document.getElementById(nbObjectif - 93).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 92)) {document.getElementById(nbObjectif - 92).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 91)) {document.getElementById(nbObjectif - 91).style.backgroundColor = "green"};} 
        //semaine 4      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 90)) {document.getElementById(nbObjectif - 90).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 89)) {document.getElementById(nbObjectif - 89).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 88)) {document.getElementById(nbObjectif - 88).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 87)) {document.getElementById(nbObjectif - 87).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 86)) {document.getElementById(nbObjectif - 86).style.backgroundColor = "red"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 85)) {document.getElementById(nbObjectif - 85).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 84)) {document.getElementById(nbObjectif - 84).style.backgroundColor = "green"}} 
        //semaine 5     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 83)) {document.getElementById(nbObjectif - 83).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 82)) {document.getElementById(nbObjectif - 82).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 81)) {document.getElementById(nbObjectif - 81).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 80)) {document.getElementById(nbObjectif - 80).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 79)) {document.getElementById(nbObjectif - 79).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 78)) {document.getElementById(nbObjectif - 78).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 77)) {document.getElementById(nbObjectif - 77).style.backgroundColor = "green"}}  
        //semaine 6     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 76)) {document.getElementById(nbObjectif - 76).style.backgroundColor = ""}} 
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 75)) {document.getElementById(nbObjectif - 75).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 74)) {document.getElementById(nbObjectif - 74).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 73)) {document.getElementById(nbObjectif - 73).style.backgroundColor = "red"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 72)) {document.getElementById(nbObjectif - 72).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 71)) {document.getElementById(nbObjectif - 71).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 70)) {document.getElementById(nbObjectif - 70).style.backgroundColor = "green"}}
        //semaine 7       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 69)) {document.getElementById(nbObjectif - 69).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 68)) {document.getElementById(nbObjectif - 68).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 67)) {document.getElementById(nbObjectif - 67).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 66)) {document.getElementById(nbObjectif - 66).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 65)) {document.getElementById(nbObjectif - 65).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 64)) {document.getElementById(nbObjectif - 64).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 63)) {document.getElementById(nbObjectif - 63).style.backgroundColor = "orange"}}
        //semaine 8       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 62)) {document.getElementById(nbObjectif - 62).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 61)) {document.getElementById(nbObjectif - 61).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 60)) {document.getElementById(nbObjectif - 60).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 59)) {document.getElementById(nbObjectif - 59).style.backgroundColor = "orange"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 58)) {document.getElementById(nbObjectif - 58).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 57)) {document.getElementById(nbObjectif - 57).style.backgroundColor = "orange"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 56)) {document.getElementById(nbObjectif - 56).style.backgroundColor = "green"}}
        //semaine 9     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 55)) {document.getElementById(nbObjectif - 55).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 54)) {document.getElementById(nbObjectif - 54).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 53)) {document.getElementById(nbObjectif - 53).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 52)) {document.getElementById(nbObjectif - 52).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 51)) {document.getElementById(nbObjectif - 51).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 50)) {document.getElementById(nbObjectif - 50).style.backgroundColor = "orange"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 49)) {document.getElementById(nbObjectif - 49).style.backgroundColor = "green"}} 
        //semaine 10      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 48)) {document.getElementById(nbObjectif - 48).style.backgroundColor = ""}}
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 47)) {document.getElementById(nbObjectif - 47).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 46)) {document.getElementById(nbObjectif - 46).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 45)) {document.getElementById(nbObjectif - 45).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 44)) {document.getElementById(nbObjectif - 44).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 43)) {document.getElementById(nbObjectif - 43).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 42)) {document.getElementById(nbObjectif - 42).style.backgroundColor = "yellow"}} 
        //semaine 11     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 41)) {document.getElementById(nbObjectif - 41).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 40)) {document.getElementById(nbObjectif - 40).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 39)) {document.getElementById(nbObjectif - 39).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 38)) {document.getElementById(nbObjectif - 38).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 37)) {document.getElementById(nbObjectif - 37).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 36)) {document.getElementById(nbObjectif - 36).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 35)) {document.getElementById(nbObjectif - 35).style.backgroundColor = "yellow"}}   
        //semaine 12   
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 34)) {document.getElementById(nbObjectif - 34).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 33)) {document.getElementById(nbObjectif - 33).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 32)) {document.getElementById(nbObjectif - 32).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 31)) {document.getElementById(nbObjectif - 31).style.backgroundColor = "yellow"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 30)) {document.getElementById(nbObjectif - 30).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 29)) {document.getElementById(nbObjectif - 29).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 28)) {document.getElementById(nbObjectif - 28).style.backgroundColor = "green"}}
        //semaine 13       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 27)) {document.getElementById(nbObjectif - 27).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 26)) {document.getElementById(nbObjectif - 26).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 25)) {document.getElementById(nbObjectif - 25).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 24)) {document.getElementById(nbObjectif - 24).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 23)) {document.getElementById(nbObjectif - 23).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 22)) {document.getElementById(nbObjectif - 22).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 21)) {document.getElementById(nbObjectif - 21).style.backgroundColor = "green"}}  
        //semaine 14    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 20)) {document.getElementById(nbObjectif - 20).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 19)) {document.getElementById(nbObjectif - 19).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 18)) {document.getElementById(nbObjectif - 18).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 17)) {document.getElementById(nbObjectif - 17).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 16)) {document.getElementById(nbObjectif - 16).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 15)) {document.getElementById(nbObjectif - 15).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 14)) {document.getElementById(nbObjectif - 14).style.backgroundColor = "green"}} 
        //semaine 15     
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 13)) {document.getElementById(nbObjectif - 13).style.backgroundColor = "red"}}  
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 11)) {document.getElementById(nbObjectif - 11).style.backgroundColor = "green"}}    
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 8)) {document.getElementById(nbObjectif - 8).style.backgroundColor = "orange"}} 
        //semaine 16     
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 6)) {document.getElementById(nbObjectif - 6).style.backgroundColor = "green"}}
        if (document.getElementById(nbObjectif - 4)) {document.getElementById(nbObjectif - 4).style.backgroundColor = "orange"}   
        if (document.getElementById(nbObjectif - 1)) {document.getElementById(nbObjectif - 1).style.backgroundColor = "green"}
        if (document.getElementById(nbObjectif)) {document.getElementById(nbObjectif).style.backgroundColor = "gray"}
    }
    
    else if (nbPrgT == 3) {
        //semaine 1    
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 83)) {document.getElementById(nbObjectif - 83).style.backgroundColor = "green"}}
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 82)) {document.getElementById(nbObjectif - 82).style.backgroundColor = ""}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 81)) {document.getElementById(nbObjectif - 81).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 80)) {document.getElementById(nbObjectif - 80).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 79)) {document.getElementById(nbObjectif - 79).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 78)) {document.getElementById(nbObjectif - 78).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 77)) {document.getElementById(nbObjectif - 77).style.backgroundColor = "green"}}  
        //semaine 2    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 76)) {document.getElementById(nbObjectif - 76).style.backgroundColor = ""};} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 75)) {document.getElementById(nbObjectif - 75).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 74)) {document.getElementById(nbObjectif - 74).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 73)) {document.getElementById(nbObjectif - 73).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 72)) {document.getElementById(nbObjectif - 72).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 71)) {document.getElementById(nbObjectif - 71).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 70)) {document.getElementById(nbObjectif - 70).style.backgroundColor = "green"}}
        //semaine 3      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 69)) {document.getElementById(nbObjectif - 69).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 68)) {document.getElementById(nbObjectif - 68).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 67)) {document.getElementById(nbObjectif - 67).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 66)) {document.getElementById(nbObjectif - 66).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 65)) {document.getElementById(nbObjectif - 65).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 64)) {document.getElementById(nbObjectif - 64).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 63)) {document.getElementById(nbObjectif - 63).style.backgroundColor = "green"}}
        //semaine 4      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 62)) {document.getElementById(nbObjectif - 62).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 61)) {document.getElementById(nbObjectif - 61).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 60)) {document.getElementById(nbObjectif - 60).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 59)) {document.getElementById(nbObjectif - 59).style.backgroundColor = "orange"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 58)) {document.getElementById(nbObjectif - 58).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 57)) {document.getElementById(nbObjectif - 57).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 56)) {document.getElementById(nbObjectif - 56).style.backgroundColor = "green"}}
        //semaine 5    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 55)) {document.getElementById(nbObjectif - 55).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 54)) {document.getElementById(nbObjectif - 54).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 53)) {document.getElementById(nbObjectif - 53).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 52)) {document.getElementById(nbObjectif - 52).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 51)) {document.getElementById(nbObjectif - 51).style.backgroundColor = "orange"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 50)) {document.getElementById(nbObjectif - 50).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 49)) {document.getElementById(nbObjectif - 49).style.backgroundColor = "orange"}} 
        //semaine 6     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 48)) {document.getElementById(nbObjectif - 48).style.backgroundColor = ""}}
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 47)) {document.getElementById(nbObjectif - 47).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 46)) {document.getElementById(nbObjectif - 46).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 45)) {document.getElementById(nbObjectif - 45).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 44)) {document.getElementById(nbObjectif - 44).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 43)) {document.getElementById(nbObjectif - 43).style.backgroundColor = "orange"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 42)) {document.getElementById(nbObjectif - 42).style.backgroundColor = "green"}} 
        //semaine 7    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 41)) {document.getElementById(nbObjectif - 41).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 40)) {document.getElementById(nbObjectif - 40).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 39)) {document.getElementById(nbObjectif - 39).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 38)) {document.getElementById(nbObjectif - 38).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 37)) {document.getElementById(nbObjectif - 37).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 36)) {document.getElementById(nbObjectif - 36).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 35)) {document.getElementById(nbObjectif - 35).style.backgroundColor = "yellow"}}   
        //semaine 8
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 34)) {document.getElementById(nbObjectif - 34).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 33)) {document.getElementById(nbObjectif - 33).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 32)) {document.getElementById(nbObjectif - 32).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 31)) {document.getElementById(nbObjectif - 31).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 30)) {document.getElementById(nbObjectif - 30).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 29)) {document.getElementById(nbObjectif - 29).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 28)) {document.getElementById(nbObjectif - 28).style.backgroundColor = "yellow"}}
        //semaine 9      
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 27)) {document.getElementById(nbObjectif - 27).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 26)) {document.getElementById(nbObjectif - 26).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 25)) {document.getElementById(nbObjectif - 25).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 24)) {document.getElementById(nbObjectif - 24).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 23)) {document.getElementById(nbObjectif - 23).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 22)) {document.getElementById(nbObjectif - 22).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 21)) {document.getElementById(nbObjectif - 21).style.backgroundColor = "green"}}  
        //semaine 10    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 20)) {document.getElementById(nbObjectif - 20).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 19)) {document.getElementById(nbObjectif - 19).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 18)) {document.getElementById(nbObjectif - 18).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 17)) {document.getElementById(nbObjectif - 17).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 16)) {document.getElementById(nbObjectif - 16).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 15)) {document.getElementById(nbObjectif - 15).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 14)) {document.getElementById(nbObjectif - 14).style.backgroundColor = "green"}} 
        //semaine 11  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 13)) {document.getElementById(nbObjectif - 13).style.backgroundColor = "red"}}  
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 11)) {document.getElementById(nbObjectif - 11).style.backgroundColor = "green"}}    
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 8)) {document.getElementById(nbObjectif - 8).style.backgroundColor = "orange"}} 
        //semaine 12  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 6)) {document.getElementById(nbObjectif - 6).style.backgroundColor = "green"}}
        if (document.getElementById(nbObjectif - 4)) {document.getElementById(nbObjectif - 4).style.backgroundColor = "orange"}
        if (document.getElementById(nbObjectif - 1)) {document.getElementById(nbObjectif - 1).style.backgroundColor = "green"} 
        if (document.getElementById(nbObjectif)) {document.getElementById(nbObjectif).style.backgroundColor = "gray"}
    }

    else if (nbPrgT == 2) {
        //semaine 1    
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 55)) {document.getElementById(nbObjectif - 55).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 54)) {document.getElementById(nbObjectif - 54).style.backgroundColor = ""}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 53)) {document.getElementById(nbObjectif - 53).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 52)) {document.getElementById(nbObjectif - 52).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 51)) {document.getElementById(nbObjectif - 51).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 50)) {document.getElementById(nbObjectif - 50).style.backgroundColor = "green"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 49)) {document.getElementById(nbObjectif - 49).style.backgroundColor = "green"}} 
        //semaine 2     
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 48)) {document.getElementById(nbObjectif - 48).style.backgroundColor = ""}}
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 47)) {document.getElementById(nbObjectif - 47).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 46)) {document.getElementById(nbObjectif - 46).style.backgroundColor = "red"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 45)) {document.getElementById(nbObjectif - 45).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 44)) {document.getElementById(nbObjectif - 44).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 43)) {document.getElementById(nbObjectif - 43).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 42)) {document.getElementById(nbObjectif - 42).style.backgroundColor = "green"}} 
        //semaine 3    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 41)) {document.getElementById(nbObjectif - 41).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 40)) {document.getElementById(nbObjectif - 40).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 39)) {document.getElementById(nbObjectif - 39).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 38)) {document.getElementById(nbObjectif - 38).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 37)) {document.getElementById(nbObjectif - 37).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 36)) {document.getElementById(nbObjectif - 36).style.backgroundColor = "yellow"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 35)) {document.getElementById(nbObjectif - 35).style.backgroundColor = "green"}}   
        //semaine 4   
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 34)) {document.getElementById(nbObjectif - 34).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 33)) {document.getElementById(nbObjectif - 33).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 32)) {document.getElementById(nbObjectif - 32).style.backgroundColor = "orange"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 31)) {document.getElementById(nbObjectif - 31).style.backgroundColor = "orange"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 30)) {document.getElementById(nbObjectif - 30).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 29)) {document.getElementById(nbObjectif - 29).style.backgroundColor = "orange"}} 
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 28)) {document.getElementById(nbObjectif - 28).style.backgroundColor = "green"}}
        //semaine 5       
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 27)) {document.getElementById(nbObjectif - 27).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 26)) {document.getElementById(nbObjectif - 26).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 25)) {document.getElementById(nbObjectif - 25).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 24)) {document.getElementById(nbObjectif - 24).style.backgroundColor = "yellow"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 23)) {document.getElementById(nbObjectif - 23).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 22)) {document.getElementById(nbObjectif - 22).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 21)) {document.getElementById(nbObjectif - 21).style.backgroundColor = "green"}}  
        //semaine 6    
        if (nbPrgJ >= 7) {if (document.getElementById(nbObjectif - 20)) {document.getElementById(nbObjectif - 20).style.backgroundColor = ""}} 
        if (nbPrgJ >= 4) {if (document.getElementById(nbObjectif - 19)) {document.getElementById(nbObjectif - 19).style.backgroundColor = "green"}}   
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 18)) {document.getElementById(nbObjectif - 18).style.backgroundColor = "yellow"}}   
        if (nbPrgJ >= 6) {if (document.getElementById(nbObjectif - 17)) {document.getElementById(nbObjectif - 17).style.backgroundColor = "green"}}  
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 16)) {document.getElementById(nbObjectif - 16).style.backgroundColor = "green"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 15)) {document.getElementById(nbObjectif - 15).style.backgroundColor = "yellow"}}
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 14)) {document.getElementById(nbObjectif - 14).style.backgroundColor = "green"}} 
        //semaine 7     
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 13)) {document.getElementById(nbObjectif - 13).style.backgroundColor = "red"}}  
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 11)) {document.getElementById(nbObjectif - 11).style.backgroundColor = "green"}}    
        if (nbPrgJ >= 3) {if (document.getElementById(nbObjectif - 8)) {document.getElementById(nbObjectif - 8).style.backgroundColor = "orange"}} 
        //semaine 8     
        if (nbPrgJ >= 5) {if (document.getElementById(nbObjectif - 6)) {document.getElementById(nbObjectif - 6).style.backgroundColor = "green"}}
        if (document.getElementById(nbObjectif - 4)) {document.getElementById(nbObjectif - 4).style.backgroundColor = "orange"}  
        if (document.getElementById(nbObjectif - 1)) {document.getElementById(nbObjectif - 1).style.backgroundColor = "green"}
        if (document.getElementById(nbObjectif)) {document.getElementById(nbObjectif).style.backgroundColor = "gray"} 
    }

    sessionStorage.nbExo = 0;
    let nbLevel = Number(localStorage.level)

    if (nbPrgT == 4) {
        if(document.getElementById(nbObjectif - 111)) {
            document.getElementById(nbObjectif - 111).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 111).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo1
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr1
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }  
        if(document.getElementById(nbObjectif - 110)) {
            document.getElementById(nbObjectif - 110).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 110).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo2
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr2
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 109)) {
            document.getElementById(nbObjectif - 109).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 109).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo3
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr3
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }   
        if(document.getElementById(nbObjectif - 108)) {
            document.getElementById(nbObjectif - 108).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 108).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo4
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr4
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 107)) {
            document.getElementById(nbObjectif - 107).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 107).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo5
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr5
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 106)) {
            document.getElementById(nbObjectif - 106).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 106).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo6
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr6
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 105)) {
            document.getElementById(nbObjectif - 105).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 105).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo7
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr7
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 104)) {
            document.getElementById(nbObjectif - 104).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 104).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo8
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr8
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 103)) {
            document.getElementById(nbObjectif - 103).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 103).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo9
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr9
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 102)) {
            document.getElementById(nbObjectif - 102).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 102).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo10
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr10
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 101)) {
            document.getElementById(nbObjectif - 101).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 101).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo11
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr11
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 100)) {
            document.getElementById(nbObjectif - 100).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 100).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo12
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr12
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 1;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 99)) {
            document.getElementById(nbObjectif - 99).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 99).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo13
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr13
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 98)) {
            document.getElementById(nbObjectif - 98).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 98).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo14
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr14
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 97)) {
            document.getElementById(nbObjectif - 97).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 97).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo15
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr15
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 96)) {
            document.getElementById(nbObjectif - 96).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 96).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo16
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr16
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }  
        }
        if(document.getElementById(nbObjectif - 95)) {
            document.getElementById(nbObjectif - 95).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 95).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo17
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr17
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 94)) {
            document.getElementById(nbObjectif - 94).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 94).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo18
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr18
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 93)) {
            document.getElementById(nbObjectif - 93).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 93).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo19
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr19
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 92)) {
            document.getElementById(nbObjectif - 92).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 92).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo20
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr20
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 91)) {
            document.getElementById(nbObjectif - 91).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 91).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo21
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr21
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 90)) {
            document.getElementById(nbObjectif - 90).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 90).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo22
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr22
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 89)) {
            document.getElementById(nbObjectif - 89).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 89).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo23
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr23
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 88)) {
            document.getElementById(nbObjectif - 88).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 88).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo24
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr24
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 1;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 87)) {
            document.getElementById(nbObjectif - 87).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 87).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo25
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr25
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 86)) {
            document.getElementById(nbObjectif - 86).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 86).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo26
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr26
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 6;
                        sessionStorage.rep4 = 0;
                        break;
                }
                sprint()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 85)) {
            document.getElementById(nbObjectif - 85).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 85).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo27
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr27
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 84)) {
            document.getElementById(nbObjectif - 84).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 84).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo28
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr28
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 83)) {
            document.getElementById(nbObjectif - 83).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 83).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo29
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr29
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 82)) {
            document.getElementById(nbObjectif - 82).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 82).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo30
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr30
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 81)) {
            document.getElementById(nbObjectif - 81).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 81).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo31
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr31
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 80)) {
            document.getElementById(nbObjectif - 80).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 80).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo32
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr32
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 79)) {
            document.getElementById(nbObjectif - 79).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 79).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo33
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr33
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 78)) {
            document.getElementById(nbObjectif - 78).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 78).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo34
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr34
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 77)) {
            document.getElementById(nbObjectif - 77).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 77).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo35
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr35
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 76)) {
            document.getElementById(nbObjectif - 76).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 76).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo36
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr36
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 75)) {
            document.getElementById(nbObjectif - 75).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 75).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo37
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr37
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 1;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 74)) {
            document.getElementById(nbObjectif - 74).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 74).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo38
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr38
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 73)) {
            document.getElementById(nbObjectif - 73).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 73).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo39
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr39
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 6;
                        sessionStorage.rep4 = 0;
                        break;
                }
                sprint()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 72)) {
            document.getElementById(nbObjectif - 72).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 72).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo40
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr40
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 71)) {
            document.getElementById(nbObjectif - 71).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 71).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo41
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr41
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 70)) {
            document.getElementById(nbObjectif - 70).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 70).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo42
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr42
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 69)) {
            document.getElementById(nbObjectif - 69).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 69).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo43
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr43
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 68)) {
            document.getElementById(nbObjectif - 68).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 68).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo44
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr44
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }    
        }
        if(document.getElementById(nbObjectif - 67)) {
            document.getElementById(nbObjectif - 67).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 67).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo45
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr45
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            } 
        }
        if(document.getElementById(nbObjectif - 66)) {
            document.getElementById(nbObjectif - 66).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 66).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo46
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr46
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 65)) {
            document.getElementById(nbObjectif - 65).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 65).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo47
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr47
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 10;
                        sessionStorage.rep2 = 9;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 64)) {
            document.getElementById(nbObjectif - 64).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 64).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo48
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr48
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 63)) {
            document.getElementById(nbObjectif - 63).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 63).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo49
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr49
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 11;
                        sessionStorage.rep2 = 10;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 62)) {
            document.getElementById(nbObjectif - 62).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 62).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo50
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr50
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 61)) {
            document.getElementById(nbObjectif - 61).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 61).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo51
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr51
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 10;
                        sessionStorage.rep2 = 9;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 7;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 60)) {
            document.getElementById(nbObjectif - 60).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 60).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo52
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr52
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 59)) {
            document.getElementById(nbObjectif - 59).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 59).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo53
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr53
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 11;
                        sessionStorage.rep2 = 10;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 7;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 58)) {
            document.getElementById(nbObjectif - 58).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 58).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo54
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr54
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 57)) {
            document.getElementById(nbObjectif - 57).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 57).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo55
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr55
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 7;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 10;
                        sessionStorage.rep2 = 9;
                        sessionStorage.rep3 = 8;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 56)) {
            document.getElementById(nbObjectif - 56).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 56).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo56
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr56
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 55)) {
            document.getElementById(nbObjectif - 55).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo57
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr57
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 54)) {
            document.getElementById(nbObjectif - 54).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo58
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr58
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 53)) {
            document.getElementById(nbObjectif - 53).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]  
                document.getElementById("exoInstruction").innerText = localStorage.exo59
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr59
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 7;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 10;
                        sessionStorage.rep2 = 10;
                        sessionStorage.rep3 = 9;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 52)) {
            document.getElementById(nbObjectif - 52).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo60
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr60
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 51)) {
            document.getElementById(nbObjectif - 51).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo61
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr61
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 50)) {
            document.getElementById(nbObjectif - 50).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo62
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr62
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 9;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 10;
                        sessionStorage.rep2 = 9;
                        sessionStorage.rep3 = 8;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 11;
                        sessionStorage.rep2 = 10;
                        sessionStorage.rep3 = 10;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 49)) {
            document.getElementById(nbObjectif - 49).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo63
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr63
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 48)) {
            document.getElementById(nbObjectif - 48).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo64
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr64
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 47)) {
            document.getElementById(nbObjectif - 47).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo65
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr65
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 46)) {
            document.getElementById(nbObjectif - 46).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo66
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr66
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 45)) {
            document.getElementById(nbObjectif - 45).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo67
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr67
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 44)) {
            document.getElementById(nbObjectif - 44).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo68
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr68
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 43)) {
            document.getElementById(nbObjectif - 43).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo69
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr69
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 42)) {
            document.getElementById(nbObjectif - 42).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo70
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr70
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 41)) {
            document.getElementById(nbObjectif - 41).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo71
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr71
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 40)) {
            document.getElementById(nbObjectif - 40).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo72
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr72
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 7;
                        sessionStorage.rep4 = 0;
                        break;
                }
                sprint()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 39)) {
            document.getElementById(nbObjectif - 39).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo73
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr73
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 38)) {
            document.getElementById(nbObjectif - 38).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo74
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr74
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 37)) {
            document.getElementById(nbObjectif - 37).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo75
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr75
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 36)) {
            document.getElementById(nbObjectif - 36).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo76
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr76
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 35)) {
            document.getElementById(nbObjectif - 35).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo77
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr77
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 34)) {
            document.getElementById(nbObjectif - 34).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo78
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr78
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 33)) {
            document.getElementById(nbObjectif - 33).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo79
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr79
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.rep = 5;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 6;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;     
                        gimenez()   
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 32)) {
            document.getElementById(nbObjectif - 32).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo80
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr80
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 31)) {
            document.getElementById(nbObjectif - 31).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo81
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr81
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.rep = 7;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 3;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 8;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 3;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 30)) {
            document.getElementById(nbObjectif - 30).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo82
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr82
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 29)) {
            document.getElementById(nbObjectif - 29).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo83
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr83
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 4:
                        sessionStorage.rep = 7;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 28)) {
            document.getElementById(nbObjectif - 28).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo84
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr84
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 27)) {
            document.getElementById(nbObjectif - 27).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo85
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr85
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 26)) {
            document.getElementById(nbObjectif - 26).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo86
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr86
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 25)) {
            document.getElementById(nbObjectif - 25).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo87
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr87
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.rep = 8;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 3;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 9;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 3;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 24)) {
            document.getElementById(nbObjectif - 24).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo88
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr88
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 23)) {
            document.getElementById(nbObjectif - 23).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo89
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr89
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 22)) {
            document.getElementById(nbObjectif - 22).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo90
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr90
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 21)) {
            document.getElementById(nbObjectif - 21).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo91
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr91
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 20)) {
            document.getElementById(nbObjectif - 20).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo92
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr92
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 19)) {
            document.getElementById(nbObjectif - 19).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo93
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr93
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 18)) {
            document.getElementById(nbObjectif - 18).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo94
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr94
                switch (nbLevel) {
                    case 1:
                        seuil()
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.rep = 6;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                    case 3:
                        sessionStorage.rep = 7;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 8;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 17)) {
            document.getElementById(nbObjectif - 17).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo95
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr95
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 16)) {
            document.getElementById(nbObjectif - 16).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo96
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr96
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 15)) {
            document.getElementById(nbObjectif - 15).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo97
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr97
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.rep = 8;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 9;
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 14)) {
            document.getElementById(nbObjectif - 14).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo98
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr98
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 13)) {
            document.getElementById(nbObjectif - 13).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo99
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr99
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                sprint()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 12)) {
            document.getElementById(nbObjectif - 12).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo100
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr100
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 11)) {
            document.getElementById(nbObjectif - 11).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo101
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr101
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 10)) {
            document.getElementById(nbObjectif - 10).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo102
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr102
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 9)) {
            document.getElementById(nbObjectif - 9).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo103
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr103
                animExo()
            } 
        }
        if(document.getElementById(nbObjectif - 8)) {
            document.getElementById(nbObjectif - 8).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo104
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr104
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 7)) {
            document.getElementById(nbObjectif - 7).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo105
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr105
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 6)) {
            document.getElementById(nbObjectif - 6).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo106
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr106
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 5)) {
            document.getElementById(nbObjectif - 5).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo107
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr107
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 4)) {
            document.getElementById(nbObjectif - 4).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo108
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr108
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 3)) {
            document.getElementById(nbObjectif - 3).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo109
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr109
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 2)) {
            document.getElementById(nbObjectif - 2).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo110
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr110
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 1)) {
            document.getElementById(nbObjectif - 1).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo111
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr111
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                }
                endurance()
                animExo()
            }
        }  
        if(document.getElementById(nbObjectif)) {
            document.getElementById(nbObjectif).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo112
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr112
                animExo()
            }
        }  
    }
        
    if (nbPrgT == 3) {
        if(document.getElementById(nbObjectif - 83)) {
            document.getElementById(nbObjectif - 83).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 83).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo1
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr1
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 82)) {
            document.getElementById(nbObjectif - 82).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 82).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo2
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr2
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 81)) {
            document.getElementById(nbObjectif - 81).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 81).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo3
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr3
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 80)) {
            document.getElementById(nbObjectif - 80).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 80).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo4
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr4
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 79)) {
            document.getElementById(nbObjectif - 79).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 79).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo5
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr5
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 78)) {
            document.getElementById(nbObjectif - 78).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 78).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo6
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr6
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 77)) {
            document.getElementById(nbObjectif - 77).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 77).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo7
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr7
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 76)) {
            document.getElementById(nbObjectif - 76).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 76).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo8
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr8
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 75)) {
            document.getElementById(nbObjectif - 75).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 75).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo9
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr9
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 74)) {
            document.getElementById(nbObjectif - 74).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 74).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo10
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr10
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 73)) {
            document.getElementById(nbObjectif - 73).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 73).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo11
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr11
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 72)) {
            document.getElementById(nbObjectif - 72).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 72).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo12
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr12
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 1;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 71)) {
            document.getElementById(nbObjectif - 71).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 71).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo13
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr13
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 70)) {
            document.getElementById(nbObjectif - 70).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 70).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo14
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr14
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 69)) {
            document.getElementById(nbObjectif - 69).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 69).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo15
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr15
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 68)) {
            document.getElementById(nbObjectif - 68).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 68).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo16
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr16
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 6;
                        sessionStorage.rep4 = 0;
                        break;
                }   
                sprint()
                animExo()
            }    
        }
        if(document.getElementById(nbObjectif - 67)) {
            document.getElementById(nbObjectif - 67).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 67).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo17
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr17
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 1;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            } 
        }
        if(document.getElementById(nbObjectif - 66)) {
            document.getElementById(nbObjectif - 66).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 66).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo18
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr18
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 65)) {
            document.getElementById(nbObjectif - 65).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 65).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo19
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr19
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 64)) {
            document.getElementById(nbObjectif - 64).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 64).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo20
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr20
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 63)) {
            document.getElementById(nbObjectif - 63).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 63).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo21
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr21
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 62)) {
            document.getElementById(nbObjectif - 62).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 62).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo22
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr22
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 61)) {
            document.getElementById(nbObjectif - 61).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 61).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo23
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr23
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 60)) {
            document.getElementById(nbObjectif - 60).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 60).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo24
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr24
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 59)) {
            document.getElementById(nbObjectif - 59).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 59).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo25
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr25
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 10;
                        sessionStorage.rep2 = 9;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 58)) {
            document.getElementById(nbObjectif - 58).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 58).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo26
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr26
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 57)) {
            document.getElementById(nbObjectif - 57).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 57).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo27
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr27
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 56)) {
            document.getElementById(nbObjectif - 56).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 56).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo28
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr28
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 55)) {
            document.getElementById(nbObjectif - 55).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo29
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr29
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 54)) {
            document.getElementById(nbObjectif - 54).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo30
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr30
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 53)) {
            document.getElementById(nbObjectif - 53).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]  
                document.getElementById("exoInstruction").innerText = localStorage.exo31
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr31
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 12;
                        sessionStorage.rep2 = 11;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 52)) {
            document.getElementById(nbObjectif - 52).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo32
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr32
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 51)) {
            document.getElementById(nbObjectif - 51).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo33
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr33
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 7;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 50)) {
            document.getElementById(nbObjectif - 50).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo34
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr34
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 49)) {
            document.getElementById(nbObjectif - 49).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo35
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr35
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 9;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 8;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 48)) {
            document.getElementById(nbObjectif - 48).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo36
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr36
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 47)) {
            document.getElementById(nbObjectif - 47).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo37
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr37
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 46)) {
            document.getElementById(nbObjectif - 46).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo38
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr38
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 10;
                        sessionStorage.rep2 = 9;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 10;
                        sessionStorage.rep2 = 9;
                        sessionStorage.rep3 = 8;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 45)) {
            document.getElementById(nbObjectif - 45).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo39
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr39
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 44)) {
            document.getElementById(nbObjectif - 44).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo40
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr40
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 43)) {
            document.getElementById(nbObjectif - 43).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo41
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr41
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 11;
                        sessionStorage.rep2 = 10;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 11;
                        sessionStorage.rep2 = 10;
                        sessionStorage.rep3 = 9;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 42)) {
            document.getElementById(nbObjectif - 42).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo42
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr42
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 41)) {
            document.getElementById(nbObjectif - 41).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo43
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr43
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 40)) {
            document.getElementById(nbObjectif - 40).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo44
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr44
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 39)) {
            document.getElementById(nbObjectif - 39).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo45
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr45
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 1;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 38)) {
            document.getElementById(nbObjectif - 38).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo46
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr46
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 37)) {
            document.getElementById(nbObjectif - 37).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo47
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr47
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 1;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 36)) {
            document.getElementById(nbObjectif - 36).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo48
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr48
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 35)) {
            document.getElementById(nbObjectif - 35).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo49
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr49
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 34)) {
            document.getElementById(nbObjectif - 34).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo50
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr50
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 33)) {
            document.getElementById(nbObjectif - 33).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo51
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr51
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 32)) {
            document.getElementById(nbObjectif - 32).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo52
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr52
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;             
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 31)) {
            document.getElementById(nbObjectif - 31).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo53
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr53
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 30)) {
            document.getElementById(nbObjectif - 30).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo54
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr54
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.rep = 6;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 7;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 29)) {
            document.getElementById(nbObjectif - 29).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo55
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr55
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 28)) {
            document.getElementById(nbObjectif - 28).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo56
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr56
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.rep = 7;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 3;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 8;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 3;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 27)) {
            document.getElementById(nbObjectif - 27).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo57
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr57
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 26)) {
            document.getElementById(nbObjectif - 26).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo58
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr58
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                sprint()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 25)) {
            document.getElementById(nbObjectif - 25).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo59
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr59
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 4:
                        sessionStorage.rep = 7;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 24)) {
            document.getElementById(nbObjectif - 24).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo60
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr60
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 23)) {
            document.getElementById(nbObjectif - 23).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo61
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr61
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 22)) {
            document.getElementById(nbObjectif - 22).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo62
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr62
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 21)) {
            document.getElementById(nbObjectif - 21).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo63
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr63
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 20)) {
            document.getElementById(nbObjectif - 20).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo64
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr64
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 19)) {
            document.getElementById(nbObjectif - 19).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo65
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr65
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 18)) {
            document.getElementById(nbObjectif - 18).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo66
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr66
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.rep = 7;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 3;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                    case 3:
                        sessionStorage.rep = 7;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                         gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 9;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 17)) {
            document.getElementById(nbObjectif - 17).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo67
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr67
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 16)) {
            document.getElementById(nbObjectif - 16).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo68
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr68
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 15)) {
            document.getElementById(nbObjectif - 15).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo69
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr69
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 4:
                        sessionStorage.rep = 8;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 14)) {
            document.getElementById(nbObjectif - 14).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo70
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr70
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 13)) {
            document.getElementById(nbObjectif - 13).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo71
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr71
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                sprint()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 12)) {
            document.getElementById(nbObjectif - 12).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo72
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr72
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 11)) {
            document.getElementById(nbObjectif - 11).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo73
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr73
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 10)) {
            document.getElementById(nbObjectif - 10).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo74
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr74
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 9)) {
            document.getElementById(nbObjectif - 9).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo75
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr75
                animExo()
            } 
        }
        if(document.getElementById(nbObjectif - 8)) {
            document.getElementById(nbObjectif - 8).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo76
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr76
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 7)) {
            document.getElementById(nbObjectif - 7).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo77
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr77
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 6)) {
            document.getElementById(nbObjectif - 6).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo78
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr78
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 5)) {
            document.getElementById(nbObjectif - 5).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo79
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr79
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 4)) {
            document.getElementById(nbObjectif - 4).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo80
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr80
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 3)) {
            document.getElementById(nbObjectif - 3).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo81
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr81
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 2)) {
            document.getElementById(nbObjectif - 2).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo82
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr82
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 1)) {
            document.getElementById(nbObjectif - 1).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo83
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr83
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                }
                endurance()
                animExo()
            }
        }  
        if(document.getElementById(nbObjectif)) {
            document.getElementById(nbObjectif).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo84
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr84
                animExo()
            }
        }  
    }

    if (nbPrgT == 2) {
        if(document.getElementById(nbObjectif - 55)) {
            document.getElementById(nbObjectif - 55).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 55).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo1
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr1
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 54)) {
            document.getElementById(nbObjectif - 54).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 54).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo2
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr2
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 53)) {
            document.getElementById(nbObjectif - 53).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 53).innerText + " " + monthA[Number(sessionStorage.month)]  
                document.getElementById("exoInstruction").innerText = localStorage.exo3
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr3
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 52)) {
            document.getElementById(nbObjectif - 52).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 52).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo4
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr4
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 51)) {
            document.getElementById(nbObjectif - 51).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 51).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo5
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr5
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 50)) {
            document.getElementById(nbObjectif - 50).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 50).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo6
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr6
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 49)) {
            document.getElementById(nbObjectif - 49).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 49).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo7
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr7
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 48)) {
            document.getElementById(nbObjectif - 48).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 48).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo8
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr8
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 47)) {
            document.getElementById(nbObjectif - 47).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 47).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo9
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr9
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 46)) {
            document.getElementById(nbObjectif - 46).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 46).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo10
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr10
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 6;
                        sessionStorage.rep4 = 0;
                        break;
                }
                sprint()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 45)) {
            document.getElementById(nbObjectif - 45).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 45).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo11
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr11
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 44)) {
            document.getElementById(nbObjectif - 44).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 44).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo12
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr12
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 43)) {
            document.getElementById(nbObjectif - 43).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 43).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo13
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr13
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 1;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 42)) {
            document.getElementById(nbObjectif - 42).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 42).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo14
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr14
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 41)) {
            document.getElementById(nbObjectif - 41).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 41).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo15
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr15
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 40)) {
            document.getElementById(nbObjectif - 40).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 40).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo16
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr16
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 39)) {
            document.getElementById(nbObjectif - 39).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 39).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo17
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr17
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 38)) {
            document.getElementById(nbObjectif - 38).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 38).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo18
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr18
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 37)) {
            document.getElementById(nbObjectif - 37).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 37).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo19
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr19
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 36)) {
            document.getElementById(nbObjectif - 36).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 36).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo20
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr20
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 1;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 35)) {
            document.getElementById(nbObjectif - 35).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 35).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo21
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr21
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 34)) {
            document.getElementById(nbObjectif - 34).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 34).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo22
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr22
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 33)) {
            document.getElementById(nbObjectif - 33).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 33).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo23
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr23
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 32)) {
            document.getElementById(nbObjectif - 32).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 32).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo24
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr24
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 31)) {
            document.getElementById(nbObjectif - 31).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 31).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo25
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr25
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 11;
                        sessionStorage.rep2 = 9;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 30)) {
            document.getElementById(nbObjectif - 30).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 30).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo26
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr26
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 29)) {
            document.getElementById(nbObjectif - 29).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 29).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo27
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr27
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 7;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 9;
                        sessionStorage.rep2 = 8;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 3;
                        sessionStorage.rep1 = 8;
                        sessionStorage.rep2 = 7;
                        sessionStorage.rep3 = 7;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 28)) {
            document.getElementById(nbObjectif - 28).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 28).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo28
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr28
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 27)) {
            document.getElementById(nbObjectif - 27).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 27).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo29
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr29
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 26)) {
            document.getElementById(nbObjectif - 26).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 26).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo30
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr30
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 25)) {
            document.getElementById(nbObjectif - 25).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 25).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo31
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr31
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 24)) {
            document.getElementById(nbObjectif - 24).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 24).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo32
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr32
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.rep = 6;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 3;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 7;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 3;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 23)) {
            document.getElementById(nbObjectif - 23).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 23).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo33
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr33
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 22)) {
            document.getElementById(nbObjectif - 22).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 22).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo34
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr34
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 2;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                seuil()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 21)) {
            document.getElementById(nbObjectif - 21).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 21).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo35
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr35
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 20)) {
            document.getElementById(nbObjectif - 20).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 20).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo36
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr36
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 19)) {
            document.getElementById(nbObjectif - 19).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 19).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo37
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr37
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 18)) {
            document.getElementById(nbObjectif - 18).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 18).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo38
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr38
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 2;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.rep = 5;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 6;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 17)) {
            document.getElementById(nbObjectif - 17).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 17).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo39
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr39
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 16)) {
            document.getElementById(nbObjectif - 16).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 16).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo40
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr40
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 15)) {
            document.getElementById(nbObjectif - 15).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 15).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo41
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr41
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 2:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        seuil()
                        break;
                    case 3:
                        sessionStorage.rep = 7;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 3;
                        sessionStorage.lgrRecupGimenez = 1;
                        gimenez()
                        break;
                    case 4:
                        sessionStorage.rep = 7;     
                        sessionStorage.lgrPMAGimenez = 1;
                        sessionStorage.lgrI3Gimenez = 4;
                        sessionStorage.lgrRecupGimenez = 0;
                        gimenez()
                        break;
                }
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 14)) {
            document.getElementById(nbObjectif - 14).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 14).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo42
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr42
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 13)) {
            document.getElementById(nbObjectif - 13).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 13).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo43
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr43
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                sprint()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 12)) {
            document.getElementById(nbObjectif - 12).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 12).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo44
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr44
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 11)) {
            document.getElementById(nbObjectif - 11).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 11).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo45
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr45
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 10)) {
            document.getElementById(nbObjectif - 10).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 10).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo46
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr46
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 9)) {
            document.getElementById(nbObjectif - 9).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 9).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo47
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr47
                animExo()
            } 
        }
        if(document.getElementById(nbObjectif - 8)) {
            document.getElementById(nbObjectif - 8).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 8).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo48
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr48
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 4;
                        sessionStorage.rep2 = 4;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 6;
                        sessionStorage.rep2 = 6;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 7)) {
            document.getElementById(nbObjectif - 7).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 7).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo49
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr49
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 6)) {
            document.getElementById(nbObjectif - 6).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 6).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo50
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr50
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 1.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 2;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 2.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 3;
                        break;
                }
                endurance()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 5)) {
            document.getElementById(nbObjectif - 5).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 5).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo51
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr51
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 4)) {
            document.getElementById(nbObjectif - 4).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 4).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo52
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr52
                switch (nbLevel) {
                    case 1:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 2:
                        sessionStorage.serie = 1;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 0;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 3:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 3;
                        sessionStorage.rep2 = 3;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                    case 4:
                        sessionStorage.serie = 2;
                        sessionStorage.rep1 = 5;
                        sessionStorage.rep2 = 5;
                        sessionStorage.rep3 = 0;
                        sessionStorage.rep4 = 0;
                        break;
                }
                PMA()
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 3)) {
            document.getElementById(nbObjectif - 3).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 3).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo53
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr53
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 2)) {
            document.getElementById(nbObjectif - 2).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 2).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo54
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr54
                animExo()
            }
        }
        if(document.getElementById(nbObjectif - 1)) {
            document.getElementById(nbObjectif - 1).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo55
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr55
                switch (nbLevel) {
                    case 1:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                    case 2:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                    case 3:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                    case 4:
                        sessionStorage.tpsEndurance = 0.5;
                        break;
                }
                endurance()
                animExo()
            }
        }  
        if(document.getElementById(nbObjectif)) {
            document.getElementById(nbObjectif).onclick = function() {
                document.getElementById("exoT").innerText = document.getElementById(nbObjectif - 1).innerText + " " + monthA[Number(sessionStorage.month)]
                document.getElementById("exoInstruction").innerText = localStorage.exo56
                document.getElementById("exo").style.backgroundColor = localStorage.exoClr56
                animExo()
            }
        }  
    }
}
}