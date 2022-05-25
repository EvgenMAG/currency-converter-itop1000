
import React, { useState, useEffect, createContext } from 'react';
import Header from '../Components/Header/Header';
import Loading from '../Components/Loading/Loader';
import Calculator from '../Components/Calculator/Calculator'

import { fetchCurrencies, fetchRates } from '../ConversionAPI/Api'

export const ContextCalculator = createContext()


export default function HomePage() {
    const [hryvnaRate, setHryvnaRate] = useState([])
    const [currencyList, setCurrencyList] = useState([])
    const [fromCurrency, setFromCurrency] = useState("")
    const [toCurrency, setToCurrency] = useState("")
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)


    let fromAmount, toAmount
    if (exchangeRate && amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }


    useEffect(() => {
        fetchCurrencies()
            .then(data => {
                const defaultCurrency = Object.keys(data.rates).find(item => item === "USD")
                const listCurencies = Object.entries(data.rates).filter(item => item[0] === "EUR" || item[0] === "USD").reduce((acc, item) => {
                    acc.push({ actualCur: item[0], rate: item[1], homeCur: data.base })
                    return acc
                }, [])
                setCurrencyList([data.base, ...Object.keys(data.rates).filter(item => item !== data.base)])
                setHryvnaRate([...listCurencies])
                setFromCurrency(data.base)
                setToCurrency(defaultCurrency)
                setExchangeRate(data.rates[defaultCurrency])
            })
    },
        [],
    );

    useEffect(() => {
        if (fromCurrency && toCurrency) {
            fetchRates(fromCurrency, toCurrency)
                .then(data => {
                    setExchangeRate(data.rates[toCurrency])
                })
        }
    },
        [fromCurrency, toCurrency],
    );

    const onChangeAmount = (prop) => (event) => {
        if (prop === "From") {
            setAmount(event.target.value);
            setAmountInFromCurrency(true)
        }
        if (prop === "To") {
            setAmount(event.target.value);
            setAmountInFromCurrency(false)
        }

    };

    const onChangeCurrency = (prop) => (event) => {
        if (prop === "From") {
            setFromCurrency(event.target.value);
        }
        if (prop === "To") {
            setToCurrency(event.target.value);
        }

    };

    return (
        <div>
            {hryvnaRate.length === 0 ? <Loading /> :
                <>
                    <ContextCalculator.Provider value={{
                        hryvnaRate,
                        currencyList,
                        fromCurrency,
                        toCurrency,
                        fromAmount,
                        toAmount,
                        amountInFromCurrency,
                        onChangeAmount,
                        onChangeCurrency
                    }}>
                        < Header />
                        <Calculator />
                    </ContextCalculator.Provider>

                </>


            }


        </div>
    )
}