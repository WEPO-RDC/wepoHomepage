// The different keys
// const url = 'https://sheet.best/api/sheets/6d046578-d62e-4f8e-99a7-ba3bfaa431fa'
const spreadSheet = process.env.REACT_APP_SS_ID
const apiKey = process.env.REACT_APP_SHEET_API_KEY
const CLIENT_ID = process.env.REACT_APP_SHEET_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_SHEET_CLIENT_SECRET
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets'
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest';
const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL


let tokenClient;
let gapiInited = false;
let gisInited = false;


function gapiLoaded() {
    window.gapi.load('client', intializeGapiClient);
  }


async function intializeGapiClient() {
await window.gapi.client.init({
    apiKey: apiKey,
    clientId: CLIENT_ID,
    scope:SCOPES,
    plugin_name:"waitlist",
    discoveryDocs: [DISCOVERY_DOC],
});
gapiInited = true;
console.log(gapiInited, gisInited)
maybeEnableButtons()
}

function gisLoaded() {
    tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    gisInited = true;
    maybeEnableButtons()
  }

function maybeEnableButtons() {
    if (gapiInited && gisInited) {
        tokenClient.callback =async (resp) => {
            if (resp.error !== undefined) {
              throw (resp);
            }
          }
        console.log("SUCCESS")
        console.log(window.gapi.client)
        displaySheet()
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

  async function writeInSheet(data){
    let values = [[]]
    values = [...data]
    const body = {
      values: values
    }
    try{

      window.gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: spreadSheet,
        range:'Sheet1',
        valueInputOption: "RAW",
        ressource: body
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
export { writeInSheet,gisLoaded, gapiLoaded, CLIENT_ID, DISCOVERY_DOC,apiKey, SCOPES}