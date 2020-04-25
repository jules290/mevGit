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

$("#search").keypress(function(){
    if (event.keyCode == 13) {
        fetch('../support/supportFetch.json')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          appendData(data);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
})