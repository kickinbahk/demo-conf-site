var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRouter, hashHistory} = require('react-router')
var Main = require('Main')
var bootstrap = require('react-bootstrap')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
)
