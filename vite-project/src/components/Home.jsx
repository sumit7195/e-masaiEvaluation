import React from 'react'
import { useEffect, useState } from 'react'
import { callBackEndApi } from '../utils'
import Spinner from 'react-bootstrap/Spinner';
import { useHistory, Link } from 'react-router-dom';


export default function Home() {


    const  [products,setProducts] = useState([]);

    const hisory = useHistory();


    useEffect( async()=>{
    
        
        const makeReq =  await callBackEndApi("get", "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
 
        const data = await makeReq.data.data;

        
        setProducts(data)



    },[])

    console.log(products)

    





  return  (products.length ===0  ?  (
    <div className='d-flex align-items-center justify-content-center border ' style={{height:"100vh"}}>
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </div>   
  ): (
    <div className='row ms-2 gx-5 gy-5'>
      
    {products.map((items)=>(
        <div className='col-6 d-flex ' >
        
          
       <div  key={items.id} className="border d-flex flex-column align-items-center px-2  product-item">
         
       <div>
         <img src={items.image} alt={items.brand}/>
       </div>
        <div className='d-flex gap-4'>

           <span>Brand: {items.brand}</span>
            <span>Category: {items.category}</span>

            </div>
            <p>{items.title}</p>
      </div>
      


      </div>

    ))}

   
    </div>
  ) )   
}
