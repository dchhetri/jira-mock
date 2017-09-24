(function() {
    function SearchPanelContainerComponentController($scope, $timeout, bugOperations) {
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

        //Some animation issues issues due to immaturity, handle manually for now
        const $element = $(document.getElementById('filter-options'));

        $timeout(()=> $ctrl.model.enableSmartFiltering = false, 200);
        
        $element.on('transitionend', (event) => {
            if (!$ctrl.model.enableSmartFiltering) {
                $element.addClass('show-overflow')                
            }
        });

        $scope.$watch('$ctrl.model.enableSmartFiltering', () => {
            if ($ctrl.model.enableSmartFiltering) {
                $element.removeClass('show-overflow')          
            }
        });

        $scope.$on('$destroy', () => element.off());
    }

    angular.module('splat').component('searchPanelContainer', {
        templateUrl: './src/search-panel-container/search-panel-container.html',
        controller: SearchPanelContainerComponentController
    });
})();
