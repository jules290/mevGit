$(document).ready(function() {
    $("#mySidenav").animate({marginLeft: '-131px'}, 0);
})

$("#open").click(function() {
    if (document.getElementById("open").style.marginLeft == "130px") {
        $("#mySidenav").animate({marginLeft: '-131px'}, 200);
        $("#open").animate({marginLeft: '0px'}, 0);
    }
    else{
        $("#mySidenav").animate({marginLeft: '0px'}, 200);
        $("#open").animate({marginLeft: '130px'}, 100);
    }
})

$("#clearSearch #search").hover(function(){
    $("#search").css("background-color", "white");
    }, function(){
    $("#search").css("background-color", "rgba(255, 255, 255, 0.808)");
  })

$("#clearSearch").click(function(){
    window.location.reload();
})

$("#search").focusin(function() {
    $("#search").css("background-color", "white");
    suggestionBox.style.backgroundColor = "white"
})

$("#search").focusout(function() {
    $("#search").css("background-color", "rgba(255, 255, 255, 0.808)");
    suggestionBox.style.backgroundColor = "rgba(255, 255, 255, 0.808)"
})

$("#paysage").click(function () {
    $("#suggestionBox").hide()
})

$("#article").click(function () {
    $("#suggestionBox").hide()
})

$("#header").click(function () {
    $("#suggestionBox").hide()
})

$("#search").focusin(function() {
    $("#search").keypress(function(){
        searchSuggestion() 
    })
})

$("#search").keypress(function(){
    if (event.keyCode == 13) {
        request = document.getElementById('search').value;
        searchSupport()
        $("#suggestionBox").hide()
    }
})

let name = new Array(); 
    name[0] = "PMA";
    name[1] = "seuil";
    name[2] = "FTP";
    name[3] = "VO2max";


let link = new Array(); 
    link[0] = "./PMA.html";
    link[1] = "./seuil.html";
    link[2] = "./ftp.html";
    link[3] = "./VO2max.html";

let titre = new Array(); 
    titre[0] = "puissance maximale aerobie (PMA)";
    titre[1] = "seuil";
    titre[2] = "Functional Threshold Power (FTP)";
    titre[3] = "VO2max";

let description = new Array(); 
    description[0] = "- qu'est-ce que la puissance maximale aeorobie (PMA) ? <br>- comment calculer sa PMA ? <br>- comment travailler sa PMA ?";
    description[1] = "- qu'est-ce que le seuil ? <br>- comment calculer son seuil ? <br>- comment travailler son seuil ?"; 
    description[2] = "- qu'est-ce que la FTP ? <br>- comment calculer sa FTP ? <br>- comment travailler sa FTP ?";
    description[3] = "- qu'est-ce que la VO2max ? <br>- comment calculer sa VO2max ? <br>- comment travailler sa VO2max ?";
   

let documentation = new Array(); 
    documentation[0] = {
        name: name[0],
        link: link[0],
        titre: titre[0],
        description: description[0],
        keyWords: name[0] + " " + description[0],
        view: "non",
    }

    documentation[1] = {
        name: name[1],
        link: link[1],
        titre: titre[1],
        description: description[1], 
        keyWords: name[1] + " " + description[1],
        view: "non",
    }

    documentation[2] = {
        name: name[2],
        link: link[2],
        titre: titre[2],
        description: description[2], 
        keyWords: name[2] + " " + description[2],
        view: "non",
    }
    
    documentation[3] = {
        name: name[3],
        link: link[3],
        titre: titre[3],
        description: description[3], 
        keyWords: name[3] + " " + description[3],
        view: "non",
    }

