/**
 * Created by twatson on 9/3/14.
 */

angular.module("SocketDirectiveDemo", ["tw"])
	.controller("LsController", ["$scope", "$rootScope", function($scope, $rootScope){

		$scope.directory = "/";

		$scope.results = "Waiting for command...";
		$scope.submit = function(){
			console.log("Broadcasting");
			$rootScope.$broadcast("sendCommand");
		};


	}]);