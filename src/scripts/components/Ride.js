var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
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
                <Link to={isCurrent ? "searchresults" : "searchdetail"} params={isCurrent ? null : {rideId: this.props.data.id}}>
                    <div className="ride_card row">
                        <div className="col-xs-3">
                            <img className="img-responsive profile_img" src={this.props.data.imageUrl} />
                        </div>
                        <div className="col-xs-7 info">
                            <div className="title">{this.props.data.name}</div>
                            <div className="subscript">Audi A3</div>
                        </div>
                        <div className="col-xs-2 rating">
                            <img className="img-responsive" src="http://cdn.flaticon.com/png/64/63307.png" />
                            <span className="rating">{this.props.data.security}</span>
                        </div>
                    </div>
                </Link>
                <ReactCSSTransitionGroup transitionName="listcard">
                    {isCurrent ? <RouteHandler data={this.props.data} key={this.props.data.id} /> : null }
                </ReactCSSTransitionGroup>
            </div>
        );
     }
});

module.exports = Ride;
