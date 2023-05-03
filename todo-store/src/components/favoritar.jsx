import Coracao_vazio from '../assets/icons/coracao_vazio.png'
import Coracao_vermelho from '../assets/icons/coracao_vermelho.png'

function Favoritar({favorito}) {
    return ( 
        <div className='m-1' >
            {favorito? <img src={Coracao_vermelho} alt="Produto favoritado"/>: <img src={Coracao_vazio} alt="Favoritar produto"/>}
        </div>
    )
}

export default Favoritar;