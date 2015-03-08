var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.js');
var Rides = require('./components/Rides.js');
var RideDetails = require('./components/RideDetails.js');
var Search = require('./components/Search.js');

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute name="search" handler={Search}/>
        <Route name="searchresults" handler={Rides}>
            <Route name="searchdetail" path="details/:rideId" handler={RideDetails} />
        </Route>
    </Route>
);

module.exports = routes;
