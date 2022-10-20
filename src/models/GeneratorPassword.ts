export type GeneratorSecurePassword = {
    caracteres: boolean;
    quantidadeCaracteres: number;
    maiusculas: boolean;
    quantidadeMaiusculas: number;
    digitos: boolean;
    quantidadeDigitos: number;
    simbolos: boolean;
    quantidadeSimbolos: number;
    senhaGerada?: string;
}