let request = require('request')

let url = 'http://data.fixer.io/api/latest?access_key=fa53a5c55c05d879850982553a3ac924'

const getCurrencies = (baseCurrency, targetCurrency) => {
    return new Promise((resolve, reject) => {
        request({
            url: `${url}`,
            json: true
        }, (err, res, body) => {
            if (err)
                reject(err)
            resolve(body)
        })
    })
}



const currencyConvert = async (baseCurrency, targetCurrency) => {
    const body = await getCurrencies(baseCurrency, targetCurrency)
    let tcurrency = body.rates[targetCurrency]
    let bcurrency = 1/body.rates[baseCurrency]
    return tcurrency*bcurrency
}

 module.exports = {
     currencyConvert
 }