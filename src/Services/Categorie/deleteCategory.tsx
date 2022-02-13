import { Category } from './../../Interfaces/Category/Category'

const baseUrl = "http://localhost:8000/api"

export const deleteCategory = async (id:number) : Promise<Category> => {
    const response = await fetch(`${baseUrl}/categories/${id}`,{
        method:'DELETE',
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
    })

    const json:Category = await response.json()
    return json
}