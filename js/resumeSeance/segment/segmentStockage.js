function segmentStorage() {
    if (!localStorage.efforts || JSON.parse(localStorage.efforts)[sessionStorage.activityIndex] == null) {
        let Id = JSON.parse(localStorage.Activities)[sessionStorage.activityIndex].id;
        const activitiesStreams = `https://www.strava.com/api/v3/activities/${Id}?access_token=${localStorage.access_token}`
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": activitiesStreams,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "35.188.171.173:8080",
                "x-rapidapi-key": "SIGN-UP-FOR-KEY",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
                'includeAllEfforts': true
            }
        }
        $.ajax(settings).done(function (response) {
            let efforts = new Array();
            if (localStorage.efforts) {
                let efforts = JSON.parse(localStorage.efforts);
            }
    
            efforts[sessionStorage.activityIndex] = {
                segment: response.segment_efforts,
                effort: ""
            }
            localStorage.efforts = JSON.stringify(efforts);
            segmentList();
            intervalList();
        })
    }
    else {
        segmentList();
        intervalList();
    }
}