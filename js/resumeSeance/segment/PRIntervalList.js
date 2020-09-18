function PRIntervalList(intervalKOM, Interval) {
    var PR = document.createElement("img");
    PR.className = "PR";
    PR.src = "../img/pr.png";
    intervalKOM.appendChild(PR);
    PR.onclick = function () {
        var PRIntervalList = document.createElement("div");
        PRIntervalList.className = "PRIntervalList";
        document.getElementById("main2").appendChild(PRIntervalList);
         
        var filter = document.createElement("div");
        filter.className = "filter";
        document.getElementById("main2").appendChild(filter);
        filter.onclick = function () {
            filter.remove();
            PRIntervalList.remove();
        }

        var listClose = document.createElement("div");
        listClose.className = "listClose";
        listClose.innerText = "x";
        PRIntervalList.appendChild(listClose);
        listClose.onclick = function () {
            filter.remove();
            PRIntervalList.remove();
        }

        var listContenair = document.createElement("div");
        listContenair.className = "listContenair";
        PRIntervalList.appendChild(listContenair);


        var vitessePR = document.createElement("div");
        vitessePR.className = "vitessePR PRBox";
        listContenair.appendChild(vitessePR);

        var vitessePRTitle = document.createElement("div");
        vitessePRTitle.className = "vitessePRTitle PRTitle";
        vitessePRTitle.innerText = "vitesse";
        vitessePR.appendChild(vitessePRTitle);

        if (Interval.bestVitesse.pr == true) {
            var vitessePRMedaille = document.createElement("img");
            vitessePRMedaille.className = "PRMedaille";
            vitessePRMedaille.src = "../img/pr.png";
            vitessePR.appendChild(vitessePRMedaille);
        }
        else {
            var vitessePRMedaille = document.createElement("div");
            vitessePRMedaille.className = "PRMedaille";
            vitessePR.appendChild(vitessePRMedaille);
        }

        var vitessePRValue = document.createElement("div");
        vitessePRValue.className = "PRValue";
        vitessePRValue.innerText = Interval.bestVitesse.value + "km/h";
        vitessePR.appendChild(vitessePRValue);


        var border1 = document.createElement("div");
        border1.className = "border";
        listContenair.appendChild(border1);


        var puissancePR = document.createElement("div");
        puissancePR.className = "puissancePR PRBox";
        listContenair.appendChild(puissancePR);

        var puissancePRTitle = document.createElement("div");
        puissancePRTitle.className = "puissancePRTitle PRTitle";
        puissancePRTitle.innerText = "puissance";
        puissancePR.appendChild(puissancePRTitle);

        if (Interval.bestPuissance.pr == true) {
            var puissancePRMedaille = document.createElement("img");
            puissancePRMedaille.className = "PRMedaille";
            puissancePRMedaille.src = "../img/pr.png";
            puissancePR.appendChild(puissancePRMedaille);
        }
        else {
            var puissancePRMedaille = document.createElement("div");
            puissancePRMedaille.className = "PRMedaille";
            puissancePR.appendChild(puissancePRMedaille);
        }

        var puissancePRValue = document.createElement("div");
        puissancePRValue.className = "PRValue";
        puissancePRValue.innerText = Interval.bestPuissance.value + "w";
        puissancePR.appendChild(puissancePRValue);


        var FCPR = document.createElement("div");
        FCPR.className = "FCPR PRBox";
        listContenair.appendChild(FCPR);

        var FCPRTitle = document.createElement("div");
        FCPRTitle.className = "FCPRTitle PRTitle";
        FCPRTitle.innerText = "FC"
        FCPR.appendChild(FCPRTitle);

        if (Interval.bestBpm.pr == true) {
            var FCPRMedaille = document.createElement("img");
            FCPRMedaille.className = "PRMedaille";
            FCPRMedaille.src = "../img/pr.png";
            FCPR.appendChild(FCPRMedaille);
        }
        else {
            var FCPRMedaille = document.createElement("div");
            FCPRMedaille.className = "PRMedaille";
            FCPR.appendChild(FCPRMedaille);
        }

        var FCPRValue = document.createElement("div");
        FCPRValue.className = "PRValue";
        FCPRValue.innerText = Interval.bestBpm.value + "bpm";
        FCPR.appendChild(FCPRValue);


        var border2 = document.createElement("div");
        border2.className = "border";
        listContenair.appendChild(border2);


        var cadencePR = document.createElement("div");
        cadencePR.className = "cadencePR PRBox";
        listContenair.appendChild(cadencePR);

        var cadencePRTitle = document.createElement("div");
        cadencePRTitle.className = "cadencePRTitle PRTitle";
        cadencePRTitle.innerText = "cadence"
        cadencePR.appendChild(cadencePRTitle);

        if (Interval.bestCadence.pr == true) {
            var cadencePRMedaille = document.createElement("img");
            cadencePRMedaille.className = "PRMedaille";
            cadencePRMedaille.src = "../img/pr.png";
            cadencePR.appendChild(cadencePRMedaille);
        }
        else {
            var cadencePRMedaille = document.createElement("div");
            cadencePRMedaille.className = "PRMedaille";
            cadencePR.appendChild(cadencePRMedaille);
        }

        var cadencePRValue = document.createElement("div");
        cadencePRValue.className = "PRValue";
        cadencePRValue.innerText = Interval.bestCadence.value + "rpm";
        cadencePR.appendChild(cadencePRValue);
    }
}