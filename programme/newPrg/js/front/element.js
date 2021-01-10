const mainEquipement = [
    '<section id="equipement" class="page">'+
        '<div class="pageHeader">'+
            '<p class="pageInstruction">équipement</p>'+
            '<p class="pageInstructionP">quels accessoires posséder-vous ?</p>'+
        '</div>'+

        '<div class="pageInput">'+
            '<div class="pageInputCheck">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox0" id="pageInputCheckBoxFC">'+
                '</div>'+
                '<p class="pageInputCheckT">Cardio Fréquencemètre</p>'+
            '</div>'+

            '<div class="pageInputCheck">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox0" id="pageInputCheckBoxHT">'+
                '</div>'+
                '<p class="pageInputCheckT">Home Trainer</p>'+
            '</div>'+

            '<div class="pageInputCheck">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox0" id="pageInputCheckBoxW">'+
                '</div>'+
                '<p class="pageInputCheckT">Capteur De Puissance</p>'+
            '</div>'+
        '</div>'+

        '<div class="pageSubmit">'+
            '<input type="submit" value="Confirmer" class="pageSubmitInput" onclick="SwitchType(1)">'+
        '</div>'+
    '</section>'
];

const mainEntrainementActuel = [
    '<section id="entrainementActuel" class="page">'+
        '<div class="pageHeader">'+
            '<p class="pageInstruction">entrainement actuel</p>'+
            "<p class='pageInstructionP'>combien d'heures vous vous entrainez ? (en période de forme)</p>"+
        '</div>'+

        '<div class="pageInput">'+
            '<div class="selectDateBox">'+
                '<select class="select" id="entActSem">'+
                    '<option value="" disabled selected>heures</option>'+
                    '<option value="0" class="optionTimeSemaine">0h</option>'+
                    '<option value="1" class="optionTimeSemaine">1h</option>'+
                    '<option value="2" class="optionTimeSemaine">2h</option>'+
                    '<option value="3" class="optionTimeSemaine">3h</option>'+
                    '<option value="4" class="optionTimeSemaine">4h</option>'+
                    '<option value="5" class="optionTimeSemaine">5h</option>'+
                    '<option value="6" class="optionTimeSemaine">6h</option>'+
                    '<option value="7" class="optionTimeSemaine">7h</option>'+
                    '<option value="8" class="optionTimeSemaine">8h</option>'+
                    '<option value="9" class="optionTimeSemaine">9h</option>'+
                    '<option value="10" class="optionTimeSemaine">10h</option>'+
                    '<option value="11" class="optionTimeSemaine">11h</option>'+
                    '<option value="12" class="optionTimeSemaine">12h</option>'+
                    '<option value="13" class="optionTimeSemaine">13h</option>'+
                    '<option value="14" class="optionTimeSemaine">14h</option>'+
                    '<option value="15" class="optionTimeSemaine">15h</option>'+
                    '<option value="16" class="optionTimeSemaine">16h</option>'+
                    '<option value="17" class="optionTimeSemaine">17h</option>'+
                    '<option value="18" class="optionTimeSemaine">18h</option>'+
                    '<option value="19" class="optionTimeSemaine">19h</option>'+
                    '<option value="20" class="optionTimeSemaine">20h</option>'+
                    '<option value="21" class="optionTimeSemaine">21h</option>'+
                    '<option value="22" class="optionTimeSemaine">22h</option>'+
                    '<option value="23" class="optionTimeSemaine">23h</option>'+
                    '<option value="24" class="optionTimeSemaine">24h</option>'+
                    '<option value="25" class="optionTimeSemaine">25h</option>'+
                    '<option value="26" class="optionTimeSemaine">26h</option>'+
                    '<option value="27" class="optionTimeSemaine">27h</option>'+
                    '<option value="28" class="optionTimeSemaine">28h</option>'+
                    '<option value="29" class="optionTimeSemaine">29h</option>'+
                    '<option value="30" class="optionTimeSemaine">30h</option>'+
                    '<option value="31" class="optionTimeSemaine">31h</option>'+
                    '<option value="32" class="optionTimeSemaine">32h</option>'+
                    '<option value="33" class="optionTimeSemaine">33h</option>'+
                    '<option value="34" class="optionTimeSemaine">34h</option>'+
                    '<option value="35" class="optionTimeSemaine">35h</option>'+
                    '<option value="36" class="optionTimeSemaine">36h</option>'+
                    '<option value="37" class="optionTimeSemaine">37h</option>'+
                    '<option value="38" class="optionTimeSemaine">38h</option>'+
                    '<option value="39" class="optionTimeSemaine">39h</option>'+
                    '<option value="40" class="optionTimeSemaine">40h</option>'+
                '</select>'+
            '</div>'+
        '</div>'+

        '<div class="pageSubmit">'+
            '<input type="submit" value="Confirmer" class="pageSubmitInput" onclick="SwitchType(2)">'+
        '</div>'+
    '</section>'
];

