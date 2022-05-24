// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { increment, decrement } from '../actions';

// class EventsIndex extends Component {
//   render() {
//     const props = this.props;

//     return (
//       <>
//         <div>value: {props.value}</div>
//         <button onClick={props.increment}>+1</button>
//         <button onClick={props.decrement}>-1</button>
//       </>
//     );
//   }
// }
// const mapStateToProps = (state) => ({ value: state.count.value });
// const mapDispatchToProps = (disapatch) => ({
//   increment: () => disapatch(increment()),
//   decrement: () => disapatch(decrement()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