function searchSupport() {
    for (let i = 0; i < documentation.length; i++) {
        documentation[i].view = "non"
    }
    window.location.href = "#search";
    let keyWords = new Array();
    for (y = 0; y < documentation.length; y++) {
        keyWords[y] = documentation[y].keyWords.split(" ");
        for (i = 0; i < keyWords[y].length; i++) {
            if (
                keyWords[y][i] == "-" ||
                keyWords[y][i] == "<br>" ||
                keyWords[y][i] == "<br>-" ||
                keyWords[y][i] == "?"
                ) {
                    if (y == 0) {
                        keyWords[y][i] = "PMA"
                    }
                    else if (y == 1) {
                        keyWords[y][i] = "seuil"
                    }
                    else if (y == 2) {
                        keyWords[y][i] = "FTP"
                    }
                    else if (y == 3) {
                        keyWords[y][i] = "VO2max"
                    }
            }
        }
    }
        
    let requestkeyWords = request.split(" ");
    let nbMotsRequest = requestkeyWords.length;
    for (i = 0; i < nbMotsRequest; i++) {
        for (y = 0; y < nbMotsRequest; y++) {
            if (i == y) {y++;}
            if (requestkeyWords[i] == requestkeyWords[y]) {
                requestkeyWords.splice(i, 1);
                nbMotsRequest = requestkeyWords.length;
            }
        }
    }

    let requestkeyWordsVIP = new Array();
    let place = 0;
    for (i = 0; i < nbMotsRequest; i++) {
        for (y = 0; y < documentation.length; y++) {
            if (documentation[y].name.toLowerCase() == requestkeyWords[i].toLowerCase()) {
                requestkeyWordsVIP[place] = requestkeyWords[i].toLowerCase();
                place ++;
            }
        }
    }

    let requête;
    let motClé;
    $("#article").empty()
    sessionStorage.nbView = 0;
    for (y = 0; y < requestkeyWordsVIP.length; y++) {
        for (i = 0; i < documentation.length; i++) {
            for (l = 0; l < keyWords[i].length; l++) {
                requête = requestkeyWords[y].toLowerCase();
                motClé = keyWords[i][l].toLowerCase();
                if(requestkeyWordsVIP[y].search(motClé) > -1) {
                    if (documentation[i].view == "non") {
                        sessionStorage.i = i
                        view();
                        documentation[i].view = "oui";
                        sessionStorage.nbView ++;
                    }
                }
            }
            
        }
    }

    if (sessionStorage.nbView == 0) {
        for (y = 0; y < nbMotsRequest; y++) {
            for (i = 0; i < documentation.length; i++) {
                for (l = 0; l < keyWords[i].length; l++) {
                    requête = requestkeyWords[y].toLowerCase();
                    requête = requête.split("")
                    motClé = keyWords[i][l].toLowerCase();
                    motClé = documentation[i].name.toLowerCase().split("")
                    for (k = 0; k < requête.length; k++) {
                        for (p = 0; p < motClé.length; p++) {
                            if(requête[k] == motClé[p]) {
                                if (requête.length = 1) {
                                    sessionStorage.requête = documentation[i].name;
                                }
                                if (k < requête.length - 1 && p < motClé.length - 1) {
                                    k++;
                                    p++;
                                    if(requête[k] == motClé[p]) {
                                        sessionStorage.requête = documentation[i].name;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < documentation.length; i++) {
        if (sessionStorage.requête.toLowerCase() == documentation[i].name.toLowerCase()) {
            console.log(sessionStorage.requête)
            if (documentation[i].view == "non") {
                sessionStorage.i = i
                view();
                documentation[i].view = "oui";
            }
        }
    }

    for (y = 0; y < nbMotsRequest; y++) {
        for (i = 0; i < documentation.length; i++) {
            for (l = 0; l < keyWords[i].length; l++) {
                requête = requestkeyWords[y].toLowerCase();
                motClé = keyWords[i][l].toLowerCase();
                if(requête.search(motClé) > -1) {
                    if (documentation[i].view == "non") {
                        sessionStorage.i = i
                        view();
                        documentation[i].view = "oui";
                        sessionStorage.nbView ++;
                    }
                }
            }
        }
    }

    function view() {
        i = sessionStorage.i;
        var div = document.createElement("div");
        div.className = "documentationCase";
            
        var a = document.createElement("a");
        a.className = "documentationCaseA";
        a.href = documentation[i].link;
        a.innerHTML = documentation[i].titre;
        div.appendChild(a);
    
        var p = document.createElement("p");
        p.className = "documentationCaseDescription";
        p.innerHTML = documentation[i].description;
        div.appendChild(p);
            
        document.getElementById("article").appendChild(div);
    }
}

let suggestion = new Array(); 
    suggestion[0] = "pma";
    suggestion[1] = "seuil";
    suggestion[2] = "ftp";
    suggestion[3] = "qu'est-ce que la puissance maximale aeorobie ?";
    suggestion[4] = "qu'est-ce que le seuil ?";
    suggestion[5] = "qu'est-ce que la FTP ?";
    suggestion[6] = "comment calculer sa PMA ?";
    suggestion[7] = "comment calculer son seuil ?";
    suggestion[8] = "comment calculer sa ftp ?";
    suggestion[9] = "comment travailler sa PMA ?";
    suggestion[10] = "comment travailler son seuil ?";
    suggestion[11] = "comment travailler sa FTP ?";
    suggestion[12] = "VO2max";
    suggestion[13] = "qu'est-ce que la VO2max ?";
    suggestion[14] = "comment calculer sa VO2max ?";
    suggestion[15] = "comment travailler sa VO2max ?";

let suggestionLetter = new Array(); 
    suggestionLetter[0] = suggestion[0].toLowerCase().split("");
    suggestionLetter[1] = suggestion[1].toLowerCase().split("");
    suggestionLetter[2] = suggestion[2].toLowerCase().split("");
    suggestionLetter[3] = suggestion[3].toLowerCase().split("");
    suggestionLetter[4] = suggestion[4].toLowerCase().split("");
    suggestionLetter[5] = suggestion[5].toLowerCase().split("");
    suggestionLetter[6] = suggestion[6].toLowerCase().split("");
    suggestionLetter[7] = suggestion[7].toLowerCase().split("");
    suggestionLetter[8] = suggestion[8].toLowerCase().split("");
    suggestionLetter[9] = suggestion[9].toLowerCase().split("");
    suggestionLetter[10] = suggestion[10].toLowerCase().split("");
    suggestionLetter[11] = suggestion[11].toLowerCase().split("");
    suggestionLetter[12] = suggestion[12].toLowerCase().split("");
    suggestionLetter[13] = suggestion[13].toLowerCase().split("");
    suggestionLetter[14] = suggestion[14].toLowerCase().split("");
    suggestionLetter[15] = suggestion[15].toLowerCase().split("");

let requêteSplit = document.getElementById('search').value.toLowerCase().split("");

let suggestionBox = document.getElementById("suggestionBox")

function searchSuggestion() {
    setTimeout(function(){
        sessionStorage.nbSuggestion = 0;
        $("#suggestionBox").empty()
        for (let i = 0; i < suggestion.length; i++) {
            requêteSplit = document.getElementById('search').value.toLowerCase().split("");
            if (requêteSplit[0] == suggestionLetter[i][0]){
                if (sessionStorage.nbSuggestion < 7) {sessionStorage.nbSuggestion ++}
                sessionStorage.i = i;
                popSuggestion()
            }
        } 
    }, 1);
    setInterval(function() {
        requêteSplit = document.getElementById('search').value.toLowerCase().split("");
        if (requêteSplit.length == 0) {
            suggestionBox.style.height = "0px"
        }
    }, 1);
}

function popSuggestion() {
    let nbSuggestion = Number(sessionStorage.nbSuggestion);
    let i = sessionStorage.i;
    switch (nbSuggestion) {
        case 1:
            suggestionBox.style.height = suggestionBox.style.height = "35px"
            var div = document.createElement("div");
            div.className = "suggestionCase";
            document.getElementById("suggestionBox").appendChild(div);

            var a = document.createElement("a");
            a.className = "suggestionCaseA";
            a.innerText = suggestion[i]
            $(a).click(function () {
                document.getElementById('search').value = suggestion[i];
                request = suggestion[i];
                searchSupport()
            })
            div.appendChild(a);

            $(a).click(function () {
                $("#suggestionBox").empty()
                suggestionBox.style.height = "0px"
            })
            break;
        case 2:
            suggestionBox.style.height = suggestionBox.style.height = "70px"
            var div = document.createElement("div");
            div.className = "suggestionCase";
            document.getElementById("suggestionBox").appendChild(div);

            var a = document.createElement("a");
            a.className = "suggestionCaseA";
            a.innerText = suggestion[i]
            $(a).click(function () {
                document.getElementById('search').value = suggestion[i];
                request = suggestion[i];
                searchSupport()
            })
            div.appendChild(a);

            $(a).click(function () {
                $("#suggestionBox").empty()
                suggestionBox.style.height = "0px"
            })
            break;
        case 3:
            suggestionBox.style.height = suggestionBox.style.height = "105px"
            var div = document.createElement("div");
            div.className = "suggestionCase";
            document.getElementById("suggestionBox").appendChild(div);

            var a = document.createElement("a");
            a.className = "suggestionCaseA";
            a.innerText = suggestion[i]
            $(a).click(function () {
                document.getElementById('search').value = suggestion[i];
                request = suggestion[i];
                searchSupport()
            })
            div.appendChild(a);

            $(a).click(function () {
                $("#suggestionBox").empty()
                suggestionBox.style.height = "0px"
            })
            break;
        case 4:
            suggestionBox.style.height = suggestionBox.style.height = "140px"
            var div = document.createElement("div");
            div.className = "suggestionCase";
            document.getElementById("suggestionBox").appendChild(div);

            var a = document.createElement("a");
            a.className = "suggestionCaseA";
            a.innerText = suggestion[i]
            $(a).click(function () {
                document.getElementById('search').value = suggestion[i];
                request = suggestion[i];
                searchSupport()
            })
            div.appendChild(a);

            $(a).click(function () {
                $("#suggestionBox").empty()
                suggestionBox.style.height = "0px"
            })
            break;
        case 5:
            suggestionBox.style.height = suggestionBox.style.height = "175px"
            var div = document.createElement("div");
            div.className = "suggestionCase";
            document.getElementById("suggestionBox").appendChild(div);

            var a = document.createElement("a");
            a.className = "suggestionCaseA";
            a.innerText = suggestion[i]
            $(a).click(function () {
                document.getElementById('search').value = suggestion[i];
                request = suggestion[i];
                searchSupport()
            })
            div.appendChild(a);

            $(a).click(function () {
                $("#suggestionBox").empty()
                suggestionBox.style.height = "0px"
            })
            break;
        case 6:
            suggestionBox.style.height = suggestionBox.style.height = "210px"
            var div = document.createElement("div");
            div.className = "suggestionCase";
            document.getElementById("suggestionBox").appendChild(div);

            var a = document.createElement("a");
            a.className = "suggestionCaseA";
            a.innerText = suggestion[i]
            $(a).click(function () {
                document.getElementById('search').value = suggestion[i];
                request = suggestion[i];
                searchSupport()
            })
            div.appendChild(a);

            $(a).click(function () {
                $("#suggestionBox").empty()
                suggestionBox.style.height = "0px"
            })
            break;
    } 
    setTimeout(() => {
        setInterval(() => {
            if (suggestionBox.style.height == "0px") {
                $("#suggestionBox").empty()
            }
        }, 1);
    }, 1);
}