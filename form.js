function billingFunction(){	
	//assign the values to variables
	var x = document.getElementById("shippingName").value;
	var y = document.getElementById("shippingZip").value;

	if (document.getElementById("same").checked) {
		document.getElementById("billingName").value=x;
		document.getElementById("billingZip").value=y;
	}
	else {
		document.getElementById("billingName").value="";
		document.getElementById("billingZip").value="";	
	}
}
