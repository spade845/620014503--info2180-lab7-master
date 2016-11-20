window.onload =function() {

	var button =document.getElementById('lookup');
	var result =document.getElementById('result');
	country =document.getElementsByTagName('input')[0];
	all =document.getElementsByTagName('input')[1];

	button.onclick =function() {
		ajaxFunction(); 
		getCountry();
	};
};


function getCountry() {
	
	if(all.checked ) 
		all.setAttribute('value','true');

	var url = "world.php?country="+country.value+"&all="+all.value;

	httprequest.onreadystatechange = displayResults;
	httprequest.open("GET", url);
	httprequest.send();
}

function displayResults() {
	
	var output =document.getElementById('result');

	if (httprequest.readyState === XMLHttpRequest.DONE) {
		if (httprequest.status === 200) {
		 	countryInfo =httprequest.responseText;

		 	if (countryInfo[8]!=='<') {
		 		alert(countryInfo);
		 		output.innerHTML +='<h2> Result </h2>' +countryInfo;
			}
			else {
				alert(countryInfo);
				countryInfo ='no result found';
				output.innerHTML ='<h2> Result </h2>' +countryInfo;
			}
		}
	}
}

function ajaxFunction() {

	if (window.XMLHttpRequest) 
		httprequest =new XMLHttpRequest();
	else 
		httprequest =new ActiveXObject('Microsoft.XMLHTTP');
}
