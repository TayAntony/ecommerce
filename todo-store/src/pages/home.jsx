import { useEffect, useState } from 'react'
import Header from '../components/header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MyComponent from '../components/barra-pesquisa'
import CardProduto from '../components/cardProduto'
import { CardCarregando } from '../components/CardCarregando'
import {ip} from './inicio'

function useSession() {
    const navigate = useNavigate();
    
    const [isLoading, setIsLoading] = useState(true); //acompanhar se a requisição já terminou
    //verifica se tem um token armazenado no browser, se não tiver ele redireciona para o login
    const [user, setUser] = useState();
    useEffect(() => {
        async function checarSessao() {
            const token = localStorage.getItem('token');
            if (token == null) {
                navigate('/login');
                return;
            }
            
            //verifica se o token existente é válido
            try {
                const { data } = await axios.get(`${ip}/auth/users/me/`, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                });
                setUser(data);
                setIsLoading(false); //conseguiu pegar o nome do usuário pra chamar na home
            } catch (err) {
                navigate('/login');
            }
        }
        checarSessao();
    }, [])

    return { user, isLoading };
}

function Homepage() {
    const { user, isLoading } = useSession();
    //lista todos os produtos
    const [lista, setLista] = useState(null);
   
    useEffect(() => {
        axios.get(`${ip}/loja/produtos`, { headers: { "Content-Type": "aplication/json" } })
        .then((res) => {
            setLista(res.data)                
        })
    }, [])

    if (isLoading) return (
        <>
            <Header />
            <p className='text-black text-center p-4 text-xl'>Carregando página...</p>
        </>
    );

    return (
        <>

            <Header />
            <p className='text-black text-center'>Olá {user.username}, seja bem-vindo(a)</p>
            <div className='p-4'>
                <MyComponent />
                <h1 className="text-black font-bold mt-5 ml-7">Ofertas Imperdíveis!</h1>
                <p className="text-black ml-7">Aproveite</p>
                <div className='flex xs:flex-nowrap flex-wrap justify-between'>
                    {lista != null ? lista.map((item) => (
                        <CardProduto item={item}/>
                    )): (
                        <>
                            <CardCarregando />
                            <CardCarregando />
                            <CardCarregando />
                        </>
                    )}
                </div>
            </div>
        </>);
}

export default Homepage;