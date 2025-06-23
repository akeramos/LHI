const SPREADSHEET_ID = '1VFnL4t4tYZghahOd-ymqiWaFBQmHti0HVcjeze4S4MY';  // <---CHANGE THIS  

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Sheet1"); // <---MAKE SURE NAME EQUIVALENT TO SHEET NAME 

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([                 // <---ADJUST HEADER COLUMN ARE CORRESPOND TO DATA COLLECTION 
      new Date(),                     // Timestamp 
      data.nama || '',               // Nama
      data.nric || '',               // NRIC
      data.umur || '',              // Umur
      data.gender || '',            // Jantina
      data.symptomatic || '',       // Status Gejala
      data.puma || '',               // PUMA Score
      data.lungCancerStatus || '',  // Lung Cancer Status (High Risk / Low Risk)
      data.asthma || '',             // Risiko Asthma
      data.copd || '',               // Risiko COPD
      data.lungcancer || '',         // Risiko Lung Cancer
      data.tuberculosis || '',       // Risiko TB
      data.merokok || '',            // Merokok
      data.pencemaran || '',         // Pencemaran
      data.tempat_kerja || ''        // Pekerjaan/Tempat kerja
    ]);

    // Return success message
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    // Return error message
    return ContentService.createTextOutput("Error: " + err.message)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

// Optional: Confirm endpoint is working
function doGet() {
  return HtmlService.createHtmlOutput("Google Apps Script endpoint is running.");
}
