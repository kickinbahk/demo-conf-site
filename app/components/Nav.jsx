var React = require('react')
var {IndexLink} = require('react-router')

var NavBar = React.createClass({
  render: function () {
    return (
      <div className='header'>
        <h2 className='pull-left'>Amazing Conference!</h2>
        <nav className='nav pull-right' navbar bsStyle='pills'>
          <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>
            Home
          </IndexLink>
          <IndexLink to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>
            About
          </IndexLink>
          <IndexLink to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>
            Examples
          </IndexLink>
        </nav>
      </div>
    )
  }

})

module.exports = NavBar
