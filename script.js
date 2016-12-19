$(function() {
	var lat = 0;
	var lon = 0;
	if('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			console.log(lat + ' ' + lon)
			$.ajax("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=a4b92d14d9f78d8121cc92be504fe3d7&units=metric")
			.done(function(data) {
				console.log(data);
				$('#weather').text(data['weather'][0]['main']);
				$('#location').text(data['name'] + ', ' + data['sys']['country']);
				$('#temperature').html(data['main']['temp'] + '&#8451;'); // #8457 for Fahrenheit
			});
		});
	}
	else {
		alert("Geolocation not available");
	}
});