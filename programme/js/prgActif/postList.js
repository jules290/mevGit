function postPrgList() {
    if (localStorage.programme) {
        $("#Actif").empty();
        postListHeader();
        postListProgramme();
    }
    else {
        $("#Actif").empty();
        errorMessage = document.createElement("p");
        errorMessage.className = "errorMessageList";
        errorMessage.innerText = "aucun programme actif";
        document.getElementById("Actif").appendChild(errorMessage);
    }
}