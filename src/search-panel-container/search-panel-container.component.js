(function() {
    function SearchPanelContainerComponentController(bugOperations, $timeout) {
        var $ctrl = this;

        $ctrl.model = {
            enableSmartFiltering: true,
            selectedFilterTags: []
        }

        $ctrl.bugList = [];

        bugOperations.getAllBugs().then((bugs) => {
            $ctrl.bugList = bugs;
            $ctrl.bugList.length = 5;
        });

        $ctrl.disableSmartFiltering = () => {
            $ctrl.model.enableSmartFiltering = !$ctrl.model.enableSmartFiltering;
        }

        //allow template to render then change model to which causes animation to trigger
        $timeout(()=> {
            $ctrl.model.enableSmartFiltering = false;
        }, 200);
    }

    angular.module('splat').component('searchPanelContainer', {
        templateUrl: './src/search-panel-container/search-panel-container.html',
        controller: SearchPanelContainerComponentController
    });
})();
