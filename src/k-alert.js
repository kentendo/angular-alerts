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
			var html = '<alert type="'+type+'" message="'+message+'" style="z-index:'+z+'" />';
			var template = angular.element(html);
			var linkFn = $compile(template);
			var element = linkFn($rootScope.$new());
			$document.find('body').append(element);
			z++;
		}
	};
})
.directive("kAlertDirective", function($timeout){
	return {
		restrict:'E',
		replace:true,
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