import Logo from '../assets/logo.png'

function LogoComponent() {
    return ( 
        <div>
            <img src={Logo} alt="logo" className='p-2 w-3/4'/>
        </div>
     );
}

export default LogoComponent;