import React from 'react';
import ReactDOM from 'react-dom';
import Web3 from 'web3';
import './../css/index.css';
import Casino from '../../build/contracts/Casino.json';
const contract = require('truffle-contract');
import getWeb3 from '../utils/getWeb3.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lastWinner: 0,
      timer: 0,
      web3: null,
      contracts: {}
    }
  }

  voteNumber(number) {
    console.log(number + "VOTED");
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    const casino = contract(Casino)
    casino.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var casinoInstance;

    casino.deployed().then((instance) => {
      casinoInstance = instance
      console.log('CASINO', casinoInstance);
    });
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
