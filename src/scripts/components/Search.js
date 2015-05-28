var React = require('react');
var Router = require('react-router');

var SearchStore = require('../stores/Search.js');
var SearchAction = require('../actions/Search.js');

var Search = React.createClass({
    mixins: [Router.Navigation],
    handleFormSubmit: function(e){
        e.preventDefault();
        var from = this.refs.from.getDOMNode().value.trim(),
            to = this.refs.to.getDOMNode().value.trim(),
            date = this.refs.date.getDOMNode().value.trim(),
            time = this.refs.time.getDOMNode().value.trim();

        SearchAction.searchByFilter({
            from: from,
            to: to,
            date: date,
            time: time
        }); 

        return this.transitionTo('searchresults');
    },
    render: function (){
        return (
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="start">Von</label>
                        <input type="text" name="from" ref="from" className="form-control" defaultValue="Munich, Germany"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="destination">Nach</label>
                        <input type="text" name="to" ref="to" className="form-control" defaultValue="Berlin, Germany"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="datetime">Um</label>
                        <input type="date" name="date" ref="date" className="form-control" defaultValue="2015-03-09"/>
                        <input type="time" name="time" ref="time" className="form-control" defaultValue="10:00"/>
                    </div>
                    <button type="submit" className="btn btn-default">Search!</button>
                </form>
        );
     }
});

module.exports = Search;
