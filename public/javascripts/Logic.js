// Big Five Expressions
module.exports = {

logic: function(input1) {

var FinalExpression = "";

var tr;
var resultBigFive, resultValues;
var resultBigFiveName, resultValuesName;
var data = {};

tr = input1.tree;
child0 = tr.children[0].children[0];
child1 = tr.children[1];
child2 = tr.children[2];

function compareBigFive(input1){

  tr = input1.tree;
  child0 = tr.children[0].children[0];
  child1 = tr.children[1].children[0];
  child2 = tr.children[2].children[0];

  var i;

  resultBigFive = Math.max(/*child0.children[0].percentage,*/ child0.children[1].percentage, child0.children[2].percentage,
                    child0.children[3].percentage, child0.children[4].percentage);
  for(i = 0; i < 5; i++){
  if(resultBigFive == child0.children[i].percentage)
  resultBigFiveName = child0.children[i].name;
  }

  data.bigfive = resultBigFiveName;

  console.log(resultBigFive);
  console.log(resultBigFiveName);
  }

//function used to compare trait values to figure out which is the strongest
  function compareValues(input1){



    resultValues = Math.max(child2.children[0].percentage, child2.children[2].percentage,
                      child2.children[3].percentage, child2.children[4].percentage);

    for(var i = 0; i < 5; i++){
    if(resultValues == child2.children[i].percentage)
    resultValuesName = child2.children[i].name;
    }

    data.values = resultValuesName;

    console.log(resultValues);
    console.log(resultValuesName);

  }

    compareBigFive(input1);
    compareValues(input1);

//Choose largest traight value
  var resultNameFinal;
  var resultNumFinal = Math.max(resultBigFive, resultValues);

  if(resultNumFinal == resultBigFive)
  resultNameFinal = resultBigFiveName;
  else
    resultNameFinal = resultValuesName;


var philosopher;
var quote;
var focus;
var book;
var desc;
var wikiLink;
var imgLink;

//Switch case for output
switch(resultNameFinal){

	case ("Openness"):
			                  FinalExpression = "Openness precedes truth.";
                        philosopher = "Marcus Aurelius";
                        quote = "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.";
                        focus = "Stoicism";
                        book = "Meditations";
                        desc = "Marcus Aurelius was Roman Emperor from 161 to 180. He ruled with Lucius Verus as co-emperor from 161 until Verus' death in 169. He was the last of the Five Good Emperors, and is also considered one of the most important Stoic philosophers.";
                        wikiLink = "https://en.wikipedia.org/wiki/Marcus_Aurelius";
                        imgLink = "https://roberthorvat30.files.wordpress.com/2013/09/marcus-aurelius.jpg";
                        break;
  case("Conscientiousness"):
                        FinalExpression = "Conscientiousness is key.";
                        philosopher = "Plato";
                        quote = "Courage is knowing what not to fear.";
                        focus = "Epistemology, Justice, Virtue.";
                        book = "Meno";
                        desc = "Plato was a philosopher in Classical Greece and the founder of the Academy in Athens, the first institution of higher learning in the Western world. He is widely considered the most pivotal figure in the development of philosophy, especially the Western tradition.";
                        wikiLink = "https://en.wikipedia.org/wiki/Plato";
                        imgLink = "http://www.ourcivilisation.com/smartboard/shop/warnerr/plato.jpg";
                        break;
  case("Extraversion"):
                        FinalExpression = "Extraversion beats introversion.";
                        philosopher = "Socrates";
                        quote = "I know that I am intelligent, because I know that I know nothing.";
                        focus = "Epistemology, Ethics.";
                        book = "Meno";
                        desc = " was a classical Greek (Athenian) philosopher credited as one of the founders of Western philosophy. He is an enigmatic figure known chiefly through the accounts of classical writers, especially the writings of his students Plato and Xenophon and the plays of his contemporary Aristophanes. Through his portrayal in Plato's dialogues, Socrates has become renowned for his contribution to the field of ethics, and it is this Platonic Socrates who lends his name to the concepts of Socratic irony and the Socratic method, or elenchus.";
                        wikiLink = "https://en.wikipedia.org/wiki/Socrates";
                        imgLink = "http://images.greece.com/info/Socrates.jpg";
                        break;
  case("Agreeableness"):
                        FinalExpression = "Agreeableness overcomes conflict.";
                        philosopher = "Immanuel Kant";
                        quote = "Nothing is divine but what is agreeable to reason.";
                        focus = "Epistemology, Ethics, Metaphysics";
                        book = "Critique of Pure Reason";
                        desc = "Immanuel Kant was a German philosopher who is considered the central figure of modern philosophy. Kant argued that fundamental concepts of the human mind structure human experience, that reason is the source of morality, that aesthetics arises from a faculty of disinterested judgment, that space and time are forms of our sensibility, and that the world as it is in-itself is unknowable.";
                        wikiLink = "https://en.wikipedia.org/wiki/Immanuel_Kant";
                        imgLink = "http://pages.stolaf.edu/cis-tknapp/files/2013/05/Immanuel-Kant.jpg";
                        break;
  case("Neuroticism"):
                        FinalExpression = "Neuroticism is your form.";
                        philosopher = "Friedrich Nietzsche";
                        quote = "God is dead.";
                        focus = "Morality, Metaphysics, Epistemology";
                        book = "On the Genealogy of Morals";
                        desc = "Friedrich Nietzsche was a German philosopher, cultural critic, poet, and Latin and Greek scholar whose work has exerted a profound influence on Western philosophy and modern intellectual history. Nietzsche's body of writing spanned philosophical polemics, poetry, cultural criticism, aphorism, and fiction while displaying a fondness for metaphor and irony[10] and drawing variously on philosophy, art, history, religion, and science.";
                        wikiLink = "https://en.wikipedia.org/wiki/Friedrich_Nietzsche";
                        imgLink = "http://www.mbird.com/wp-content/uploads/2012/05/nietzsche.jpg";
                        break;
  case("Conservation"):
      FinalExpression = "Conservation holds your values to their primary state.";
                        philosopher = "Søren Kierkegaard";
                        quote = "Life is not a problem to be solved, but a reality to be experienced.";
                        focus = "Existentialism, Theology, Christian Ethics";
                        book = "Fear and Trembling";
                        desc = "Søren Kierkegaard was a Danish philosopher, theologian, poet, social critic and religious author who is widely considered to be the first existentialist philosopher.[1][2] He wrote critical texts on organized religion, Christendom, morality, ethics, psychology, and the philosophy of religion, displaying a fondness for metaphor, irony and parables.";
                        wikiLink = "https://en.wikipedia.org/wiki/Søren_Kierkegaard";
                        imgLink = "https://upload.wikimedia.org/wikipedia/commons/8/89/Kierkegaard.jpg";
                        break;
  case("Openness to Change"):
      FinalExpression = "Change is constant.";
                        philosopher = "Martin Heidegger";
                        quote = "Why are there beings at all, instead of nothing?";
                        focus = "Hermeneutics, Existentialism, Phenomenology";
                        book = "Being and Time";
                        desc = "Martin Heidegger was a German philosopher and a seminal thinker in the Continental tradition and philosophical hermeneutics, with a growing influence on Analytic philosophy. According to the IEP, he is widely acknowledged to be one of the most original and important philosophers of the 20th century. Heidegger is best known for his contributions to Phenomenology and Existentialism";
                        wikiLink = "https://en.wikipedia.org/wiki/Martin_Heidegger";
                        imgLink = "http://static1.squarespace.com/static/51c946cde4b0f05142538988/5278a958e4b085eb5a855185/54697d2ee4b0af17b2f6e2b7/1416202329851/Heiddeger.jpg?format=1000w";
                        break;
  case("Hedonism"):
      FinalExpression = "Hedonism is the form of self-indulgence.";
                        philosopher = "Epicurus";
                        quote = "Not what we have but what we enjoy, constitutes our abundance.";
                        focus = "Atomism, Hedonism, Materialism";
                        book = "On Atoms and the Void";
                        desc = "Epicurus was an ancient Greek philosopher as well as the founder of the school of philosophy called Epicureanism. For Epicurus, the purpose of philosophy was to attain the happy, tranquil life, characterized by ataraxia—peace and freedom from fear—and aponia—the absence of pain—and by living a self-sufficient life surrounded by friends. He taught that pleasure and pain are measures of what is good and evil; death is the end of both body and soul and should therefore not be feared; the gods neither reward nor punish humans; the universe is infinite and eternal; and events in the world are ultimately based on the motions and interactions of atoms moving in empty space.";
                        wikiLink = "https://en.wikipedia.org/wiki/Epicurus";
                        imgLink = "http://img.quotery.com/pictures/2013/03/epicurus.jpg";
                        break;
  case("Self-enhancement"):
      FinalExpression = "Self-enhancement is the path to difference.";
                        philosopher = "Bernie Sanders";
                        quote = "Difficult times often bring out the best in people.";
                        focus = "Making America DANK again";
                        book = "Outsider in the White House";
                        desc = "Bernie Sanders is a candidate for the Democratic nomination for President of the United States in the 2016 election. A Democrat as of 2015, Sanders had been the longest-serving independent in U.S. congressional history, though his caucusing with the Democrats entitled him to committee assignments and at times gave Democrats a majority.";
                        wikiLink = "https://en.wikipedia.org/wiki/Bernie_Sanders";
                        imgLink = "http://i.imgur.com/U9jykKi.jpg";
                        break;
  case("Self-transcendence"):
      FinalExpression = "Self-transcendence is the overcoming of limits.";
                        philosopher = "Immanuel Kant";
                        quote = "Experience without theory is blind, but theory without experience is mere intellectual play.";
                        focus = "Epistemology, Ethics, Metaphysics";
                        book = "Critique of Pure Reason";
                        desc = "Immanuel Kant was a German philosopher who is considered the central figure of modern philosophy. Kant argued that fundamental concepts of the human mind structure human experience, that reason is the source of morality, that aesthetics arises from a faculty of disinterested judgment, that space and time are forms of our sensibility, and that the world as it is in-itself is unknowable.";
                        wikiLink = "https://en.wikipedia.org/wiki/Immanuel_Kant";
                        imgLink = "https://upload.wikimedia.org/wikipedia/commons/8/89/Kierkegaard.jpg";
                        break;
  case("Emotional range"):
      FinalExpression = "Emotional range is the ability to understand, use, and analyze emotions in yourself and others.";
                        philosopher = "Confucius";
                        quote = "Our greatest glory is not in never falling, but in rising every time we fall.";
                        focus = "Morality";
                        book = "The Ethics of Confucius";
                        desc = "Confucius (551/552-479 BC) was a Chinese teacher, philosopher and politician during the so-called Hundred Schools of Thought era. He was the founder of Confucianism, ethical and philosophical system that still has many followers in China. The philosopher is thought to write or edit many Chinese classic texts but modern scholars have expressed doubt that he is really the author/editor of all the works that are traditionally attributed to him. But there is no doubt that Confucius’ philosophical system dominated the Chinese thought for many centuries.";
                        wikiLink = "https://en.wikipedia.org/wiki/Confucius";
                        imgLink = "https://upload.wikimedia.org/wikipedia/commons/5/54/Confucius_Tang_Dynasty.jpg";
                        break;

	default:
			FinalExpression = "Philosopher NOT dank enough";
}

console.log(FinalExpression);
console.log(philosopher);

//Nodejs data binding
data.finalexpression = FinalExpression;
data.philosopher = philosopher;
data.quote = quote;
data.focus = focus;
data.book = book;
data.desc = desc;
data.wikilink = wikiLink;
data.imglink = imgLink;

return data;
}
};
