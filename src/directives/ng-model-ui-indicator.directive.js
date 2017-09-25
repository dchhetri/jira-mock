(function() {
    (function() {
        
        function  NGModelUiIndicator($timeout) {
            return {
                restrict: "A",
                require: "ngModel",
                link: function(scope, element, attrs, ngModel) {
                    ngModel.$viewChangeListeners.push(() => {
                        $(element).addClass('ui-updated-indicator');
                        $timeout(() => {
                            $(element).removeClass('ui-updated-indicator');
                        }, 500)
                    })
                }
            };
        }
    
        angular.module('splat').directive("ngModelUiIndicator", NGModelUiIndicator);
    })();
    
})();
