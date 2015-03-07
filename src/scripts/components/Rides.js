var React = require('react');

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
        return (
            <div className="ride_list">
                <ul>
                    <li>Name: {this.state.rides}</li>
                    <li>Buh2</li>
                </ul>
            </div>
        );
     }
});

module.exports = Rides;
