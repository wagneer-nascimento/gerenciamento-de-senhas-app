import React, {
    createContext,
    useCallback,
    useState,
    useContext,
    useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
                '@BibliotecaHumana:token',
                '@BibliotecaHumana:user',
            ]);

            if (token[1] && user[1]) {
                setData({ token: token[1], user: JSON.parse(user[1]) });

            }
            setLoading(false);
        }

        loadStorageData();
    }, []);

    const signIn = useCallback(async ({ email, nome }: Credentials): Promise<any> => {
        /*        const token = "oaksaokspokasopkakopaskopaksopkaopskaoks";
                const data: Credentials = {
                    email,
                    nome,
                    foto,
                    backgroundImageCor: backgroundCor,
                };
        
                const response = await autenticacao(data);
                const user: User = response.data;
        
                await AsyncStorage.multiSet([
                    ['@BibliotecaHumana:token', token],
                    ['@BibliotecaHumana:user', JSON.stringify(user)],
                ]);*/

        const token = "aospakspkas";
        const user = {
            id: "string;",
            email: "string;",
            foto: "string;",
            nome: "string;",
            telefone: "string;",
            dataCriacao: "string;",
            dataUltimaAtualizacao: "string;",
            backgroundImageCor: "string;"
        }

        setData({ token, user, });
        return { token, user }

    }, []);

    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove(['@BibliotecaHumana:user', '@BibliotecaHumana:token']);

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
