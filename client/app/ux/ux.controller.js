'use strict';

angular.module('fitbitPersonalApp')
	.controller('UxCtrl', function ($scope, $timeout) {
		var transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
			transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
			support = { transitions: Modernizr.csstransitions };
		console.log('in ux controller...');
		$scope.myInterval = 5000;
		$scope.noWrapSlides = false;
		$scope.slides = [];

		$scope.toggleOverlay = function (item) {
			var overlay = document.querySelector('div.overlay'),
				closeBttn = overlay.querySelector('button.overlay-close');
			if (overlay.classList.contains('open')) {
				overlay.classList.remove('open');
				overlay.classList.add('close');
				$scope.slides.length = 0;

				var onEndTransitionFn = function (ev) {
					if (support.transitions) {
						if (ev.propertyName !== 'visibility') return;
						this.removeEventListener(transEndEventName, onEndTransitionFn);
					}
					overlay.classList.remove('close');
				};
				if (support.transitions) {
					overlay.addEventListener(transEndEventName, onEndTransitionFn);
				}
				else {
					onEndTransitionFn();
				}
			}
			else if (!overlay.classList.contains('close')) {
				if (item === 'buzzfeed') {
					$scope.slides = [
						{
							image: '/assets/images/buzzfeed/buzzfeed.gif',
							text: '1'
						}
					];
				} else if (item === 'chairlift') {
					$scope.slides = [
						{
							image: '/assets/images/chairlift/Screen Shot 2015-08-30 at 6.02.20 PM.png',
							text: '1'
						}
					];
				} else if (item === 'surfcast') {
					$scope.slides = [
						{
							image: '/assets/images/surfcast/surf_1_fs.png',
							text: '1'
						},
						{
							image: '/assets/images/surfcast/surf_2_fs.png',
							text: '1'
						}
					];
				} else if (item === 'jobstack') {
					$scope.slides = [
						{
							image: '/assets/images/jobstack/jobstack_fs.png',
							text: '1'
						}
					];
				} else if (item === 'silkscreen') {
					$scope.slides = [
						{
							image: '/assets/images/silkscreen/silkscreen.png',
							text: '1'
						}
					];
				} else if (item === 'pawprints') {
					$scope.slides = [
						{
							image: '//cdn.shopify.com/s/files/1/0720/3399/t/7/assets/dog.gif?9221415788620758033',
							// text: '1'
						}
					];
				} else if (item === 'clue') {
					$scope.slides = [
						{
							image: '/assets/images/clue/clue.jpeg',
							text: '1'
						}
					];
				} else if (item === 'dwelling') {
					$scope.slides = [
						{
							image: '/assets/images/dwelling/dwelling.png',
							text: '1'
						},
						{
							image: '/assets/images/dwelling/dwelling_2.png',
							text: '1'
						},
						{
							image: '/assets/images/dwelling/dwelling_3.png',
							text: '1'
						},
						{
							image: '/assets/images/dwelling/dwelling_4.png',
							text: '1'
						}
					];
				} else if (item === 'groupon') {
					$scope.slides = [
						{
							image: '/assets/images/groupon/groupon_thumb.png',
							text: '1'
						}
					];
				}
				else if (item === 'roam') {
					$scope.slides = [
						{
							image: '/assets/images/roam/splash.png',
							text: '1'
						},
						{
							image: '/assets/images/roam/onboard1.png',
							text: '1'
						},
						{
							image: '/assets/images/roam/onboard2.png',
							text: '1'
						},
						{
							image: '/assets/images/roam/homeFeed.png',
							text: '1'
						},
						{
							image: '/assets/images/roam/eventDetail.png',
							text: '1'
						},
						{
							image: '/assets/images/roam/mapView.png',
							text: '1'
						},
						{
							image: '/assets/images/roam/Attendees.png',
							text: '1'
						}
					];
				}
				overlay.classList.add('open');
			}
		};

		$scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
			console.log('$stateChangeStart');
			// if (toState.resolve) {
			$scope.contentLoaded = false;
			// }
		});
		$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
			console.log('$stateChangeSuccess');
			// if (toState.resolve) {
			$scope.contentLoaded = true;
			// }
		});

		// $scope.$on('angular-spinkit:imageLoaded', function(event, data) {
		// console.log('data', data);
		$scope.init = function () {
			// $timeout(function() {
			$scope.loaded = true;
			// }, 500, true);
		};
		// });
	});
