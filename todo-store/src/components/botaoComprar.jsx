const Comprar = (props) =>{
    return ( 
        <>
        <button className="bg-gradient-to-r from-[#04A76C] to-[#6abe9f]  shadow-md font-semibold text-white p-3 border rounded-xl w-4/5 mx-8 drop-shadow-[5px_5px_7px_rgba(0,0,0,0.4)] text-xl">
                {props.texto}
            </button>
        </>
            
        
        );
}

export default Comprar;