const mainEntrainementProgramme = [
    '<section id="entrainementProgramme" class="page">'+
        '<div class="pageHeader">'+
            '<p class="pageInstruction">difficulté du programme</p>'+
            "<p class='pageInstructionP'>combien d'entrainements par semaine ?</p>"+
        '</div>'+

        '<div class="pageInput">'+
            '<div class="pageInputCheck" id="trainPrg_1">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox3" id="pageInputCheckBoxTrainPrg_1">'+
                '</div>'+
                '<p class="pageInputCheckT">3</p>'+
            '</div>'+

            '<div class="pageInputCheck" id="trainPrg_2">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox3" id="pageInputCheckBoxTrainPrg_2">'+
                '</div>'+
                '<p class="pageInputCheckT">4</p>'+
            '</div>'+

            '<div class="pageInputCheck" id="trainPrg_3">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox3" id="pageInputCheckBoxTrainPrg_3">'+
                '</div>'+
                '<p class="pageInputCheckT">5</p>'+
            '</div>'+

            '<div class="pageInputCheck" id="trainPrg_4">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox3" id="pageInputCheckBoxTrainPrg_4">'+
                '</div>'+
                '<p class="pageInputCheckT">6</p>'+
            '</div>'+

            '<div class="pageInputCheck" id="trainPrg_5">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox3" id="pageInputCheckBoxTrainPrg_5">'+
                '</div>'+
                '<p class="pageInputCheckT">7</p>'+
            '</div>'+
        '</div>'+

        '<div class="pageSubmit">'+
            '<input type="submit" value="Confirmer" class="pageSubmitInput" onclick="SwitchType(3)">'+
        '</div>'+
    '</section>'
];

