

const myHeaders = new Headers();
myHeaders.append("apikey", "MqqiBHpWKsc7n019pq9mfGmP1k3VEVH5");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};



export const fetchCurrencies = async (base = "UAH") => {
    try {
        const response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${base}`, requestOptions);
        const rates = response.json();
        return rates;
    } catch (error) {
        throw error;
    }
};

export const fetchRates = async (base, symbols) => {
    try {
        const response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${base}&symbols=${symbols}`, requestOptions);
        const rates = response.json();
        return rates;
    } catch (error) {
        throw error;
    }
};



