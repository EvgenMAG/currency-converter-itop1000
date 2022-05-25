

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com',
        'X-RapidAPI-Key': "151c559a8amsh8523786cb59ea5bp1ceea6jsn23e1e5281583"
    }
};





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
