var React = require('react');

var Rides = React.createClass({
   getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
    },
    render: function (){
        return (
            <div className="ride_card jumbotron">
                <div className="container">
                    <ul>
                        <li>Name: {this.props.data.name}</li>
                        <li>Auto: {this.props.data.car}</li>
                    </ul>
                </div>
            </div>
        );
     }
});

module.exports = Rides;
