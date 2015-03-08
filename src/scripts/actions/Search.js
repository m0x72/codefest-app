var AppDispatcher = require('../dispatcher/AppDispatcher');
var StoreConstants = require('../constants/StoreConstants');

var SearchActions = {
    searchByFilter: function(filter) {
        AppDispatcher.handleViewAction({
            actionType: StoreConstants.SEARCH_FILTER_NEW,
            filter: filter
        });
        jquery.ajax({
            url: 'http://localhost:3000/getNextPage',
            data: {
                origin: from,
                destination: to,
                departureDate: new Date(date+' '+time)
            },
            success: function(data) {
                AppDispatcher.handleViewAction({
                    actionType: StoreConstants.SEARCH_DATA_NEW,
                    data: data
                });
            },
            error: function(data) {
                AppDispatcher.handleViewAction({
                    actionTupe: StoreConstants.SEARCH_DATA_NEW,
                    data: []
                });
            }
        });
    },
    searchNext: function() {
        var filters = SearchStore.getFilters();
        jquery.ajax({
            url: 'http://localhost:3000/getNextPage',
            data: {
                origin: filters.from,
                to: filters.to,
                departureDate: new Date(filters.date+' '+filters.time)
            },
            success: function(data) {
                AppDispatcher.handleViewAction({
                    actionType: StoreConstants.SEARCH_DATA_ADD,
                    data: data
                });
            },
            error: function (err) {
                console.log("SearchAction::searchNext error on load");
            }
        });
    },
    deleteFilter: function() {
        AppDispatcher.handleViewAction({
            actionType: StoreConstants.SEARCH_FILTER_CLEAR,
        });
    }
};

module.exports = SearchActions;
