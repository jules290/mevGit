let positionCode = window.location.href.indexOf("code=") + 5;
let endPositionCode = window.location.href.indexOf("&scope");

let positionScope = window.location.href.indexOf("scope=") + 5;

if (position != -1) {
    let code = window.location.href.slice(positionCode, endPositionCode);
    let scope = window.location.href.slice(positionScope);
    console.log(scope)
    const auth_link = `https://www.strava.com/oauth/token?client_id=46262&client_secret=d10fe947c04ec802caa34e8f54f631090d305a77&code=${code}&grant_type=authorization_code`
    
    if (!localStorage.oauthStatus || localStorage.oauthStatus == "non") {
        $.post(auth_link,
            function(data){
                localStorage.refresh_token = data.refresh_token;
                localStorage.access_token = data.access_token;
                localStorage.oauthStatus = "ok";
                getActivities()
            });
    }
}

function getData() {
    
}

function getActivities() {
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${localStorage.access_token}`
    fetch(activities_link)
        .then((res) => {
            console.log(res.json())
        })
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
            getActivities()
        })
}

if (localStorage.oauthStatus || localStorage.oauthStatus == "ok") {
    reAuthorize();
}