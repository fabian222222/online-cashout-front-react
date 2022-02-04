import {Category} from './../../Interfaces/Category/Category'

const baseUrl = "http://localhost:8000/api"

export const getUsers = async (category:Category) : Promise<Category> => {
    const response = await fetch(`${baseUrl}/invoices`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(category)
    })

    const json:Category = await response.json()
    return json
}