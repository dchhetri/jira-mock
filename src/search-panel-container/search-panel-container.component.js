(function() {
    function SearchPanelContainerComponentController(bugOperations) {
        var $ctrl = this;

        $ctrl.filterItems = [
            {content: 'Smart Filter', id: 0},
            {content: 'Description', id: 1},
            {content: 'Feature', id: 2},
            {content: 'Date', id: 3},
            {content: 'Priority', id: 4},
            {content: 'Submitted By', id: 5},
            {content: 'Status', id: 6},
        ];

        $ctrl.filterTags = [
            {content: 'Description', id: 1},
            {content: 'Feature', id: 2},
            {content: 'Date', id: 3},
            {content: 'Priority', id: 4},
            {content: 'Submitted By', id: 5},
            {content: 'Status', id: 6},
        ];

        $ctrl.model = {
            selectedFilter: 0,
            selectedFilterTags: []
        }

        $ctrl.bugList = [];
        
        bugOperations.getAllBugs().then((bugs) => {
            $ctrl.bugList = bugs;
            $ctrl.bugList.length = 5;
        });
    }

    angular.module('splat').component('searchPanelContainer', {
        templateUrl: './src/search-panel-container/search-panel-container.html',
        controller: SearchPanelContainerComponentController
    });
})();
