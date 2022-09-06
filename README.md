<h1 align="center"> MPay </h1> <br>

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Features](#features)
- [Feedback](#feedback)
- [Requirements](#requirements)
- [Usage](#usage)
  - [Vocabulary](#vocabulary)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [C2B](#c2b)
  - [B2B](#b2b)
  - [B2C](#b2c)
  - [Reversal](#reversal)
  - [Query Transaction Status](#query-transaction-status)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

MPay is a Javascript library that allows easy integration of MPesa payment services in your application.


## Features

These are the operations you can perform with:

* C2B stands for Consumer-to-Business. Funds from the customer’s mobile money wallet will be deducted and be transferred to the mobile money wallet of the business.
* B2B stands for Business-to-Customer. Funds from the business’ mobile money wallet will be deducted and transferred to the mobile money wallet of the third party business.
* B2C stands for Business-to-Business. Funds from the business’ mobile money wallet will be deducted and transferred to the mobile money wallet of the third party customer.
* Reversal. The Reversal API is used to reverse a successful transaction. Using the Transaction ID of a previously successful transaction
* Query Transaction. The Query Transaction Status API is used to determine the current status of a particular transaction. Using either the Transaction ID or the Conversation ID of the transaction from the Mobile Money Platform

## Feedback

Feel free to send us feedback on [Twitter](https://twitter.com/mpay) or [file an issue](https://github.com/cazanca/mpay-js/issues/new).

## Requirements
[NodeJS 12+](https://nodejs.org/en/)

## Usage

### Vocabulary

* input_TransactionReference: This is the reference of the transaction for the customer or business making the transaction. This can be a smartcard number for a TV subscription or a reference number of a utility bill
* input_CustomerMSISDN: MSISDN (cellphone number) of the customer for the transaction
* input_Amount: The amount for the transaction.
* input_ThirdPartyReference: This is the unique reference of the third party system. When there are queries about transactions, this will usually be used to track a transaction
* input_ServiceProviderCode: Shortcode of the business where funds will be credited to.
* input_PrimaryPartyCode: Shortcode of the business where funds will be debitted from.
* input_ReceiverPartyCode: Shortcode of the business where funds will be credited to.
* input_TransactionID: This is the Mobile Money Platform TransactionID for a successful Transaction
* input_QueryReference: Populate this with one of the following 3 parameters returned from the iPG platform to query the status of the transaction. 1. Mobile Money Platform TransactionID. 2. ThirdPartyReference. 3. iNSight ConversationID

### Installation
```
npm i mpay-js
```
### Configuration

```javascript
const Mpay = require('mpay-js')
const pay = new Mpay({apiKey: "API_KEY", publicKey: "PUBLIC_KEY"})
```
You can find API and PUBLIC and API key on [Mpesa Developer](https://developer.mpesa.vm.co.mz/)

### C2B

```javascript
await pay.c2b({
    "input_TransactionReference": "REPLACE",
    "input_CustomerMSISDN": "REPLACE",
    "input_Amount": "REPLACE",
    "input_ThirdPartyReference": "REPLACE",
    "input_ServiceProviderCode": "REPLACE"
}).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})
```

### B2B

```javascript
await pay.b2b({
    "input_TransactionReference": "REPLACE",
    "input_Amount": "REPLACE",
    "input_ThirdPartyReference": "REPLACE",
    "input_PrimaryPartyCode": "REPLACE",
    "input_ReceiverPartyCode": "REPLACE"
}).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})
```

### B2C

```javascript
await pay.b2c({
    "input_TransactionReference": "REPLACE",
    "input_CustomerMSISDN": "REPLACE",
    "input_Amount": "REPLACE",
    "input_ThirdPartyReference": "REPLACE",
    "input_ServiceProviderCode": "REPLACE"
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
```
### Reversal

```javascript
await pay.reversal({
    "input_TransactionID": "REPLACE",
    "input_SecurityCredential": "REPLACE",
    "input_InitiatorIdentifier": "REPLACE",
    "input_ThirdPartyReference": "REPLACE",
    "input_ServiceProviderCode": "REPLACE",
    "input_ReversalAmount": "REPLACE"
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
}) 
```

### Query Transaction Status

```javascript
await pay.queryTransaction({
    "input_ThirdPartyReference": "REPLACE",
    "input_ServiceProviderCode": "REPLACE",
    "input_QueryReference": "REPLACE"
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
```