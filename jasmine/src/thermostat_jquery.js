
$( document ).ready(function() {

  function displayTemp() {
    $('#temperature').text(thermostat.temperature);
    $('#screen').attr('class', thermostat.determineColor());
  }

  var thermostat = new Thermostat();
  displayTemp();



  $.get("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=b7c5477d0a1d7e7fc8feed92153db903",function(result){
    $('#local-weather').text(result.weather[0].description);
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
