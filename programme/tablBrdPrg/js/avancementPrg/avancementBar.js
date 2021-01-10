function avancementJquery() {
    $(".avancementRound").click(function () {
        rounds = $(".avancementRound");
        for (let i = 0; i < rounds.length; i++) {
            rounds.css({"background-color": "rgb(170, 170, 170)"});
        }
        $(this).css({"background-color": "rgb(0, 234, 170)"});
    })
    
    $(".avancementRound").hover(function () {
        rounds = $(".avancementRound");
        if ($(this)[0].style.backgroundColor != "rgb(0, 234, 170)") {
            $(this).css({"background-color": "rgb(140, 140, 140)"});
        }
    }, function () {
        rounds = $(".avancementRound");
        if ($(this)[0].style.backgroundColor != "rgb(0, 234, 170)") {
            $(this).css({"background-color": "rgb(170, 170, 170)"});
        }
    })
}