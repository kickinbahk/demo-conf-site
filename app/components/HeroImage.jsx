var React = require('react')
var {Image} = require('react-bootstrap')

var HeroImage = React.createClass({

  render: function () {
    return (
      <Image src='/./assets/images/new-york.jpeg'
        responsive className='heroImage' alt='Cover image of NYC Skyline'/>
    )
  }

})

module.exports = HeroImage
