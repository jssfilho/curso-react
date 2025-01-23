import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { DevType, ResponseType } from '../../apis/apiTypes';
import { useForm } from 'react-hook-form';
import { requestComPost } from '../../apis/exemploAxios'

const PrimeiroComponenteMaterial: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
      } = useForm<DevType>()

    const [message, setMessage] = useState('')

    const onSubmit = ({ nome, email, tecnologias, nivel, salario }: DevType) => {
        requestComPost({ nome, email, tecnologias, nivel, salario }).then((data: ResponseType) => {
            reset()
            setMessage(data.message)
        }).catch((err) => {
            setMessage(err.message)
        })

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', maxWidth: '350px', height: '100%' }}>
                <h1>Form em React com Material UI</h1>

                <TextField label="nome" {...register("nome")} fullWidth />
                <TextField label="email" {...register("email")} fullWidth />
                <TextField label="tecnologias" {...register("tecnologias")} fullWidth />
                <TextField label="nivel" {...register("nivel")} fullWidth />
                <TextField label="salario" {...register("salario")} fullWidth />
                <Button type="submit" variant='contained'>Clique aqui</Button>
                <p>{message}</p>
            </div>
        </form>
    );
};

export default PrimeiroComponenteMaterial;
