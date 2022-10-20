import { Linking } from "react-native";
import Clipboard from '@react-native-clipboard/clipboard';

/**
 * 
 * @param phone ex: ddd + telefone 81999999999
 */
export function openPhoneForCall(phone: string) {
    Linking.openURL(`tel:$${phone}`);
}

/**
 * 
 * @param email  ex: para quem vai ser enviado
 * @param subject ex: assunto
 * @param message ex: mensagem do corpo
 */
export function openEmailToMessage(email: string, subject: string, message: string) {
    Linking.openURL(`mailto:${email}?subject=${subject}&body=${message}`);
}

/**
 * 
 * @param phone ex: ddd + telefone 81999999999
 * @param message ex: mensagem inicial -> Olá ...
 */
export function openWhattsToMessage(phone: string, message: string) {
    Linking.openURL(`whatsapp://send?phone=55${phone}&text=${message}`);
}

/**
 * 
 * @param value 
 * @returns 
 */
export function iSempty(value: string): boolean {
    let empty: boolean = true;
    var str = value.replace(/\s/g, '');
    if (str) {
        empty = false;
    }

    return empty;
}

/**
 * 
 * @param text 
 */
export async function copyToClipboard(text: string) {
    Clipboard.setString(text);
}

/**
 * 
 * @returns 
 */
export async function fetchCopiedText() {
    const text = await Clipboard.getString();
    return text;
}
