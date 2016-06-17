var React = require('react')
var {IndexLink} = require('react-router')

var NavBar = React.createClass({
  render: function () {
    return (
      <nav className='nav navbar navbar-default'>
        <div className='container-fluid'>
          <h2 className='pull-left'>Amazing Conference!</h2>
          <ul className='nav nav-pills pull-right'>
            <li role='presentation'>
              <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>
                Home
              </IndexLink>
            </li>
            <li role='presentation'>
              <IndexLink to='/about' activeClassName='active' className='presentation' activeStyle={{fontWeight: 'bold'}}>
                About
              </IndexLink>
            </li>
            <li role='presentation'>
              <IndexLink to='/examples' activeClassName='active' className='presentation' activeStyle={{fontWeight: 'bold'}}>
                Examples
              </IndexLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

})

module.exports = NavBar
