import React, {
    createContext,
    useCallback,
    useState,
    useContext,
    useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { autenticacao } from '../services/auth';

interface User {
    id: string;
    email: string;
    nome: string;
    dataCriacao: string;
    dataUltimaAtualizacao: string;
}

interface AuthState {
    token: string;
    user: User;
}

interface Credentials {
    email: any;
    nome: any;
}

interface AuthContextData {
    user: User;
    loading: boolean;
    signIn(credentials: Credentials): Promise<void>;
    signOut(): void;
    token: string;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: any) {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadStorageData(): Promise<void> {
            const [token, user] = await AsyncStorage.multiGet([
                '@GerenciamentoDeSenhas:token',
                '@GerenciamentoDeSenhas:user',
            ]);

            if (token[1] && user[1]) {
                setData({ token: token[1], user: JSON.parse(user[1]) });

            }
            setLoading(false);
        }

        loadStorageData();
    }, []);

    const signIn = useCallback(async ({ email, nome }: Credentials): Promise<any> => {
        const token = "oaksaokspokasopkakopaskopaksopkaopskaoks";
        const data: Credentials = {
            email,
            nome,
        };

        const response = await autenticacao(data);
        const user: User = response.data;

        await AsyncStorage.multiSet([
            ['@GerenciamentoDeSenhas:token', token],
            ['@GerenciamentoDeSenhas:user', JSON.stringify(user)],
        ]);

        setData({ token, user, });
        return { token, user }

    }, []);

    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove(['@GerenciamentoDeSenhas:user', '@GerenciamentoDeSenhas:token']);

        setData({} as AuthState);
    }, []);


    return (
        <AuthContext.Provider
            value={{ user: data.user, token: data.token, loading, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };
