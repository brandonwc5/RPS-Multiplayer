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

	//set up variables
	var player1 ="";
	var player2;
	var userChoice;
	var outcome = "";
	var wins =0;
	var losses =0;

	// connectionsRef references a specific location in the database.
	// All of our connections will be stored in this directory.
	var connectionsRef = database.ref("/connections");
	console.log(connectionsRef);
	// '.info/connected' is a special location provided by Firebase that is updated
	// every time the client's connection state changes.
	// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
	var connectedRef = database.ref(".info/connected");
	console.log(connectedRef);
	// When the client's connection state changes...
	connectedRef.on("value", function(snap) {
	  // If they are connected..
	  if (snap.val()) {

	    // Add user to the connections list.
	    var con = connectionsRef.push(true);
	    // Remove user from the connection list when they disconnect.
	    console.log(connectedRef);
	    con.onDisconnect().remove();
  		}
	});

	//Put name in input, click start, creates player in firebase
	$("#startButton").on("click", function(){
		if(player1 == ""){
			event.preventDefault();

			//Get the value of the user input
			player1 = $("#nameInput").val().trim();

			$("#input").attr("display", "none");//Need to figure out how to make input box go away

			database.ref().push({
				Player1: {
					name: player1,
					//Choice: userChoice,
					Wins: wins,
					Losses: losses,
					Outcome: outcome
				}
			})

			$("#player1").html(player1);
			$("#wins").html(wins);
			$("#losses").html(losses);
			$("#rock").html("Rock");
		} else {
			//Get the value of the user input
			player2 = $("#nameInput").val().trim();

			$("#input").attr("display", "none");//Need to figure out how to make input box go away

			database.ref().push({
				Player2: {
					name: player2,
					//Choice: userChoice,
					Wins: wins,
					Losses: losses,
					Outcome: outcome
				}
			})

			$("#player2").html(player2);
			$("#wins").html(wins);
			$("#losses").html(losses);
			$("#rock").html("Rock");
		}
	});
	database.ref().on("value", function(snapshot){
		console.log(player1);

	})

	var rules = function(val){
		if(player1.choice == "paper" && player2.choice == "rock"){
			alert(player1 + "Wins!!!");
		}
	}
	player1.delete();
})