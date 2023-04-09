import { useEffect, useState } from "react"
import Product from "../components/product"
import { IProduct } from "../models"
import { getAll } from "../api/product"

const HomePage = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProduct = async() =>{
        try{
            const {data} =  await getAll()
            setProducts(data)
        } catch(err){

        }
    }
    useEffect(() =>{
        fetchProduct()
    }, [])
    return <div className="container mx-auto">
         <img className="w-[1400px] pl-16 py-7" src="/Rectangle (3).png" alt="" />
        <h1 className="text-xl py-6">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-3 ">
        {products.map(product => <Product
            data={product}
            key={product.id}/>)}
            
      
        </div>
        <hr className="pb-10" />
    </div>
}

export default HomePage