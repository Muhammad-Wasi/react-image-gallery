import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import configs from './../../configs/config';
import PropTypes from 'prop-types';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  rightButton = (props) => {
    const { onClick } = props
    if (onClick)
      return <RaisedButton label="Add" secondary={true} style={{ marginTop: '6px', marginRight: '6px' }} onClick={props.onClick} />;
    return <span />;
  }

  leftButton = (props) => {
    const { onClick } = props
    if (onClick)
      return <RaisedButton label="Some left button" secondary={true} style={{ marginTop: '6px', marginRight: '6px' }} />;
    return <span />;
  }

  render() {
    return (
      <div>
        <AppBar
          title={configs.APP_TITLE}
          iconElementLeft={this.leftButton({})}
          iconElementRight={this.rightButton({ onClick: this.props.onRightClick })}
        />
      </div>
    );
  }
}

Header.propTypes = {
  onRightClick: PropTypes.func
};

export default Header;
