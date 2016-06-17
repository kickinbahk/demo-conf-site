var React = require('react')

var HeroImage = React.createClass({

  render: function () {
    return (
      <img src='/./assets/images/new-york.jpeg'
        class='heroImage responsive' alt='Cover image of NYC Skyline'/>
    )
  }

})

module.exports = HeroImage
