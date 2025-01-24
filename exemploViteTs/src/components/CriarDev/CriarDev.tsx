import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { DevType, ResponseApiType } from '../../apis/apiTypes';
import { useForm } from 'react-hook-form';
import { requestComPost } from '../../apis/exemploAxios'

const CriarDev: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
      } = useForm<DevType>()

    const [message, setMessage] = useState<string>('')

    const onSubmit = ({ nome, email, tecnologias, nivel, salario }: DevType) => {
        requestComPost({ nome, email, tecnologias, nivel, salario }).then((data: ResponseApiType) => {
            reset()
            setMessage(data.message)
        }).catch((err) => {
            setMessage(err.message)
        })

    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '350px', width: '100%' }}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Typography variant='h3'>Form em React com Material UI</Typography>

                <TextField margin={'normal'} label="nome" {...register("nome")} fullWidth />
                <TextField margin={'normal'} label="email" {...register("email")} fullWidth />
                <TextField margin={'normal'} label="tecnologias" {...register("tecnologias")} fullWidth />
                <TextField margin={'normal'} label="nivel" {...register("nivel")} fullWidth />
                <TextField margin={'normal'} label="salario" {...register("salario")} fullWidth />
                <Button size="medium" type="submit" variant='contained' fullWidth>Cadastrar</Button>
                <Typography>{message}</Typography>

            </form>
        </div>
    );
};

export default CriarDev;
