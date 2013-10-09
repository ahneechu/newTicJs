'use strict';

angular.module('newTicApp')
  .controller('ticTacCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {

	var url = new Firebase("https://newtictactoe.firebaseio.com/games");
  	$scope.games={};
  	var promise = angularFire(url, $scope, "games");

    promise.then(function(){
    	$scope.games = {
    		gameBoard: ['','','','','','','','',''],
    		playerTurn: 1,
			gameEnded: false
    	};
  

    	$scope.clickBox = function(box){
			console.log("line 19")
			if ($scope.games.gameEnded == true) 
			return;

			if($scope.games.gameBoard[box] !='')
				// alert ("pick another box!");
			return;

				if($scope.games.playerTurn % 2 == 1)
					$scope.games.gameBoard[box] = "X";	
				else
					$scope.games.gameBoard[box] ="O";

				$scope.games.playerTurn++;

				console.log($scope.games.gameBoard[box])
				console.log($scope.games.gameBoard)
// alert(box);	
		};


		$scope.win = function(){
			var wins=[[0, 1, 2, "row 1"],[3, 4, 5, "row 2"],[6, 7, 8, "row 3"],
					 [0, 3, 6, "column 1"],[1, 4, 7, "column 2"],[2, 5, 8, "column 3"],
					 [0, 4, 8, "diagonal 1"],[2, 4, 6, "diagonal 2"]];

	
			for(var i = 0; i < wins.length; i++)
				if (($scope.games.gameBoard[wins[i][0]] != '') && 
					($scope.games.gameBoard[wins[i][0]] == $scope.games.gameBoard[wins[i][1]]) && 
					($scope.games.gameBoard[wins[i][1]] == $scope.games.gameBoard[wins[i][2]]))
					{
						$scope.winMsg = $scope.games.gameBoard[wins[i][0]] + " win! by " + wins[i][3];
						// alert($scope.gameBoard[wins[i][0]] + " win! by " + wins[i][3]);
						$scope.games.gameEnded = true;
					} 				
		};

	
		$scope.winMsg = "";

		$scope.tie = function(){
			$scope.games.gameEnded = true;

			for(var i = 0; i < $scope.games.gameBoard.length; i++)
				if ($scope.games.gameBoard[i]=="")
				{
					$scope.games.gameEnded = false;
					break;
				}

				if ($scope.games.gameEnded)
				{
					$scope.winMsg = "It's a tie!";
					// alert("it's a tie!");
					$scope.games.gameEnded = true;
				}
		};

		$scope.resetClick = function(){
			// var box = $scope.gameBoard[box]; 
			for(var i = 0; i < $scope.games.gameBoard.length; i++){
				$scope.games.gameBoard[i] = '';	
			}
			// gameBoard = ['','','','','','','','',''];
			$scope.games.playerTurn = 1;
			console.log($scope.games.gameBoard);
			// alert( "my button was clicked!");
		};

		$scope.playAgain = function(){
			// var box = $scope.gameBoard[box]; 
			for(var i = 0; i < $scope.games.gameBoard.length; i++){
				$scope.games.gameBoard[i] = '';	
			}
			// gameBoard = ['','','','','','','','',''];
			$scope.winMsg = "";
			$scope.games.playerTurn = 1;
			console.log($scope.games.gameBoard);
			// alert( "my button was clicked!");
		};

	});

}]);
	