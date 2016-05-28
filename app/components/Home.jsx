var React = require('react')
var {Col} = require('react-bootstrap')
var HeroImage = require('HeroImage')

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <HeroImage />
        <Col md={6} mdOffset={4}>
          <h1 className='text-center'>Discover New Tips in Tips.NYC</h1>
          <p className='text-center'>The event like no other event.</p>
        </Col>
      </div>
    )
  }

})

module.exports = Home
