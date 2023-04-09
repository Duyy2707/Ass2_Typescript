import { Link } from "react-router-dom"
import { IProduct } from "../models"

type Props = {
  data: IProduct
}

const Product = ({data}: Props) => {
    return <Link  to={`product/${data.id}`} className="block">
    <img
      alt="Art"
      src={data?.images[0].base_url}
      className=""
    />
      
    <h4 className="mt-4 font-bold ">
      {data.name}
    </h4>
  
    <p className="mt-2 font-mono font-bold text-red-500 float-left mr-2 text-xm">
      {data.price} ₫
    </p>
    <p className="text-gray-500 my-2 font-normal text-xm">
      {data.original_price} ₫
    </p>
    <div className="">
    <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star pr-2 pb-3"></i>
        <p className="float-right mr-32"> 1 đánh giá</p>
    </div>
    
    
  </Link>
  
}

export default Product