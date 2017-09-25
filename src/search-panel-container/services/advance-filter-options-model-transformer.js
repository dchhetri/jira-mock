(function() { 
    function AdvanceFilterOptionsModelTransformer(filterConstants) {
        const advanceFilterOptionsModelTransformer = {};
        const isValidTag = (item) => !_.isEmpty(item.content) && item.content !== filterConstants.any.content;
        
        advanceFilterOptionsModelTransformer.transform = (filterOptionsSelected) => {
            return _.filter(Object.keys(filterOptionsSelected).reduce( (list, key) => {
                const item = filterOptionsSelected[key];
                if (isValidTag(item)) {
                    list.push([key, item.content]);
                }
                return list;
            }, []), _.identity);
        };

        return advanceFilterOptionsModelTransformer; 
    }

    angular.module('splat').factory('advanceFilterOptionsModelTransformer', AdvanceFilterOptionsModelTransformer);
})();
