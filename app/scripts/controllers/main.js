'use strict';

angular.module('newTicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });



var gameBoard = ['','','','','','','','',''];

var turn = 'X';

var gameEnded = gameEnded || false;


function playGame() {
	var box = event.target.id; 
	var ind = box.substring(3) - 1;

	if( gameBoard[ind] == '' ) {

		if (turn == 'X') {
			fillArray('X')
			event.target.innerHTML = 'X';
			turn = 'O';
		} else {
			fillArray('O')
			event.target.innerHTML = 'O';
			turn = 'X';
		}
	} else {
		alert("Pick another box!" + ind);
	}
	// insert function to check win conditions
	winCondition();
	tieCondition();
}


function fillArray(player) {
	var box = event.target.id;
	var ind = box.substring(3) - 1;
	gameBoard[ind] = player;
	gameBoard[ind] = fillArray.length;
	// this is not populating the arrays with "X" or "O" to tell who is winning
	console.log(gameBoard[ind] = player)
}

// gameBoard = [0,1,2,3,4,5,6,7,8]

var wins=[[0, 1, 2, "row 1"],
		  [3, 4, 5, "row 2"],
		  [6, 7, 8, "row 3"],
		  [0, 3, 6, "column 1"],
		  [1, 4, 7, "column 2"],
		  [2, 5, 8, "column 3"],
		  [0, 4, 8, "diagonal 1"],
		  [2, 4, 6, "diagonal 2"]
		  ]

function winCondition(){
	for (var i = 0; i < wins.length; i++){
		if ((gameBoard[wins[i][0]] != "") && (gameBoard[wins[i][0]] == gameBoard[wins[i][1]]) && (gameBoard[wins[i][1]] == gameBoard[wins[i][2]]))
		{
			alert(gameBoard[wins[i][0]] + " win! by " + wins[i][3]);
			gameEnded = true;
		} 
	}
}

function tieCondition(){
	 gameEnded = true;

	for(var i = 0; i < gameBoard.length; i++)
		if (gameBoard[i]=="")
		{
			gameEnded = false;
			break;
		}

		if (gameEnded)
		{
			alert("it's a tie!");
			gameEnded = true;
		}
}	
	








function buttonClick(){
	alert( "my button was clicked!");
	
	// this is what i want the button to do
	// 	if there is nothing in the game board 
	// 		btn innerHTML should be ("play game!");
	// 	else
	// 		gameBoard array should be cleared 
	// 		gameBoard[ind] = (array.length == "")
	// 		btn innerHTML should be ("restart game!")
	
}

function pageLoaded(){
	var box = document.getElementsByClassName("box");
	// variable box is now identified as the classes named box
	for(var i = 0; i < box.length; ++i)
	// for (i=number) that is equal to 0, and number is less than the total numbers of box, add box by 1
		box[i].onclick = clickDiv;

}

