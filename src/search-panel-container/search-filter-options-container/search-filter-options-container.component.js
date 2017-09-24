(function() {
    function SearchFilterOptionsContainerController(filterConstants, bugOperations) {
        const $ctrl = this;
        const any = { content: 'Any', id: -1 };
        const filterTags = filterConstants.filterTags;

        $ctrl.filterModels = [
            _.extend( _.clone(filterTags.description), { type: 'checkbox' }),
            _.extend( _.clone(filterTags.feature), { type: 'text-select', data: [] }),
            _.extend( _.clone(filterTags.modifiedDate), { type: 'date' }),
            _.extend( _.clone(filterTags.submittedDate), { type: 'date' }),
            _.extend( _.clone(filterTags.priority), { type: 'number-select', min: 0 }),
            _.extend( _.clone(filterTags.submittedBy), { type: 'text-select', data: [] }),
            _.extend( _.clone(filterTags.status), { type: 'text-select', data: [any].concat(filterConstants.toDisplay(filterConstants.bugStatus)) }),
        ];

        bugOperations.getAllUsers().then( (users) => {
            _.find($ctrl.filterModels, { id: 5 }).data = [any].concat(users);
        });

        bugOperations.getAllFeatures().then( (features) => {
            _.find($ctrl.filterModels, { id: 1 }).data = [any].concat(features);
        });
    }

    angular.module('splat').component('searchFilterOptionsContainer', {
        templateUrl: './src/search-panel-container/search-filter-options-container/search-filter-options-container.html',
        controller: SearchFilterOptionsContainerController
    });
})();
