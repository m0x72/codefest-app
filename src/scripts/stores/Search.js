var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var StoreConstants = require('../constants/StoreConstants');
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var __deepFilters = {
    from: null,
    to: null,
    date: null,
    time: null
};
var _filters = {}; // Search filters
var _searchData = [];


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
                _searchData = action.data;
                SearchStore.emitChange();
                break;
            case StoreConstants.SEARCH_DATA_ADD: 
                _searchData.concat(action.data);
                SearchStore.emitChange();
                break;
        }

       return true;
    })

});

module.exports = SearchStore;
