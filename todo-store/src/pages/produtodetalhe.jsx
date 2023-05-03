import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import VoltarPreto from '../components/setaVoltarPreta'
import axios from 'axios'
import Coracao from '../assets/icons/coracao_vazio.png' 
import Comprar from '../components/botaoComprar'
import BtnCarrinho from '../components/botaoCarrinho'
import imgCarrinho from '../assets/icons/carrinho_vazio.png' 
 

function ProdutoDetalhe(navigation) {
    const {id} = useParams()

    const [produto, setProduto] = useState()

    useEffect(() =>{
        axios.get(`http://127.0.0.1:8000/loja/produtos/${id}`)
        .then((res)=>{
            setProduto(res.data)
        })
    }, [])

    if (!produto) return(<p>CARREGANDO</p>)

    return ( 
    <>
    <VoltarPreto/>
    <img className='rounded-xl w-32 xs:w-full xs:h-full' src={produto.foto} alt="Imagem produto"/>
        
    <Comprar texto='Comprar'/>
    <BtnCarrinho className="bg-white flex-row-reverse text-sm" texto='Adicionar ao carrinho'>
        <img src={imgCarrinho} alt="" />
    </BtnCarrinho>

    
    
    </> );
}

export default ProdutoDetalhe;