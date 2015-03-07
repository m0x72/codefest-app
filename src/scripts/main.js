require('../index.html');
require('../assets/stylesheets/style.scss');
require('jquery');
require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');
// TODO: Require assets here.
// require('../assets/product.png');

var App = require('./components/App.js');
var React = require('react');
var Router = require('react-router');

var routes = require('./routes.js');

Router.run(routes, Router.HistoryLocation, function (Handler) {
      React.render(<Handler/>, document.querySelector('#main'));
});

//React.render(<App />, document.getElementById('main'));
