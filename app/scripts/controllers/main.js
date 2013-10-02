'use strict';

angular.module('newTicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });



// var gameBoard = ['','','','','','','','',''];
// var turn = 'X';


// var wins=[[0, 1, 2],
// 		  [3, 4, 5],
// 		  [6, 7, 8],
// 		  [0, 3, 6],
// 		  [1, 4, 7],
// 		  [2, 5, 8],
// 		  [0, 4, 8],
// 		  [2, 4, 6]
// 		  ]


// // }




// function playGame() {
// 	var box = event.target.id; 
// 	var ind = box.substring(3) - 1;

// 	if( gameBoard[ind] == '' ) {

// 		if (turn == 'X') {
// 			fillArray('X')
// 			event.target.innerHTML = 'X';
// 			turn = 'O';
// 		} else {
// 			fillArray('O')
// 			event.target.innerHTML = 'O';
// 			turn = 'X';
// 		}
// 	} else {
// 		alert("Pick another box!" + ind);
// 	}

// }

// function fillArray(player) {
// 	var box = event.target.id;
// 	var ind = box.substring(3) - 1;
// 	gameBoard[ind] = player;
// 	gameBoard[ind] = fillArray.length;
// 	// this is not populating the arrays with "X" or "O" to tell who is winning
// 	console.log(gameBoard[ind] = player)
// }


// function buttonClick(){
// 	alert( "my button was clicked!");
	
// 	// this is what i want the button to do
// 	// 	if there is nothing in the game board 
// 	// 		btn innerHTML should be ("play game!");
// 	// 	else
// 	// 		gameBoard array should be cleared 
// 	// 		gameBoard[ind] = (array.length == "")
// 	// 		btn innerHTML should be ("restart game!")
	
// }


