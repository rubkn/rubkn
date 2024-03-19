/* const axios = require('axios'); */

/* const proccess.env.SPOTIFY_CLIENT_ID = '1f1201f14d384b579d6fd52175ff3624'; */
const clientSecret = 'd73c7b1720f546099a453453d5c24f87';
const redirectUri = 'http://localhost:3000/callback';
const scopes = 'user-read-private user-read-email offline_access';

// Step 1: Make Authorization Request
const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes)}`;

// Step 4: User Authorization - Redirect your user to this URL
console.log('Authorize URL:', authorizeUrl);

// Step 6: Exchange Authorization Code for Tokens
const authorizationCode = 'YOUR_AUTHORIZATION_CODE';
/* 
axios.post('https://accounts.spotify.com/api/token', {
    grant_type: 'authorization_code',
    code: authorizationCode,
    redirect_uri: redirectUri,
    client_id: proccess.env.SPOTIFY_CLIENT_ID,
    client_secret: clientSecret
})
.then(response => {
    console.log('Access Token:', response.data.access_token);
    console.log('Refresh Token:', response.data.refresh_token);
})
.catch(error => {
    console.error('Error:', error.response.data);
}); */


/* async function getToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
        }),
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    });

    const data = await response.json();
    return data.access_token;
} */
