import LogoComponent from "../components/logo";
import Botao from '../components/botaoLogin'
import { useNavigate } from 'react-router-dom'

function Card() {
  let navigate = useNavigate();
  
  const goLogin = () => {
    navigate("/login");
    
  }

  const goCadastro = () => {
    navigate("/cadastrar");
  }
    return ( 
      <>
      <div className="imgBackground ">
          <div className="flex flex-col">
            <LogoComponent/>
            <p className='slogan'>Onde você faz acontecer!</p>
          </div>
        <div className='flex flex-col p-2 items-center backdrop-blur-sm border-2 border-blue-500 rounded-4 m-10 box-border text-center gap-2 min-h-20'>
          <img src={LogoComponent} alt="" className="logo"/>
          <p className="text-sm">Seja bem vindo(a) ao ToDo, a minha plataforma de E-commerce!</p>
          <a href="javascript:void(0)" onClick={goCadastro}>
            <Botao texto='Sou Novo!'/>
          </a>
          
          <a href="javascript:void(0)" onClick={goLogin} className="possuiConta">Já possui uma conta?</a>
        </div>
      </div>
      </>
        
    );
}

export default Card;
