
var inquirer = require('inquirer');
var ClozeCard = function(text, cloze){

this.text = text;
this.cloze = cloze;
this.partial = "..." + this.cloze; //only the cloze-deleted portion of the text.
this.fullText = this.text + " " + this.cloze; //fullText
this.Arr = [this.text, this.cloze, this.partial, this.fullText];
}


var question0 = new ClozeCard("Trump", "What is the last name of the CURRENT US President");
var question1 = new ClozeCard("Obama", "What is the last name of the PREVIOUS US President");
var question2 = new ClozeCard("Washington", "What is the last name of the FIRST US President");
var arrQuestion = [];
arrQuestion.push(question0, question1, question2); //questions
var i =0;
var summary= [];
var userInput = process.argv[2]  // not needed


Question();


function Question(){
var question = arrQuestion[i].Arr[1]
var correctAnswer = arrQuestion[i].Arr[0];

console.log('***********************************************************');
console.log('*                                                         *');
console.log('*                Question ' + i +'                               *');
console.log('*  '+ question +'         *');
console.log('*                                                         *');
console.log('*                           	                          *');
console.log('***********************************************************');
inquirer
  .prompt([
    {
     
      type: 'list',
      name: 'Your_Answer',
      message: question,
      choices: ['Schwarzenegger', arrQuestion[i].Arr[0], 'Clinton', 'Jefferson']

      
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
   //console.log(answers.Your_Answer);
   var a =answers.Your_Answer;  //a is for usersChoice
   
  
   if (i >=2){
   	console.log('GAME OVER');
   	console.log("Your answer: " + a + " and the correct answer : " + correctAnswer + "\n" );
   	console.log("previous questions and answers summary : \n ");
   	console.log(summary);

   
  }

   else if(i <=2 && a === correctAnswer){
   	console.log('Thats is the correct answer');
   	
   	i++;
   	Question();
   	
   }

   else if (i <=2 && a !== correctAnswer) {
	console.log('Thats is not correct');
   
   		i++;
   	Question();

   }
   summary.push({"Question ": question, " Your_Answer ": a, " Correct_Answer ": correctAnswer });

  });

};