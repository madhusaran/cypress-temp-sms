# cypress-temp-sms
A lightweight npm library designed to generate temporary mobile numbers that shall be fot OTP validation as part of end-to-end testing with Cypress. It streamlines the process of testing eSMS-related functionalities in your applications.

# Disclaimer:
In this plugin, we are using https://receive-smss.com/ to generate temporary numbers and read its SMS inbox. Please note that these are several disposable numbers are to be used **only for testing activities**

## Features

- **Quick Setup**: Easily integrate with your Cypress tests.
- **Disposable ESMSs**: Generate temporary eSMSs for testing sign-ups, password resets, and more.


## Installation

Install cypress-temp-SMS-sms using npm:

```bash 
npm install cypress-temp-sms --save-dev
```

## Usage
===
```javascript
require('cypress-temp-sms')
```
in your Cypress project  - ``cypress/support/commands.js`` file
===
## Generate a new temporary number:

```javascript
cy.getRandomNumber()  //Retuens you a temp number generated using https://receive-smss.com/

``` 
## Generate a new temporary number with specific country:

```javascript
cy.getNumberFrom('India')  //Retuens you a temp number generated using https://receive-smss.com/

``` 

## Get the SMS inbox for the genrated number:

```javascript
cy.getSMS('+123456789')  //Returns below array object for the SMS inbox data. 
```
===

```javascript

{ sender: string, message: any, received: string }[]

```

### Contributing
Contributions are welcome!
