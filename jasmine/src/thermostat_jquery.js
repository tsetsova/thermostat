
$( document ).ready(function() {

  function displayTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#screen').attr('class', thermostat.determineColor());
  }

  var thermostat = new Thermostat();
  displayTemp();

  $('#city-submit').click(function(event) {
    event.preventDefault();
    var city = $('#city').val()
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=b7c5477d0a1d7e7fc8feed92153db903&units=metric",function(result){
      $('#local-weather').text(result.weather[0].description, result.main.temp);
      // $('#local-weather').text(result.main.temp);
    });
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
    $('#power-saving').text('Power Saving is On');
    displayTemp();
    $(this).one("click", turnPSOff);
  };

  function turnPSOff() {
    thermostat.savingModeOff();
    $('#power-saving').text('Power Saving is Off');
    displayTemp();
    $(this).one("click", turnPSOn);
  };

  $('#power-saving').one("click", turnPSOff);

});
