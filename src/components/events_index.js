import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvetns() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>{this.renderEvetns()}</tbody>
        </table>
      </>
    );
  }
}
const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchToProps = { readEvents };

// const mapDispatchToProps = (disapatch) => ({
//   increment: () => disapatch(increment()),
//   decrement: () => disapatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
