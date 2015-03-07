var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Ride = React.createClass({
    mixins: [Router.Navigation],
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
    },
    clickHandler: function () {
        console.log('Ride::clickHandler: ', this.props.data.id);
        this.transitionTo('ridedetails', {rideId: this.props.data.id});
    },
    render: function (){
        return (
                <div className="ride_card">
                    <Link to="ridedetails" params={{rideId: this.props.data.id}}>
                        <img src={this.props.data.imageUrl} />
                    </Link>
                    <ul>
                        <li>Name: {this.props.data.name}</li>
                        <li>Auto: {this.props.data.car}</li>
                    </ul>
                </div>
        );
     }
});

module.exports = Ride;
