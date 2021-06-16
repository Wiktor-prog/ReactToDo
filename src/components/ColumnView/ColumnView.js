import React from 'react';
import PropTypes from 'prop-types';

class ColumnView extends React.Component {

  static propTypes = {
    
    
  }
  static defaultProps = {
    
  }
  render() {
    return (
      <div>{ this.props.match.params.id }</div>
    );
  }
}

export default ColumnView;