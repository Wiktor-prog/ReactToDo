import React from 'react';

class ColumnView extends React.Component {
  render() {
    return (
      <div>{ this.props.match.params.id }</div>
    );
  }
}

export default ColumnView;