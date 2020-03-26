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


var socket = io.connect('http://smart.sum.ba/parking-events');


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
});


(function() {
	scrollTo1();
})();

function scrollTo1() {
	const links = document.querySelectorAll('.scroll');
	links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

window.scrollTo(0,100000000);
