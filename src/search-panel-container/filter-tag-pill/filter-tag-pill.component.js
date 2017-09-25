(function() {
    function FilterTagPillsComponentController() {
        console.log(this);
    }

    angular.module('splat').component('filterTagPill', {
        templateUrl: './src/search-panel-container/filter-tag-pill/filter-tag-pill.html',
        controller: FilterTagPillsComponentController,
        bindings: {
            model: '<',
            onRemove: '&?',
        }
    });
})();
