var React = require('react')
var HeroImage = require('HeroImage')

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <HeroImage />
        <div className='col-md-6 col-md-offset-2'>
          <h1 className='text-center'>Discover New Tips in Tips.NYC</h1>
          <p className='text-center'>The event like no other event.</p>
        </div>
      </div>
    )
  }

})

module.exports = Home
