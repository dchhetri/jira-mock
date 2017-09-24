(function() {
    function BugOperations($http, $q) {
        var bugOperations = {
            getAllBugs: () => {
                return $http.get('./data/bugs.json').then( (result) => {
                    return result.data.map(function(item) {
                        item.modifiedDate = item.modifiedDate.split(' ')[0];
                        item.submittedDate = item.submittedDate.split(' ')[0];
                        return item;
                    })
                });
            },

            //note would ideally be in different services, but leaving it here for now
            getAllUsers: () => {
                return $http.get('./data/users.json').then( (result) => {
                    return result.data;
                });
            },

            getAllFeatures: () => {
                return $http.get('./data/features.json').then( (result) => {
                    return result.data;
                });
            }
        };
        return bugOperations;
    }

    angular.module('splat').factory('bugOperations', BugOperations);
})();
