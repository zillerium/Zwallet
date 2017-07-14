
import React, {Component} from 'react';
import './App.css';
//import Web3 from 'web3'
import _ from 'lodash'
import {Navbar, Jumbotron, Button, Image, PageHeader, Form, FormGroup, Pager, ControlLabel} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var Web3 = require('web3');

class App extends Component {

  constructor(props) {
    super(props);

      this.state = {val: 0, UserMessage:'', processingMessage:'', increasing: false, contractJson:[], products:[],IPFSContract:'', IPFSText: '--',
      ETHEREUM_CLIENT: 'a', paymentAmount:0, customerBalance:0, accountBalance:0,   contractAddress: '0x0f6ce188e84845034990adc172d3a8248cc482e7',
       mainAccount:'0x48884f1f259a4fdbb22b77b56bfd486fe7784304',
customerAccount:'0x619056dd8191f6303f265bb423c37c6b043ecd9d',
       ZsendContract:'', paymentContract:''}
// 0x9cceb4e507b6c498c66e812328c348e7f6a61c88 new
  this.showMessage = this.showMessage.bind(this)
  this.getBalance = this.getBalance.bind(this)
    this.makePayment = this.makePayment.bind(this)
      this.updatePaymentAmount = this.updatePaymentAmount.bind(this)
  }

  setClient = ( ) => {
    console.log("props", this)
  //  this.setState({ ETHEREUM_CLIENT: info });
  }




componentWillMount() {
  console.log('componentWillMount');


  let localJsonABI =  [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "version", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" } ], "name": "approveAndCall", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256" } ], "payable": false, "type": "function" }, { "inputs": [ { "name": "_initialAmount", "type": "uint256" }, { "name": "_tokenName", "type": "string" }, { "name": "_decimalUnits", "type": "uint8" }, { "name": "_tokenSymbol", "type": "string" } ], "payable": false, "type": "constructor" }, { "payable": false, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "Approval", "type": "event" } ]

  this.setState({contractJson: localJsonABI})
//  let w = new Web3(new Web3.providers.HttpProvider("http://178.62.81.42:8545"))
 let w = new Web3(new Web3.providers.HttpProvider("http://104.236.58.158:8545"))
//  let w = new Web3(new Web3.providers.HttpProvider("http://104.236.58.158:8545"))
  this.setState({ETHEREUM_CLIENT: w});
//  this.setClient = this.setClient.bind(this);

  let paymentContract = w.eth.contract(localJsonABI).at(this.state.contractAddress)
  this.setState({paymentContract: paymentContract})


w.eth.defaultAccount = w.eth.coinbase;



//  this.state.ETHEREUM_CLIENT.eth.defaultAccount = this.state.ETHEREUM_CLIENT.eth.coinbase;
  let currentBalance = paymentContract.balanceOf(this.state.mainAccount);
  var actualBalance = currentBalance.c[0]
    let customerBalanceObj = paymentContract.balanceOf(this.state.customerAccount);
    var customerBalance = customerBalanceObj.c[0]
this.setState({accountBalance: actualBalance})
this.setState({customerBalance: customerBalance})
}


getBalance(){

      this.setState({UserMessage:"Account balances are shown"})
  let currentBalance = this.state.paymentContract.balanceOf(this.state.mainAccount);
  this.setState({accountBalance: currentBalance.c[0]})
  let customerBalance = this.state.paymentContract.balanceOf(this.state.customerAccount);
  this.setState({customerBalance: customerBalance.c[0]})
}
showMessage() {
var g=9;
}
makePayment() {

    this.setState({UserMessage:"Your payment is being made"})
  this.state.paymentContract.transfer
  .sendTransaction(this.state.customerAccount, this.state.paymentAmount, {from: this.state.mainAccount, gas: 100000})
  this.showMessage();
}

updatePaymentAmount(evt) {

   this.setState({
     paymentAmount: evt.target.value
   });
   var v=1;
 }

render() {



    // var displayBalance = this.state.accountBalance;



    return (
        <div>
          <PageHeader><small>ERC20 Payment System - Zillerium</small></PageHeader>
          <div>
            {this.state.UserMessage}
          </div>
          <Button type="button" className="btn"
          onClick={() => this.getBalance()}>Get Balance</Button>
          <input value={this.state.paymentAmount} onChange={this.updatePaymentAmount}/>
          <button type="button" className="btn" onClick={() => this.makePayment()}>Make Payment</button>

          <div>Balance "0x48884f1f259a4fdbb22b77b56bfd486fe7784304" .....
          {this.state.accountBalance}
          </div>
          <div>Balance "0x619056dd8191f6303f265bb423c37c6b043ecd9d" .....
          {this.state.customerBalance}
          </div>
        </div>
    );
}
}




export default App;
