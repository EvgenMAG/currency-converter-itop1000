import React from 'react'

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


export default function AmountInputForm(props) {
    const { amount, onChangeAmount, name } = props

    return (<FormControl sx={{ m: 2, width: 220 }}>
        <InputLabel htmlFor="outlined-adornment-password">Amount</InputLabel>
        <OutlinedInput
            id="outlined-adornment-password"
            type="number"
            inputProps={{ min: 0 }}
            value={amount}
            onChange={onChangeAmount(name)}
            endAdornment={
                <InputAdornment position="end" />

            }
            label="Amount"
        />
    </FormControl>
    )
}


