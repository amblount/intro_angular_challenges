console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Alivia"
  this.age = "2"
  this.city = "St. Louis"
  this.state = "New York"
}

WelcomeController.prototype.letterCount = function() {
  // array of two arrays with letters
  var name = this.full_name.split(" ")
  var letters = name[0].concat(name[1]);
  var numLetters = letters.count
  return numLetters;
};

WelcomeController.prototype.upperCase = function() {
  return this.full_name.toUpper() + "!"
};
