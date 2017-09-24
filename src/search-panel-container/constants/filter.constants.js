(function() {
    const filterConstants = {
        bugStatus: {
            complete: { id: 'COMPLETE', content: 'COMPLETE' },
            inProgress: { id: 'IN_PROGRESS', content: 'IN_PROGRESS' },
            notStarted: { id: 'NOT_STARTED', content: 'NOT_STARTED' }
        },
        
        filterTags: {
            description: { id: 'description', content: 'Description' },
            feature: { id: 'feature', content: 'Feature' },
            modifiedDate: { id: 'modifiedDate', content: 'Modified Date' },
            submittedDate: { id: 'submittedDate', content: 'Submitted Date' },
            priority: { id: 'priority', content: 'Priority' },
            submittedBy: { id: 'submittedBy', content: 'Submitted By' },
            status: { id: 'status', content: 'Status' },
        },

        priorities: _.range(1, 4),

        dateFilterCompareOptions: { 
            lessThan: { id: '0', content: 'Less Than' },
            lessThanOrEqualTo: { id: '1', content: 'Less Than or Equal To' },
            equalTo: { id: '2', content: 'Equal To' },
            greaterThan: { id: '3', content: 'Greater Than' },
            greaterThanOrEqualTo: { id: '5', content: 'Greater Than or Equal To' },
        },

        any: { 
            content: 'Any', 
            id: "Any"
        },

        toDisplay: (obj) => {
            return _.keys(obj).reduce( (list, key, index) => {
                var val = obj[key];
                const item = _.isString(val) ? { id: index, content: val } : val;
                list.push(item);
                return list;
            }, []);
        }
    };

    angular.module('splat').constant('filterConstants', filterConstants);
})();
