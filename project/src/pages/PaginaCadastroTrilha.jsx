import { TextField, MenuItem, } from '@mui/material'
import styles from "./PaginaCadastroTrilha.module.css"
import { useForm } from "react-hook-form"

function PaginaCadastroTrilha() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const Dificuldade = [
        {
            value: 'Facil',
            label: 'Facil',
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

            <form>

                <TextField placeholder='' type='text' label="Nome da trilha" margin='normal' sx={{ width: 572, height: 60 }} {...register("nomeTrilha", {
                    required: "Insira o nome da trilha",
                    maxLength: {
                        value: 100,
                        message: "limite de 100 caracteres"
                    }
                })}></TextField>

                <div>
                    <TextField type='number' label="Duraçao estimada (min)" margin='normal' sx={{ width: 286 }} {...register("duracao", {
                        required: "É precios de um numero",
                        maxLength: {
                            value: 4,
                            message: "Apenas 4 caracteres"
                        }
                    })}></TextField>

                    <TextField type='number' label="Trajeto (Km)" margin='normal' sx={{ width: 286 }} {...register("trajeto", {
                        required: "É precios de um numero",
                        maxLength: {
                            value: 5,
                            message: "Apenas 5 caracteres"
                        }
                    })}></TextField>
                </div>

                <div>
                    <TextField type='text' label="Cidade" margin='normal' sx={{ width: 286 }} {...register("cidade", {
                        required: "Insira o nome da cidade",
                        maxLength: {
                            value: 60,
                            message: "limite de 60 caracteres"
                        }
                    })}></TextField>
                    <TextField type='text' label="Estado" margin='normal' sx={{ width: 286 }}  {...register("estado", {
                        required: "Insira o nome do estado",
                        maxLength: {
                            value: 2,
                            message: "limite de 2 caracteres"
                        }
                    })}></TextField>
                </div>
                <div>
                    <TextField type='text' label="Nome completo do usuario" margin='normal' sx={{ width: 286 }} {...register("nomeUsuario", {
                        maxLength: {
                            value: 60,
                            message: "limite de 60 caracteres"
                        }
                    })}></TextField>

                    <TextField
                        select
                        label="Dificuldade"
                        margin='normal'
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
                    select
                    label="Tipo de trilha"
                    margin='normal'
                    sx={{ width: 572, height: 60 }}
                    {...register("tipoTrilha", {
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
                    <TextField type='text' label="Url da trilha" margin='normal' sx={{ width: 572, height: 60 }} {...register("urlTrilha", {
                        maxLength: {
                            value: 300,
                            message: "A url deve conter 300 caracteres"
                        }
                    })}></TextField>
                </div>

            </form>
        </div>
    )
}

export default PaginaCadastroTrilha