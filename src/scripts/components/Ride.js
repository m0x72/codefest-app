var React = require('react');

var Rides = React.createClass({
   getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
    },
    render: function (){
        return (
            <li className="ride">
                Name: {this.props.data.name}
            </li>
        );
     }
});

module.exports = Rides;
