angular.module('assessment').directive('productdrct', function() {

	return {
		templateUrl: './views/product-tmpl.html',
		restrict: "AE",
		scope: {
			product: "=",
		}
	}

})