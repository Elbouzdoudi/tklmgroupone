# Teacher Application - Google Sheets & Drive Setup

This guide will help you connect the teacher application form to Google Sheets with **automatic file uploads to Google Drive**.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Teacher Applications" (or any name you prefer)
4. In the first row, add these headers (exactly as shown):

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | First Name | Last Name | Email | Phone | Experience | Certifications | Specialization | Availability | Schedule | CV Link | Video Link | Status |

## Step 2: Create the Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any code in the editor
3. Copy and paste the following code:

```javascript
// Configuration
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name
const EMAIL_TO = 'takalamenglishcenter@gmail.com';
const DRIVE_FOLDER_NAME = 'Teacher Applications'; // Folder in Google Drive

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the main folder
    const mainFolder = getOrCreateFolder(DRIVE_FOLDER_NAME);
    
    // Create a subfolder for this applicant
    const applicantFolderName = `${data.firstName} ${data.lastName} - ${new Date().toISOString().split('T')[0]}`;
    const applicantFolder = mainFolder.createFolder(applicantFolderName);
    
    // Upload files to Drive
    let cvLink = 'Not provided';
    let videoLink = 'Not provided';
    
    if (data.cvData && data.cvFileName) {
      const cvBlob = Utilities.newBlob(
        Utilities.base64Decode(data.cvData),
        data.cvMimeType || 'application/pdf',
        data.cvFileName
      );
      const cvFile = applicantFolder.createFile(cvBlob);
      cvFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      cvLink = cvFile.getUrl();
    }
    
    if (data.videoData && data.videoFileName) {
      const videoBlob = Utilities.newBlob(
        Utilities.base64Decode(data.videoData),
        data.videoMimeType || 'video/mp4',
        data.videoFileName
      );
      const videoFile = applicantFolder.createFile(videoBlob);
      videoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      videoLink = videoFile.getUrl();
    }
    
    // Add row to sheet
    sheet.appendRow([
      new Date().toLocaleString('en-GB', { timeZone: 'Africa/Casablanca' }),
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.experience,
      data.certifications,
      data.specialization,
      data.availability,
      data.schedule,
      cvLink,
      videoLink,
      'New'
    ]);
    
    // Send email notification with file links
    sendEmailNotification(data, cvLink, videoLink, applicantFolder.getUrl());
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateFolder(folderName) {
  const folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(folderName);
}

function sendEmailNotification(data, cvLink, videoLink, folderLink) {
  const subject = `📚 New Teacher Application: ${data.firstName} ${data.lastName}`;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #16a34a; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Teacher Application</h1>
      </div>
      
      <div style="padding: 30px; background: #f9fafb;">
        <h2 style="color: #1f2937; margin-top: 0;">Applicant Information</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 40%;">Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <a href="mailto:${data.email}" style="color: #16a34a;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #16a34a;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Experience:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.experience} years</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Certifications:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.certifications}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Specialization:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.specialization}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Availability:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.availability} hours/week</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Preferred Schedule:</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.schedule}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background: #ecfdf5; border-radius: 8px; border: 1px solid #10b981;">
          <h3 style="margin: 0 0 10px 0; color: #065f46;">📁 Uploaded Files</h3>
          <p style="margin: 5px 0;">
            <strong>CV:</strong> ${cvLink !== 'Not provided' ? `<a href="${cvLink}" style="color: #16a34a;">View CV</a>` : 'Not provided'}
          </p>
          <p style="margin: 5px 0;">
            <strong>Video:</strong> ${videoLink !== 'Not provided' ? `<a href="${videoLink}" style="color: #16a34a;">View Video</a>` : 'Not provided'}
          </p>
          <p style="margin: 10px 0 0 0;">
            <a href="${folderLink}" style="color: #16a34a; font-weight: bold;">📂 Open Applicant Folder in Drive</a>
          </p>
        </div>
      </div>
      
      <div style="background: #1f2937; padding: 15px; text-align: center;">
        <p style="color: #9ca3af; margin: 0; font-size: 12px;">
          Takalam English - Teacher Recruitment
        </p>
      </div>
    </div>
  `;
  
  MailApp.sendEmail({
    to: EMAIL_TO,
    subject: subject,
    htmlBody: htmlBody
  });
}

// Test function - run this to verify the setup works
function testSetup() {
  // Test folder creation
  const folder = getOrCreateFolder(DRIVE_FOLDER_NAME);
  console.log('Main folder URL:', folder.getUrl());
  
  // Test email (without files)
  sendEmailNotification({
    firstName: 'Test',
    lastName: 'Teacher',
    email: 'test@example.com',
    phone: '+212600000000',
    experience: '3-5',
    certifications: 'TEFL, CELTA',
    specialization: 'General English, Business English',
    availability: '15-25',
    schedule: 'Mornings, Evenings'
  }, 'Not provided', 'Not provided', folder.getUrl());
  
  console.log('Test email sent!');
}
```

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: "Teacher Form Handler with Drive"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click **Deploy**
5. **Authorize** the app when prompted:
   - Click "Review Permissions"
   - Select your Google account
   - Click "Advanced" → "Go to Untitled project (unsafe)"
   - Click "Allow"
   - **Important**: You must allow access to Google Drive and Gmail
6. **Copy the Web app URL** - it looks like: `https://script.google.com/macros/s/XXXXXX/exec`

## Step 4: Add the URL to Your Environment

Add the URL to your `.env.local` file:

```env
NEXT_PUBLIC_TEACHER_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Or add it to your hosting platform's environment variables (Vercel, Netlify, etc.)

## Step 5: Test the Integration

1. First, run the `testSetup()` function in Apps Script to verify:
   - It creates the "Teacher Applications" folder in your Drive
   - It sends a test email with the folder link
2. Restart your development server
3. Go to `/careers` and submit a test application with a CV and video
4. Check:
   - ✅ Google Sheet has new row with CV and Video links
   - ✅ Google Drive has new folder with uploaded files
   - ✅ Email received with file links

## How It Works

1. **User submits form** → Files are converted to base64 in the browser
2. **Data sent to Apps Script** → Receives form data + file data
3. **Files uploaded to Drive** → Creates applicant folder, uploads files with public link sharing
4. **Row added to Sheet** → Includes direct links to CV and Video
5. **Email sent** → Contains all info + clickable file links

## File Size Limits

- Google Apps Script has a ~50MB payload limit
- For videos larger than ~30MB, the upload may fail
- Consider adding a note on the form asking for videos under 2 minutes / 30MB

## Troubleshooting

### "Exceeded maximum execution time"
- Large video files may cause timeout
- Ask applicants to upload shorter/smaller videos

### "Authorization required"
- Re-deploy the script and re-authorize
- Make sure you allowed Drive and Gmail permissions

### Files not appearing in Drive
- Check the Apps Script execution logs (View → Executions)
- Verify the base64 data is being sent correctly

### CORS errors
- The form uses `no-cors` mode, so errors won't show in console
- Check Apps Script execution logs for actual errors

## Security Notes

- Files are stored in YOUR Google Drive account
- Links are "anyone with link can view" - not publicly searchable
- Consider reviewing and deleting old applications periodically
