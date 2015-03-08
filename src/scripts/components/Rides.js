var React = require('react');
var Ride = require('./Ride.js');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var jquery = require('jquery');

var SearchStore = require('../stores/Search.js');
var SearchAction = require('../actions/Search.js');

var getRidesState = function() {
    return {
        rides: SearchStore.getSearchData()
    };
};

var Rides = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        return getRidesState();
    },
    componentDidMount: function () {
        SearchStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        SearchStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        console.log('onChange! :D ', getRidesState());
        this.setState(getRidesState());
    },
    handleLoadNext: function (e) {
        e.preventDefault();
        SearchAction.searchNext();
    },
    handleSort: function(sortby, e) {
        e.preventDefault();
        SearchAction.sortBy(sortby);
    },
    handleSortBySecurity: function(e) {
        return this.handleSort('security', e);
    },
    handleSortByDeparture: function(e) {
        return this.handleSort('travelTime_stamp', e);
    },
    handleSortBySpeed: function(e) {
        return this.handleSort('v_avg', e);
    },
    render: function (){
        var curr_sortby = SearchStore.getSortBy();
        var rides = this.state.rides.map(function (ride) {
            return (
                    <Ride data={ride} sortBy={curr_sortby}/>
                   );
        }, this);
        return (
        <div className="search_results_view">
            <div className="filter_nav">
                <ul className="nav nav-pills">
                    <li role="presentation">
                        <a href="#" onClick={this.handleSortBySecurity} className={curr_sortby == 'security' ? 'active' : ''}>Security</a>
                    </li>
                    <li role="presentation">
                        <a href="#" onClick={this.handleSortByDeparture} className={curr_sortby == 'travelTime_stamp' ? 'active' : ''}>Departure</a>
                    </li>
                    <li role="presentation">
                        <a href="#" onClick={this.handleSortBySpeed} className={curr_sortby == 'v_avg' ? 'active' : ''}>Speed</a>
                    </li>
                </ul>
            </div>
            <div className="ride_list">
                {rides}
            </div>
            <div>
                <button className="btn btn-default" onClick={this.handleLoadNext}>
                    Load More
                </button>
            </div>
        </div>
        );
     }
});

module.exports = Rides;
