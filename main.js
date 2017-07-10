$(document).ready(function(){
	$("#currentLocation").click(getLocation);
	$("#enter").click(getCityWeather);
	
	function getCityWeather(){
		var city = $("#city").val();
		var success = false;
		var url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial" + "&APPID=c2cc19f11898f605b9a97f02105727a4";
		
		$.getJSON(url, function(data){
			success = true;
			updateWeather(data);
			
		})
		setTimeout(function() {
			if (!success){
				alert("Please enter a valid city name.");
			}
		}, 1000);
		
		
		/**
		$.ajax({
			
			url: "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial" + "&APPID=c2cc19f11898f605b9a97f02105727a4",
			type:"GET",
			dataType: "jsonp",
			success: function(data){
				updateWeather(data);
			},
			error: function(){
				alert("Please enter a valid city name");
			}
		});
		**/
	}
