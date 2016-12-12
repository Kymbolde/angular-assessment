angular.module('assessment').controller('assessmentCtrl', function($scope, assessmentService, $stateParams) {

	$scope.getProducts = function() {
		assessmentService.getProducts().then(function(response) {
			$scope.products = response
		})
	}

$scope.getProducts()

	$scope.getProduct = function() {
		assessmentService.getProduct($stateParams.id).then(function(response) {
			$scope.product = response.data
			console.dir($scope.product)
		})
	}

	if ($stateParams.id) {
		$scope.getProduct();
	}


})