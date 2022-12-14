import { spreadSheet } from ".";
import {GoogleSpreadsheet} from "google-spreadsheet"


//const { promisify } = require('util')

const creds = require('./waitlist-363216-e71713238fa0.json')



async function accessS(){
    const doc = new GoogleSpreadsheet(spreadSheet)
    doc.useServiceAccountAuth(creds);
    const info = doc.spreadsheetId
    //const sheet = info.worksheets[0]
    console.log('title', info)
} 

export default accessS