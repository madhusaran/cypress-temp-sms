
[![cypress-temp-sms](https://github.com/madhusaran/cypress-temp-sms/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/madhusaran/cypress-temp-sms/actions/workflows/node.js.yml)

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/madhusaran/cypress-temp-sms/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/madhusaran/cypress-temp-sms/tree/main)

# cypress-temp-sms ✔
A lightweight npm library designed to generate temporary mobile numbers that shall be used for SMS verification as part of end-to-end testing with Cypress. It streamlines the process of testing OTP,2FA -related functionalities in your applications.

Thanks https://receive-smss.com/ 🙏

# Disclaimer:
⚠️ In this plugin, we are using https://receive-smss.com/ to generate temporary numbers and read its SMS inbox. Please note that these are several disposable numbers are to be used 
👉 **only for testing activities** 👈

## Features

- **Quick Setup**: Easily integrate with your Cypress tests.
- **Disposable mobile numbers**: Generate temporary mobile numbers for testing sign-ups, password resets, and more.


## Installation

Install `cypress-temp-sms` using below command:

```bash 
npm install cypress-temp-sms --save-dev
```

## Usage

Add below line in your Cypress project  - `cypress/support/commands.js`

```javascript
import 'cypress-temp-sms'
```

## Generate a new temporary number:

```javascript
cy.getRandomNumber()  
//Returns you a temp number generated using https://receive-smss.com/

``` 
## Generate a new temporary number with specific country:

```javascript
cy.getNumberFrom('India')  
//Returns you a temp number generated using https://receive-smss.com/

``` 

## Get the SMS inbox for the genrated number:

```javascript
cy.getSMS('+123456789') 
//Returns below array object for the SMS inbox data. ( Last 40 Messages )
{ sender: string, message: any, received: string }[]

```

### Contributing
Contributions are welcome!


#HappyTesting
