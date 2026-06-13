
const myGmail = "https://mail.google.com/mail/?view=cm&to=bhtp2004@gmail.com";
const gmailElement = document.getElementById("myGmail");
gmailElement.href = myGmail;

const wmbcURL = "https://wmbc.umbc.edu/";
const linkText = "WMBC"
const aboutText = `Hi I am Bao-Huan Tran. I am studying Computer Science at the University of Maryland Baltimore County. I have a passion for programming and game development. Outside of academics I work at my schools radio station <a href='${wmbcURL}' target='_blank'>${linkText}</a> as the events manager. I enjoy playing video games, watching anime, listening to music, and going to concerts. I listen to a variety of music genres but some of my favorites are Shoegaze, Math Rock, Punk, Jazz Fusion. I also enjoy going to the gym and playing and watching sports.`;
document.getElementById("aboutText").innerHTML = aboutText;


setInterval(() => {
  document.querySelector('.lastfm img').src = 
    'https://lastfm-recently-played.vercel.app/api?user=ba0o0o&count=1&width=500&height=1000' + Date.now();
}, 10000); // updates every 30 seconds


const pokemons = ['images/pokemon/infernape.gif', 'images/pokemon/turtwig.gif','images/pokemon/riolu.gif',
  'images/pokemon/garchomp.gif','images/pokemon/umbreon.gif','images/pokemon/wooper.gif',
'images/pokemon/gliscor.gif','images/pokemon/gardevoir.gif','images/pokemon/luxio.gif','images/pokemon/giratina.gif'];
let currentIndex = 0;

function nextPokemon() {
  currentIndex = (currentIndex + 1) % pokemons.length;
  document.getElementById('pokemon-img').src = pokemons[currentIndex];
}