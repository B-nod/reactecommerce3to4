
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
    const [product,setProduct] = useState({})
    const param = useParams()
    const id = param.productId

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[])

    const addtocart = ()=>{
        const cartItems = JSON.parse(localStorage.getItem('cartData')) || []

        const productItem = {
            id:product.id,
            title:product.title,
            image:product.image,
            description:product.description,
            category:product.category,
            quantity: 1,
            price:product.price
        }

        const existingItems = cartItems.find(item=> item.id === product.id)
        if(existingItems){
            toast.error(`${product.title} is already present in cart !`)
            
        } else{
            cartItems.push(productItem)

            localStorage.setItem('cartData', JSON.stringify(cartItems))
            toast.success(`${product.title} added successfully in cart`)
    
        }
}
    
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="flex flex-wrap items-center justify-between my-10 mx-16">
        <div className="product-img flex justify-evenly">
            <div className="main-img  w-[350px] h-[400px] shadow-md shadow-teal-500">
            <img src={product.image} alt={product.title} className='w-full h-full object-fit' />
            </div>
            <div className="sub-img ml-8">
                <img src={product.image} alt="" className='w-[100px] h-[100px] mb-8 shadow-md' />
                <img src={product.image} alt="" className='w-[100px] h-[100px] mb-8 shadow-md'/>
                <img src={product.image} alt="" className='w-[100px] h-[100px] mb-8 shadow-md'/>
            </div>
        </div>
        <div className="product-content w-[450px] h-[400px] shadow-md shadow-teal-500 p-5">
            <h2 className="text-xl font-bold"> {product.title}</h2>
            <h2 className="text-lg "><span className='font-semibold'>Price : </span>$ {product.price}</h2>
            <p className='text-base'> <span className='font-semibold'>Category : </span>{product.category}</p>
            <p className='my-2'>{product.description}</p>
            <Link to="">
            <button type="button" className="my-3 inline-flex items-center rounded-lg bg-[#2980b9] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-all duration-2000 hover:-translate-y-2 hover:shadow-md hover:shadow-cyan-500" onClick={()=>addtocart(product.id)}>
        
              Add to cart
              </button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default ProductDetail