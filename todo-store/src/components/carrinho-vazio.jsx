import Carrinho_vazio from '../assets/icons/carrinho-vazio.png'
import Carrinho_cheio from '../assets/icons/carrinho-cheio.png'

function Carrinho({adicionado}) {
    return ( 
        <div className='m-1'>
            {adicionado? <img src={Carrinho_cheio} alt="Adicionado ao carrinho"/> : <img src={Carrinho_vazio} alt="Adicionar ao carrinho"/>}
        </div>
    )
}

export default Carrinho;