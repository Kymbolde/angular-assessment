angular.module('assessment').service('assessmentService', function($http) {

	this.getProducts = function() {

    	return $http({
      		method: 'GET',
      		url: 'http://practiceapi.devmounta.in/products'
    	}).then(function(response) {
        // console.log(response)
      return response.data
    })
  	}

  	// this.getProduct = function(id) {

  	// 	console.log(id)
  	// 	return $http({
  	// 		method: 'GET',
  	// 		url: 'http://practiceapi.devmounta.in/products/' + id
  	// 	})
  	// }

    this.getDetails = function(id) {
      console.log(id)
      return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products/' + id
      }).then(function(response) {
        console.log(response.data)
        return (response.data);
      })
    }

})