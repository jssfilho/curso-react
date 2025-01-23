import React from 'react';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DevType, RequestEmailType } from '../../apis/apiTypes';
import { exemploComGet } from '../../apis/exemploAxios';

const PrimeiroComponente: React.FC = () => {
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm<RequestEmailType>()
    const onSubmit = (data: RequestEmailType) => {
        exemploComGet(data.email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit()}>
                <h1>Componente em TypeScript</h1>
                <TextField label="email" {...register('email')} />
                <Button type='submit'>Buscar</Button>
            </form>
        </div>
    );
};

export default PrimeiroComponente;
function exemploComGet(data: RequestEmailType) {
    throw new Error('Function not implemented.');
}

