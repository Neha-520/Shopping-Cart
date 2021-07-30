import React,{useState} from 'react'
import Modal from 'react-modal'
import Zoom from "react-reveal/Zoom"

export default function Products(props)  {
const [state, setstate] = useState({
    product: null,
});

const openModal = (product) =>{
  setstate({product});
}
const closeModal =()=>{
    setstate({product : null})
};

    return (
        <div>
           <ul className="products">
             {
                 props.products.map(p =>(
                 <li key={p._id}>
                     <div className="product">
                       <a href={"# "+ p._id} onClick={() => openModal(p)}>
                           <img src={p.image} alt={p.title}/>
                       <p>
                           {p.title}
                       </p>
                       </a>
                       <div className="product-price">
                         <div>
                             {`Rs. ${p.price}`}
                         </div>
                         <button onClick={() =>props.addToCart(p)} className="button primary">
                             Add To Cart
                         </button>
                       </div>
                     </div>
                 </li>
             ))}
           </ul> 
           { state.product && (
             <Modal isOpen={true} onRequestClose={closeModal}>
                <Zoom>
                <button className="close-modal" onClick={closeModal}>x</button>
                 <div className="product-details">
                     <img src={state.product.image} alt={state.product.title}></img>
                     <div className="product-details-description">
                     <p>
                         <strong>{state.product.title}</strong>
                     </p>
                     <p>
                         {state.product.description}
                     </p>
                     <p>
                         Available Sizes: {" "}
                         {
                             state.product.availableSizes.map( x=>(
                                 <span> {" "}
                                 <button className="button">{x}</button>
                                 </span>
                             ))
                         }
                     </p>
                     <div className="product-price">
                        <div> {`Rs ${state.product.price}`}</div>
                        <button className="button primary" onClick={()=>{
                            props.addToCart(state.product);
                            closeModal();
                        }}>
                            Add To Cart
                        </button>
                     </div>
                     </div>
                 </div>
                 </Zoom>
             </Modal>
           )
           }
        </div>
    )
}
