
const myGmail = "https://mail.google.com/mail/?view=cm&to=bhtp2004@gmail.com";
const gmailElement = document.getElementById("myGmail");
gmailElement.href = myGmail;


setInterval(() => {
  document.querySelector('.lastfm img').src = 
    'https://lastfm-recently-played.vercel.app/api?user=ba0o0o&count=1&width=500&height=1000' + Date.now();
}, 10000); // updates every 30 seconds

