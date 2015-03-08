require('../../../assets/stylesheets/svg.scss');
var React = require('react');

var Circle = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
    },
    render: function (){
        return (
        <svg className="circle" width="100" height="50" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle r="40" cx="50" cy="50" fill="transparent" style={{strokeDasharray: 251.33, strokeDashoffset: 0}}></circle>
            <circle className="bar" r="40" cx="50" cy="50" fill="transparent" style={{strokeDasharray: 251.33, strokeDashoffset: 10}}></circle>
        </svg>
        );
     }
});

module.exports = Circle;
