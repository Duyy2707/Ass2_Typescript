import { useEffect, useState } from "react"
import { IProduct } from "../models"
import { getAll, deleteProduct } from "../api/product"
import { Link } from "react-router-dom"
const Admin = () =>{
      const [products, setProducts] = useState<IProduct[]>([])

      const fetchProducts = async () =>{
        const {data} = await getAll()
        setProducts(data)
      }

      useEffect(() =>{
        fetchProducts()
      },[])

      const handleDelete = async (id : string) =>{
        if (window.confirm("Bạn có chắc muốn xóa sản phầm này không ?"))
        await deleteProduct(id)
       const {data} = await getAll()
       setProducts(data)
       alert("Xóa Sản Phẩm Thành Công")
      }
    return <div className="overflow-x-auto">
      <h1 className="px-4 py-5 text-xl">Chi Tiết Sản Phẩm</h1>
    <table className="min-w-full divide-y-2 divide-black text-sm">
      <thead>
        <tr>
          <th
            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-800 text-xl bg-slate-400"
          >
            Tên sản phẩm
          </th>
          <th
            className="whitespace-nowrap pl-10 py-2 text-left font-medium text-gray-800 text-xl bg-slate-400"
          >
           Giá
          </th>
          <th
            className="whitespace-nowrap pr-10 py-2 text-left font-medium text-gray-800 text-xl bg-slate-400"
          >
            Giá Khuyến Mãi
          </th>
          <th
            className="whitespace-nowrap pl-16 py-2 text-left font-medium text-gray-800 text-xl bg-slate-400"
          >
            Image
          </th>
          <th className="whitespace-nowrap pl-12 py-2 text-left font-medium text-gray-800 text-xl bg-slate-400">
            Thao Tác
          </th>
        </tr>
      </thead>
  
      <tbody className="divide-y divide-black ">
           {products.map(product =>(
               <tr>
               <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                   <Link to={`/admin/product/${product.id}`}>
                       {product.name}
                   </Link>
               </td>
               <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.price} ₫</td>
               <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{product.original_price} </td>
               <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                   <img className="w-[150px] " src={product.images?.[0].base_url} alt="" />
               </td>
               <td className="text-center pr-10">
                   <button className=" bg-red-600 text-white rounded-md w-[70px] h-[30px] " onClick={()=> handleDelete(product.id)}>Xóa</button>
               </td>
           </tr>
           ))}
       
      </tbody>
    </table>
  </div>
  
}

export default Admin