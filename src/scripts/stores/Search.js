var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var StoreConstants = require('../constants/StoreConstants');
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var __defaultFilters = {
    from: null,
    to: null,
    date: null,
    time: null
};
var _filters = {}; // Search filters
var _searchData = [];
var _sortBy = 'security'; //default filter

function setFilters() {
    return;
}


var SearchStore = assign({}, EventEmitter.prototype, {
    
    getFilters: function() {
        return _filters;
    },

    getSearchData: function() {
        return _searchData;
    },

    getSortBy: function() {
        return _sortBy;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }, 
    
    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;

        switch(action.actionType) {
            case StoreConstants.SEARCH_FILTER_NEW:
                //add shitty filter
                if (_.isEqual(_.keys(action.filter), _.keys(__defaultFilters))) {
                    _filters = action.filter;
                } else {
                    throw Error('StoreConstants.SEARCH_FILTER_NEW invalid action input');
                }
                SearchStore.emitChange();
                break;
            case StoreConstants.SEARCH_FILTER_CLEAR:
                //del shitty filter
                _filters = _.clone(__defaultFilters, 1);
                SearchStore.emitChange();
                break;
            case StoreConstants.SEARCH_DATA_NEW: 
                _searchData = _.sortBy(action.data, function(obj) {
                    if (_sortBy == 'security') return -obj[_sortBy];
                    return obj[_sortBy];
                });
                SearchStore.emitChange();
                break;
            case StoreConstants.SEARCH_DATA_ADD: 
                _searchData = _searchData.concat(_.sortBy(action.data, function(obj) {
                    if (_sortBy == 'security') return -obj[action.sortby];
                    return obj[_sortBy];
                }));
                SearchStore.emitChange();
                break;
            case StoreConstants.SEARCH_SORT_BY:
                _searchData = _.sortBy(_searchData, function(obj) {
                    if (action.sortby == 'security') return -obj[action.sortby];
                    return obj[action.sortby];
                });
                _sortBy = action.sortby;
                SearchStore.emitChange();
                break;
        }

       return true;
    })

});

module.exports = SearchStore;
