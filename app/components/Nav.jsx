var React = require('react')
var {Nav, NavItem} = require('react-bootstrap')
var {IndexLinkContainer, LinkContainer} = require('react-router-bootstrap')

var NavBar = React.createClass({
  render: function () {
    return (
      <div className='header'>
        <Nav className='nav pull-right' navbar>
          <IndexLinkContainer to={{ pathname: '/' }}>
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to={{ pathname: '/about' }}>
            <NavItem title='Item'>About</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/example' }}>
            <NavItem title='Item'>Examples</NavItem>
          </LinkContainer>
        </Nav>
      </div>
    )
  }

})

module.exports = NavBar
