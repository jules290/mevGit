$(document).ready(function () {
    index = getAfterUrl();
    postViewSeance(index);
})

function postViewSeance(index) {
    seanceHeaderT.innerText = seances[index].titre;

    postMetaSeance(index);
    postSeanceListEtape(index);
    postSeanceGraph(index);
}

$("#suivant").click(function () {
    if (this.id == "suivant") {
        index = getAfterUrl();
        level = getSeanceLevel(seances[index].type);

        if (seances[index].titre == "FRACTIONNÉ PMA 30SEC/30SEC") {
            seanceSeance = PMA30_30(level).seance;
            typeSeance = "PMA";
            sousTypeSeance = "PMA30_30";
        }
        else if (seances[index].titre == "FRACTIONNÉ PMA 1MIN/1MIN") {
            seanceSeance = PMA1_1(level).seance;
            typeSeance = "PMA";
            sousTypeSeance = "PMA1_1";
        }
        else if (seances[index].titre == "FRACTIONNÉ PMA 3MIN/3MIN") {
            seanceSeance = PMA3_3(level).seance;
            typeSeance = "PMA";
            sousTypeSeance = "PMA3_3";
        }
        else if (seances[index].titre == "FRACTIONNÉ SEUIL 5MIN/5MIN") {
            seanceSeance = seuil5_5(level).seance;
            typeSeance = "Seuil";
        }
        else if (seances[index].titre == "GIMENEZ") {
            seanceSeance = gimenez(level).seance;
            typeSeance = "Gimenez";
        }
        else if (seances[index].titre == "SWEET SPOT") {
            seanceSeance = sweetspot(level).seance;
            typeSeance = "Sweet Spot";
        }
        else if (seances[index].titre == "ENDURANCE HAUTE") {
            seanceSeance = enduranceHaute(level).seance;
            typeSeance = "Endurance";
        }
        else if (seances[index].titre == "ENDURANCE FONDAMENTALE") {
            seanceSeance = enduranceFondamentale(level).seance;
            typeSeance = "Endurance";
        }
        else if (seances[index].titre == "DÉBLOQUAGE") {
            seanceSeance = debloquage().seance;
            typeSeance = "Débloquage";
        }
        else if (seances[index].titre == "TEST FC MAX") {
            seanceSeance = testFcMax().seance;
            typeSeance = "Test FC MAX";
        }
        else if (seances[index].titre == "TEST PMA") {
            seanceSeance = testPMA().seance;
            typeSeance = "Test PMA";
        }

        seance = {
            titre: seances[index].titre,
            seance: seanceSeance,
            type: seances[index].type,
            typeSeance: typeSeance,
            meta: level,
            zone: seances[index].zone
        }

        if (sousTypeSeance) seance.sousTypeSeance = sousTypeSeance;
        let d = new Date();

        document.getElementById("seanceMeta").remove();
        document.getElementById("seanceContent").remove();
    
        this.id = "save";
        this.innerText = "SAUVEGARDER"
        this.parentNode.style.height = "70%";
    
        date = document.createElement("section");
        date.id = "date";
        date.innerHTML = [
            '<h1 id="dateT">Choisissez une date</h1>'+
            '<div id="dateInputBox">'+
                '<select class="select" id="inputAnnée">'+
                    '<option value="" disabled selected>année</option>'+
                    '<option value="2020" class="optionAnnee">2020</option>'+
                    '<option value="2021" class="optionAnnee">2021</option>'+
                    '<option value="2022" class="optionAnnee">2022</option>'+
                '</select>'+
    
                '<select class="select" id="inputMois" disabled>'+
                    '<option value="" disabled selected>mois</option>'+
                    '<option value="01" class="optionMois">janvier(1)</option>'+
                    '<option value="02" class="optionMois">fevrier(2)</option>'+
                    '<option value="03" class="optionMois">mars(3)</option>'+
                    '<option value="04" class="optionMois">avril(4)</option>'+
                    '<option value="05" class="optionMois">mai(5)</option>'+
                    '<option value="06" class="optionMois">juin(6)</option>'+
                    '<option value="07" class="optionMois">juillet(7)</option>'+
                    '<option value="08" class="optionMois">aout(8)</option>'+
                    '<option value="09" class="optionMois">septembre(9)</option>'+
                    '<option value="10" class="optionMois">octobre(10)</option>'+
                    '<option value="11" class="optionMois">novembre(11)</option>'+
                    '<option value="12" class="optionMois">décembre(12)</option>'+
                '</select>'+
    
                '<select class="select" id="inputJour" disabled>'+
                    '<option value="" disabled selected>jour</option>'+
                    '<option value="01" class="optionJour">1</option>'+
                    '<option value="02" class="optionJour">2</option>'+
                    '<option value="03" class="optionJour">3</option>'+
                    '<option value="04" class="optionJour">4</option>'+
                    '<option value="05" class="optionJour">5</option>'+
                    '<option value="06" class="optionJour">6</option>'+
                    '<option value="07" class="optionJour">7</option>'+
                    '<option value="08" class="optionJour">8</option>'+
                    '<option value="09" class="optionJour">9</option>'+
                    '<option value="10" class="optionJour">10</option>'+
                    '<option value="11" class="optionJour">11</option>'+
                    '<option value="12" class="optionJour">12</option>'+
                    '<option value="13" class="optionJour">13</option>'+
                    '<option value="14" class="optionJour">14</option>'+
                    '<option value="15" class="optionJour">15</option>'+
                    '<option value="16" class="optionJour">16</option>'+
                    '<option value="17" class="optionJour">17</option>'+
                    '<option value="18" class="optionJour">18</option>'+
                    '<option value="19" class="optionJour">19</option>'+
                    '<option value="20" class="optionJour">20</option>'+
                    '<option value="21" class="optionJour">21</option>'+
                    '<option value="22" class="optionJour">22</option>'+
                    '<option value="23" class="optionJour">23</option>'+
                    '<option value="24" class="optionJour">24</option>'+
                    '<option value="25" class="optionJour">25</option>'+
                    '<option value="26" class="optionJour">26</option>'+
                    '<option value="27" class="optionJour">27</option>'+
                    '<option value="28" class="optionJour">28</option>'+
                    '<option value="29" class="optionJour">29</option>'+
                    '<option value="30" class="optionJour">30</option>'+
                    '<option value="31" class="optionJour">31</option>'+
                '</select>'+
            '</div>'
        ]
        this.parentNode.appendChild(date);
    
        frontInputDate();
    
        function frontInputDate() {
            aujourdHui = getAujourdHui();
            aujourdHuiNb = getDayNB365(aujourdHui.day, aujourdHui.month, aujourdHui.year);
        
            optionsAnnee = document.getElementsByClassName("optionAnnee");
            for (let i = 0; i < optionsAnnee.length; i++) {
                if (i + 2020 < aujourdHui.year) {
                    optionsAnnee[i].style.display = "none";
                }
            }
            
            $("#inputAnnée").change(function () {
                document.getElementById("inputMois").disabled = false;
                valueAnnée = document.getElementById("inputAnnée").value;
                valueMois = document.getElementById("inputMois").value;
        
                if (aujourdHui.year == Number(valueAnnée)) {
                    if (valueMois < aujourdHui.month && valueMois != "") {
                        for (let i = 0; i < 12; i++) {
                            document.getElementsByClassName("optionMois")[i].selected = false;
                        }
                        document.getElementsByClassName("optionMois")[aujourdHui.month - 1].selected = true;
                    }
        
                    for (let i = 0; i < 12; i++) {
                        if (i < aujourdHui.month - 1) {
                            document.getElementsByClassName("optionMois")[i].style.display = "none";
                        }
                    }
                }
                else {
                    for (let i = 0; i < 12; i++) {
                        document.getElementsByClassName("optionMois")[i].style.display = "block";
                    }
                }
            })
        
            $("#inputMois").change(function () {
                document.getElementById("inputJour").disabled = false;
                valueMois = document.getElementById("inputMois").value;
                optionsJour = document.getElementsByClassName("optionJour");
        
                for (let i = 0; i < optionsJour.length; i++) {
                    optionsJour[i].style.display = "block";
                }
        
                if (valueMois == aujourdHui.month) {
                    for (let i = 0; i < optionsJour.length; i++) {
                        if (i < aujourdHui.day - 1) {
                            optionsJour[i].style.display = "none";
                        }
                    }
                }
        
                switch (Number(valueMois)) {
                    case 1:
                        document.getElementsByClassName("optionJour")[30].style.display = "block";
                        break;
                    case 2:
                        if (valueAnnée % 4 == 0) {
                            document.getElementsByClassName("optionJour")[30].style.display = "none";
                            document.getElementsByClassName("optionJour")[29].style.display = "none";
                        }
                        else {
                            document.getElementsByClassName("optionJour")[30].style.display = "none";
                            document.getElementsByClassName("optionJour")[29].style.display = "none";
                            document.getElementsByClassName("optionJour")[28].style.display = "none";
                        }
                        break;
                    case 3:
                        document.getElementsByClassName("optionJour")[30].style.display = "block";
                        break;
                    case 4:
                        document.getElementsByClassName("optionJour")[30].style.display = "none";
                        break;
                    case 5:
                        document.getElementsByClassName("optionJour")[30].style.display = "block";
                        break;
                    case 6:
                        document.getElementsByClassName("optionJour")[30].style.display = "none";
                        break;
                    case 7:
                        document.getElementsByClassName("optionJour")[30].style.display = "block";
                        break;
                    case 8:
                        document.getElementsByClassName("optionJour")[30].style.display = "block";
                        break;
                    case 9:
                        document.getElementsByClassName("optionJour")[30].style.display = "none";
                        break;
                    case 10:
                        document.getElementsByClassName("optionJour")[30].style.display = "block";
                        break;
                    case 11:
                        document.getElementsByClassName("optionJour")[30].style.display = "none";
                        break;
                    case 12:
                        document.getElementsByClassName("optionJour")[30].style.display = "block";
                        break;
                }
                document.getElementById("inputJour").disabled = false;
            })
        }
    }
    else {
        date = document.getElementById("inputJour").value + "/" + document.getElementById("inputMois").value +
        "/" + document.getElementById("inputAnnée").value

        if (date.length == 10) {
            if (!localStorage.seance) localStorage.seance = JSON.stringify([]);
            Seances = JSON.parse(localStorage.seance);
            
            seance.date = date;
            Seances.push(seance);
            
            localStorage.seance = JSON.stringify(Seances);
            window.history.back();
        }
        else {
            alert("veuillez donner une date correcte")
        }
    }
})