var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var Main = require('Main')
var Home = require('Home')
var About = require('About')
var Example = require('Example')

// load bootstrap
require('bootstrap-loader')


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='examples' component={Example} />
    </Route>
  </Router>,
  document.getElementById('app')
)
