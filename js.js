var foods = ["Banana Pie", "Pizza","Apple Pie"];
function displayfood() {
	// body...
	document.getElementById("foods").innerHTML = foods;
}
function favfood() {
	// body...
	var food = prompt("Enter Food! ");
	foods[foods.length] = food;
	document.getElementById("foods").innerHTML = foods;
}


function opened(){
			document.getElementById('demo').style.color='red';
			document.getElementById('demo').style.display='block'; 
			document.getElementById('close').style.display='inline-block';
		}
		// "" and '' are not same in javascript. It took me hours to figure this out. :|
		// for a value always use ''
function closed() {
	document.getElementById('demo').style.color='white';
	document.getElementById('demo').style.display='none';
	document.getElementById('close').style.display='none';
	// body...
}