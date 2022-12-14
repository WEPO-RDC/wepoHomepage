// The different keys
// const url = 'https://sheet.best/api/sheets/6d046578-d62e-4f8e-99a7-ba3bfaa431fa'
const spreadSheet = process.env.REACT_APP_SS_ID
const apiKey = process.env.REACT_APP_SHEET_API_KEY
const CLIENT_ID = process.env.REACT_APP_SHEET_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_SHEET_CLIENT_SECRET
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets'
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL


let tokenClient;
let gapiInited = false;
let gisInited = false;

function gapiLoad(){
  window.gapi.load('client:auth2', initializeGapiClient)
}

function initializeGapiClient() {
  console.log("love")
  window.gapi.client.init({
    discoveryDocs: [DISCOVERY_DOC],
    apiKey: apiKey,
    ///plugin_name:"waitlist",
  })
  window.gapi.auth2.authorize({
    scope:SCOPES,
    clientId:CLIENT_ID,
    login_hint:"wepo.cd",
    prompt:'none'
  })

  console.log("GAPI initialized")
  gapiInited = true;
//console.log(gapiInited, gisInited)

}

//window.gapi.client.getToken

function gisLoaded() {
    tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      apiKey:apiKey,
      callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons()
  }
function maybeEnableButtons() {
    if (gisInited && gapiInited) {
        tokenClient.callback =async (resp) => {
            if (resp.error !== undefined) {
              throw (resp);
            }
          }
        //console.log("SUCCESS")
        //console.log(window.gapi.client)
        displaySheet()
        console.log(window.gapi.auth2)
  }
}

  async function displaySheet(){
    let response;
    try{
        response = await window.gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: spreadSheet,
            range: 'Sheet2'
        })
    }
    catch(err){
        console.log(err.message)
    }
  }

 function writeInSheet(data){
    console.log(tokenClient)
    console.log(gapiInited, gisInited)
    console.log((data))

    let values = [data]
    const body = {
      values: values
    }
    try{

      window.gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: spreadSheet,
        range:'Sheet2!A1:F',
        valueInputOption: "RAW",
        insertDataOption:"INSERT_ROWS",
        values: body
      }).then((response) =>{
        const result = response.result
        console.log(result)
      })
    }
    catch(err){
      console.log(err.message)
      return "Not posted"
    }
    return "SUCCESS"
    }
    
const scriptGapi = document.getElementById('gapi')
const scriptGis = document.getElementById('gis')
//scriptGapi.onload = gapiLoaded()
//scriptGis.onload = gisLoaded()
export {spreadSheet,gapiLoad, writeInSheet,gisLoaded, CLIENT_ID, DISCOVERY_DOC,apiKey, SCOPES}