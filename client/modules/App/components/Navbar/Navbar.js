/** eslint-disable */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui';
import { logUserOut } from '../../AppActions';
import { getUser, getAuthenticatedStatus } from '../../AppReducer';

import animateStyles from '../../../../styles/animate.css';

const listStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  padding: 0,
  width: '100%',
  backgroundColor: '#333c5a',
  position: 'fixed',
  zIndex: '100000',
};

const listItemStyle = {
  color: '#fff',
  WebkitAnimationDuration: '3s',
};

const hoverColor = 'rgb(100%, 70.2%, 0%)';

class Navbar extends Component {
  state = {
    logged: false,
  };

  handleChange = (event, logged) => {
    this.setState({ logged });
  };

  handleLogout = () => {
    this.props.dispatch(logUserOut());
  }

  renderOptions() {
    return this.props.isAuthenticated
      ?
      <List className={`${animateStyles.animated} ${animateStyles.fadeIn}`} style={listStyle}>
        <ListItem
          containerElement={<Link to="/" />}
          hoverColor={hoverColor}
          style={listItemStyle}
          primaryText="Home"
        />
        <ListItem
          onTouchTap={this.handleLogout}
          hoverColor={hoverColor}
          style={listItemStyle}
          primaryText="Logout"
        />
        <ListItem
          containerElement={<Link to="/create" />}
          hoverColor={hoverColor}
          style={listItemStyle}
          primaryText="Create Blog"
        />
        <ListItem
          hoverColor={hoverColor}
          style={{ justifyContent: 'left', color: '#fff' }}
          primaryText={this.props.user.email ? this.props.user.email : 'Loading...'}
        />
      </List>
      :
      <List style={listStyle}>
        <ListItem
          containerElement={<Link to="/" />}
          hoverColor={hoverColor}
          style={listItemStyle}
          primaryText="Home"
        />
        <ListItem
          containerElement={<Link to="/register" />}
          hoverColor={hoverColor}
          style={listItemStyle}
          primaryText="Register"
        />
        <ListItem
          containerElement={<Link to="/login" />}
          hoverColor={hoverColor}
          style={listItemStyle}
          primaryText="Login"
        />
      </List>;
  }

  render() {
    return (
      <div>
       {this.renderOptions()}
      </div>
    );
  }
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    isAuthenticated: getAuthenticatedStatus(store),
    user: getUser(store),
  };
}

export default connect(mapStateToProps)(Navbar); // inject dispatch
