(function() {
    function TagFilter(filterConstants) {
        const dateFilter = (list, target, filterItem, field) => {
            let dateComparator = _.identity;
            switch (filterItem.id) {
                case filterConstants.dateFilterCompareOptions.lessThan.id: {
                    dateComparator = (d1, d2) => d1 < d2;
                    break;
                }
                case filterConstants.dateFilterCompareOptions.lessThanOrEqualTo.id: {
                    dateComparator = (d1, d2) => d1 <= d2;
                    break;
                }
                case filterConstants.dateFilterCompareOptions.equalTo.id: {
                    dateComparator = (d1, d2) => d1 === d2;
                    break;
                }
                case filterConstants.dateFilterCompareOptions.greaterThan.id: {
                    dateComparator = (d1, d2) => d1 > d2;
                    break;
                }
                case filterConstants.dateFilterCompareOptions.greaterThanOrEqualTo.id: {
                    dateComparator = (d1, d2) => d1 >= d2;
                    break;
                }
            }

            return _.filter(list, (item) => {
                var d1 = moment(item[field]).format('YYYY-MM-DD');
                var d2 = moment(filterItem.content).format('YYYY-MM-DD');
                return dateComparator(d1, d2);
            });
        }

        const filterMappings = {
            [filterConstants.filterTags.feature.id]: _.filter,
            [filterConstants.filterTags.submittedBy.id]: _.filter,
            [filterConstants.filterTags.status.id]: _.filter,
            [filterConstants.filterTags.priority.id]: _.filter,
            [filterConstants.filterTags.submittedDate.id]: dateFilter,
            [filterConstants.filterTags.modifiedDate.id]: dateFilter,
            
        };

        return (items, filterItems) => {
            var tagIds = _.keys(filterItems);
            const f = tagIds.reduce( (list, filterId) => {
                const item = filterItems[filterId];
                const searchTextRaw = _.get(item, 'content');
                if (!_.isEmpty(searchTextRaw) && searchTextRaw !== filterConstants.any.content) {
                    const filterer = filterMappings[filterId] || _.identity;
                    const searchValue = !_.isNaN(+searchTextRaw) ? +searchTextRaw : searchTextRaw;
                    return filterer(list, { [filterId]: searchValue}, item, filterId);
                }else {
                    return list;
                }
            }, items);
            return f;
        }
    }

    angular.module('splat').filter('tag', TagFilter);
})();
