angular.module('assessment').controller('assessmentCtrl', function($scope, assessmentService, $stateParams) {

	$scope.getProducts = function() {
		assessmentService.getProducts().then(function(response) {
			$scope.products = response
		})
	}

$scope.getProducts()

	// $scope.getProduct = function() {
	// 	assessmentService.getProduct($stateParams.id).then(function(response) {
	// 		$scope.product = response.data
	// 		console.dir($scope.product)
	// 	})
	// }

	// if ($stateParams.id) {
	// 	$scope.getProduct();
	// }
	console.log($stateParams.id)
	$scope.getDetails = function(){
		assessmentService.getDetails($stateParams.id)
		.then(function(response) {
		// console.log($stateParams.id)
		console.log(response + " HHHHHHH")
			$scope.details = response;
		})
	}
	$scope.getDetails();

})