import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import VoltarPreto from '../components/setaVoltarPreta'
import axios from 'axios' 
import Comprar from '../components/botaoComprar'
import BtnCarrinho from '../components/botaoCarrinho'
import imgCarrinho from '../assets/icons/carrinho_vazio.png' 
import {ip} from './inicio'
import Avaliacao from '../assets/icons/avaliacao.svg'

function ProdutoDetalhe(navigation) {
    const {id} = useParams()

    const [produto, setProduto] = useState()

    useEffect(() =>{
        axios.get(`${ip}/loja/produtos/${id}`)
        .then((res)=>{
            setProduto(res.data)
        })
    }, [])

    if (!produto) return(<p>CARREGANDO</p>)

    return ( 
    <>
    <VoltarPreto/>
    <div className="m-4">
        <img className='rounded-xl w-48 xs:w-full xs:h-full m-auto' src={produto.foto} alt="Imagem produto"/>
    </div>

    <div className="text-black flex flex-col gap-3 mx-8 my-8">
        <p className="text-xl font-bold mt-3">{produto.nome}</p>
        <div>
            <p className="font-bold">{produto.vendedora}</p>
            <img src={Avaliacao} alt="" className="w-36"/>
        </div>

        <div>
            <p className="font-bold">R$ {produto.preco}</p>
            <p className="text-xs">{produto.num_parcelas} x de R$ {(produto.preco / produto.num_parcelas).toFixed(2)}</p>
        </div>
    </div>

    
    <div className="flex flex-col gap-8">
        <Comprar texto='Comprar'/>
        <BtnCarrinho className="bg-white flex-row-reverse text-lg" texto='Adicionar ao carrinho'>
            <img src={imgCarrinho} alt="" />
        </BtnCarrinho>
    </div>


    <div className="text-black mx-8 my-16">
        <p className="text-xl font-bold mt-3 ">Descrição do produto</p>
        <p>{produto.descricao}</p>
    </div>
    
    </> 
    );
}

export default ProdutoDetalhe;