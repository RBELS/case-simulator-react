import { authAPI } from './../../api/api';
import { registerFormData } from './../../components/RegisterPage/RegisterForm/RegisterForm';
export const maxLength = (max: number) => (text: string): string => {
    if(text?.length > max) return `Max length is ${max}.`;
}

export const minLength = (min: number) => (text:string): string => {
    if(text?.length < min) return `Min length is ${min}.`;
}

export const requiredField = (text: string): string => {
    if(!text || text.length == 0) return 'This field is required.';
}

export const passwordsMatch = ( value: string, allValues ) => {
    if(value !== allValues.password ) return 'Passwords must match.';
}

export const registerFormAsyncValidate = async ({ username }: registerFormData) => {
    return authAPI.usernameExists(username).then(res => {
        if (res.exists) {
            throw { username: "Username exists!" };
        }
    });
}