const https = require('https');
https.get('https://www.google.com/search?q=bluetooth+module+arduino+hc-05&rlz=1C1YTUH_enIN1017IN1017&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQw0MjY1MTkzN2owajeoAgiwAgE&sourceid=chrome&ie=UTF-8', (resp)=>{
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(data)
    console.log("got it");
  });  
}).on("error", (err) => {
    console.log("Error: " + err.message);
});