const mainTimeEntrainementProgramme = [
    '<section id="entrainementProgramme" class="page">'+
        '<div class="pageHeader">'+
            '<p class="pageInstruction">difficulté du programme</p>'+
            "<p class='pageInstructionP'>combiens d'heures maximum par semaine pouvez/voulez vous consacrer à votre programme ?</p>"+
        '</div>'+

         '<div class="pageInput">'+
            '<div class="selectDateBox">'+
                '<select class="select" id="timeSemaine">'+
                    '<option value="" disabled selected>heures</option>'+
                    '<option value="2" class="optionTimeSemaine">2h</option>'+
                    '<option value="3" class="optionTimeSemaine">3h</option>'+
                    '<option value="4" class="optionTimeSemaine">4h</option>'+
                    '<option value="5" class="optionTimeSemaine">5h</option>'+
                    '<option value="6" class="optionTimeSemaine">6h</option>'+
                    '<option value="7" class="optionTimeSemaine">7h</option>'+
                    '<option value="8" class="optionTimeSemaine">8h</option>'+
                    '<option value="9" class="optionTimeSemaine">9h</option>'+
                    '<option value="10" class="optionTimeSemaine">10h</option>'+
                    '<option value="11" class="optionTimeSemaine">11h</option>'+
                    '<option value="12" class="optionTimeSemaine">12h</option>'+
                    '<option value="13" class="optionTimeSemaine">13h</option>'+
                    '<option value="14" class="optionTimeSemaine">14h</option>'+
                    '<option value="15" class="optionTimeSemaine">15h</option>'+
                    '<option value="16" class="optionTimeSemaine">16h</option>'+
                    '<option value="17" class="optionTimeSemaine">17h</option>'+
                    '<option value="18" class="optionTimeSemaine">18h</option>'+
                    '<option value="19" class="optionTimeSemaine">19h</option>'+
                    '<option value="20" class="optionTimeSemaine">20h</option>'+
                    '<option value="21" class="optionTimeSemaine">21h</option>'+
                    '<option value="22" class="optionTimeSemaine">22h</option>'+
                    '<option value="23" class="optionTimeSemaine">23h</option>'+
                    '<option value="24" class="optionTimeSemaine">24h</option>'+
                    '<option value="25" class="optionTimeSemaine">25h</option>'+
                    '<option value="26" class="optionTimeSemaine">26h</option>'+
                    '<option value="27" class="optionTimeSemaine">27h</option>'+
                    '<option value="28" class="optionTimeSemaine">28h</option>'+
                    '<option value="29" class="optionTimeSemaine">29h</option>'+
                    '<option value="30" class="optionTimeSemaine">30h</option>'+
                    '<option value="31" class="optionTimeSemaine">31h</option>'+
                    '<option value="32" class="optionTimeSemaine">32h</option>'+
                    '<option value="33" class="optionTimeSemaine">33h</option>'+
                    '<option value="34" class="optionTimeSemaine">34h</option>'+
                    '<option value="35" class="optionTimeSemaine">35h</option>'+
                    '<option value="36" class="optionTimeSemaine">36h</option>'+
                    '<option value="37" class="optionTimeSemaine">37h</option>'+
                    '<option value="38" class="optionTimeSemaine">38h</option>'+
                    '<option value="39" class="optionTimeSemaine">39h</option>'+
                    '<option value="40" class="optionTimeSemaine">40h</option>'+
                    '<option value="41" class="optionTimeSemaine">41h</option>'+
                    '<option value="42" class="optionTimeSemaine">42h</option>'+
                    '<option value="43" class="optionTimeSemaine">43h</option>'+
                    '<option value="44" class="optionTimeSemaine">44h</option>'+
                    '<option value="45" class="optionTimeSemaine">45h</option>'+
                    '<option value="46" class="optionTimeSemaine">46h</option>'+
                    '<option value="47" class="optionTimeSemaine">47h</option>'+
                    '<option value="48" class="optionTimeSemaine">48h</option>'+
                    '<option value="49" class="optionTimeSemaine">49h</option>'+
                    '<option value="50" class="optionTimeSemaine">50h</option>'+
                    '<option value="51" class="optionTimeSemaine">51h</option>'+
                    '<option value="52" class="optionTimeSemaine">52h</option>'+
                    '<option value="53" class="optionTimeSemaine">53h</option>'+
                    '<option value="54" class="optionTimeSemaine">54h</option>'+
                    '<option value="55" class="optionTimeSemaine">55h</option>'+
                    '<option value="56" class="optionTimeSemaine">56h</option>'+
                    '<option value="57" class="optionTimeSemaine">57h</option>'+
                    '<option value="58" class="optionTimeSemaine">58h</option>'+
                    '<option value="59" class="optionTimeSemaine">59h</option>'+
                    '<option value="60" class="optionTimeSemaine">60h</option>'+
                '</select>'+
            '</div>'+
        '</div>'+

        '<div class="pageSubmit">'+
            '<input type="submit" value="Confirmer" class="pageSubmitInput" onclick="SwitchType(4)">'+
        '</div>'+
    '</section>'
];

const mainLongueurProgramme = [
    '<section id="longueurProgramme" class="page">'+
        '<div class="pageHeader">'+
            '<p class="pageInstruction">longueur du programme</p>'+
            "<p class='pageInstructionP'>combien de semaines pour votre programme ?</p>"+
        '</div>'+

        '<div class="pageInput">'+
            '<div class="selectDateBox">'+
                '<select class="select" id="nbSemaines">'+
                    '<option value="" disabled selected>semaines</option>'+
                    '<option value="4" class="optionNbSemaines">4 semaines</option>'+
                    '<option value="6" class="optionNbSemaines">6 semaines</option>'+
                    '<option value="8" class="optionNbSemaines">8 semaines</option>'+
                    '<option value="10" class="optionNbSemaines">10 semaines</option>'+
                    '<option value="12" class="optionNbSemaines">12 semaines</option>'+
                    '<option value="14" class="optionNbSemaines">14 semaines</option>'+
                    '<option value="16" class="optionNbSemaines">16 semaines</option>'+
                    '<option value="18" class="optionNbSemaines">18 semaines</option>'+
                    '<option value="20" class="optionNbSemaines">20 semaines</option>'+
                    '<option value="22" class="optionNbSemaines">22 semaines</option>'+
                    '<option value="24" class="optionNbSemaines">24 semaines</option>'+
                    '<option value="26" class="optionNbSemaines">26 semaines</option>'+
                    '<option value="28" class="optionNbSemaines">28 semaines</option>'+
                    '<option value="30" class="optionNbSemaines">30 semaines</option>'+
                    '<option value="32" class="optionNbSemaines">32 semaines</option>'+
                '</select>'+
            '</div>'+
        '</div>'+

        '<div class="pageSubmit">'+
            '<input type="submit" value="Confirmer" class="pageSubmitInput" onclick="SwitchType(5)">'+
        '</div>'+
    '</section>'
];

