const url = require('url');
const urlString = 'https://support.google.com/mail/community?hl=en&sjid=11897333212472859982-AP';
const parsedUrl = url.parse(urlString, true);
console.log('Parsed URL:', parsedUrl);

