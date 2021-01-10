function postListHstrq() {
    if (localStorage.programme) {
        $("#Historique").empty();
        postHistoriqueHeader();
        postListHistorique();
    }
    else {
        $("#Historique").empty();
        errorMessage = document.createElement("p");
        errorMessage.className = "errorMessageList";
        errorMessage.innerText = "aucun programme dans l'historique";
        document.getElementById("Historique").appendChild(errorMessage);
    }
}