const mainJourDispo = [
    '<section id="jourDispo" class="page">'+
        '<div class="pageHeader">'+
            '<p class="pageInstruction">jours de disponibilité</p>'+
            "<p class='pageInstructionP'>quels sont les jours où vous pouvez rouler ?</p>"+
        '</div>'+

        '<div class="pageInput">'+
            '<div class="pageInputCheck" id="jourDispo_1">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox4" id="pageInputCheckBoxJourDispo_1">'+
                '</div>'+
                '<p class="pageInputCheckT">lundi</p>'+
            '</div>'+

            '<div class="pageInputCheck" id="jourDispo_2">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox4" id="pageInputCheckBoxJourDispo_2">'+
                '</div>'+
                '<p class="pageInputCheckT">mardi</p>'+
            '</div>'+

            '<div class="pageInputCheck" id="jourDispo_3">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox4" id="pageInputCheckBoxJourDispo_3">'+
                '</div>'+
                '<p class="pageInputCheckT">mercredi</p>'+
            '</div>'+

            '<div class="pageInputCheck" id="jourDispo_4">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox4" id="pageInputCheckBoxJourDispo_4">'+
                '</div>'+
                '<p class="pageInputCheckT">jeudi</p>'+
            '</div>'+

            '<div class="pageInputCheck" id="jourDispo_5">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox4" id="pageInputCheckBoxJourDispo_5">'+
                '</div>'+
                '<p class="pageInputCheckT">vendredi</p>'+
            '</div>'+

            '<div class="pageInputCheck" id="jourDispo_6">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox4" id="pageInputCheckBoxJourDispo_6">'+
                '</div>'+
                '<p class="pageInputCheckT">samedi</p>'+
            '</div>'+

            '<div class="pageInputCheck" id="jourDispo_7">'+
                '<div class="pageInputCheckContenair">'+
                    '<input type="checkbox" class="pageInputCheckBox inputCheckBox4" id="pageInputCheckBoxJourDispo_7">'+
                '</div>'+
                '<p class="pageInputCheckT">dimanche</p>'+
            '</div>'+
        '</div>'+

        '<div class="pageSubmit">'+
            '<input type="submit" value="Confirmer" class="pageSubmitInput" onclick="SwitchType(6)">'+
        '</div>'+
    '</section>'
];

// const mainSortieClub = [
//     '<section id="sortieClub" class="page">'+
//         '<div class="pageHeader">'+
//             '<p class="pageInstruction">sortie club</p>'+
//             "<p class='pageInstructionP'>avez-vous un club ? si oui indiquer le(s) jour(s) de votre sortie club</p>"+
//         '</div>'+

//         '<div class="pageInput">'+
//             '<div class="pageInputCheck" id="sortieClub_1">'+
//                 '<div class="pageInputCheckContenair">'+
//                     '<input type="checkbox" class="pageInputCheckBox inputCheckBox5" id="pageInputCheckBoxSortieClub_1">'+
//                 '</div>'+
//                 '<p class="pageInputCheckT">pas de sortie club</p>'+
//             '</div>'+

//             '<div class="pageInputCheckSortieClub" id="sortieClub_2">'+
//                 '<div class="pageInputCheckSortieClubHeader">'+
//                     '<div class="pageInputCheckContenair">'+
//                         '<input type="checkbox" class="pageInputCheckBox inputCheckBox5" id="pageInputCheckBoxSortieClub_2">'+
//                     '</div>'+
//                     '<p class="pageInputCheckT">sortie club:</p>'+
//                 '</div>'+

//                 '<div class="pageInputSortieClub">'+
//                     '<select class="select selectSortieClub" id="inputJour" disabled>'+
//                         '<option value="" disabled selected>jour</option>'+
//                         '<option value="1" class="optionAnnee">lundi</option>'+
//                         '<option value="2" class="optionAnnee">mardi</option>'+
//                         '<option value="3" class="optionAnnee">mercredi</option>'+
//                         '<option value="4" class="optionAnnee">jeudi</option>'+
//                         '<option value="5" class="optionAnnee">vendredi</option>'+
//                         '<option value="6" class="optionAnnee">samedi</option>'+
//                         '<option value="7" class="optionAnnee">dimanche</option>'+
//                     '</select>'+

