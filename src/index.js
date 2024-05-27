/// <reference types="Cypress"/>

const cheerio = require('cheerio');

var mobileNumber

Cypress.Commands.add('getRandomNumber', () => {
    return cy.request('https://receive-smss.com/')
        .then((res) => {
            console.log(res)
            const $ = cheerio.load(res.body);
            const mobileNumbers = []

            $('div.number-boxes-itemm-number').each((index, element) => {
                var mobileN = {
                    mnumber: '',
                    mcountry: ''
                }
                mobileN.mnumber = $(element).text()
                mobileN.mcountry = $(element).siblings('.number-boxes-item-country').text().split('\n')[0]
                mobileNumbers[index] = mobileN
            });
            var random = Math.floor(Math.random() * mobileNumbers.length)
            console.log('    Temp Mobile generated number found from ' + mobileNumbers[random].mcountry + '  ==>    ' + mobileNumbers[random].mnumber)
            mobileNumber = mobileNumbers[random].mnumber
            return mobileNumbers[random].mnumber
        })

})

Cypress.Commands.add('getNumberFrom', (country) => {

    return cy.request('https://receive-smss.com/').then((res) => {
        const $ = cheerio.load(res.body);
        const mobileNumbers = []

        $('div.number-boxes-itemm-number').each((index, element) => {
            var mobileN = {
                mnumber: '',
                mcountry: ''
            }
            mobileN.mnumber = $(element).text()
            mobileN.mcountry = $(element).siblings('.number-boxes-item-country').text().split('\n')[0]
            mobileNumbers[index] = mobileN
        });
        var countryMobile = mobileNumbers.filter((obj) => { return obj.mcountry === country })

        if (countryMobile.length > 0) {
            var random = Math.floor(Math.random() * countryMobile.length)
            console.log('    Temp Mobile generated number found from ' + countryMobile[random].mcountry + '  ==>    ' + countryMobile[random].mnumber)
            return countryMobile[random].mnumber
        } else {
            throw new Error("Oops... We could not find any active mobile number for the provided country. Please refer first page of https://receive-smss.com/ . Note: Only from first page (to make sure that we are using active number)");
        }

    })
})


Cypress.Commands.add('getSMS', (mnumber=mobileNumber) => {
    var mobile = mnumber.replace('+', '')
    return cy.request("https://receive-smss.com/sms/" + mobile)
        .then((response) => {
            // console.log(response.data)
            const $ = cheerio.load(response.body);
            const msgs = []
            $('div.row.message_details').each((index, element) => {
                var msg = {
                    sender: '',
                    message: '',
                    received: '',
                }
                msg.sender = $(element).find('.col-md-3.senderr>a').text()
                msg.message = $(element).find('div.col-md-6.msgg').text()
                msg.received = $(element).find('div.col-md-3.time').text().replace('Time', '')
                msgs[index] = msg
            });
            console.log(msgs)
            return msgs

        })
})