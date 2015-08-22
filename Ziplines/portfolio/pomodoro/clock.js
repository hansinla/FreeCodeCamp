(function(){


	var app= angular.module('clock', []);

	var sessionTime = 25;
	var breakTime = 5;

	var startTime = Date.now() + sessionTime * 60 * 1000;

	app.controller('TimeCtrl', function($scope, $interval) {

	  var tick = function() {
	    $scope.clock = startTime - Date.now();
	  };
	  

	  tick();
	  $interval(tick, 1000);
		
	});



})();

function playSound(soundobj) {
  var thissound = document[soundobj];
  thissound.Play();
}