import axios from 'axios';
import { DevType } from './apiTypes'

export const requestComAxios = async () => {
    try {
        const response = await axios.get('https://api.adviceslip.com/advice', { });
        console.log('Dados com axios:', response.data);
    } catch (error) {
        console.error('Erro ao buscar dados com axios:', error);
    }
};

export const requestComPost = async ({ nome, email, tecnologias, nivel, salario }: DevType) => {
    try {
        const response = await axios.post('http://localhost:3000/dev',
        { nome, email, tecnologias, nivel, salario },
        { headers: {'Content-Type': 'application/json'},}
        );

        return response.data
    } catch (error) {
        console.error('Erro ao buscar dados com axios:', error);
    }
};

export const requestComGet = async (email: string) => {
    try {
        const response = await axios.get(`http://localhost:3000/email/dev/${email}`, { headers: {} });

        return response.data
    } catch (error) {
        console.error('Erro ao buscar dados com axios:', error);
    }
};

