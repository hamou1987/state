import './style.css';
import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        FullName : 'Silver Gorilla ',
        Profession: 'Forest Guard',
        Bio: 'Protecting forest from human introdures',
        SrcImg : './Gorilla_Profile.jpg' ,
        Show: false,
        button: 'show profile',
        date: 0
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  tick() {
    this.setState({
      date: this.state.date + 1
    });
  }


  isToggle = () => {
    this.setState(state => ({
      Show : !this.state.Show
    }))
  }

  render() {
    const Show = this.state.Show;
    return (
  <div className='Profile'>
      { Show && (
      <>
        <h1> {this.state.FullName} </h1>
        <h3> {this.state.Profession} </h3>
        <p > {this.state.Bio} </p>
        <img src={this.state.SrcImg} alt='profileimge'></img>
      </>
      )}
      
      <br/> <br/>
      <button onClick={this.isToggle}>{Show?'hide profile': this.state.button}</button>
      <p> The last component was mounted since {this.state.date} seconds</p>

  </div>
    )
  }
}

export default App