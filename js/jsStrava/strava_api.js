const auth_link = "https://www.strava.com/oauth/token"

function getActivities(res) {
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
}

function reAuthorize(res) {
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: '46262',
            client_secret: 'd10fe947c04ec802caa34e8f54f631090d305a77',
            refresh_token: '4bf09955b3267a17f660fedb2a4b16ed4700dfbf',
            grant_type: 'refresh_token'
        })
    }).then((res) => res.json())
        .then(res => getActivities(res))
}

reAuthorize()