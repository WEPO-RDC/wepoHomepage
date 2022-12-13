
const x = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImU3MTcxMzIzOGZhMDk1ODJjNjdlYzZiMGNiNmI1OWFlNGQzNDhiYzEifQ.eyJpc3MiOiJ1c2VyLXdhaXRsaXN0QHdhaXRsaXN0LTM2MzIxNi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImF1ZCI6Imh0dHBzOi8vc2hlZXRzLmdvb2dsZWFwaXMuY29tIiwiaWF0IjoxNTExOTAwMDAwLCJleHAiOjE1MTE5MDAwMDB9.UTeOkefqDAS_uyRwog1b7u9WS2wU5RHSrl236vULEgxC5XFOoeJS1u4MvARQ1S4EAvsEMzRxBTFvUHhrYjfJ02lprTl2ssqdOWvyXmmWW2Qv3J8yvhjdvvL1k5Zb_pH-_v9VYuy8vfmbfp6RPRxK5rO-WdNsJK1VcNsFzvj-cSRBxIdoj0-oz2-RQHZ7jPk_puK4aKkz8QZAsiIqgQ_Odgmc-e8-zNVGI4zVZn1oQQX7af_XJeKbkPLh-WEWwHgLWaULiP9-tMwHi6kekvRH8bn5G-fHWALIs6Q_r29qsVf1E_oYtj1Y0Ucf52qVxTfyybB_xVghTYfQAavR4kKyoQ"
const url = "https://oauth2.googleapis.com/token"
const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: JSON.stringify({grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion:x})
}
function getToken(){
    fetch(url, requestOptions)
}

export default getToken