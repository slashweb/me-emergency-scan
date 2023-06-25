# React web app for Health

This app is made with React JS in the Front End, and its published on 2 blockchains, Gnosis and zkEVM Polygon, this are the URLS, also you can check the paramedic widget published on the BOS.

https://polygon.slashweb.com.mx/
https://gnosis.slashweb.com.mx/
https://near.social/#/vicbaporu.near/widget/Paramedic?patien=0x2fa4565d6d1e3ac132c592e32db9a960edaa06df

## Tech Stack

The contract is build in Solidity with Remix editor for browsers, in this case we store the sensitive data in the contract, encrypted with Lit guaranteeing, all the data stored by the doctors is protected and just que paramedics and doctors can access it, or the owner of the address.
In the Front end we use React as Javascript library, all the CSS of the project was built with Tailwind CSS its a really good utility framework that allows to us make reusable components, and we use BOS is NEAR for the paramedic widget, in this case we use it because 
have really cool things that help us with the diagnostics with the paramedics, they just need to have a cell phone and a wallet, and the page will be available all time, because BOS works as same as IPFS and takes it directly to the patient wallet.

### Prerequisites

To run this web app, you need to have the following software installed on your machine:

- Node.js (version 16 or higher)
- npm (Node Package Manager) or yarn

### Installation
+
1. Clone the repository to your local machine and execute the next commands:

   ```bash
    git clone https://github.com/slashweb/me-emergency-scan
   
    cd me-emergency-scan/emergency-app
    
    npm install --legacy-peer-deps
    
    npm start

