
var inquirer = require('inquirer');
var ClozeCard = function(text, cloze){

this.text = text;
this.cloze = cloze;
this.partial = "..." + this.cloze; //only the cloze-deleted portion of the text.
this.fullText = this.text + " " + this.cloze; //fullText
this.Arr = [this.text, this.cloze, this.partial, this.fullText];
}

var test = new ClozeCard("Mario", "is a student at UM Coding Boot Camp")
inquirer
  .prompt([
    {
      type: 'list',
      name: test,
      message: test.partial,
      choices: [test.text, "test", "steve"],
      filter: function(val) {
        
        return val.toLowerCase();

      	}	

    }
   
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });