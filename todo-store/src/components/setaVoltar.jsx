import Seta from '../assets/icons/seta.png'
import { useNavigate } from 'react-router-dom'

function Voltar() {
    let navigate = useNavigate();
  
    return ( 
        <div onClick={() => navigate('/')} className='flex items-start w-full ml-4 mt-4'>
            <img src={Seta} alt="Voltar"/>
        </div>
    );
}

export default Voltar;