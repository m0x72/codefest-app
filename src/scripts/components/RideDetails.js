var React = require('react');
var Router = require('react-router');

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
        return (
            <div className="ride_detail" onClick={this.clickHandler}>
                    <img src={this.props.data.imageUrl} />
                    <ul>
                        <li>Name: {this.props.data.name}</li>
                        <li>Auto: {this.props.data.car}</li>
                        <li>Piece: {this.props.data.car}</li>
                        <li>Of: {this.props.data.car}</li>
                        <li>Bullshiat: {this.props.data.car}</li>
                    </ul>
            </div>
        );
     }
});

module.exports = RideDetails;
