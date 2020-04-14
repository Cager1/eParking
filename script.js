window.scrollTo(0, 50000);
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
				document.getElementById(i).style.pointerEvents = "none";
				if (i >= 1 && i <= 13) {
					//top
					document.getElementById(i).classList.add("carUp");
				}else if (i >= 14 && i <= 20) {
					//right
					document.getElementById(i).classList.add("carRight");
				}else if (i >= 21 && i <= 27) {
					//left
					document.getElementById(i).classList.add("carLeft");
				}else if (i >= 28 && i <= 62) {
					//right
					document.getElementById(i).classList.add("carRight");
				}

			} else {
				document.getElementById(i).style.backgroundColor = "green";
				document.getElementById(i).style.cursor = "pointer";
			}
		}
	})

var socket = io.connect('http://smart.sum.ba/parking-events');


socket.on('parking-lot-state-change', function(data) {
	console.log(data)
	console.log(data.id_parking_space);
	console.log("State change on " + data.id_parking_space + " parking spot");
	if (data.occupied == 1) {
		document.getElementById(data.id_parking_space).style.backgroundColor = "red";
		document.getElementById(data.id_parking_space).style.pointerEvents = "none";
		document.getElementById(data.id_parking_space).style.cursor = " ";
		if (data.id_parking_space >= 1 && data.id_parking_space <= 13) {
			//top
			document.getElementById(data.id_parking_space).classList.add("carUp");
		}else if (data.id_parking_space >= 14 && data.id_parking_space <= 20) {
			//right
			document.getElementById(data.id_parking_space).classList.add("carRight");
		}else if (data.id_parking_space >= 21 && data.id_parking_space <= 27) {
			//left
			document.getElementById(data.id_parking_space).classList.add("carLeft");
		}else if (data.id_parking_space >= 28 && data.id_parking_space <= 62) {
			//right
			document.getElementById(data.id_parking_space).classList.add("carRight");
		}

	} else {
		document.getElementById(data.id_parking_space).style.backgroundColor = "green";
		document.getElementById(data.id_parking_space).style.pointerEvents = " ";
		if (data.id_parking_space >= 1 && data.id_parking_space <= 13) {
			//top
			document.getElementById(data.id_parking_space).classList.remove("carUp");
		}else if (data.id_parking_space >= 14 && data.id_parking_space <= 20) {
			//right
			document.getElementById(data.id_parking_space).classList.remove("carRight");
		}else if (data.id_parking_space >= 21 && data.id_parking_space <= 27) {
			//left
			document.getElementById(data.id_parking_space).classList.remove("carLeft");
		}else if (data.id_parking_space >= 28 && data.id_parking_space <= 62) {
			//right
			document.getElementById(data.id_parking_space).classList.remove("carRight");
		}
	}
});
