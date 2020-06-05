
export const isValidForm = (active, data) => active && Object.values(data).every(item => item.trim().length > 0);
