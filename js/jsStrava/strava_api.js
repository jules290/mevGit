let position = window.location.href.indexOf("code=") + 5;
let endPosition = window.location.href.indexOf("&scope");

if (position != -1) {
    let code = window.location.href.slice(position, endPosition);
    const auth_link = `https://www.strava.com/oauth/token?client_id=46262&client_secret=d10fe947c04ec802caa34e8f54f631090d305a77&code=${code}&grant_type=authorization_code`
    
    $.post(auth_link,
    function(data){
        console.log(data.access_token);
        localStorage.access_token = data.access_token;
        getActivities()
    });
}

function getActivities() {
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${localStorage.access_token}`
    fetch(activities_link)
        .then((res) => {
            console.log(res.json())
        })
}

// function reAuthorize() {
//     fetch(auth_link,{
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             client_id: '46262',
//             client_secret: 'd10fe947c04ec802caa34e8f54f631090d305a77',
//             refresh_token: '4bf09955b3267a17f660fedb2a4b16ed4700dfbf',
//             grant_type: 'authorization_code'
//         })
//     }).then((res) => res.json())
//         .then(res => getActivities(res))
// }

// reAuthorize()