const Carrinho = (props) =>{
    return ( 
        <>
            <button className={`${props.className} font-semibold text-black p-3 border-[1px] border-[#535353] rounded-xl w-4/5 border-solid m-3 flex justify-around`}>
                {props.texto} {props.children}
            </button>
        </> 
);
}

export default Carrinho;