//   render() {
//     return (
//       <div>
//         <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
//           <p className='navbar-brand col-sm-3 col-md-2 mr-0'>BlockFile</p>
//           <p className='navbar-brand col-sm-3 col-md-2 mr-0'>{this.state.ipfsHash}</p>
//           <p className='navbar-brand'>{this.state.account}</p>
//         </nav>
//         <br></br>

//         <div className='container-fluid mt-5'>
//           <div className='row'>
//             <main role='main' className='col-lg-12 d-flex text-center'>
//               <div className='content mr-auto ml-auto'>
//                 <embed
//                   src={`https://ipfs.infura.io/ipfs/${this.state.ipfsHash}`}
//                   type='application/pdf'
//                   width='100%'
//                   height='100%'
//                 />
//                 <p>&nbsp;</p>
//                 <h2>Upload Pictures</h2>
//                 <form onSubmit={this.onSubmit}>
//                   <input type='file' onChange={this.captureFile} />
//                   <input type='submit' />
//                 </form>
//               </div>
//             </main>
//           </div>
//         </div>
//       </div>
//     );
//   }

// export default App;
