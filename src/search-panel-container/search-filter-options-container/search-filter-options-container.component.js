(function() {
    function SearchFilterOptionsContainerController($timeout, filterConstants, bugOperations) {
        const $ctrl = this;
        const filterTags = filterConstants.filterTags;
        const any = filterConstants.any;
        
        $ctrl.dateFilterCompareOptions = filterConstants.toDisplay(filterConstants.dateFilterCompareOptions);
        
        $ctrl.filterModels = [
            // _.extend( _.clone(filterTags.description), { type: 'checkbox' }),
            _.extend( _.clone(filterTags.feature), { field: 'feature', type: 'text-select', data: [] }),
            _.extend( _.clone(filterTags.modifiedDate), { field: 'modifiedDate', type: 'date' }),
            _.extend( _.clone(filterTags.submittedDate), { field: 'submittedDate', type: 'date' }),
            _.extend( _.clone(filterTags.priority), { field: 'priority', type: 'number-select', min: 0 , data: [any.content].concat(filterConstants.priorities)}),
            _.extend( _.clone(filterTags.submittedBy), { field: 'submittedBy', type: 'text-select', data: [] }),
            _.extend( _.clone(filterTags.status), { field: 'status', type: 'text-select', data: [any].concat(filterConstants.toDisplay(filterConstants.bugStatus)) }),
        ];
        

        bugOperations.getAllUsers().then( (users) => {
            _.find($ctrl.filterModels, { id: filterTags.submittedBy.id }).data = [any].concat(users);
        });

        bugOperations.getAllFeatures().then( (features) => {
            _.find($ctrl.filterModels, { id: filterTags.feature.id }).data = [any].concat(features);
        });
    }

    angular.module('splat').component('searchFilterOptionsContainer', {
        templateUrl: './src/search-panel-container/search-filter-options-container/search-filter-options-container.html',
        controller: SearchFilterOptionsContainerController,
        bindings: {
            model: '=?'
        }
    });
})();
