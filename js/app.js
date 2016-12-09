angular.module('assessment', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'assessmentCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html',
			controller: 'assessmentCtrl'
		})
		.state('blog', {
			url: '/blog',
			templateUrl: 'views/blog.html',
			controller: 'assessmentCtrl'
		})
		.state('shop', {
			url: '/shop',
			templateUrl: 'views/shop.html',
			controller: 'assessmentCtrl'
		})
		.state('details', {
			url: 'detail/:id',
			templateUrl: 'views/product-details.html',
			controller: 'assessmentCtrl'
		})



})