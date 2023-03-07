<!-- JS CODE -->
<script>
  import { onMount } from 'svelte';
  import { google } from 'googleapis';
  import QRCode from 'qrcode.react';
  
  console.log('scouter:', scouter);
  console.log('team number:', teamNum);
  console.log('total points:', totalNum);
  console.log('accuracy:', acc);
  console.log('preferred side:', pref);

  let auth;

  const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
  const spreadsheetId = '1k_3vBdlZjsUWlOuRLe514jq0j5zn_oD8fotlPB-2-WI';
  const range = 'Sheet1!A1:E1';
  const qrCodeSize = 256;
  const csvData = `${scouter},${teamNum},${totalNum},${acc},${pref}`;

  async function appendRow(row) {
    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [row],
      },
    });
    console.log(response);
  }

  function handleScan(result) {
    const [scouter, teamNum, totalNum, acc, pref] = result.split(',');
    const row = [scouter, teamNum, totalNum, acc, pref];
    appendRow(row);
  }

  onMount(async () => {
    const { gapi } = window;
    gapi.load('client:auth2', async () => {
      await gapi.client.init({
        apiKey: 'AIzaSyA-aACPwXl59vPL2cNzODpBEroXcTr4hww',
        clientId: '614054685937-t24h0biu88ljiq52tq4q3p6anbl8s880.apps.googleusercontent.com',
        discoveryDocs: [
          'https://sheets.googleapis.com/$discovery/rest?version=v4',
        ],
        scope: SCOPES.join(' '),
      });
      auth = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse()
        .access_token;
    });
  });
</script>

<!-- HTML CODE -->
<section>
    <!-- Back button just in case user accidentally presses scout button -->
    <a href="/scoutPart2" class="backButton">Back</a>

    <!-- Page Title -->
    <h1>Upload Data</h1>

    <div>
      <QRCode value={csvData} size={qrCodeSize} onScan={handleScan()} />
    </div>

    <!-- Links for starting scouting and uploading data -->
    <a href="/">To Home</a>
</section>

<!-- CSS CODE -->
<style>

    section {
        width: 100%;
        height: 98vh;
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #30ace2;
    }

    a {
        width: 50%;
        padding: 10px;
        padding-top: 30px;
        padding-bottom: 30px;
        margin: 10px;

        background-color: black;
        color: #d8d8d8;
        text-decoration: none;
        text-align: center;
        font-size: 50px;
    }

    h1 {
        margin-bottom: 20px;
        width: 80%;

        color: #d8d8d8;
        font-size: 60px;
        text-align: center;
    }

    .backButton {
        width: 20%;
        padding: 10px;
        margin: 10px;

        font-size: 25px;

        align-self: flex-start;
    }
</style>