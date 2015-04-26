angular.module('kAlertModule',[])
.run(['$templateCache', function($templateCache) {
	$templateCache.put('k-alert.html',
		'<p class="k-alert {{type}}">' +
		'<span class="exclamation">!</span>' +
		'{{message}}' +
		'</p>');
}])
.factory('kAlertService', function($document, $compile, $rootScope){
	var z = 111;
	return {
		alert: function(type, message){
			var html = '<data-k-alert type="'+type+'" message="'+message+'" style="z-index:'+z+'" />';
			var element = $compile(html)($rootScope);
			$document.body.appendChild(element);
			z++;
		}
	};
})
.directive("kAlert", function($timeout){
	return {
		restrict:'E',
		replace:false,
		templateUrl:'k-alert.html',
		link: function(scope, element, attributes){
			var timeout = $timeout(function(){
				element.remove();
			}, 5000);
			
			element.on('click', function(e){
				$timeout.cancel(timeout);
				element.remove();
			});
    },
    scope:{
    	type:"@type",
     	message:"@message"
    }
	};
});