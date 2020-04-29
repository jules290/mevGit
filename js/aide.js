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
})

$("#search").focusout(function() {
    $("#search").css("background-color", "rgba(255, 255, 255, 0.808)");
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
    }
})

let name = new Array(); 
    name[0] = "PMA";
    name[1] = "seuil";
    name[2] = "FTP";


let link = new Array(); 
    link[0] = "./PMA.html";
    link[1] = "./seuil.html";
    link[2] = "./ftp.html";

let titre = new Array(); 
    titre[0] = "puissance maximale aerobie (PMA)";
    titre[1] = "seuil";
    titre[2] = "Functional Threshold Power (FTP)";

let description = new Array(); 
    description[0] = "- qu'est-ce que la puissance maximale aeorobie (PMA) ? <br>- comment calculer sa PMA ? <br>- comment travailler sa PMA ? <br>";
    description[1] = "- qu'est-ce que le seuil ? <br>- comment calculer son seuil ? <br>- comment travailler son seuil ? <br>"; 
    description[2] = "- qu'est-ce que la FTP ? <br>- comment calculer sa FTP ? <br>- comment travailler sa FTP ? <br>"

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

function searchSupport() {
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
    for (y = 0; y < requestkeyWordsVIP.length; y++) {
        for (i = 0; i < documentation.length; i++) {
            for (l = 0; l < keyWords[i].length; l++) {
                requête = requestkeyWords[y].toLowerCase();
                motClé = keyWords[i][l].toLowerCase();
                if(requestkeyWordsVIP[y].search(motClé) > -1) {
                    if (documentation[i].view == "non") {
                        view();
                        documentation[i].view = "oui";
                    }
                }
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
                        view();
                        documentation[i].view = "oui";
                    }
                }
            }
            
        }
    }

    function view() {
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

let suggestionLetter = new Array(); 
    suggestionLetter[0] = suggestion[0].split("");
    suggestionLetter[1] = suggestion[1].split("");
    suggestionLetter[2] = suggestion[2].split("");
    suggestionLetter[3] = suggestion[3].split("");
    suggestionLetter[4] = suggestion[4].split("");
    suggestionLetter[5] = suggestion[5].split("");
    suggestionLetter[6] = suggestion[6].split("");
    suggestionLetter[7] = suggestion[7].split("");
    suggestionLetter[8] = suggestion[8].split("");
    suggestionLetter[9] = suggestion[9].split("");
    suggestionLetter[10] = suggestion[10].split("");
    suggestionLetter[11] = suggestion[11].split("");

let requêteSplit = document.getElementById('search').value.toLowerCase().split("");

let suggestionBox = document.getElementById("suggestionBox")

function searchSuggestion() {
    setTimeout(function(){
        sessionStorage.nbSuggestion = 0;
        $("#suggestionBox").empty()
        for (let i = 0; i < suggestion.length; i++) {
            requêteSplit = document.getElementById('search').value.toLowerCase().split("");
            if (requêteSplit[0] == suggestionLetter[i][0]){
                if (sessionStorage.nbSuggestion < 5) {sessionStorage.nbSuggestion ++}
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

            setTimeout(() => {
                setInterval(() => {
                    if (suggestionBox.style.height == "0px") {
                        $("#suggestionBox").empty()
                    }
                }, 1);
            }, 1);
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

            setTimeout(() => {
                setInterval(() => {
                    if (suggestionBox.style.height == "0px") {
                        $("#suggestionBox").empty()
                    }
                }, 1);
            }, 1);
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

            setTimeout(() => {
                setInterval(() => {
                    if (suggestionBox.style.height == "0px") {
                        $("#suggestionBox").empty()
                    }
                }, 1);
            }, 1);
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

            setTimeout(() => {
                setInterval(() => {
                    if (suggestionBox.style.height == "0px") {
                        $("#suggestionBox").empty()
                    }
                }, 1);
            }, 1);
            break;
    } 
}

$("#search").focusout(function() {
    suggestionBox.style.backgroundColor = "rgba(255, 255, 255, 0.808)"
})