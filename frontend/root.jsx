import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  constructor(props){
    super(props);
    let date = new Date();
    this.state = {
      amPm: 'am',
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    };
  }
  incrementTime(date){
    setInterval(()=>{

    }, 1000);
  }
  componentDidMount(){
    this.incrementTime();
  }
  render() {
    return(
      <div className="clock">
        <div>{this.state.hours}:</div>
        <div>{this.state.minutes}:</div>
        <div>{this.state.seconds}</div>
        <div>{this.state.amPm}</div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
