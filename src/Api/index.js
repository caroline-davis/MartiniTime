import { BASE_URL, cocktails } from '../Utils/Constants'

export const getCocktailsApi = async () => {
    const url = `${BASE_URL}${cocktails}`
    const response = await fetch(url)
    const json = await response.json()
    return json
}