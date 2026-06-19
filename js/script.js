const wmbcURL = "https://wmbc.umbc.edu/";
const linkText = "WMBC"
const aboutText = `Hello! My name Bao-Huan Tran. I am a Vietnamese American born and raised in Silver Spring Maryland. I am studying Computer Science at the University of Maryland Baltimore County. I have a passion for programming and game development. Outside of academics I work at my schools radio station <a href='${wmbcURL}' target='_blank'>${linkText}</a> as the events manager. I enjoy playing video games, watching anime, listening to music, and going to concerts. I listen to a variety of music genres but some of my favorites are Shoegaze, Math Rock, Punk, Jazz Fusion. I also enjoy going to the gym and playing and watching sports.`;
document.getElementById("aboutText").innerHTML = aboutText;


setInterval(() => {
  document.querySelector('.lastfm img').src = 
    'https://lastfm-recently-played.vercel.app/api?user=ba0o0o&count=1&width=500&height=1000' + Date.now();
}, 10000); // updates every 30 seconds



// Pokemon
const pokemons = ['images/pokemon/infernape.gif', 'images/pokemon/turtwig.gif','images/pokemon/riolu.gif',
  'images/pokemon/garchomp.gif','images/pokemon/umbreon.gif','images/pokemon/wooper.gif',
'images/pokemon/gliscor.gif','images/pokemon/gardevoir.gif','images/pokemon/luxio.gif','images/pokemon/giratina.gif'];

const shinyPokemons = ['images/shiny-pokemon/infernape.gif', 'images/shiny-pokemon/turtwig.gif','images/shiny-pokemon/riolu.gif',
  'images/shiny-pokemon/garchomp.gif','images/shiny-pokemon/umbreon.gif','images/shiny-pokemon/wooper.gif',
'images/shiny-pokemon/gliscor.gif','images/shiny-pokemon/gardevoir.gif','images/shiny-pokemon/luxio.gif','images/shiny-pokemon/giratina.gif'];

var currentIndex = 0;
let numOfShiny = 0;
function nextPokemon() {
  var shinyNum = Math.floor(Math.random()* 10);
  currentIndex = (currentIndex + 1) % pokemons.length;
  if(shinyNum == 8){
    numOfShiny++;
    document.getElementById('pokemon-header').style.fontSize ="larger";
    document.getElementById('pokemon-header').style.color = "yellow";
    document.getElementById('pokemon-footer').innerText = "Shiny Pokemon: " + numOfShiny;
    document.getElementById('pokemon-footer').style.color = "white";
    document.getElementById('pokemon-img').src = shinyPokemons[currentIndex];
    document.getElementById('pokemon-header').innerText = "SHINY !!!";
    if (currentIndex == 3){
      document.getElementById('pokemon-header').innerText = "SHINY !!! (yes this is the shiny lol)";
      document.getElementById('pokemon-header').style.fontSize ="80%";
    }
  }
  else{
    document.getElementById('pokemon-img').src = pokemons[currentIndex];
    document.getElementById('pokemon-header').innerText = "Click Me ⇩";
    document.getElementById('pokemon-header').style.color = "white";
    document.getElementById('pokemon-header').style.fontSize ="larger";
  }
}