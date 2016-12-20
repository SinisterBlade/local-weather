$(function() {
	var lat = 0;
	var lon = 0;
	var temperature;
	if('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(function(position) {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			console.log(lat + ' ' + lon)
			$.ajax("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=a4b92d14d9f78d8121cc92be504fe3d7&units=metric")
			.done(function(data) {
				$('#weather').text(data['weather'][0]['main']);
				$('#location').text(data['name'] + ', ' + data['sys']['country']);
				temperature = data['main']['temp']
				$('#temperature').html(temperature + '&#8451;');
			});
		});
	}
	else {
		alert("Geolocation not available");
	}
	$('#unit').change(function() {
		console.log('Changed!');
		if(this.checked) {
			$('#temperature').html(temperature + '&#8451;');
		} else {
			var fahrenheit = Math.round(((temperature * 9 / 5) + 32) * 100) / 100;
			$('#temperature').html(fahrenheit + '&#8457;');
		}
	})
});