'use strict';

// angular.module('newTicApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });

function ticTacCtrl($scope){

$scope.gameBoard= ['','','','','','','','',''];

var playerTurn = 1;

var gameEnded = false;

$scope.clickBox = function(box){

	if($scope.gameBoard[box] !='')
		// alert ("pick another box!");
	return;

		if(playerTurn % 2 == 1)
			event.target.innerHTML = "X";	
		else
			event.target.innerHTML ="O";

		$scope.gameBoard[box]=event.target.innerHTML;

		playerTurn++;
alert(box);	
	}

$scope.win = function(){
	var wins=[[0, 1, 2, "row 1"],[3, 4, 5, "row 2"],[6, 7, 8, "row 3"],
			 [0, 3, 6, "column 1"],[1, 4, 7, "column 2"],[2, 5, 8, "column 3"],
			 [0, 4, 8, "diagonal 1"],[2, 4, 6, "diagonal 2"]]

	
			for(var i = 0; i < wins.length; i++)
				if (($scope.gameBoard[wins[i][0]] != '') && 
					($scope.gameBoard[wins[i][0]] == $scope.gameBoard[wins[i][1]]) && 
					($scope.gameBoard[wins[i][1]] == $scope.gameBoard[wins[i][2]]))
					{
				
						alert($scope.gameBoard[wins[i][0]] + " win! by " + wins[i][3]);
						gameEnded = true;
					} 				
	}
$scope.tie = function(){
	gameEnded = true;

	for(var i = 0; i < $scope.gameBoard.length; i++)
		if ($scope.gameBoard[i]=="")
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

}
	