angular.module('zero')

.factory('Nav', ['$window', function($window) {

  var onBeforeUnloadHandler = function(event) {
    
    var message = "Please use In-App navigation";
    (event || $window.event).returnValue = message;

    return message;
  }

  if ($window.addEventListener) {
    $window.addEventListener('beforeunload', onBeforeUnloadHandler);
  } else {
    $window.onbeforeunload = onBeforeUnloadHandler;
  }

  return {};

}]);
