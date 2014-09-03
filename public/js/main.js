/**
 * Created by twatson on 9/3/14.
 */

angular.module("SocketDirectiveDemo", ["tw"])
	.controller("LsController", ["$scope", "$rootScope", function($scope, $rootScope){
		$scope.submit = function(){
			$rootScope.$broadcast("sendCommand");
		}
	}]);