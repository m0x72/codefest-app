var React = require('react');
var Ride = require('./Ride.js');

var Rides = React.createClass({
    loadRidesFromServer: function() {
        // make request, set once finished
        setTimeout(function() {
            this.setState({rides: [{name: 'Peter'}]});
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
        console.log("log state: ", this.state);
        var rides = this.state.rides.map(function (ride) {
            return (
                    <Ride data={ride} />
                   );
        }, this);
        return (
            <div className="ride_list">
                <ul>
                    {rides}
                </ul>
            </div>
        );
     }
});

module.exports = Rides;
