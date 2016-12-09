angular.module('assessment').directive('productDrct', function() {

	return {
		templateUrl: './views/product-tmpl.html',
		restrict: "AE",
		scope: {
			product: "=",
		},
		link: function(scope, element, attrs) {
			scope.toggleHideImage = function() {
				scope.hideImage = !hideImage
			}
		}
	}


})