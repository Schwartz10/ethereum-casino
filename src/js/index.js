import React from 'react';
import ReactDOM from 'react-dom';
import Web3 from 'web3';
import './../css/index.css';
import Casino from '../../build/contracts/Casino.json';
const contract = require('truffle-contract');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lastWinner: 0,
      timer: 0,
      web3: null
    }
  }

  voteNumber(number) {
    console.log(number + "VOTED");
  }

  componentDidMount() {
    this.init();
  }

  init(){
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      console.log("connected to external provider")
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      console.log("connected to ganache")
    }

    this.setState({web3: new Web3(App.web3Provider)}, this.instantiateContract);
  }

  instantiateContract(){
    console.log("instantiating contracts, state is: ", this.state);
    const Casino = contract(Casino);
    Casino.setProvider(this.state.web3.currentProvider);
    console.log(Casino)
  }

  render(){
    return (
      <div className="main-container">
        <h1>Bet for your best number and win huge amounts of Ether</h1>
          <div className="block">
            <h4>Timer:</h4> &nbsp;
            <span ref="timer"> {this.state.timer}</span>
          </div>
          <div className="block">
            <h4>Last winner:</h4> &nbsp;
            <span ref="last-winner">{this.state.lastWinner}</span>
          </div>
          <hr/>
        <h2>Vote for the next number</h2>
          <ul>
            <li onClick={() => {this.voteNumber(1)}}>1</li>
            <li onClick={() => {this.voteNumber(2)}}>2</li>
            <li onClick={() => {this.voteNumber(3)}}>3</li>
            <li onClick={() => {this.voteNumber(4)}}>4</li>
            <li onClick={() => {this.voteNumber(5)}}>5</li>
            <li onClick={() => {this.voteNumber(6)}}>6</li>
            <li onClick={() => {this.voteNumber(7)}}>7</li>
            <li onClick={() => {this.voteNumber(8)}}>8</li>
            <li onClick={() => {this.voteNumber(9)}}>9</li>
            <li onClick={() => {this.voteNumber(10)}}>10</li>
          </ul>
      </div>
    )}
  }

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
