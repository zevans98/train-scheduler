$(document).ready(function(){
	// 1. Link to Firebase
	var config = {
        apiKey: "AIzaSyBgZMIPH_-PDBhiR3_nm3dltYiFWzc_L5w",
        authDomain: "train-ac126.firebaseapp.com",
        databaseURL: "https://train-ac126.firebaseio.com",
        projectId: "train-ac126",
        storageBucket: "train-ac126.appspot.com",
        messagingSenderId: "397356856464"
      };
      firebase.initializeApp(config)

      trainData = firebase.database();

	
	$("#addTrainBtn").on("click", function(){

		
		var trainName = $("#trainNameInput").val().trim();
		var lineName = $("#lineInput").val().trim();
		var destination = $("#destinationInput").val().trim();
		var trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
		var frequencyInput = $("#frequencyInput").val().trim();

		
		console.log(trainName);
		console.log(lineName);
		console.log(destination);
		console.log(trainTimeInput);
		console.log(frequencyInput);

		
		var newTrain = {
			name:  trainName,
			line: lineName,
			destination: destination,
			trainTime: trainTimeInput,
			frequency: frequencyInput,
		}

		
		

		
		$("#trainNameInput").val("");
		$("#lineInput").val("");
		$("#destinationInput").val("");
		$("#trainInput").val("");
        $("#frequencyInput").val("");
        
        var diffTime = moment().diff(moment.unix(trainTimeInput), "minutes");
		var timeRemainder = moment().diff(moment.unix(trainTimeInput), "minutes") % frequencyInput ;
		var minutes = frequencyInput - timeRemainder;

		var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A"); 
		
		
		console.log(minutes);
		console.log(nextTrainArrival);
		console.log(moment().format("hh:mm A"));
		console.log(nextTrainArrival);
		console.log(moment().format("X"));

		
		$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + lineName + "</td><td>"+ destination + "</td><td>" + frequencyInput + " mins" + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");

		
		return false;
	});

	
});
