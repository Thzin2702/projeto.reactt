    import React, { useEffect, useState } from "react";
    import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
    import { getItem , setItem } from '../services/LocalStorageFuncs';
    import {Link} from 'react-router-dom';
    import { ProductsArea } from "../css/style";
    import { Header } from "../components/Header";

    export const Store = () => {

    const [data, setData] = useState([]); 
    const [cart, setCart] = useState( getItem('carrinhoYt') || []); 

    useEffect(()=> {
    const fetchApi = async () => {

    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular'
    const response = await fetch(url);
    const objJson = await response.json()
    setData (objJson.results)
    }
    fetchApi();
    },[])
const handClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id);
if (element){
    const arrFilter = cart.filter ((e) => e.id !== obj.id )  
    setCart(arrFilter)
    setItem('carrinhoYt',arrFilter)
} else{
setCart([...cart,obj])
setItem('carrinhoYt',[...cart,obj])
}
}

        return (
        <div>
            <Link to='/cart'></Link>
        <Header />
        <ProductsArea></ProductsArea>
        <div>
        {
            data.map((e) => (
            <div key={e.id}>
                <h4>{e.title}</h4>
                <img src= {e.thumbnail} alt=""/>
                <h4>{`R$  ${ e.price}`}</h4>
                <button
                onClick={()=> handClick(e)}
                >
                {
                    cart.some((itemCart) => itemCart.id === e.id) ? (
                    <BsFillCartCheckFill/>
                    ) : (
                    <BsFillCartPlusFill/>
                    )
                }
                </button>
            </div>
    ))
            }
        </div>
        </div>
    )
    }