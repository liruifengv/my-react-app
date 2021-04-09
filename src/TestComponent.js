// export default function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
import React from 'react'

// export default class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//   handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }
//   render(h) {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         <button  onClick={this.handleClick}>
//           Activate Lasers
//         </button>
//       </div>
//     )
//   }
// }

export default class Toggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: true }

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render () {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}
