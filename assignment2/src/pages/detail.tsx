import { useEffect, useState } from "react"
import { IProduct } from "../models"
import { useParams } from "react-router-dom"
import { getById } from "../api/product"


 const DetailProduct = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
            const {id} = useParams()

        const fetchProduct = async () =>{
            if (id) {
                const  {data} = await getById(id)
                setProduct(data)
            
            }
        }

    useEffect(()=>{
        fetchProduct()
    })
    return <div className="mx-auto">
        <div className="ml-32 my-4">
            <a className="mx-4 text-gray-400">Trang Chủ</a> 
            <a className="mx-4 text-gray-400">Điện Thoại</a>
            <a className="mx-4 text-gray-400">SamSung</a>
            <a className="mx-4 text-gray-400">Samsung Galaxy A73 (5G) 256GB</a>
        </div>
        {/* Chi tiết {id} */}
       
                <h1 className="text-2xl ml-32 my-4 " >{product.name}</h1>
                <hr />
            <div className="flex flex-row mt-10 mb-32">
        <div className="basis-3/5 ">
        <img className="w-[400px] h-[400px] ml-32" src={(product && product.images && product.images[0] && product.images[0].base_url) || ""} alt="" />
        </div>
        <div className="basis-4/5" >
            <p className="text-red-500 text-xl float-left mr-5 font-bold"> {product.price} ₫</p>
            <p className=" text-gray-400 text-xm mt-1">{product.original_price} đ</p>
            <div className="" dangerouslySetInnerHTML={{ __html: product.description }}></div>
            <button className="bg-red-600 w-[200px] h-[45px] text-white mt-64 rounded-md float-left">Mua Ngay</button>
            <img className="mt-64 pl-6 " src="icon.png" alt="" />
        </div>
   
</div>
<div className="cauhinh bg-gray-200 h-[200px] w-[1300px] m-auto border-yellow-300">
        <h1 className="text-red-600 text-center text-xm font-bold pt-2">ĐẶC ĐIỂM NỔI BẬT</h1>
        <p className="ml-5 mt-3"> 
        <ul className="ml-5 mt-3">
    {product.specifications && product.specifications.map((spec) => (
      <li key={spec.name}>
        {spec.name}: {spec.attributes.map((attr) => attr.value).join(', ')}
      </li>
    ))}
  </ul>
                {/* Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP <br />
                Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà <br />
                Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB <br />
                Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W <br /> */}
        </p>
    </div>
<div className="noidung w-[1300px] m-auto my-5">
Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!
</div>
<div className="danhgia w-[1300px] m-auto my-5">
    <h1 className="text-xl font-bold my-5">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h1>
    <p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
    <h1 className="text-xl font-bold my-5">Thiết kế sang trọng, màn hình Super AMOLED</h1>
    <p>Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p> <br />
    <p>Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.</p> <br />
    <p>Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</p> <br />
        <hr />
</div>

        </div>
}

export default DetailProduct