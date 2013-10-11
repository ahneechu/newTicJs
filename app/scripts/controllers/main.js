'use strict';

angular.module('newTicApp')
  .controller('ticTacCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {
  	$scope.games=[];
  	$scope.queue = {};

  	// $scope.player = '';
  	// $scope.gameId = -1;

  	var games = new Firebase("https://newtictactoe.firebaseio.com/games");
  	angularFire(games, $scope, "games").then(function(){  

	  	// 
// });


	// var games = new Firebase("https://newtictactoe.firebaseio.com/games");
 //  	var promise = angularFire(games, $scope, "games", {});

   //  promise.then(function(){
    	$scope.games = {
			gameEnded: false,
    		gameBoard: ['','','','','','','','',''],
    		playerTurn: 1
    	};



    	$scope.clickBox = function(box){
    		if ($scope.games[$scope.gameId].gameBoard[box] != "X" && $scope.games[$scope.gameId].gameBoard[box] != "O") 
	    		{
	    		$scope.games[$scope.gameId].gameBoard[box] = ($scope.games[$scope.gameId].playerTurn % 2 == 1 ? "X" : "O");
	    		}
			// if($scope.games.gamegameEnded == true) 
			// return;

			// if($scope.games.gameBoard[box] !='')
			// 	// alert ("pick another box!");
			// return;

			// 	if($scope.games.playerTurn % 2 == 1)
			// 		$scope.games.gameBoard[box] = "X";	
			// 	else
			// 		$scope.games.gameBoard[box] ="O";


				$scope.win();
				$scope.tie();
				$scope.games[$scope.gameId].playerTurn++;

				console.log($scope.games[$scope.gameId].gameBoard[box]);
				console.log($scope.games[$scope.gameId].gameBoard);

	  // 	$scope.$watch("games.gameBoard", function(){
   //  		console.log("Game Ended: " + $scope.games.gameEnded);
   //  			$scope.win();
			// 	$scope.tie();
			// 	$scope.games.playerTurn++;
    			
			// console.log("Game Ended: " + $scope.games.gameEnded);
    	
   //  	}, true);	// Let's try "deep linking"

		};

		
	var wins=[[0, 1, 2, "row 1"],[3, 4, 5, "row 2"],[6, 7, 8, "row 3"],
			 [0, 3, 6, "column 1"],[1, 4, 7, "column 2"],[2, 5, 8, "column 3"],
			 [0, 4, 8, "diagonal 1"],[2, 4, 6, "diagonal 2"]];


		$scope.win = function(){
				for(var i = 0; i < wins.length; i++)
				if(($scope.games[$scope.gameId].gameBoard[wins[i][0]] != '') && 
					($scope.games[$scope.gameId].gameBoard[wins[i][0]] == $scope.games[$scope.gameId].gameBoard[wins[i][1]]) && 
					($scope.games[$scope.gameId].gameBoard[wins[i][1]] == $scope.games[$scope.gameId].gameBoard[wins[i][2]]))
					{
						// $scope.showWinMsg = $scope.games.gameBoard[wins[i][0]] + " win! by " + wins[i][3];
						$scope.games[$scope.gameId].gameEnded = true;
						$scope.showWinMsg = true;
						// alert($scope.gameBoard[wins[i][0]] + " win! by " + wins[i][3]);
						console.log($scope.games[$scope.gameId].gameEnded);
						// This is just as a test...
						$scope.showWinMsg = true;
						console.log($scope.showWinMsg);
					}
		};


		$scope.tie = function(){
			var mightBeEnded = true;

			for(var i = 0; i < $scope.games[$scope.gameId].gameBoard.length; i++)
				if($scope.games[$scope.gameId].gameBoard[i]=="")
				{
					mightBeEnded = false;
					break;
				}

				$scope.games[$scope.gameId].gameEnded = mightBeEnded;

				if($scope.games[$scope.gameId].gameEnded)
				{
					$scope.showTieMsg = true;
					console.log($scope.games[$scope.gameId].gameEnded);
					console.log($scope.showTieMsg);
					// alert("it's a tie!");
				}
		};



		$scope.resetClick = function(){
			for(var i = 0; i < $scope.games[$scope.gameId].gameBoard.length; i++){
				$scope.games[$scope.gameId].gameBoard[i] = '';	
			}
			$scope.games[$scope.gameId].playerTurn = 1;
			$scope.games[$scope.gameId].gameEnded = false;
			console.log($scope.games[$scope.gameId].gameBoard);
			// alert( "my button was clicked!");
		};

		$scope.playAgain = function(){
			for(var i = 0; i < $scope.games[$scope.gameId].gameBoard.length; i++){
				$scope.games[$scope.gameId].gameBoard[i] = '';	
			}
			$scope.showWinMsg = false;
			$scope.showTieMsg = false;
			$scope.games[$scope.gameId].playerTurn = 1;
			$scope.games[$scope.gameId].gameEnded = false;
			console.log($scope.games[$scope.gameId].gameBoard);
			// alert( "my button was clicked!");
		};


	var queue = new Firebase("https://newtictactoe.firebaseio.com/queue");
	  	angularFire(queue, $scope, "queue").then(function(){
	  		if($scope.queue.gameId == undefined)
	  		{
	  			console.log("I'm player 1");
	  			$scope.player = "p1";

	  			var newGame = 
		  			{
		  				gameEnded: false,
		    			gameBoard: ['','','','','','','','',''],
		    			playerTurn: 1,
		    			// win:
		    			// turnCount:
		  			};
	  			$scope.games = [];
	  			console.log($scope.games);
	  			$scope.gameId = $scope.games.push(newGame) -1;
	  			$scope.queue.gameId = $scope.gameId;
	  			console.log("player 1's game is: " + $scope.gameId);

	  			$scope.games.push(newGame);

	  			$scope.queue.gameId = $scope.gameId;
	  		}
	  		else
	  		{
	  			console.log("I'm player 2");
	  			$scope.player = "p2";

	  			$scope.gameId = $scope.queue.gameId;
	  			$scope.queue = {};
	  			console.log("player 2's game is: " + $scope.gameId);
	  		}

	  	});







	});

}]);

	// $scope.showWinMsg = function(winMsg){
		// 	console.log("line 47")
		// 	// $scope.win ? true : false;

		// 	if ($scope.win == true)
		// 	{
		// 		console.log("line 50")
		// 		winMsg = $scope.games.gameBoard[wins[i][0]] + " win! by " + wins[i][3];
		// 		// $scope.games.gameEnded;
		// 		console.log("line 53")
		// 	}
		// 	console.log("line 55")
		// 	if($scope.tie == true)
		// 	{
		// 		console.log("line 58")
		// 		winMsg = "it's a tie!"
		// 		// $scope.games.gameEnded;
		// 		console.log("line 61")
		// 	}
		// };
	