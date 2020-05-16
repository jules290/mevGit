let positionCode = window.location.href.indexOf("code=") + 5;
let endPositionCode = window.location.href.indexOf("&scope");

let positionScope = window.location.href.indexOf("scope=") + 6;

if (positionCode != -1) {
    let code = window.location.href.slice(positionCode, endPositionCode);
    localStorage.scope = window.location.href.substr(positionScope);
    
    const auth_link = `https://www.strava.com/oauth/token?client_id=46262&client_secret=d10fe947c04ec802caa34e8f54f631090d305a77&code=${code}&grant_type=authorization_code`
    if (!localStorage.oauthStatus || localStorage.oauthStatus == "non") {
        $.post(auth_link,
            function(data){
                localStorage.refresh_token = data.refresh_token;
                localStorage.oauthStatus = "ok";
                getActivities(data)
            });
    }
}

function getActivities(res) {
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": activities_link,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "35.188.171.173:8080",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            // "before": 56,
            // "after": 56,
            "page": 1,
            // "perPage": 10,
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    // const segment_link = `https://www.strava.com/api/v3/segments/starred?access_token=${res.access_token}`
    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": segment_link,
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "35.188.171.173:8080",
    //         "x-rapidapi-key": "SIGN-UP-FOR-KEY",
    //         "content-type": "application/x-www-form-urlencoded"
    //     },
    //     "data": {
            
    //     }
    // }
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });

    // const segment_link_streams = `https://www.strava.com/api/v3/segments/1625415/streams?access_token=${res.access_token}`
    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": segment_link_streams,
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "35.188.171.173:8080",
    //         "x-rapidapi-key": "SIGN-UP-FOR-KEY",
    //         "content-type": "application/x-www-form-urlencoded"
    //     },
    //     "data": {
            
    //     }
    // }
    // $.ajax(settings).done(function (response) {
    //     console.log(response);
    // });

    const activities_link_streams = `https://www.strava.com/api/v3/segment_efforts/68810424990?access_token=${res.access_token}`
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": activities_link_streams,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "35.188.171.173:8080",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

const auth_linkRefresh = "https://www.strava.com/oauth/token";

function reAuthorize() {
    fetch(auth_linkRefresh,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: '46262',
            client_secret: 'd10fe947c04ec802caa34e8f54f631090d305a77',
            refresh_token: localStorage.refresh_token,
            grant_type: 'refresh_token'
        })
    }).then((res) => res.json())
        .then(res => {
            localStorage.access_token = res.access_token;
            getActivities(res)
        })
}

if (localStorage.oauthStatus || localStorage.oauthStatus == "ok") {
    reAuthorize();
}