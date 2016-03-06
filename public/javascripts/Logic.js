// Big Five Expressions
module.exports = {

logic: function(input1) {

var FinalExpression = "";

var tr;
var resultBigFive, resultValues;
var resultBigFiveName, resultValuesName;

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
  console.log(resultBigFive);
  console.log(resultBigFiveName);
  }

  function compareValues(input1){



    resultValues = Math.max(child2.children[0].percentage, /*child2.children[1].percentage, */child2.children[2].percentage,
                      child2.children[3].percentage, child2.children[4].percentage);

    for(var i = 0; i < 5; i++){
    if(resultValues == child2.children[i].percentage)
    resultValuesName = child2.children[i].name;
    }

    console.log(resultValues);
    console.log(resultValuesName);

  }

    compareBigFive(input1);
    compareValues(input1);

  var resultNameFinal;
  var resultNumFinal = Math.max(resultBigFive, resultValues);

  if(resultNumFinal == resultBigFive)
  resultNameFinal = resultBigFiveName;
  else
    resultNameFinal = resultValuesName;


var philosopher;
var philosopher2;

switch(resultNameFinal){

	case ("Openness"):
			FinalExpression = "Openness precedes all.";
                        philosopher = "Bernie Sanders";
                        break;
  case("Conscientiousness"):
      FinalExpression = "Conscientiousness is key.";
                        philosopher = "Plato";
                        break;
  case("Extraversion"):
      FinalExpression = "Extraversion beats introversion.";
                        philosopher = "Socrates";
                        break;
  case("Agreeableness"):
      FinalExpression = "Agreableness overcomes conflict.";
                        break;
  case("Neuroticism"):
      FinalExpression = "Neuroticism is your form.";
                        philosopher = "Friedrich Nietzsche";
                        break;
  case("Conservation"):
      FinalExpression = "Conservation holds your values to their primary state.";
                        philosopher = "Søren Kierkegaard";
                        philosopher = "Rene Descartes";
                        break;
  case("Openness to Change"):
      FinalExpression = "Change is constant.";
                        break;
  case("Hedonism"):
      FinalExpression = "Hedonism is the form of self-indulgence.";
                        philosopher = "Epicurus";
                        break;
  case("Self-enhancement"):
      FinalExpression = "Self-enhancement is the path to difference.";
                        philosopher = "Bernie Sanders";
                        break;
  case("Self-transcendence"):
      FinalExpression = "Self-transcendence is the overcoming of limits.";
                        philosopher = "Immanuel Kant";
                        break;

	default:
			FinalExpression = "lolwut u dun goofed ma frend";
}

console.log(FinalExpression);
console.log(philosopher);
console.log(philosopher2);
}
};
