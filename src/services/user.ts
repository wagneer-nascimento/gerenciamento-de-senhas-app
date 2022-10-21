import api from './api';

export function autenticacao(data: any) {
    const response = api.post(`/usuarios`, data);

    return response;
}

export function deleteUser(idUsuario: string) {
    const response = api.delete(`/usuarios?idUsuario=${idUsuario}`);

    return response;
}