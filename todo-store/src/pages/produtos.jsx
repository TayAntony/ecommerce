import React, {Component} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'

const Produtos = () => {
    axios.get("http://127.0.0.1:8000/loja/produtos/")
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