import React, { useContext } from 'react'
import { Box, Grid, Container, Typography } from '@mui/material';
import { ContextCalculator } from '../../views/HomePage'
import SelectInputForm from "../SelectInputForm/SelectInputForm";
import AmountInputForm from "../AmountInputForm/AmountInputForm"

export default function RateCalculator() {

    const { currencyList,
        fromCurrency,
        toCurrency,
        fromAmount,
        toAmount,
        amountInFromCurrency,
        onChangeAmount,
        onChangeCurrency } = useContext(ContextCalculator)

    return (
        <Container fixed >
            <Box
                paddingTop='20px'
            >
                <Typography
                    variant="subtitle1"
                    color="main"
                    sx={{
                        marginBottom: '15px',
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: 500,
                    }}
                >ITOP Currency Converter</Typography>
                {fromCurrency && toCurrency && amountInFromCurrency && <Typography
                    variant="subtitle1"
                    color="main"
                    sx={{
                        marginBottom: '45px',
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: 700,
                    }}
                >{`Convert ${fromCurrency} to ${toCurrency}`}</Typography>}
                {fromCurrency && toCurrency && !amountInFromCurrency && <Typography
                    variant="subtitle1"
                    color="main"
                    sx={{
                        marginBottom: '45px',
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: 700,
                    }}
                >{`Convert ${toCurrency} to ${fromCurrency}`}</Typography>}
            </Box>
            <Grid container spacing={0}>
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <SelectInputForm
                        currency={fromCurrency}
                        onChangeCurrency={onChangeCurrency}
                        currencyList={currencyList}
                        name={"From"}
                    />
                    <AmountInputForm
                        amount={fromAmount}
                        onChangeAmount={onChangeAmount}
                        name={"From"}
                    />
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"

                    }}>

                    <SelectInputForm
                        currency={toCurrency}
                        onChangeCurrency={onChangeCurrency}
                        currencyList={currencyList}
                        name={"To"}
                    />
                    <AmountInputForm
                        amount={toAmount}
                        onChangeAmount={onChangeAmount}
                        name={"To"}
                    />
                </Grid>
            </Grid>
        </Container >
    )
}