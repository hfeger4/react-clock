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

      let new_date = new Date();
      let my_seconds = new_date.getSeconds();
      let my_minutes = new_date.getMinutes();
      let my_hours = new_date.getHours();
      let my_amPm = 'am';

      if(my_seconds >= 60){
        my_seconds = 0;
        my_minutes += 1;
      }
      if(my_minutes >= 60){
        my_minutes = 0;
        my_hours += 1;
      }
      if(my_hours >= 24){
        my_hours = 0;
      }
      if(my_hours >= 12){
        my_amPm = 'pm';
      }
      if(my_seconds < 10){
        my_seconds = '0' + my_seconds.toString();
      }
      if(my_hours < 10){
        my_hours = '0' + my_hours.toString();
      }
      if(my_hours < 10){
        my_hours = '0' + my_hours.toString();
      }
      this.setState({
        seconds: my_seconds,
        minutes: my_minutes,
        hours: my_hours,
        amPm: my_amPm
      });
    }, 1000);
  }
  componentDidMount(){
    this.incrementTime();
  }
  render() {
    return(
      <div className="outside">
      <div className="clock">
        <div>{this.state.hours}:</div>
        <div>{this.state.minutes}:</div>
        <div>{this.state.seconds}</div>
        <div>{this.state.amPm}</div>
      </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
