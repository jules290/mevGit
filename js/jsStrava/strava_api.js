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
                localStorage.access_token = data.access_token;
                localStorage.oauthStatus = "ok";
                getActivities()
            });
    }
}

function getData() {
    if (localStorage.scope == "read,activity:read_all,profile:read_all") {
        
    }
}

function getActivities() {
    var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.ActivitiesApi()

var opts = { 
  'before': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place before a certain time.
  'after': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place after a certain time.
  'page': 56, // {Integer} Page number.
  'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLoggedInAthleteActivities(opts, callback);
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