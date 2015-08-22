var sessionTime = 25;
var breakTime = 5;

function playSound(soundobj) {
  var thissound = document[soundobj];
  thissound.Play();
}

var module = angular.module('myApp', []);

module.controller('TimeCtrl', function($scope, $interval) {
  var tick = function() {
    $scope.clock = Date.now();
  };
  tick();
  $interval(tick, 1000);
});