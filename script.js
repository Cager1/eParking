
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

