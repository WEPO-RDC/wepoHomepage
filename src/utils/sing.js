/*
let jwt = {
    "iss": "user-waitlist@waitlist-363216.iam.gserviceaccount.com",
    "scope":"https://www.googleapis.com/auth/spreadsheets",
    "aud":"https://oauth2.googleapis.com/token",
    "iat":"1511903600",
    "exp":"1511903600"
}

const x ="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLXdhaXRsaXN0QHdhaXRsaXN0LTM2MzIxNi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInNjb3BlIjoiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMiLCJhdWQiOiJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsImlhdCI6MTY3MDk2NjU3MCwiZXhwIjoxNjcwOTY4NTcwfQ.DYpPpA_zP3Mt0Ba8lLnXLhzA3dAZffUVwfO0sQMZvZjDKT8lcpSWLzjuyrW-SPDRWNXGrDotFC74g2QosqjQ7hYRZNIoRGDqQrV08PoAXfdqoEGh_c7rEoOMFJWbWI6cH3W9vEUNCl4UOJhszikSCM3p1Zu9iOCVxUoJJglKliLhL98nIeZlCiHdsOuD_VsUrCtYsgsHhdDW7JGWLcdkXA0PrzDr3ZRibOFGZwY4aKLcZ4J1bhP9xFBQ8wwjd2ko4Vj9mGA0U2fqoLLoIbjA9UCQ0w2Dqh0Uo96uAKJp38izFyWApCai5XBNfcqjD4T8jwAWj1uEIbzL-tBKItT4DQ"
const url = "https://accounts.google.com/o/oauth2/auth"
const grant = "urn:ietf:params:oauth:grant-type:jwt-bearer"
const requestOptions = {
    method: 'POST',
    
    body:"grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1c2VyLXdhaXRsaXN0QHdhaXRsaXN0LTM2MzIxNi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInNjb3BlIjoiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9zcHJlYWRzaGVldHMiLCJhdWQiOiJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjQvdG9rZW4iLCJpYXQiOjE2NzA5NjY1NzAsImV4cCI6MTY3MDk2ODU3MH0.tenfeUqYxheBYphf7Bql-64c1KbpL0L36qIy_9VyeiVfLcFzU_iDPT7f-l0Oo894b2o5mDrijDDzxck4K-toJqFJraFujBMcMe9QVFSXr83G3k4bViWEEPlPfZUnq-X27b5xJRJCqyxtfT-cY63WX_keRr_ec2b2kCT6Vy95pShGBYfjwVjRmPJ3G7TxxzaTBSvHQdsqsU6BH5uW-SgmrCEyY112ykmDSVf3zp2NJIaaHc3oEglfbN6yyZdTtGDmHYXYW3gQihOEGsfseG0VHDiCgh22bHAkYXUeLMpyIxr0urMrY6-h1yuukYGFOQ1KhaLf_TC2pmWdy5-B15QtTA"
    
    //JSON.stringify({grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion:x})
}

let data = {grant_type:grant}
function getToken(){
    changeProxy()

    //fetch(url, requestOptions).then((r)=>console.log(r.json()))
   let t = new XMLHttpRequest()
    t.open('POST', url,true)
    t.setRequestHeader("Access-Control-Allow-Origin","*")
    t.send(data)
}

function changeProxy(){
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
}

export default getToken
*/