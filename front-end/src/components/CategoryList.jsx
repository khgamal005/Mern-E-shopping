import  { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SummaryApi from '../common/Api'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'


const CategoryList = () => {
    const [categoryProduct,setCategoryProduct] = useState([])
    const [loading,setLoading] = useState(false)
    
    const categoryLoading = new Array(13).fill(null)
    // console.log(categoryLoading)

    const fetchCategoryProduct = async() =>{
        setLoading(true)
        const response = await fetch(SummaryApi.categoryProduct.url)
        const dataResponse = await response.json()
        setLoading(false)
        setCategoryProduct(dataResponse.data)
    }
    const scrollElement = useRef()

    useEffect(()=>{
        fetchCategoryProduct()
    },[])

    const scrollRight = () =>{
        scrollElement.current.scrollLeft += 300
    }
    const scrollLeft = () =>{
        scrollElement.current.scrollLeft -= 300
    }

  return (
    <div className=' mx-auto p-4'>
           <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none' ref={scrollElement}>

            
           <button  className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft/></button>
            <button  className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight/></button> 


            {

                loading ? (
                    categoryLoading.map((el,index)=>{
                            return(
                                <div className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading"+index}>
                                </div>
                            )
                    })  
                ) :
                (
                    categoryProduct?.map((product)=>{
                   

                        return(
                            <Link to={`/product-category/${product?.category}`} className='cursor-grab' key={product?.category}>
                                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center'>
                                    <img src={product?.productImage[0]} alt={product?.category} className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all'/>
                                </div>
                                <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
                            </Link>
                        )
                    })
                )
            }
           </div>
    </div>
  )
}

export default CategoryList