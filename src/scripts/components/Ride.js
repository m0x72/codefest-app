var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var moment = require('moment');
function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var Ride = React.createClass({
    mixins: [Router.State],
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
    },
    render: function (){
        var isCurrent = this.props.data.id == this.getParams().rideId;
        var ratingElem = (function() {
            switch(this.props.sortBy) {
                case 'travelTime_stamp':
                    var stamp = new Date(this.props.data.travelTime_stamp);
                    var imgurl = 'http://cdn.flaticon.com/png/64/59252.png';
                    var time = pad(stamp.getHours(), 2) + ':' + pad(stamp.getMinutes(), 2);
                    var time = moment(stamp).format('HH:mm');
                    return (
                        <div className="col-xs-3 rating">
                            <img className="img-responsive" src={imgurl} />
                            <span className="rating travel_time">{time + 'h'}</span>
                        </div>);
                case 'v_avg':
                    var imgurl = "http://cdn.flaticon.com/png/64/53128.png"; 
                    return (
                        <div className="col-xs-3 rating">
                            <img className="img-responsive" src={imgurl} />
                            <span className="rating speed">{this.props.data.v_avg + 'kmh'}</span>
                        </div>);
                case 'security':
                default:
                    var imgurl = "http://cdn.flaticon.com/png/64/63307.png";
                    return (
                        <div className="col-xs-3 rating">
                            <img className="img-responsive" src={imgurl} />
                            <span className="rating security">{this.props.data.security + '%'}</span>
                         </div>);
            }
        }.bind(this))();
        return (
           <div className="ride_card_wrapper">
                <Link to={isCurrent ? "searchresults" : "searchdetail"} params={isCurrent ? null : {rideId: this.props.data.id}}>
                    <div className="ride_card row">
                        <div className="col-xs-4">
                            <img className="img-responsive profile_img" src={this.props.data.imageUrl} />
                        </div>
                        <div className="col-xs-5 info">
                            <div className="title">{this.props.data.name}</div>
                            <div className="subscript">Audi A3</div>
                        </div>
                        {ratingElem}
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
