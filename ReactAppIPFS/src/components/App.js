import React, { Component } from 'react';
import Web3 from 'web3';
import SimpleStorage from '../abis/SimpleStorage.json';
import axios from 'axios';
const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

// const IPFS = require('ipfs-mini');
// const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

class App extends Component {
  async componentWillMount() {
    await this.connectWallet();
    await this.loadBlockchainData();
  }

  async connectWallet() {
    if (window.ethereum) {
      //check if Metamask is installed
      try {
        const address = await window.ethereum.enable(); //connect Metamask
        const obj = {
          connectedStatus: true,
          status: '',
          address: address,
        };
        return obj;
      } catch (error) {
        return {
          connectedStatus: false,
          status: '🦊 Connect to Metamask using the button on the top right.',
        };
      }
    } else {
      return {
        connectedStatus: false,
        status: '🦊 You must install Metamask into your browser: https://metamask.io/download.html',
      };
    }
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    this.setState({ account: accounts[0] });
    const networkId = 5777;
    const networkData = SimpleStorage.networks[networkId];
    if (networkData) {
      const contract = new web3.eth.Contract(SimpleStorage.abi, networkData.address);
      this.setState({ contract });
      const ipfsHash = await this.state.contract.methods.get().call();
      // const hashes = await this.state.contract.methods.getHashes().call();
      this.setState({ ipfsHash });
      // this.setState({ hashes });
      // console.log(hashes);
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
      this.setState({ buffer: Buffer.from(reader.result) });
      console.log('buffer', this.state.buffer);
    };
  };

  onSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting file to ipfs...');
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result);
      if (error) {
        console.error(error);
        return;
      }
      // this.state.hashes.push(result[0].hash);
      // this.state.contract.methods.push(result[0].hash).send({ from: this.state.account });
      this.state.contract.methods
        .set(result[0].hash)
        .send({ from: this.state.account })
        .then((r) => {
          return this.setState({ ipfsHash: result[0].hash });
        });
    });
    await axios.post('http://localhost:3000/image/16', {
      hash: this.state.ipfsHash,
    });
  };

  render() {
    return (
      <div>
        {/* <nav id='navBar' className='navbar fixed-top bg-white flex-md-nowrap p-0'>
          <p className='navbar-brand col-sm-3 col-md-2 m-2'>BlockFile</p>
          <p className='navbar-brand col-sm-3 col-md-2 m-2'>{this.state.ipfsHash}</p>
          <p className='navbar-brand'>{this.state.account}</p>
        </nav> */}
        <br></br>

        <div className='container-fluid mt-5'>
          <div className='row'>
            <main role='main' className='col-lg-12 d-flex text-center'>
              <div className='content mr-auto ml-auto'>
                {/* <embed
                  src={`https://ipfs.infura.io/ipfs/${this.state.ipfsHash}`}
                  type='application/pdf'
                  width='100%'
                  height='100%'
                /> */}
                {/* <img
                  src={`https://ipfs.infura.io/ipfs/${this.state.ipfsHash}`}
                  width='100%'
                  height='100%'
                  alt={this.state.ipfsHash}
                /> */}
                <p>&nbsp;</p>
                <h2>Upload Pictures</h2>

                <form onSubmit={this.onSubmit}>
                  <input className='form-control-file' type='file' onChange={this.captureFile} />
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
