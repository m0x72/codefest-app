var React = require('react');
var Ride = require('./Ride.js');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
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
        url: "http://localhost:3000/getNextPage",
        data: {
          origin: from,
          destination: to,
          //departureDate: "Sat Mar 07 2015 16:20:52 GMT+0100 (CET)"
          departureDate: new Date(date + " " + time)
        },
        success: function(data){
          //console.log(JSON.stringify(data));
          this.setState({rides: data});
        }.bind(this)
      });

        // make request, set once finished
        /*setTimeout(function() {
            this.setState({rides: [{name: 'Peter'}, {name: 'Peter'}, {name: 'Peter'}, {name: 'Peter'}, {name: 'Peter'}, {name: 'Peter'}]});
        }.bind(this));
        */
    },
    getInitialState: function () {
        return {rides: []};
    },
    componentDidMount: function () {
        var from, to, datetime;
        this.loadRidesFromServer(from, to, datetime);
    },
    render: function (){
        console.log('ridedetailsparams', this.getParams());
        var rides = this.state.rides.map(function (ride) {
            var isCurrent = ride.id == this.getParams().rideId;
            return (
            <div className="ride_card_wrapper">
                    <Ride data={ride} />
                    {isCurrent ? <RouteHandler data="{ride}" /> : null }
            </div>
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