//                     '<select class="select selectSortieClub" id="inputIntensite" disabled>'+
//                         '<option value="" disabled selected>intensité</option>'+
//                         '<option value="1" class="optionAnnee">faible</option>'+
//                         '<option value="2" class="optionAnnee">modéré</option>'+
//                         '<option value="3" class="optionAnnee">élevé</option>'+
//                     '</select>'+

//                     '<select class="select selectSortieClub" id="inputTempsSortie" disabled>'+
//                         '<option value="" disabled selected>temps sortie</option>'+
//                         '<option value="0" class="optionAnnee">1h et moins</option>'+
//                         '<option value="1" class="optionAnnee">1-2h</option>'+
//                         '<option value="2" class="optionAnnee">2-3h</option>'+
//                         '<option value="3" class="optionAnnee">3-5h</option>'+
//                         '<option value="5" class="optionAnnee">5h et plus</option>'+
//                     '</select>'+
//                 '</div>'+
//             '</div>'+
//         '</div>'+

//         '<div class="pageSubmit">'+
//             '<input type="submit" value="Confirmer" class="pageSubmitInput" onclick="SwitchType(7)">'+
//         '</div>'+
//     '</section>'
// ];

const mainDateCourse = [
    '<section id="dateCourse" class="page">'+
        '<div class="pageHeader">'+
            '<p class="pageInstruction">date de la course</p>'+
            '<p class="pageInstructionP">indiquer la date de votre course ou la fin de votre programme, la fin de votre'+
            " programme doit être espacé de 4 à 32 semaines (selon la longueur de votre programme) avec aujourd'hui</p>"+
        '</div>'+

        '<div class="selectDateBox">'+
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
        '</div>'+
        
        '<div class="pageSubmit">'+
            '<input type="submit" value="Confirmer" class="pageSubmitInput" onclick="SwitchType(7)">'+
        '</div>'+
    '</section>'
];

const mainParametreGeneraux = [
    '<section id="parametreGeneraux" class="page">'+

        '<div class="finale" id="finaleNom">'+
            '<p class="finaleT">Nom du programme</p>'+
            '<input type="text" value="" id="finaleValueNom" class="prgNomInput">'+
        '</div>'+

        '<div class="finale" id="finaleEquipement">'+
            '<p class="finaleT">équipement</p>'+
            '<p class="finaleValue" id="finaleValueEquipement"></p>'+
        '</div>'+

        '<div class="finale" id="finaleEntrainementActuel">'+
            '<p class="finaleT">entrainement actuel</p>'+
            '<p class="finaleValue" id="finaleValueEntrainementActuel"></p>'+
        '</div>'+

        '<div class="finale" id="finaleTypeCycliste">'+
            '<p class="finaleT">type cycliste</p>'+
            '<p class="finaleValue" id="finaleValueTypeCycliste"></p>'+
        '</div>'+

        '<div class="finale" id="finaleEntrainementProgramme">'+
            '<p class="finaleT">entrainement programme</p>'+
            '<p class="finaleValue" id="finaleValueEntrainementProgramme"></p>'+
        '</div>'+

        '<div class="finale" id="finaleEntrainementProgramme">'+
            '<p class="finaleT">temps programme</p>'+
            '<p class="finaleValue" id="finaleValueTempsEntrainementProgramme"></p>'+
        '</div>'+

        '<div class="finale" id="finaleLongueurProgramme">'+
            '<p class="finaleT">longueur programme</p>'+
            '<p class="finaleValue" id="finaleValueLongueurProgramme"></p>'+
        '</div>'+

        '<div class="finale" id="finaleJourDispo">'+
            '<p class="finaleT">jours disponible</p>'+
            '<p class="finaleValue" id="finaleValueJourDispo"></p>'+
        '</div>'+

        // '<div class="finale" id="finaleSortieClub">'+
        //     '<p class="finaleT">sortie club</p>'+
        //     '<p class="finaleValue" id="finaleValueSortieClub"></p>'+
        // '</div>'+

        '<div class="finale" id="finaleDateCourse">'+
            '<p class="finaleT">date course</p>'+
            '<p class="finaleValue" id="finaleValueDateCourse"></p>'+
        '</div>'+

        '<div class="pageSubmit">'+
            '<input type="submit" value="Confirmer" class="pageSubmitInput" onclick="SwitchType(8)">'+
        '</div>'+
    '</section>'
];