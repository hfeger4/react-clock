import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  constructor(props){
    super(props);
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }

  render() {
    return(
      <div className="clock">
        <div>Clock:  </div>
        <div>{this.hours}:</div>
        <div>{this.minutes}:</div>
        <div>{this.seconds}</div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
