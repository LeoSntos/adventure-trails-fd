import { TextField, MenuItem, } from '@mui/material'
import styles from "./PaginaCadastroTrilha.module.css"
import { node } from 'prop-types';

function PaginaCadastroTrilha() {
    const Dificuldade = [
        {
            value: 'Facil',
            label: 'Facil',
        },
        {
            value: 'Dificil',
            label: 'Dificil',
        },
        {
            value: 'Muito-dificil',
            label: 'Muito dificil',
        },
    ];

    const TipoTrilha = [
        {
            value: 'Caminhada',
            label: 'Caminhada'
        },
        {
            value: 'Trekking',
            label: 'Trekking'
        },
        {
            value: 'Corrida',
            label: 'Corrida'
        },
    ]


    return (
        <div className={styles.container}>

            <h1>Cadastro de nova trilha</h1>

            <form>

                <TextField type='text' label="Nome da trilha" margin='normal' sx={ {width: 572, height: 60}}></TextField>

                <div>
                    <TextField type='number' label="Duraçao estimada (min)" margin='normal' sx={{width: 286}}></TextField>
                    <TextField type='number' label="Trajeto (Km)" margin='normal' sx={{width: 286}} ></TextField>
                </div>
                <div>
                    <TextField type='text' label="Cidade" margin='normal' sx={{width: 286}} ></TextField>
                    <TextField type='text' label="Estado" margin='normal' sx={{width: 286}} ></TextField>
                </div>
                <div>
                    <TextField type='text' label="Nome completo do usuario" margin='normal' sx={{width: 286}}></TextField>

                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Dificuldade"
                        margin='normal'
                        sx={{width: 286}}
                    >
                        {Dificuldade.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>


                <TextField
                    id="outlined-select-currency"
                    select
                    label="Tipo de trilha"
                    margin='normal'
                    sx={ {width: 572, height: 60}}
                >
                    {TipoTrilha.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <div>
                    <TextField type='text' label="Url da trilha" margin='normal' sx={ {width: 572, height: 60}}></TextField>
                </div>

            </form>
        </div>
    )
}

export default PaginaCadastroTrilha