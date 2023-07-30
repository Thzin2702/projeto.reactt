export const setItem = (key, volue) =>{
localStorage.setItem(key,JSON.stringify(volue))
}

export const getItem = (key) =>{
    return JSON.parse(localStorage.getItem(key))
}
