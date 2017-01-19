//Front end logic
$(document).ready(function() {
  $('.sentence').submit(function(event) {

    var userInput = $("input#input").val();
    alert(userInput);
    removePunct(userInput);
    makeSquare();
    populateArray();
    createCipher();


    event.preventDefault();
})/////SUBMIT ENDS


///Global Variables
var row = 0;
var col = 0;
var resultArray = [];
var inputSplit = [];


//Back End logic


//Step1 remove space and punctuations

var removePunct = function(userInput){

  userInput = userInput.replace(/[\W\s]/gi, '');

  inputSplit = userInput.split("");

};

//Step2 Make square

  var makeSquare = function(){
    var countChar = inputSplit.length;
    var squareRoot = Math.sqrt(countChar);
    var roundDown = Math.floor(squareRoot);
    var roundUp = Math.ceil(squareRoot);


    if(roundDown === roundUp){
      row = roundDown;
      col = roundDown;
    }else if( (roundDown * roundUp) >= countChar){
      col = roundUp;
      row = roundDown;
    }else{
      row = roundUp;
      col = roundUp;
    }

    var rowArray = new Array(row)
    var colArray = new Array(col)
    for (var i=0;i<col;i++) {
      colArray[i]=rowArray.slice();
    }
    resultArray = colArray;
  };


//Step3 insert the sentence to the resultArray

  var populateArray = function(){
    var i =0;
    for(var c=0; c < col; c++){
      for(var r=0; r < row; r++){
        resultArray[c][r] = inputSplit[i];
        i++;
        if (i > inputSplit.length) {
          resultArray[c][r] = ' ';
        };
      };
    };
    alert(resultArray)
  };

//Step4 Display the cipher
  var createCipher = function(){
      var cipher = '';

      for(var r=0; r < row; r++){
        for(var c=0; c < col; c++){
            cipher += resultArray[c][r];
        };
      };
      alert(cipher);
  }





});
