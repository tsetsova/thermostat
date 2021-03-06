$( document ).ready(function() {

    	function displayTemp() {
    		$('#temperature').text(thermostat.temperature);
    		$('#notification').css("background-color", thermostat.determineColor());
      }

    	var thermostat = new Thermostat();
    	displayTemp();

      $.get("http://api.openweathermap.org/data/2.5/weather?q=glasgow&APPID=b7c5477d0a1d7e7fc8feed92153db903&units=metric", function(result){
        var temp = Math.round(result.main.temp)
        $('#api-temp').text(temp);
        if (temp >= 25){
          $('#outdoor-temp').toggleClass("warm-temp");
        } else if (temp > 10) {
          $('#outdoor-temp').toggleClass("regular-temp");
        } else {
          $('#outdoor-temp').toggleClass("cold-temp");
        }
      });

      $( "#up-arrow" ).click(function( event ) {
        thermostat.increaseTemp();
        displayTemp();
      });

      $( "#down-arrow" ).click(function( event ) {
        thermostat.decreaseTemp();
        displayTemp();
      });

      $( "#reset-temp" ).click(function( event ) {
        thermostat.resetTemp();
        displayTemp();
      });

      $( "#power-saving" ).click(function( event ) {
        thermostat.savingModeOff();
        displayTemp();
      });


      function turnPSOn() {
      	thermostat.savingModeOn();
      	$('#power-saving-notification').removeClass('power-saving-off');
      	displayTemp();
      	$(this).one("click", turnPSOff);
      };

      function turnPSOff() {
      	thermostat.savingModeOff();
        $('#power-saving-notification').addClass('power-saving-off');
      	displayTemp();
      	$(this).one("click", turnPSOn);
      };

      $('#power-saving').one("click", turnPSOff);

      function pulsate() {
        var pulser = $(".pulsate");
        pulser.animate({opacity: 0.7}, 700, 'linear')
        .animate({opacity: 1}, 1200, 'linear', pulsate);
      }

      $(document).ready(function() {
          pulsate();
      });

  });
