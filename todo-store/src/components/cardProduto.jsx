import Carrinho from '../assets/icons/carrinho_vazio.png'
import { useEffect, useState } from 'react'
import coracao from '../assets/icons/coracao.svg'
import { CoracaoIcon } from '../assets/icons/coracaoIcon'
import { useNavigate } from 'react-router-dom'

function CardProduto({ item }) {
    const navigate = useNavigate()
    const [btnActive, setBtnActive] = useState(false)

    return (

        <div className="text-black p-2 rounded-xl border-black border-2 w-[43%] shadow-2xl relative m-3" key={item.id}>

            <div onClick={() => setBtnActive(!btnActive)} className={`shadow group flex items-center w-12 h-6 p-1 rounded-full transition duration-500 absolute top-4 right-2 ${btnActive === true ? "bg-white" : "bg-white justify-start"}`}>
                <CoracaoIcon className={`w-5 h-5 transition duration-300 ${btnActive === true ? "translate-x-5 stroke-red-700 fill-red-700" : "group-hover:stroke-red-700"}`} />
            </div>

            <div className='w-40 h-40 overflow-hidden bg-cover'>
                <img className='rounded-xl w-32 xs:w-full xs:h-full' src={item.foto} alt="Imagem produto" onClick={() => navigate(`/produtodetalhe/${item.id}`)} />
            </div>
            <h1 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 from-90% via-zinc-900 via-5% to-white to-5%  whitespace-nowrap">{item.nome}</h1>
            <div className='bg-gray-200 h-[0.2px] w-full'></div>
            <div className='flex flex-row justify-between items-end'>
                <div className='flex flex-col'>
                    <p className="text-sm font-semibold ">R$ {item.preco.toString().split(".")[0]}<sup className="font-light text-[7px] ">,{item.preco.toString().split(".")[1]}</sup></p>
                    <p className="text-xs">{item.num_parcelas} x de R$ {(item.preco / item.num_parcelas).toFixed(2)}</p>
                </div>
                <img src={Carrinho} alt="" />
            </div>
        </div>

    );
}

export default CardProduto;