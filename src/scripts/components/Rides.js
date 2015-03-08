var React = require('react');
var Ride = require('./Ride.js');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var jquery = require('jquery');

var SearchStore = require('../stores/Search.js');

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
        this.setState(getRidesState());
    },
    render: function (){
        var rides = this.state.rides.map(function (ride) {
            return (
                    <Ride data={ride} />
                   );
        }, this);
        return (
            <div className="ride_list">
                {rides}
            </div>
        );
     }
});

module.exports = Rides;
