export const setItem = <T extends string>(key: string, value: T): void =>
   localStorage.setItem(key, value);

export const getItem = (key: string) => localStorage.getItem(key);

export const removeItem = (key: string): void => localStorage.removeItem(key);

export const clearItems = (): void => localStorage.clear();
