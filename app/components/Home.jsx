var React = require('react')
var {Col} = require('react-bootstrap')

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <Col md={6} mdOffset={3}>
          <h2 className='text-center'>The Home Page</h2>
        </Col>
      </div>
    )
  }

})

module.exports = Home
