'use strict';

angular.module('newTicApp')
  .controller('ticTacCtrl', ['$scope', 'angularFire', function ($scope, angularFire) {
  	$scope.games=[];
  	$scope.queue = {};

  	// $scope.player = '';
  	// $scope.gameId = -1;

  	var games = new Firebase("https://newtictactoe.firebaseio.com/games");
  	angularFire(games, $scope, "games").then(function(){  

  		var queue = new Firebase("https://newtictactoe.firebaseio.com/queue");
	  	angularFire(queue, $scope, "queue").then(function(){
	  		if($scope.queue.gameId == undefined)
	  		{
	  			console.log("I'm player 1");
	  			$scope.player = "player 1";

	  			var newGame = 
		  			{
		  				gameEnded: false,
		    			gameBoard: ['','','','','','','','',''],
		    			playerTurn: 'player 1',
		    			showWinMsg: false,
		    			showTieMsg: false,
		    			waitMsg: true,
		    			turnCount: 0
		  			};
	  			
	  			$scope.gameId = $scope.games.push(newGame) -1;
	  			$scope.queue.gameId = $scope.gameId;
	  			console.log("player 1's game is: " + $scope.gameId);

	  			$scope.games.push(newGame);

	  			$scope.queue.gameId = $scope.gameId;
	  		}
	  		else
	  		{
	  			console.log("I'm player 2");
	  			$scope.player = "player 2";
	  			

	  			$scope.gameId = $scope.queue.gameId;
	  			$scope.queue = {};
	  			console.log("player 2's game is: " + $scope.gameId);
	  			$scope.games[$scope.gameId].waitMsg = false;
	  		}

		// how do i remove all games from the queue???
		// var onComplete = function(removeQueue)
		// {
		// 	if ($scope.game[$scope.gameId].gameEnded = true)
		// 	{
		// 		$scope.queue.gameId.remove(onComplete);

		// 	}
		// };
		// $scope.games.remove();
		

	  	});


// });


	// var games = new Firebase("https://newtictactoe.firebaseio.com/games");
 //  	var promise = angularFire(games, $scope, "games", {});

   //  promise.then(function(){
   //  	$scope.games = {
			// gameEnded: false,
   //  		gameBoard: ['','','','','','','','',''],
   //  		playerTurn: 1
   //  	};



    	$scope.clickBox = function(box){
    		
    		if ((!$scope.games[$scope.gameId].waitMsg) && ($scope.player == $scope.games[$scope.gameId].playerTurn)) 
    			{
           		if ($scope.player == 'player 1') 
           			{
		              $scope.games[$scope.gameId].gameBoard[box] = 'X';
		            } 
		            else 
		            {
		              $scope.games[$scope.gameId].gameBoard[box] = 'O';
		            }
		            if ($scope.games[$scope.gameId].playerTurn == 'player 1') 
		            {
		              $scope.games[$scope.gameId].playerTurn = 'player 2';
		            } 
		            else 
		            {
		              $scope.games[$scope.gameId].playerTurn = 'player 1';
		            }
		        }
			    	
      
		      	$scope.win();
				$scope.tie();

				console.log($scope.games[$scope.gameId].playerTurn);
				console.log($scope.games[$scope.gameId].gameBoard[box]);
				console.log($scope.games[$scope.gameId].gameBoard);
				console.log(turnCount);
		    };

		    // NEW PLAYER TURN CODE THAT WORKS
		    //if ((!$scope.games[$scope.gameId].waitMsg) && ($scope.player == $scope.games[$scope.gameId].playerTurn)) 
    			// {
       //     		if ($scope.player == 'player 1') 
       //     			{
		     //          $scope.games[$scope.gameId].gameBoard[box] = 'X';
		     //        } 
		     //        else 
		     //        {
		     //          $scope.games[$scope.gameId].gameBoard[box] = 'O';
		     //        }
		     //        if ($scope.games[$scope.gameId].playerTurn == 'player 1') 
		     //        {
		     //          $scope.games[$scope.gameId].playerTurn = 'player 2';
		     //        } 
		     //        else 
		     //        {
		     //          $scope.games[$scope.gameId].playerTurn = 'player 1';
		     //        }
		     //    }
	     //        	$scope.win();
	     //    	    $scope.tie();

		    //     console.log($scope.games[$scope.gameId].playerTurn);
		    //     console.log($scope.games[$scope.gameId].gameBoard[box]);
		    //     console.log($scope.games[$scope.gameId].gameBoard);
	     //    };


	     	// OLD CODE THAT DOESNT WORK ANYMORE...
  //   		if ($scope.games[$scope.gameId].gameBoard[box] != "X" && $scope.games[$scope.gameId].gameBoard[box] != "O") 
	 //    		{
	 //    		$scope.games[$scope.gameId].gameBoard[box] = ($scope.games[$scope.gameId].playerTurn % 2 == 1 ? "X" : "O");
	 //    		$scope.games[$scope.gameId].playerTurn++;

	 //    		}

	 // //    	// EVEN OLDER CODE
		// // 	// if($scope.games.gamegameEnded == true) 
		// // 	// return;

		// // 	// if($scope.games.gameBoard[box] !='')
		// // 	// 	// alert ("pick another box!");
		// // 	// return;

		// // 	// 	if($scope.games.playerTurn % 2 == 1)
		// // 	// 		$scope.games.gameBoard[box] = "X";	
		// // 	// 	else
		// // 	// 		$scope.games.gameBoard[box] ="O";


		// 		$scope.win();
		// 		$scope.tie();

		// 		console.log($scope.games[$scope.gameId].playerTurn);
		// 		console.log($scope.games[$scope.gameId].gameBoard[box]);
		// 		console.log($scope.games[$scope.gameId].gameBoard);
		// };

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
						$scope.games[$scope.gameId].showWinMsg = true;
						// alert($scope.gameBoard[wins[i][0]] + " win! by " + wins[i][3]);
						console.log($scope.games[$scope.gameId].gameEnded);
						console.log($scope.games[$scope.gameId].showWinMsg);
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
					$scope.games[$scope.gameId].showTieMsg = true;
					console.log($scope.games[$scope.gameId].gameEnded);
					console.log($scope.games[$scope.gameId].showTieMsg);
					// alert("it's a tie!");
				}
		};



		$scope.resetClick = function(){
			for(var i = 0; i < $scope.games[$scope.gameId].gameBoard.length; i++){
				$scope.games[$scope.gameId].gameBoard[i] = '';	

			}
			$scope.games[$scope.gameId].playerTurn = 1;
			$scope.games[$scope.gameId].gameEnded = false;
			$scope.games[$scope.gameId].showWinMsg = false;
			$scope.games[$scope.gameId].showTieMsg = false;
			console.log($scope.games[$scope.gameId].gameBoard);
			// alert( "my button was clicked!");
		};


		$scope.playAgain = function(){
			for(var i = 0; i < $scope.games[$scope.gameId].gameBoard.length; i++){
				$scope.games[$scope.gameId].gameBoard[i] = '';	
			}
			$scope.games[$scope.gameId].playerTurn = 1;
			$scope.games[$scope.gameId].gameEnded = false;
			$scope.games[$scope.gameId].showWinMsg = false;
			$scope.games[$scope.gameId].showTieMsg = false;
			console.log($scope.games[$scope.gameId].gameBoard);
			// alert( "my button was clicked!");
		};


	});

}]);

	
	