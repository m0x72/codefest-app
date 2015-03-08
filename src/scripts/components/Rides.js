var React = require('react');
var Ride = require('./Ride.js');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
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
        console.log('onChange! :D ');
        this.setState(getRidesState());
    },
    handleLoadNext: function (e) {
        e.preventDefault();
        SearchAction.searchNext();
    },
    render: function (){
        var rides = this.state.rides.map(function (ride) {
            return (
                    <Ride data={ride} />
                   );
        }, this);
        return (
        <div className="search_results_view">
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
