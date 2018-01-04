1. set up ganache - open up the application and make sure everything is running properly
2. truffle compile - get your contracts compiled
3. truffle migrate - make sure the truffle.js file is set up correctly (look out for the build folder)
4. navigate into the dist folder and run `http-server -c-1 -p 8010` which will serve
up the index.html file and clear the cache on every request (good for development testing)
5. on another terminal - run `npm run build` and webpack will watch for changes
6. go to localhost:8080


NOTE - tomorrow you need to reinstall metamask and remigrate contracts
- if you shut down your blockchain and then load it back up again, metamask
still thinks its working on the same blockchain so the transaction hashes are off
- also write a function that gets called that calls the smart contract functions

