var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  render: function(){
    var codeBlockStyle = { "fontFamily": "monospace",
                           "backgroundColor": "#D0D0D0" };
    return (
    <div>
      <header>
        <h1>SafeRide</h1>
        <Link to="search">Search</Link>
      </header>
      <RouteHandler/>
    </div>
    );
  }
});

module.exports = App;
