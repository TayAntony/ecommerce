import Seta from '../assets/icons/seta-preta.png'
import { useNavigate } from 'react-router-dom'

function VoltarPreto() {
    let navigate = useNavigate();
  
    return ( 
        <div onClick={() => navigate(-1)} className='flex items-start w-full ml-6 mt-6'>
            <img src={Seta} alt="Voltar"/>
        </div>
    );
}

export default VoltarPreto;