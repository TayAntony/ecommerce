import React  from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import {ip} from './inicio'

const Produtos = () => {
    axios.get(`${ip}/loja/produtos/`)
        .then((res)=>{
            console.log(res.data)
        })
    let navigate = useNavigate();
    return ( 
        <>
            <Link to='/' className="text-black">Voltar</Link>
            <h1>Listar Produtos</h1>
            <button className="w-20 h-10 rounded-md bg-slate-800" 
            onClick={()=>{navigate('/produtodetalhe/1')}}/>
            <Link to={`/produtodetalhe/2`} className="bg-slate-800 rounded-md">Produto 2</Link>
        </>
     );
}
 
export default Produtos;