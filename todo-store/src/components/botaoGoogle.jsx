import Google from '../assets/icons/google.png'

const BotaoGoogle = ({texto, onClick}) =>{
    return ( 
        <div>
            <button type="button" onClick={onClick} className="mainButton textoCadastro flex items-center justify-between">
            
            <img src={Google} alt="logo" className='min-w-min'/>
                {texto}
            </button>
            
        </div> 
        );
}

export default BotaoGoogle;