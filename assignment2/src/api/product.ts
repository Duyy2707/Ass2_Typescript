import instance from "."


export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}
export const getById = (id: string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}
export const update = (id: string, body:updateForm ) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}
export const deleteProduct = (id: string) =>{
    const uri = "/products/" + id
    return instance.delete(uri)
}