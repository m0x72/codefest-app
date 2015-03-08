var React = require('react');
var Router = require('react-router');

var moment = require('moment');
var CircleComponent = require('./svg/circle2.js');

function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}


var RideDetails = React.createClass({
    mixins: [Router.Navigation],
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
    },
    clickHandler: function () {
        console.log('ride_detail click');
    },
    render: function (){
        var dTime = new Date(this.props.data.travelTime_stamp);
        var departure_datetime = moment(dTime).format('DD. MM. YYYY,  HH:mm');
        return (
            <div className="ride_detail_container">
                <div className="ride_detail" onClick={this.clickHandler}>
                    <div className="row graphs">
                        <div className="col-xs-6 left_col">
                            <CircleComponent percent={this.props.data.security} />
                            <img src={this.props.data.imageUrl} className="profile_img"/>
                        </div>
                        <div className="col-xs-6">
                            <div className="speed"></div>
                            <div classNmae="security"></div>
                        </div>
                    </div>
                    <div className="row time">
                        <div className="col-xs-12">{departure_datetime}</div>
                    </div>
                    <div className="row ride_info">
                        <div className="col-xs-12"><h4>Trip information</h4></div>
                        <div className="clearfix"></div>
                        <div className="col-xs-6">Start</div>
                        <div className="col-xs-6">{this.props.data.origin}</div>
                        <div className="clearfix"></div>
                        <div className="col-xs-6">Destination</div>
                        <div className="col-xs-6">{this.props.data.city}</div>
                        <div className="clearfix"></div>
                        <div className="col-xs-6">Preis</div>
                        <div className="col-xs-6">{this.props.data.price}</div>
                    </div>
                    <ul>
                        <li>Name: {this.props.data.name}</li>
                        <li>Auto: {this.props.data.car}</li>
                        <li>Piece: {this.props.data.car}</li>
                        <li>Of: {this.props.data.car}</li>
                        <li>Bullshiat: {this.props.data.car}</li>
                    </ul>
                </div>
            </div>
        );
     }
});

module.exports = RideDetails;
