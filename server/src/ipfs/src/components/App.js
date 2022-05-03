import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import SimpleStorage from '../abis/SimpleStorage.json';

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.ethereum);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = SimpleStorage.networks[networkId];
    if (networkData) {
      const contract = web3.eth.Contract(SimpleStorage.abi, networkData.address);
      this.setState({ contract });
      const ipfsHash = await this.state.contract.methods.get().call();
      this.setState({ ipfsHash });
    } else {
      window.alert('Smart contract not deployed to detected network.');
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      ipfsHash: '',
      contract: null,
      web3: null,
      buffer: null,
      account: null,
      hashes: [],
    };
  }

  captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log('buffer', this.state.buffer);
    };
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting file to ipfs...');
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result);
      if (error) {
        console.error(error);
        return;
      }
      this.state.hashes.push(result[0].hash);
      console.log(this.state.hashes);
      this.state.contract.methods
        .set(result[0].hash)
        .send({ from: this.state.account })
        .then((r) => {
          return this.setState({ ipfsHash: result[0].hash });
        });
    });
  };

  render() {
    return (
      <div>
        <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
          <p className='navbar-brand col-sm-3 col-md-2 mr-0'>BlockFile</p>
          <p className='navbar-brand col-sm-3 col-md-2 mr-0'>{this.state.ipfsHash}</p>
          <p className='navbar-brand'>{this.state.account}</p>
        </nav>
        <br></br>

        <div className='container-fluid mt-5'>
          <div className='row'>
            <main role='main' className='col-lg-12 d-flex text-center'>
              <div className='content mr-auto ml-auto'>
                <embed
                  src={`https://ipfs.infura.io/ipfs/${this.state.ipfsHash}`}
                  type='application/pdf'
                  width='100%'
                  height='100%'
                />
                <p>&nbsp;</p>
                <h2>Upload Pictures</h2>
                <form onSubmit={this.onSubmit}>
                  <input type='file' onChange={this.captureFile} />
                  <input type='submit' />
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
