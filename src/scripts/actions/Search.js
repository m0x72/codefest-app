var AppDispatcher = require('../dispatcher/AppDispatcher');
var StoreConstants = require('../constants/StoreConstants');
var jquery = require('jquery');

//valid? i do hope :/
var SearchStore = require('../stores/Search.js');

var expressurl = "http://localhost:3000/getNextPage";
//var expressurl = "http://10.131.0.146:3000/getNextPage";

var SearchActions = {
    searchByFilter: function(filter) {
        AppDispatcher.handleViewAction({
            actionType: StoreConstants.SEARCH_FILTER_NEW,
            filter: filter
        });
        jquery.ajax({
            //url: 'http://localhost:3000/getNextPage',
            url: expressurl,
            data: {
                origin: filter.from,
                destination: filter.to,
                departureDate: new Date(filter.date+' '+filter.time)
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
            //url: 'http://localhost:3000/getNextPage',
            url: expressurl,
            data: {
                origin: filters.from,
                destination: filters.to,
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
    },
    sortBy: function(value){
        AppDispatcher.handleViewAction({
            actionType: StoreConstants.SEARCH_SORT_BY,
            sortby: value
        });
    }
};

module.exports = SearchActions;
