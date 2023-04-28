 function togglecolormode() {
	var background = document.body;
	background.classList.toggle("dark-mode");
}
function runupdatebykeyboard(event) {
	if (event.key == "Enter") {
		update();
	}
}
function update() {
	let topay = parseInt(document.getElementById("topay").value);
	let percent = parseInt(document.getElementById("percent").value);
	let extra = document.getElementById("extra").value;
	let calculate_extra;
	if (extra == "korting") {
		calculate_extra = -1;
	} else if (extra == "verhoging") {
		calculate_extra = 1;
	} else {
		alert("Fout! voer verhoging of korting in.");
	}
	let amount = parseInt(document.getElementById("amount").value);
	let result = (topay + ((topay * (percent / 100)) * calculate_extra)) * amount;
	let noextra = topay * amount;
	document.getElementById("result").innerHTML = result;
	document.getElementById("resultdata").innerHTML = "moest betalen voor een stuk: " + topay + "<br>procent: " + percent + "<br>korting of verhoging: " + extra + "<br>aantal: " + amount + "<br>moest betalen zonder korting/verhoging: " + noextra + "<br>aantal bespaard/meer betaald: " + Math.abs(result - noextra);

}
togglecolormode();
