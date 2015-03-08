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
        <svg className="circle" width="120" height="120" viewPort="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle r="55" cx="60" cy="60" fill="transparent" style={{strokeDasharray: 346, strokeDashoffset: 0, strokeWidth: 5}}></circle>
            <circle className="bar" r="55" cx="60" cy="60" fill="transparent" style={{strokeDasharray: 346, strokeDashoffset: 346-(this.props.percent/100*346), strokeWidth: 5}}></circle>
        </svg>
        );
     }
});

module.exports = Circle;
