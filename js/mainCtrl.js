angular.module('assessment').controller('assessmentCtrl', function($scope, assessmentService, $stateParams) {

	$scope.getProducts = function() {
		assessmentService.getProducts().then(function(response) {
			$scope.products = response.data
		})
	}

	$scope.getProduct = function() {
		assessmentService.getProduct(stateParams).then(function(response) {
			$scope.product = response.data
		})
	}


})