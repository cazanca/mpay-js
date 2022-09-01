## MPay is a JS SDK for MPesa Payment

## Overview
### Installation
```
npm i mpay-js
```
### Built With
- Typescript
- Axios
- Crypto-Js


### Usage

```javascript
const Mpay = require('mpay-js')

const pay = new Mpay({apiKey: "API_KEY", publicKey: "PUBLIC_KEY"})
await pay.c2b({
     "input_TransactionReference": "T12344C",
    "input_CustomerMSISDN": "25884XXXXXXX",
    "input_Amount": "10",
    "input_ThirdPartyReference": "JEB278",
    "input_ServiceProviderCode": "171717"
}).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})
```
