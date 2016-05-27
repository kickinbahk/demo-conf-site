var React = require('react')
var {Nav, NavItem, container} = require('react-bootstrap')

var Home = React.createClass({

  render: function () {
    return (
      <div>
        <container>
          <h2>The Home Page</h2>
        </container>
      </div>
    )
  }

})

module.exports = Home
