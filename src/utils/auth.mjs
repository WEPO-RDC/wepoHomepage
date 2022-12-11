const {GoogleSpreadsheet} = require("google-spreadsheet")

const url = 'https://sheet.best/api/sheets/6d046578-d62e-4f8e-99a7-ba3bfaa431fa'
const spreadSheet = process.env.REACT_APP_SS_ID
const apiKey = process.env.REACT_APP_SHEET_API_KEY
const CLIENT_ID = process.env.REACT_APP_SHEET_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_SHEET_CLIENT_SECRET
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets'
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest';

const doc = new GoogleSpreadsheet(spreadSheet)

console.log(doc)

const scriptGapi = document.getElementById('gapi')
const scriptGis = document.getElementById('gis')

export {CLIENT_ID, DISCOVERY_DOC,apiKey, SCOPES}