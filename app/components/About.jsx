var React = require('react')
var {Col} = require('react-bootstrap')

var About = React.createClass({
  render: function () {
    return (
      <Col md={6} mdOffset={3}>
        <h2 className='text-center'>About</h2>
      </Col>
    )
  }

})

module.exports = About
