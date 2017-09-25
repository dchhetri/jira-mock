(function() {
    function SearchPanelContainerComponentController($scope, $timeout, bugOperations, filterConstants, advanceFilterOptionsModelTransformer) {
        const $ctrl = this;
        const any = filterConstants.any;

        $ctrl.model = {
            enableAdvanceFiltering: true,
            filterOptionsSelected: getDefaultFilterOptionsSelectedModel(),
        }

        $ctrl.bugList = [];

        bugOperations.getAllBugs().then((bugs) => {
            $ctrl.bugList = bugs;
        });

        $ctrl.toggleAdvanceFiltering = () => {
            $ctrl.model.enableAdvanceFiltering = !$ctrl.model.enableAdvanceFiltering;
        }

        $ctrl.onRemovePillItem = (item) => {
            const key = item[0];
            if (key=== filterConstants.filterTags.modifiedDate.id || key === filterConstants.filterTags.submittedDate.id) {
                $ctrl.model.filterOptionsSelected[key] = { id: filterConstants.dateFilterCompareOptions.equalTo.id };
            }else {
                $ctrl.model.filterOptionsSelected[key] = _.clone(any);
            }
        };

        $ctrl.clearAllFilterOptionSelection = () => {
           $ctrl.model.filterOptionsSelected = getDefaultFilterOptionsSelectedModel();
        };

        function getDefaultFilterOptionsSelectedModel() {
            return {
                feature: _.clone(any),
                modifiedDate: { id: filterConstants.dateFilterCompareOptions.equalTo.id },
                submittedDate: { id: filterConstants.dateFilterCompareOptions.equalTo.id },
                priority: _.clone(any),
                submittedBy: _.clone(any),
                status: _.clone(any),
            };
        }

        //Some animation issues issues due to immaturity, handle manually for now
        const $element = $(document.getElementById('filter-options'));

        $timeout(()=> $ctrl.model.enableAdvanceFiltering = false, 200);
        
        $element.on('transitionend', (event) => {
            if (!$ctrl.model.enableAdvanceFiltering) {
                $element.addClass('show-overflow')                
            }
        });

        $scope.$watch('$ctrl.model.enableAdvanceFiltering', () => {
            if ($ctrl.model.enableAdvanceFiltering) {
                $element.removeClass('show-overflow')          
            }
        });

        $scope.$watch('$ctrl.model.filterOptionsSelected', () => {
            $ctrl.model.filterPillModels = advanceFilterOptionsModelTransformer.transform($ctrl.model.filterOptionsSelected);
        }, true);

        $scope.$on('$destroy', () => element.off());
    }

    angular.module('splat').component('searchPanelContainer', {
        templateUrl: './src/search-panel-container/search-panel-container.html',
        controller: SearchPanelContainerComponentController
    });
})();
