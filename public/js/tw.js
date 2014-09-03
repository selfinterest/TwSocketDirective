/**
 * Created by twatson on 9/3/14.
 */
angular.module("tw", ["tw.socket"])
	.directive("twPanel", [function(){
		//Could hold this in a separate file, but why?
		var template = '<div class="panel panel-primary">'+
			'<div class="panel-heading">'+
			'<h2 class="panel-title">{{title}}</h2>'+
			'</div>'+
			'<div ng-transclude class="panel-body"></div>'+
			'</div>';
		return {
			restrict: "C",
			transclude: true,
			replace: false,
			scope: true,
			template: template,
			link: function(scope, elm, attr){
				scope.title = attr.title || "title";
			}
		}
	}])