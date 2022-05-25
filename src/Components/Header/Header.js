
import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ContextCalculator } from '../../views/HomePage';



export default function Header() {
    const { hryvnaRate } = useContext(ContextCalculator)

    return (
        <Box
            display="flex"
            justifyContent="space-around"
            paddingTop="15px"
            paddingBottom="15px"
            borderBottom="3px solid grey"
        >
            {hryvnaRate.map(({ actualCur, rate, homeCur }) => {
                const normalizedRate = (1 / rate).toFixed(4);
                return (<Box Box key={actualCur} >
                    <Typography
                        variant=" body1"
                        color="main"
                        sx={{
                            fontSize: '20px',
                            fontWeight: 500,
                        }}
                    >{`${actualCur}/${homeCur} = `} </Typography>
                    <Typography
                        variant=" body1"
                        color="main"
                        sx={{
                            fontSize: '20px',
                            fontWeight: 700,
                        }}
                    >{normalizedRate}</Typography>
                </Box>)
            }
            )}
        </Box >
    )
}