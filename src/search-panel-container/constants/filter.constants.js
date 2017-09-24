(function() {
    const filterConstants = {
        bugStatus: {
            complete: { id: 'COMPLETE', content: 'Complete' },
            inProgress: { id: 'IN_PROGRESS', content: 'In Progress' },
            notStarted: { id: 'NOT_STARTED', content: 'Not Started' }
        },
        filterTags: {
            description: { id: 0, content: 'Description' },
            feature: { id: 1, content: 'Feature' },
            modifiedDate: { id: 2, content: 'Modified Date' },
            submittedDate: { id: 3, content: 'Submitted Date' },
            priority: { id: 4, content: 'Priority' },
            submittedBy: { id: 5, content: 'Submitted By' },
            status: { id: 6, content: 'Status' },
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
