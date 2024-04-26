import { TextField, MenuItem, Button } from '@mui/material'
import { TrilhasContext } from '../context/TrilhasContext'
import styles from "./PaginaCadastroTrilha.module.css"
import { useForm } from "react-hook-form"
import { useContext } from 'react'

function PaginaCadastroTrilha() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const { adicionarTrilha } = useContext(TrilhasContext)

    function onSubmit(formValue) {
        adicionarTrilha(formValue)
    }

    const Dificuldade = [
        {
            value: 'Fácil',
            label: 'Fácil',
        },
        {
            value: 'Intermediario',
            label: 'Intermediario',
        },
        {
            value: 'Dificil',
            label: 'Dificil',
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

            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField placeholder={errors?.nomeTrilha?.message} type='text' label="Nome da trilha" margin='normal' sx={{ width: 572, height: 60 }} {...register("nomeTrilha", {
                    required: "Insira o nome da trilha",
                    maxLength: {
                        value: 100,
                        message: "limite de 100 caracteres"
                    }
                })}></TextField>

                <div>
                    <TextField placeholder={errors?.duracao?.message} type='number' label="Duraçao estimada (min)" margin='normal' sx={{ width: 286 }} {...register("duracao", {
                        required: "É precios de um numero",
                        maxLength: {
                            value: 4,
                            message: "Apenas 4 caracteres"
                        }
                    })}></TextField>

                    <TextField placeholder={errors?.trajeto?.message} type='number' label="Trajeto (Km)" margin='normal' sx={{ width: 286 }} {...register("trajeto", {
                        required: "É precios de um numero",
                        maxLength: {
                            value: 5,
                            message: "Apenas 5 caracteres"
                        }
                    })}></TextField>
                </div>

                <div>
                    <TextField placeholder={errors?.cidade?.message} type='text' label="Cidade" margin='normal' sx={{ width: 286 }} {...register("cidade", {
                        required: "Insira o nome da cidade",
                        maxLength: {
                            value: 60,
                            message: "limite de 60 caracteres"
                        }
                    })}></TextField>
                    <TextField placeholder={errors?.estado?.message} type='text' label="Estado" margin='normal' sx={{ width: 286 }}  {...register("estado", {
                        required: "Insira o nome do estado",
                        maxLength: {
                            value: 2,
                            message: "limite de 2 caracteres"
                        }
                    })}></TextField>
                </div>
                <div>
                    <TextField placeholder={errors?.nomeDoCriador?.message} type='text' label="Nome completo do usuario" margin='normal' sx={{ width: 286 }} {...register("nomeDoCriador", {
                        maxLength: {
                            value: 60,
                            message: "limite de 60 caracteres"
                        }
                    })}></TextField>

                    <TextField
                        placeholder={errors?.dificuldade?.message}
                        select
                        label="Dificuldade"
                        margin='normal'
                        defaultValue="Fácil"
                        sx={{ width: 286 }}
                        {...register("dificuldade", {
                            required: "Você deve selecionar uma dificuladade",
                        })}
                    >
                        {Dificuldade.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <TextField
                    placeholder={errors?.tipoDeTrilha?.message}
                    select
                    label="Tipo de trilha"
                    margin='normal'
                    defaultValue="Caminhada"
                    sx={{ width: 572, height: 60 }}
                    {...register("tipoDeTrilha", {
                        required: "Você deve selecionar uma dificuladade",
                    })}
                >
                    {TipoTrilha.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <div>
                    <TextField placeholder={errors?.urlImgTrilha?.message}  type='text' label="Url da trilha" margin='normal' sx={{ width: 572, height: 60 }} {...register("urlImgTrilha", {
                        maxLength: {
                            value: 300,
                            message: "A url deve conter 300 caracteres"
                        }
                    })}></TextField>
                </div>

                <Button variant='outlined' type='submit'>Cadastrar</Button>
            </form>
        </div>
    )
}

export default PaginaCadastroTrilha