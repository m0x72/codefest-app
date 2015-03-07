var React = require('react');
var Ride = require('./Ride.js');
var Router = require('react-router');

var Rides = React.createClass({
    mixins: [Router.State],
    loadRidesFromServer: function() {
        // get queryparams: 
        console.log("queryparams: ", this.getQuery());
        var queryParams = this.getQuery();
        var from = queryParams.from,
            to = queryParams.to,
            date = queryParams.date,
            time = queryParams.time;

        // make request, set once finished
        setTimeout(function() {
            this.setState({rides: [{name: 'Peter'}, {name: 'Peter'}, {name: 'Peter'}, {name: 'Peter'}, {name: 'Peter'}, {name: 'Peter'}]});
        }.bind(this));
    },
    getInitialState: function () {
        return {rides: []};
    },
    componentDidMount: function () {
        var from, to, datetime;
        this.loadRidesFromServer(from, to, datetime);
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
