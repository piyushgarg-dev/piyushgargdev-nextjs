import { GoogleSpreadsheet } from 'google-spreadsheet';
// Initialize the Google Sheets API

const doc = new GoogleSpreadsheet(process.env.SPREAD_SHEET_ID);

doc.useServiceAccountAuth({
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Extract the form data from the request body
            const { name, email, message } = req.body;

            // Load the Google Sheets document
            await doc.loadInfo();

            // Select the first sheet 
            const sheet = doc.sheetsByIndex[0];

            // Append the form data as a new row in the sheet
            await sheet.addRow({ Name: name, Email: email, Message: message });

            res.status(200).json({ message: 'success' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'An error occurred' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
