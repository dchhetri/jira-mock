(function() {
    function TagFilter(filterTagConstants) {
        const noCaseIndexOfCompare = (l, r) => { return l.toLowerCase().indexOf(r.toLowerCase()) !== -1; }

        const filterMappings = {
            'text': (list, field, target) => {
                return _.filter(list, (item) => { 
                    return noCaseIndexOfCompare(item[field], target); 
                });
            }
        };

        return (items, filterTagIds, searchText) => {
            const f = filterTagIds.reduce( (items, filterId) => {
                const filterTagItem = filterTagConstants[filterId];
                const field = filterTagItem.meta.fieldName;
                const filterer = filterMappings[filterTagItem.meta.type];
                return filterer(items, field, searchText);
            }, items);
            console.log(items, filterTagIds, searchText, f);
            return f;
        }
    }

    angular.module('splat').filter('tagFilter', TagFilter);
})();
