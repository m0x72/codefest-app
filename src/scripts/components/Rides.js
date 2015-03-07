var React = require('react');
var Ride = require('./Ride.js');
var Router = require('react-router');
var jquery = require('jquery');

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

        var _this = this;
      jquery.ajax({
        url: "http://localhost:8080/getNextPage",
        data :{
          origin: from,
          destination: to,
          departureDestination: "Sat Mar 07 2015 16:20:52 GMT+0100 (CET)"
        },
        success: function(data){
          console.log(JSON.stringify(data));
        }
      });

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
