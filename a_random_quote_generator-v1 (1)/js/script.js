/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
Name: Leslio McKeown
******************************************/


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var red;
var green;
var blue;
var viewed_quotes =[];

function getRandomQuote(4){

  var quotes = [
  { <blockquote> // this is what will separate the " - " part of the sentence with the main quote.
  <p> "The hole in one's heart hets filled by others around you." </p>
    <footer> - Kakashi Hatake  " Naruto shippuden" </footer>
    </blockquote>
    },


  {
  <blockquote>
  <p> "We can't waste time worrying about the what-if's."</p>
    <footer> - Ichigo Kurosaki  Bleach </footer>
      </blockquote>
    },

  {
  <blockquote>
  <p> "Even your gravest mistakes shouldn't stop you from moving forward"</p>
    <footer> - Edward Elric Fullmetal Alchemist </footer>
        </blockquote>
    },

  {
  <blockquote>
  <p> "It's okay not to be okay as long as you are not giving up." </p>
    <footer>  - Karen Salmansohn   </footer>
          </blockquote>
     },

  {
  <blockquote>
  <p>"The truth will set you free, but first it will make you miserable."</p>
    <footer> - James A. Garfield  </footer>
          </blockquote>
    }
  ];
}

function printQuote(quote){
var output_div = document.getElementById('quote-box');
output_div.innerHTML = quotes;
}

function getRandomQuote(){
var getRandomQuote = math.floor(Math.random() * quotes.length);
var spliced_quote = quotes.splice(getRandomQuote, 1)[0];
viewed_quotes.push(spliced_quote);
if (quotes.length === 0){
  quotes = viewed_quotes;
  viewed_quotes = [];
}
  return spliced_quote
}

// this will make the background color change for each quote that was changed
function random_color_genarator(){
var random_color;
red = Math.floor(Math.random() * 256);
green = Math.floor(Math.random() * 256);
blue = Math.floor(Math.random() * 256);
random_color = 'rgb(' + red + ',' + green ',' + blue + ')';
return random_color
}

function printQuote(){
  var quotes = getRandomQuote();
	print(message);
  //Generate random color
  randomColorGenerator();
  //Update background with new random color
   document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}

// Remember to delete the comments that came with this file, and replace them with your own code comments.
