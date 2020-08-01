export const maxLength = (max: number) => (text: string): string => {
    if(text?.length > max) return `Max length is ${max}.`;
}

export const minLength = (min: number) => (text:string): string => {
    if(text?.length < min) return `Min length is ${min}.`;
}

export const requiredField = (text: string): string => {
    if(!text || text.length == 0) return 'This field is required.';
}