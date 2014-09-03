/**
 * Created by twatson on 9/3/14.
 */
angular.module("tw.socket", [])
	.service("twSocketService", [function(){
		this.io = io('http://localhost');

	}])
	.directive("twSocket", ["twSocketService", function(twSocketService){
		return {
			restrict: "A",
			require: "ngModel",
			scope: false,
			priority: 5,
			link: function(scope, element, attr, ngModel) {

				scope.channel = attr.twSocket;


				twSocketService.io.on(scope.channel, function(data){
					scope.value = data;
					scope.$apply(read);
				});

				function read(){
					ngModel.$setViewValue(scope.value);
					element.val(scope.value);
				}

				ngModel.$render = function(){
					scope.value = ngModel.$modelValue;
					element.val(scope.value);
				};

				twSocketService.io.emit(scope.channel, "/");

			}
		}
	}])