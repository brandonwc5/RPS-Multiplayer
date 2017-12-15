$(document).ready(function(){
	// Initialize Firebase
  	var config = {
	    apiKey: "AIzaSyCYe2XjlAIBBUjHPfJ7Gt-P1QPG4iJnc_Q",
	    authDomain: "rps-multiplayer-2ce35.firebaseapp.com",
	    databaseURL: "https://rps-multiplayer-2ce35.firebaseio.com",
	    projectId: "rps-multiplayer-2ce35",
	    storageBucket: "",
	    messagingSenderId: "756062061249"
  	};
  	firebase.initializeApp(config);
	
	var database = firebase.database();
	var childDB = database.ref();

	//set up variables
	var player1 ="";
	var player2;
	var player1Choice;
	var player2Choice;
	var outcome = "";
	var wins =0;
	var losses =0;
	var players = [];
	var options = ["r","p","s"];

	// connectionsRef references a specific location in the database.
	// All of our connections will be stored in this directory.
	// var connectionsRef = database.ref("/connections");
	// // '.info/connected' is a special location provided by Firebase that is updated
	// // every time the client's connection state changes.
	// // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
	// var connectedRef = database.ref(".info/connected");
	// // When the client's connection state changes...
	// connectedRef.on("value", function(snap) {
	//   // If they are connected..
	//   if (snap.val()) {

	//     // Add user to the connections list.
	//     var con = connectionsRef.push(true);
	//     // Remove user from the connection list when they disconnect.
	//     con.onDisconnect().remove();
 //  		}
	// });

	//Put name in input, click start, creates player in firebase
	$("#startButton").on("click", function(){
		if(player1 == ""){
			event.preventDefault();

			//Get the value of the user input
			player1 = $("#nameInput").val().trim();
			var playerOne = {
				name: player1,
				Wins: wins,
				choice: player1Choice;
				Losses: losses,
				Outcome: outcome
			}
			$("#input").attr("display", "none");//Need to figure out how to make input box go away

			database.ref().push(playerOne);
			console.log(playerOne.name);
			$("#player1").html(player1);
			$("#player1").append("<div id=rock>Rock</div>");
			$("#player1").append("<div id=paper>Paper</div>");
			$("#player1").append("<div id=scissors>Scissors</div>");
		} else {
			//Get the value of the user input
			player2 = $("#nameInput").val().trim();
			var playerTwo = {
				name: player2,
				Wins: wins,
				Losses: losses,
				Outcome: outcome
			}

			database.ref().push(playerTwo);
			console.log(playerTwo.Wins);

			$("#player2").html(player2);
			$("#player2").append("<div id=rock>Rock</div>");
			$("#player2").append("<div id=paper>Paper</div>");
			$("#player2").append("<div id=scissors>Scissors</div>");
		}
	});
	database.ref().on("value", function(snapshot){
		console.log(snapshot.val());
		$("#player2").html(player2);
		$("#wins").html(wins);
		$("#losses").html(losses);
	})


	$("#rock").on("click", function(){
		player1Choice = "r";
		playerOne.
	})
	//Game rules
	var rules = function(val){
		 if (player1Choice == player2Choice) {
          alert("You Tie!");
        }
        else if ((player1Choice == "s") && (player2Choice == "r")) {
          losses++;
          alert("You Lose");
        }
        else if ((player1Choice == "p") && (player2Choice == "s")) {
          losses++;
          alert("You Lose!");
        }
        else if ((player1Choice == "r") && (player2Choice == "p")) {
          losses++;
          alert("You Lose");
        }        
        else if ((player1Choice == "r") && (player2Choice == "s")) {
          wins++;
          alert("You Win!");
        }
        else if ((player1Choice == "s") && (player2Choice == "p")) {
          wins++;
          alert("You Win!");
        }
        else if ((player1Choice == "p") && (player2Choice == "r")) {
          wins++;
          outcome = "player1 Wins!"
          alert("You Win");
        }
	}
	$("#rock").on("click", function(){
		player1Choice = "Rock";
		$("player1").html("Rock");
		console.log(player1Choice);
	})
	$("#scissors").on("click", function(){
		player1Choice = "scissors";
		$("player1").html("scissors");
		console.log(player1Choice);
	})
	$("#paper").on("click", function(){
		player1Choice = "Paper";
		$("player1").html("Paper");
		console.log(player1Choice);
	})

})