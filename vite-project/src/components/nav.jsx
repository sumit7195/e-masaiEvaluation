import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <div className='' style={{backgroundColor:"black", color:"whitesmoke !important"}}>
        <div className='d-flex justify-content-between py-3 '>

           <div>
            
           <Link to="/">Home
            </Link>             
            
          
            </div>

            <div>

              <Link to="/cart">Cart</Link>
            </div>
 
           <div>
            <Link to="product/:id">Product</Link>

           </div>
           <div>
           <Link to="/orders">
             Orders
           </Link>
           </div>
        </div>
    </div>
  );
}

export default Navbar;