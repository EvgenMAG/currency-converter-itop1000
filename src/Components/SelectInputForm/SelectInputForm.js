import React from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectInputForm(props) {
    const { currency, currencyList, onChangeCurrency, name } = props

    return (<FormControl sx={{ m: 2, width: 220 }}>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select-label"
            value={currency}
            name="From"
            label="From"
            onChange={onChangeCurrency(name)}
        >
            <MenuItem value="">
            </MenuItem>
            {currencyList.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
    </FormControl>
    )
}


