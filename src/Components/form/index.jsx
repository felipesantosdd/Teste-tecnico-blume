import * as React from 'react';
import TextField from '@mui/material/TextField';
import { ContainerStyle, FormStyle } from './index.styled';
import Button from '@mui/material/Button';
import { Context } from '../../Provider';

export function Form() {

    const { getWeatherForecast } = React.useContext(Context)


    function handleSubmit(event) {
        event.preventDefault()
        const cidade = event.target.cidade.value

        getWeatherForecast(cidade)
    }

    return (
        <ContainerStyle>
            <FormStyle onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Cidade" variant="outlined" name="cidade" />
                <Button variant="contained" type='submit'>Pesquisar</Button>
            </FormStyle>
        </ContainerStyle >

    )
}
