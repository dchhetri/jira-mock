(function() {
    const AppConstants = {
        bugStatus: {
            complete: 'COMPLETE',
            inProgress: 'IN_PROGRESS',
            notStarted: 'NOT_STARTED',
        }
    };

    angular.module('splat').constant('appConstants', AppConstants);
})();
