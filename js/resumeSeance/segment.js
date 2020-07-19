$(document).ready(function () {
    postSegmentEndEffort("effort");
})

$(".view").click(function () {
    if (document.getElementById("viewSwitch").style.marginLeft == "10%") {

        document.getElementById("viewSwitch").style.marginLeft = "-10%";
        document.getElementById("viewSwitch").style.borderBottomRightRadius = "0px";
        document.getElementById("viewSwitch").style.borderTopRightRadius = "0px";
        document.getElementById("viewSwitch").style.borderBottomLeftRadius = "5px";
        document.getElementById("viewSwitch").style.borderTopLeftRadius = "5px";
        
        document.getElementById("viewEffort").style.color = "rgb(255, 255, 255)";

        document.getElementById("viewSegment").style.color = "rgb(41, 41, 41)";
        postSegmentEndEffort("effort");
    }
    else {
        document.getElementById("viewSwitch").style.marginLeft = "10%";
        document.getElementById("viewSwitch").style.borderBottomRightRadius = "5px";
        document.getElementById("viewSwitch").style.borderTopRightRadius = "5px";
        document.getElementById("viewSwitch").style.borderBottomLeftRadius = "0px";
        document.getElementById("viewSwitch").style.borderTopLeftRadius = "0px";

        document.getElementById("viewEffort").style.color = "rgb(41, 41, 41)";

        document.getElementById("viewSegment").style.color = "rgb(255, 255, 255)";
        postSegmentEndEffort("segment");
    }
})