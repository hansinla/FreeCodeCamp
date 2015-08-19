var quotes = [
{ "quote": "I love deadlines. I love the whooshing sound they make as they fly by.", "name": "Douglas Adams"
},
{ "quote": "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.", "name": "Douglas Adams"
},
{ "quote": "A teacher affects eternity; he can never tell where his influence stops.","name": "Henry B. Adams"
},
{ "quote": "Nothing in education is so astonishing as the amount of ignorance it accumulates in the form of inert facts.","name": "Henry B. Adams"
},
{ "quote": "Posterity: you will never know how much it has cost my generation to preserve your freedom. I hope you will make good use of it.","name": "John Quincy Adams"
},
{ "quote": "To the complaint, 'There are no people in these photographs,' I respond, 'There are always two people: the photographer and the viewer.'","name": "Ansel Adams"
},
{ "quote": "Life beats down and crushes the soul and art reminds you that you have one.","name": "Stella Adler"
},
{ "quote": "No act of kindness, no matter how small, is ever wasted.","name": "Aesop"
},
{ "quote": "We hang the petty thieves and appoint the great ones to public office.","name": "Aesop"
},
{ "quote": "Inside of a ring or out, ain't nothing wrong with going down. It's staying down that's wrong.","name": "Muhammad Ali"
},
  { "quote": "The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis.","name": "Dante Alighieri"
},
  { "quote": "No one ever owns his youth or the women he loves.","name": "Pedro Almodóvar"
},
  { "quote": "I have not failed. I've just found 10,000 ways that won't work.","name": "Thomas Alva Edison"
},
  { "quote": "If everything seems under control, you're just not going fast enough.","name": "Mario Andretti"
},
  { "quote": "I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass.","name": "Maya Angelou"
},
  { "quote": "It is the mark of an educated mind to be able to entertain a thought without accepting it.","name": "Aristotle"
},
  { "quote":  "One important key to success is self-confidence. An important key to self-confidence is preparation.","name": "Arthur Ashe"
},
  { "quote": "Life is pleasant. Death is peaceful. It's the transition that's troublesome.","name": "Isaac Asimov"
},
  { "quote":  "Life seems but a quick succession of busy nothings.","name": "Jane Austen"
},
  { "quote":  "It's easy to play any musical instrument: all you have to do is touch the right key at the right time and the instrument will play itself.","name": "Johann Sebastian Bach"
},
   { "quote": "Most of us are about as eager to be changed as we were to be born, and go through our changes in a similar state of shock.","name": "James Baldwin"
},
   { "quote":  "It's a very intimate experience, reading a book. You're as close as you get to anyone - except in bed. No, closer.","name": "J. G. Ballard"
},
   { "quote": "If you can’t explain to a 5 year-old what you’re doing, you don’t know what you’re doing.","name": "Robert D. Ballard"
},
   { "quote": "My hope is that gays will be running the world, because then there would be no war. Just a greater emphasis on military apparel.", "name": "Roseanne Barr"
},
   { "quote": "Thanks to my solid academic training, today I can write hundreds of words on virtually any topic without possessing a shred of information, which is how I got a good job in journalism.", "name": "Dave Barry"
}
];

$(document).ready(function(){
  // automatically load a quote once the DOM is loaded
  displayQuote();
});

function displayQuote(){
  // get random number between 0 and length of array
  var quoteNum = Math.floor(Math.random() * quotes.length);
  $("#quote").html("<div class='quote'>" + quotes[quoteNum].quote + "</div>" + "<div  class='name'><em>" + quotes[quoteNum].name + "</em></div>");
}

$( "#getQuote" ).click(function() {
  // button click handler get a new quote
  displayQuote();
});

$( "#tweetQuote" ).click(function() {
  // button click handler update Twitter status
  // don't want to expose secret keys in javascript files
  var url = "http://twitter.com";
  window.location.href = url;
  alert($("#quote").text());
});
