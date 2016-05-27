var React = require('react')
var {Button, Nav} = require('react-bootstrap')
var ReactRouter = require('react-router')
var {IndexLinkContainer} = require('react-router-bootstrap')

var Nav = React.createClass({
  render: function () {
    return (
      <Nav bsStyle='pills' activeKey={1} >
        <IndexLinkContainer eventKey={1} href='/home'>NavItem 1 content</IndexLinkContainer>
        <IndexLinkContainer eventKey={2} title='Item'>NavItem 2 content</IndexLinkContainer>
        <IndexLinkContainer eventKey={3} disabled>NavItem 3 content</IndexLinkContainer>
      </Nav>
    )
  }

})

module.exports = Nav
