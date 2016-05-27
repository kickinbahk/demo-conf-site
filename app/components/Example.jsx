var React = require('react')
var {Col} = require('react-bootstrap')

var Example = React.createClass({
  render: function () {
    return (
      <Col md={6} mdOffset={3}>
        <h2 className='text-center'>Examples</h2>
      </Col>
    )
  }

})

module.exports = Example
