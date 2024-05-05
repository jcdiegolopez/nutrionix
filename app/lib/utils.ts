

export const handleError = (error: any) => {
    console.error(error);
    throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}