import { Account } from '../models/Account';
import api from './api';

export function addAccount(data: Account) {
    const response = api.post(`/contas`, data);
    return response;
}

export function editAccount(data: Account) {
    const response = api.put(`/contas`, data);
    return response;
}

export function listarTodasContas(idUsuario: string, page: number) {
    const response = api.get(`/contas/todas?idUsuario=${idUsuario}&page=${page}`);
    return response;
}

export function deleteAccount(idConta: string) {
    const response = api.delete(`/contas?idConta=${idConta}`);
    return response;
}

export function listarTodasContasByUserTitleOrDescription(idUsuario: string, filtro: string, page: number) {
    const response = api.get(`/contas?idUsuario=${idUsuario}&filtro=${filtro}&page=${page}`);
    return response;
}