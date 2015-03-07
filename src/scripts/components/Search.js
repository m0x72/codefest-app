var React = require('react');
var Router = require('react-router');

var Search = React.createClass({
    mixins: [Router.Navigation],
    handleFormSubmit: function(e){
        e.preventDefault();
        var from = this.refs.from.getDOMNode().value.trim(),
            to = this.refs.to.getDOMNode().value.trim(),
            date = this.refs.date.getDOMNode().value.trim(),
            time = this.refs.time.getDOMNode().value.trim();

        return this.transitionTo('rides', {}, {from: from, to: to, date: date, time: time});
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
                        <input type="date" name="date" ref="date"/>
                        <input type="time" name="time" ref="time" />
                    </div>
                    <button type="submit">Yiaoieajfoppie kay yay mf!</button>
                </form>
        );
     }
});

module.exports = Search;
