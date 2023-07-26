export const saveLocalStorageObject = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify({...value}))
}

export const saveLocalStorageValue = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key)
}