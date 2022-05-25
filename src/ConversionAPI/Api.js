

// const myHeaders = new Headers();
// myHeaders.append("apikey", "s3T2w0LtqWKbB17ayt46Q75f1vGfc8N1");

// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
// };



// export const fetchCurrencies = async (base = "UAH") => {
//     try {
//         const response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${base}`, requestOptions);
//         const rates = response.json();
//         return rates;
//     } catch (error) {
//         throw error;
//     }
// };

// export const fetchRates = async (base, symbols) => {
//     try {
//         const response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${base}&symbols=${symbols}`, requestOptions);
//         const rates = response.json();
//         return rates;
//     } catch (error) {
//         throw error;
//     }
// };

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '151c559a8amsh8523786cb59ea5bp1ceea6jsn23e1e5281583'
    }
};

// fetch('https://fixer-fixer-currency-v1.p.rapidapi.com/latest?base=USD&symbols=GBP%2CJPY%2CEUR', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));




export const fetchCurrencies = async (base = "UAH") => {
    try {
        const response = await fetch(`https://fixer-fixer-currency-v1.p.rapidapi.com/latest?base=${base}`, options);
        const rates = response.json();
        return rates;
    } catch (error) {
        throw error;
    }
};

export const fetchRates = async (base, symbols) => {
    try {
        const response = await fetch(`https://fixer-fixer-currency-v1.p.rapidapi.com/latest?base=${base}&symbols=${symbols}`, options);
        const rates = response.json();
        return rates;
    } catch (error) {
        throw error;
    }
};
