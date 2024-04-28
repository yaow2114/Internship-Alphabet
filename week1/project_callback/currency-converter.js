const axios = require('axios')

// 1st function - getExchangeRate
const getExchangeRate = async (fromCurrency, toCurrency) => {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=0b60a531f7fe8cc2fa2005ab55b33585&format=1');
    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];
    if (isNaN(exchangeRate)) {
        throw new Error (`Unable to get currency ${fromCurrency} to ${toCurrency}`);
    }
    return exchangeRate;
    // axios.get('http://data.fixer.io/api/latest?access_key=0b60a531f7fe8cc2fa2005ab55b33585&format=1').then((response) => {
    //     const rate = response.data.rates;
    //     const euro = 1 / rate[fromCurrency];
    //     const exchangeRate = euro * rate[toCurrency];
    //     console.log(exchangeRate);
    // })
}
// 2nd function - getCountries
const getCountries = async (toCurrency) => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/currency/${toCurrency}`)

        // return response.data.map(country => console.log(country.name.common));
        return response.data.map(country => country.name.common);
    } catch (error) {
        throw new Error(`Unable to get countries that use ${toCurrency}`);
    }

}

// 3rd function - convertCurrency
const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
    const countries = await getCountries(toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}.\n You can spend these in the following countries: ${countries}`
}

// getExchangeRate('EUR','CNY');
// getCountries('USD');
convertCurrency('USDD','123',30)
    .then((message) => {
        console.log(message);
    })
    .catch((error) =>{
        console.log(error.message);
    })