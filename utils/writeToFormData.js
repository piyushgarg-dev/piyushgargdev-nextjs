import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const writeFormData = async (data) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './config/secrets.json',
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.SPREAD_SHEET_ID;
    const range = 'Sheet1!A1:C1'; // Modify the sheet name and range as needed

    const resource = {
      values: [[data.name, data.email, data.message]],
    };

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource,
    });

    console.log('Form data saved:', response.data);
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};

export default writeFormData;
