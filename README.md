# React web app for Health

This app is made with React JS in the Front End, and its published on 2 blockchains, Gnosis and zkEVM for Polygon, this are the URLS

https://polygon.slashweb.com.mx/dr-register
https://gnosis.slashweb.com.mx/dr-register

## Tech Stack

The contract is build in Solidity with Remix editor for browsers, in this case we store the sensitive data in the contract, but encrypted with Lit, all the data that is store by the medics its protected and just que medics can access to that, or the owner of the part of it.
In the Front end we use React as Javascript library, all the CSS of the project was built with Tailwind CSS its a really good utility framework that allows to us make reusable components, and we use BOS to that its NEAR, in this case we use it because 
have really cool things that help us with the diagnostics with the paramedics, they just need to have a cell phone and a wallet, and the page will be available all time, because BOS works as same as IPFS

### Prerequisites

To run this web app, you need to have the following software installed on your machine:

- Node.js (version 16 or higher)
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository to your local machine and execute the next commands:

   ```bash
    git clone https://github.com/slashweb/me-emergency-scan
   
    cd me-emergency-scan/emergency-app
    
    npm install --legacy-peer-deps
    
    npm start

