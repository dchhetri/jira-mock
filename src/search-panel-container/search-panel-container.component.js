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

        $ctrl.filterTagConstants = {};

        $ctrl.model = {
            enableSmartFiltering: false,
            selectedFilterTags: []
        }

        $ctrl.bugList = [];
        $ctrl.featureTypes = [];

        bugOperations.getAllFeatures().then( (features) => {
            $ctrl.featureTypes = features;
        });

        bugOperations.getAllBugs().then((bugs) => {
            $ctrl.bugList = bugs;
            $ctrl.bugList.length = 5;
        });

        $ctrl.disableSmartFiltering = () => {
            $ctrl.model.enableSmartFiltering = !$ctrl.model.enableSmartFiltering;
        }

        $ctrl.toggleTagSelection = (tagId) => {
            var idx = _.indexOf($ctrl.model.selectedFilterTags, tagId);
            if(idx !== -1) {
                $ctrl.model.selectedFilterTags.splice(idx, 1);
            } else {
                $ctrl.model.selectedFilterTags.push(tagId);
            }
        }

        $ctrl.isTagSelected = (tagId) => {
            return $ctrl.model.selectedFilterTags.indexOf(tagId) !== -1;
        }

        $ctrl.hasFilterOptions = (tagId) => {
            return tagId === 1; //feature
        }

        $ctrl.getFilterOptions = (tagId) => {
            if (tagId === 1) {
                return $ctrl.featureTypes;
            }
        }
    }

    angular.module('splat').component('searchPanelContainer', {
        templateUrl: './src/search-panel-container/search-panel-container.html',
        controller: SearchPanelContainerComponentController
    });
})();
