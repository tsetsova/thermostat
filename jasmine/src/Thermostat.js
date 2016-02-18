'use strict';

function Thermostat() {
  this.maxTempHash = {savingOff:32, savingOn:25}
  this.colorCode={}
  this.tempRange= {high: 32, medium: 25, low: 18}
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP
  this._minTemp = 10;
  this._maxTemp = this.maxTempHash.savingOn;
  this.savingMode = true;
  this.screenColor = this.determineColor();
};


Thermostat.prototype.resetTemp = function(){
  this.temperature = this.DEFAULT_TEMP;
  this.savingModeOn();
}

Thermostat.prototype.increaseTemp = function() {

  if (this.temperature >= this._maxTemp){
    throw new TypeError("Can't go above " + this._maxTemp)
  }
  this.temperature += 1;
  this.screenColor = this.determineColor();
 }

Thermostat.prototype.decreaseTemp = function() {
   if (this.temperature <= this._minTemp){
    throw new TypeError("Can't go below " + this._minTemp)
  }
  this.temperature -= 1;
  this.screenColor = this.determineColor();
}

Thermostat.prototype.savingModeOff = function() {
  this.savingMode = false;
  this.determineMaxTemp();
}

Thermostat.prototype.savingModeOn = function() {
  if (this.temperature  > this.maxTempHash.savingOn){
    this.temperature  = this.maxTempHash.savingOn
  }

  this.savingMode = true;
  this.determineMaxTemp();
}

Thermostat.prototype.determineMaxTemp = function(){
  if(this.savingMode === true) {
    return this._maxTemp = this.maxTempHash.savingOn;
    // return  temperatureHash["savings"];
  } else {
    return this._maxTemp = this.maxTempHash.savingOff;
    // return temperatureHash["noSavings"];
   }
}

Thermostat.prototype.determineColor = function(){
  if(this.temperature < this.tempRange.low) {
<<<<<<< HEAD
    return "#6BD12C";
  }
  else if(this.temperature < this.tempRange.medium) {
    return "#D1BE2C";
  }
  else {
    return "#D13C2C";
=======
    return "low";
  }
  else if(this.temperature < this.tempRange.medium) {
    return "medium";
  }
  else {
    return "high";
>>>>>>> 934c1b2c8c54146e600342045f4f2f9040f1628e
  }
}
