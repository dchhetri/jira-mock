(function() {
    function BugOperations($http, $q) {
        var bugOperations = {
            getAllBugs: function() {
                return $http.get('./data/bugs.json').then( (result) => {
                    return result.data.map(function(item) {
                        item.modifiedDate = item.modifiedDate.split(' ')[0];
                        item.submittedDate = item.submittedDate.split(' ')[0];
                        return item;
                    })
                });
            }
        };
        return bugOperations;
    }

    angular.module('splat').factory('bugOperations', BugOperations);
})();
