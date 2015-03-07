var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.js');
var Rides = require('./components/Rides.js');
var Search = require('./components/Search.js');

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="rides" handler={Rides}/>
        <DefaultRoute name="search" handler={Search}/>
    </Route>
);

module.exports = routes;
