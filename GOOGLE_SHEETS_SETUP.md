# Google Sheets Form Integration Setup

This guide will help you connect the contact form to Google Sheets and receive email notifications.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Takalam Inquiries" (or any name you prefer)
4. In the first row, add these headers (exactly as shown):

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Timestamp | First Name | Family Name | Phone | Email | Age | Sex | Country | City | Message |

## Step 2: Create the Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any code in the editor
3. Copy and paste the following code:

```javascript
// Configuration
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name
const EMAIL_TO = 'takalamenglishcenter@gmail.com';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    
    // Add row to sheet
    sheet.appendRow([
      new Date().toLocaleString('en-GB', { timeZone: 'Africa/Casablanca' }),
      data.firstName,
      data.familyName,
      data.phone,
      data.email,
      data.age,
      data.sex,
      data.country,
      data.city,
      data.message || ''
    ]);
    
    // Send email notification
    sendEmailNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  const subject = `🎓 New Takalam Inquiry: ${data.firstName} ${data.familyName}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #16a34a; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Student Inquiry</h1>
      </div>
      
      <div style="padding: 30px; background: #f9fafb;">
        <h2 style="color: #1f2937; margin-top: 0;">Contact Information</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 40%;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.firstName} ${data.familyName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #16a34a;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <a href="mailto:${data.email}" style="color: #16a34a;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Age:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.age}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Sex:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.sex}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Location:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.city}, ${data.country}</td>
          </tr>
        </table>
        
        ${data.message ? `
        <h3 style="color: #1f2937; margin-top: 20px;">Message:</h3>
        <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
          ${data.message}
        </div>
        ` : ''}
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" 
             style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; 
                    text-decoration: none; border-radius: 25px; font-weight: bold;">
            📱 Contact on WhatsApp
          </a>
        </div>
      </div>
      
      <div style="background: #1f2937; padding: 15px; text-align: center;">
        <p style="color: #9ca3af; margin: 0; font-size: 12px;">
          This inquiry was submitted via the Takalam website
        </p>
      </div>
    </div>
  `;
  
  GmailApp.sendEmail(EMAIL_TO, subject, '', {
    htmlBody: htmlBody,
    name: 'Takalam Website'
  });
}

// Test function - run this manually to test
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        firstName: 'Test',
        familyName: 'User',
        phone: '+212600000000',
        email: 'test@example.com',
        age: '25',
        sex: 'Male',
        country: 'Morocco',
        city: 'Casablanca',
        message: 'This is a test message'
      })
    }
  };
  
  doPost(testData);
}
```

4. Click **Save** (💾 icon) and name the project "Takalam Form Handler"

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: "Takalam Form Handler"
   - **Execute as**: "Me (your email)"
   - **Who has access**: "Anyone"
4. Click **Deploy**
5. **Authorize** the app when prompted (click through the warnings)
6. **Copy the Web app URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## Step 4: Update the Website

1. Open `app/components/Contact.tsx`
2. Find this line (around line 78):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your actual URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Save the file

## Step 5: Test

1. Submit a test form on your website
2. Check your Google Sheet for the new entry
3. Check your email for the notification

## Troubleshooting

### Form not submitting?
- Make sure the script URL is correct
- Check browser console for errors
- Verify the script is deployed as "Anyone can access"

### Not receiving emails?
- Check your spam folder
- Verify the EMAIL_TO address in the script
- Run the `testDoPost()` function in Apps Script to test

### Data not appearing in sheet?
- Make sure the sheet name matches `SHEET_NAME` in the script
- Check that headers are in row 1

## Security Notes

- The script URL is public but only accepts POST requests with specific data
- All data is stored in your private Google Sheet
- Emails are sent only to your specified address

---

## Quick Reference

| Setting | Value |
|---------|-------|
| Email | takalamenglishcenter@gmail.com |
| Sheet Name | Sheet1 |
| Timezone | Africa/Casablanca |
