angular.module('kAlertModule', []).run(['$templateCache',
function($templateCache) {
  $templateCache.put('k-alert.html', '<p class="k-alert {{type}}">' + '<span class="exclamation">!</span> ' + '{{message}}' + '</p>');
}]).factory('kAlertService', function($document, $compile, $rootScope) {
  var z = 111;
  return {
    alert : function(type, message) {
      var html = '<data-k-alert type="' + type + '" message="' + message + '" style="z-index:' + z + '" />';
      var element = $compile(html)($rootScope);
      $document.find('body').append(element);
      z++;
    }
  };
}).directive("kAlert", function($interval) {
  return {
    restrict : 'E',
    replace : true,
    templateUrl : 'k-alert.html',
    link : function(scope, element, attributes) {
      var interval = $interval(function() {
        element.remove();
      }, 5000, 1);

      element.on('click', function(e) {
        $interval.cancel(interval);
        interval = undefined;
        element.remove();
      });

      element.on('$destroy', function() {
        $interval.cancel(interval);
      });
    },
    scope : {
      type : "@type",
      message : "@message"
    }
  };
}); 