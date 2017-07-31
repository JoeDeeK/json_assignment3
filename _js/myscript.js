//ASSIGNMENT 3

var mapCampus;
var lat;
var lng;

$(document).on("pagebeforeshow", "#mainPage", function() {
	$.ajax({
		type: "POST", url: "torontoWeather.json", dataType: "json", 
		success: loadCollapsible,
		error: function (request,error) {
			alert('Network error has occurred'); }
	});
	
	$.ajax({
		type: "POST", url: "myJSON.json", dataType: "json", 
		success: loadSecondCollapsible,
		error: function (request,error) {
            alert('Network error has occurred'); }
	});
});	

function loadCollapsible(data) {		
	//var lat and lng from json
	lat = data.query.results.channel.item.lat;
	lng = data.query.results.channel.item.long;
	
	//Header section
	$("#header").html("<img src='" +  data.query.results.channel.image.url + "' height='' width=''><br>");
	$("#header").append(data.query.results.channel.lastBuildDate);
	
	//Main section
	$("#locationMain").html(
		"<h2>Location</h2>" +
		"<h3>City: " + data.query.results.channel.location.city + "</h3>" +
		"<h3>Country: " + data.query.results.channel.location.country + "</h3>" +
		"<h3>Region: " + data.query.results.channel.location.region + "</h3>" +
		"<br>" +
		"<a href='#windPanel' class='ui-btn ui-icon-wind ui-btn-icon-left'>Wind</a>" +
		"<a href='#atmospherePanel' class='ui-btn ui-icon-atmosphere ui-btn-icon-left'>Atmosphere</a>" +				
		"<a href='#astronomyPanel' class='ui-btn ui-icon-astronomy ui-btn-icon-left'>Astronomy</a>" +
		"<br>" +
		"<a href='#formPage' class='ui-btn ui-icon-form ui-btn-icon-left'>Form</a>"
	);
	
	$("#wind").html(
		"<h4>Chill: " + data.query.results.channel.wind.chill + "</h4>" +
		"<h4>Direction: " + data.query.results.channel.wind.direction + "</h4>" +
		"<h4>Speed: " + data.query.results.channel.wind.speed + "</h4>");
	$("#atmosphere").html(
		"<h4>Humidity: " + data.query.results.channel.atmosphere.humidity + "</h4>" +
		"<h4>Pressure: " + data.query.results.channel.atmosphere.pressure + "</h4>" +
		"<h4>Rising: " + data.query.results.channel.atmosphere.rising + "</h4>" +
		"<h4>Visibility: " + data.query.results.channel.atmosphere.visibility + "</h4>");
	$("#astronomy").html(
		"<h4>Sunrise: " + data.query.results.channel.astronomy.sunrise + "</h4>" +
		"<h4>Sunset: " + data.query.results.channel.astronomy.sunset + "</h4>");
	
	//Button for collapsible map
	$("#mapBtn").click(function(){
		//map set up
		mapCampus = new google.maps.LatLng(lat, lng);
		mapOptions = {
			center: mapCampus,
			zoom: 18, 
			mapTypeId: google.maps.MapTypeId.HYBRID
		}
		map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		//marker
		myLoc = new google.maps.Marker({
			map: map,
			icon: "pushpin.gif",
			animation: google.maps.Animation.DROP,
			position: mapCampus
		});
		//info window
		info = new google.maps.InfoWindow ({
			content: data.query.results.channel.item.title
		});
		//add listener
		google.maps.event.addListener(myLoc, "click", function(){
			info.open(map, myLoc);
		});
	});
	
	$("#fList").html("<h2>Forecast</h2><p id='forecastBtns'></p>");
	//for loop for forecast buttons
	for(var x = 0; x < data.query.results.channel.item.forecast.length; x++){
		$("#forecastBtns").append(
		"<a id='n" + x + "' href='#forecastPopup' class='ui-btn'>Date:" + 
			data.query.results.channel.item.forecast[x].date + "</a>");
	}
	
	$("#n0").click(function() {
		$("#date").html("Date: " + data.query.results.channel.item.forecast[0].date);
		//$("#code").html("Code: " + data.query.results.channel.item.forecast[0].code);
		$("#day").html("Day: " + data.query.results.channel.item.forecast[0].day);
		$("#high").html("High: " + data.query.results.channel.item.forecast[0].high);
		$("#low").html("Low: " + data.query.results.channel.item.forecast[0].low);
		$("#text").html("Weather: " + data.query.results.channel.item.forecast[0].text);
	});
	$("#n1").click(function() {
		$("#date").html("Date: " + data.query.results.channel.item.forecast[1].date);
		//$("#code").html("Code: " + data.query.results.channel.item.forecast[1].code);
		$("#day").html("Day: " + data.query.results.channel.item.forecast[1].day);
		$("#high").html("High: " + data.query.results.channel.item.forecast[1].high);
		$("#low").html("Low: " + data.query.results.channel.item.forecast[1].low);
		$("#text").html("Weather: " + data.query.results.channel.item.forecast[1].text);
	});
	$("#n2").click(function() {
		$("#date").html("Date: " + data.query.results.channel.item.forecast[2].date);
		//$("#code").html("Code: " + data.query.results.channel.item.forecast[2].code);
		$("#day").html("Day: " + data.query.results.channel.item.forecast[2].day);
		$("#high").html("High: " + data.query.results.channel.item.forecast[2].high);
		$("#low").html("Low: " + data.query.results.channel.item.forecast[2].low);
		$("#text").html("Weather: " + data.query.results.channel.item.forecast[2].text);
	});
	$("#n3").click(function() {
		$("#date").html("Date: " + data.query.results.channel.item.forecast[3].date);
		//$("#code").html("Code: " + data.query.results.channel.item.forecast[3].code);
		$("#day").html("Day: " + data.query.results.channel.item.forecast[3].day);
		$("#high").html("High: " + data.query.results.channel.item.forecast[3].high);
		$("#low").html("Low: " + data.query.results.channel.item.forecast[3].low);
		$("#text").html("Weather: " + data.query.results.channel.item.forecast[3].text);
	});
	$("#n4").click(function() {
		$("#date").html("Date: " + data.query.results.channel.item.forecast[4].date);
		//$("#code").html("Code: " + data.query.results.channel.item.forecast[4].code);
		$("#day").html("Day: " + data.query.results.channel.item.forecast[4].day);
		$("#high").html("High: " + data.query.results.channel.item.forecast[4].high);
		$("#low").html("Low: " + data.query.results.channel.item.forecast[4].low);
		$("#text").html("Weather: " + data.query.results.channel.item.forecast[4].text);
	});
	$("#n5").click(function() {
		$("#date").html("Date: " + data.query.results.channel.item.forecast[5].date);
		//$("#code").html("Code: " + data.query.results.channel.item.forecast[5].code);
		$("#day").html("Day: " + data.query.results.channel.item.forecast[5].day);
		$("#high").html("High: " + data.query.results.channel.item.forecast[5].high);
		$("#low").html("Low: " + data.query.results.channel.item.forecast[5].low);
		$("#text").html("Weather: " + data.query.results.channel.item.forecast[5].text);
	});
	$("#n6").click(function() {
		$("#date").html("Date: " + data.query.results.channel.item.forecast[6].date);
		//$("#code").html("Code: " + data.query.results.channel.item.forecast[6].code);
		$("#day").html("Day: " + data.query.results.channel.item.forecast[6].day);
		$("#high").html("High: " + data.query.results.channel.item.forecast[6].high);
		$("#low").html("Low: " + data.query.results.channel.item.forecast[6].low);
		$("#text").html("Weather: " + data.query.results.channel.item.forecast[6].text);
	});
	$("#n7").click(function() {
		$("#date").html("Date: " + data.query.results.channel.item.forecast[7].date);
		//$("#code").html("Code: " + data.query.results.channel.item.forecast[7].code);
		$("#day").html("Day: " + data.query.results.channel.item.forecast[7].day);
		$("#high").html("High: " + data.query.results.channel.item.forecast[7].high);
		$("#low").html("Low: " + data.query.results.channel.item.forecast[7].low);
		$("#text").html("Weather: " + data.query.results.channel.item.forecast[7].text);
	});
	$("#n8").click(function() {
		$("#date").html("Date: " + data.query.results.channel.item.forecast[8].date);
		//$("#code").html("Code: " + data.query.results.channel.item.forecast[8].code);
		$("#day").html("Day: " + data.query.results.channel.item.forecast[8].day);
		$("#high").html("High: " + data.query.results.channel.item.forecast[8].high);
		$("#low").html("Low: " + data.query.results.channel.item.forecast[8].low);
		$("#text").html("Weather: " + data.query.results.channel.item.forecast[8].text);
	});
	$("#n9").click(function() {
		$("#date").html("Date: " + data.query.results.channel.item.forecast[9].date);
		//$("#code").html("Code: " + data.query.results.channel.item.forecast[9].code);
		$("#day").html("Day: " + data.query.results.channel.item.forecast[9].day);
		$("#high").html("High: " + data.query.results.channel.item.forecast[9].high);
		$("#low").html("Low: " + data.query.results.channel.item.forecast[9].low);
		$("#text").html("Weather: " + data.query.results.channel.item.forecast[9].text);
	});
	
	
	//form submit
	$("#formSubmit").click(function(){
		//save to local storage
		emailEntered = $("#emailText").val();
		typeSelected = $("input[name='selectedType']:checked").attr("value");
		message = $("#textBox").val();
		
		localStorage.setItem("email", emailEntered);
		localStorage.setItem("type", typeSelected);
		localStorage.setItem("message", message);
		
		alert("Your Question/Comment has been Saved");
		
		//display in viewSubmission
		$("#viewSubmission").html(
			"<h1>Question/Comment: <h1>" +
			"<h2>Email: " + localStorage.getItem("email") + "<br>" +
			"Type: " + localStorage.getItem("type") + "<br>" +
			"Message: " + localStorage.getItem("message") + "</h2><br><hr>" 
		);
		
	});
	
	//form display last submitted
	$("#lastSubmit").click(function(){
		//display in viewSubmission
		$("#viewSubmission").html( "<h3>Recently Saved </h3><br><br>" + 
			"<h1>Question/Comment: </h1>" +
			"<h2>Email: " + localStorage.getItem("email") + "<br>" +
			"Type: " + localStorage.getItem("type") + "<br>" +
			"Message: " + localStorage.getItem("message") + "</h2><br><hr>" 
		);
	});
	
	$("#main").collapsibleset("refresh");
}

function loadSecondCollapsible(data) {	
	//Popup aboutInfo section
	$("#aboutInfo").html("<p style='text-align:center;'><img src='_images/" + 
															data.student.image + "' width='50%'></p>")	
	$("#aboutInfo").append("<br><table>" + 
								"<tr><th>Student Name:  </th><td>" + data.student.name + "</td></tr>" +
									"<tr><th>Student Number:  </th><td>" +	data.student.studentNumber + "</td></tr>" +
										"<tr><th>Program:  </th><td>" +	data.student.program + "</td></tr>" +
											"<tr><th>Quote:  </th><td>" +	data.student.quote + "</td></tr>" +	
												"</table>");	
}