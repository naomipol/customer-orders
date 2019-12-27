
export const isValidForm = (id, data) =>{
    return typeof id === 'number' && Object.values(data).every(item => item.trim().length > 0);
};
