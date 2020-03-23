
fetch('http://smart.sum.ba/parking?withParkingSpaces=1', {
})
	.then(res => res.json())
	.then(data => {
		var occu = [];
		for (var i = 1; i < 63; i++) {
			var value = data[0].parkingSpaces[i-1].occupied;
			occu.push(value);
		}

		for (var i = 1; i < occu.length + 1; i++) {
			if (occu[i - 1] == 1) {
				document.getElementById(i).style.backgroundColor = "red";
			} else {
				document.getElementById(i).style.backgroundColor = "green";
			}
		}
	})


var socket = io.connect('http://smart.sum.ba/parking-events')


socket.on('parking-lot-state-change', function(data) {
	console.log(data)
	console.log(data.id_parking_space);
	console.log("State change on " + data.id_parking_space + " parking spot");
	if (data.occupied == 1) {
		document.getElementById(data.id_parking_space).style.backgroundColor = "red";
		document.getElementById(data.id_parking_space).innerHTML = "Red";
	} else {
		document.getElementById(data.id_parking_space).style.backgroundColor = "green";
		document.getElementById(data.id_parking_space).innerHTML = "Green";
	}
})


