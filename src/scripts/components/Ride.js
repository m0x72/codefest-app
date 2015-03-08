var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Ride = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
    },
    render: function (){
        var isCurrent = this.props.data.id == this.getParams().rideId;
        return (
           <div className="ride_card_wrapper">
                <Link to="searchdetail" params={{rideId: this.props.data.id}}>
                    <div className="ride_card">
                        <img src={this.props.data.imageUrl} />
                        <ul>
                            <li>Name: {this.props.data.name}</li>
                            <li>Auto: {this.props.data.car}</li>
                        </ul>
                    </div>
                </Link>
                {isCurrent ? <RouteHandler data={this.props.data} /> : null }
            </div>
        );
     }
});

module.exports = Ride;
