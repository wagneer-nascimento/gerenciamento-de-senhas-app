import api from './api';

export function autenticacao(data: any) {
    const response = api.post(`/usuarios`, data);

    return response;
}