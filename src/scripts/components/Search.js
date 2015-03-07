var React = require('react');
var Rides = require('./Rides');

var Search = React.createClass({
    handleFormSubmit: function(e){
        e.preventDefault();
        var from = this.refs.from.getDOMNode().value.trim();
        var to = this.refs.to.getDOMNode().value.trim();
        var datetime = this.refs.datetime.getDOMNode().value.trim();


        console.log("Form Submit: <From> " + from + " <To> " + to + " <Datetime> " + datetime);
        React.render(<Rides/>, document.querySelector('form'));
    },
    render: function (){
        return (
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label htmlFor="start">Von</label>
                        <input type="text" name="from" ref="from"/>
                    </div>
                    <div>
                        <label htmlFor="destination">Nach</label>
                        <input type="text" name="to" ref="to"/>
                    </div>
                    <div>
                        <label htmlFor="datetime">Um</label>
                        <input type="text" name="datetime" ref="datetime"/>
                    </div>
                    <button type="submit">Yiaoieajfoppie kay yay mf!</button>
                </form>
        );
     }
});

module.exports = Search;
