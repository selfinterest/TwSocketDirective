/**
 * Created by twatson on 9/3/14.
 */
angular.module("tw.socket", [])
	.service("twSocketService", [function(){
		this.io = io('http://localhost');

		this.register = function(channel, options){
			socket.on(channel, function(data){

			});
		}

	}])
	.directive("twSocket", ["twSocketService", function(twSocketService){
		return {
			restrict: "A",
			require: "ngModel",
			replace: false,
			scope: true,
			priority: 5,
			link: function(scope, element, attr, ngModel){
				if(attr.twSocketOptions) {
					try {
						scope.options = angular.fromJson(attr.twSocketOptions);
					} catch(e){
						console.log(e);
						scope.options = {};
					}
				}

				scope.channel = attr.twSocket;

				twSocketService.io.on(scope.channel, function(data){
					scope.value = data;
					if(element.val() !== "") element.val(element.val() + "\n");
					element.val(element.val() + data);
					scope.$apply(function(){
						ngModel.$setViewValue(element.val());
					});
				});
				//When something updates the model (e.g. the controller)
				ngModel.$render = function(){
					scope.value = ngModel.$modelValue;
				};

				function read(){
					ngModel.$setViewValue(element.val());
				}

				/*scope.$watch("value", function(newVal, oldVal){
					read();
				});*/


			}
		}
	}])