import Voltar from '../components/setaVoltar'
import Botao from '../components/botaoLogin'
import BotaoGoogle from '../components/botaoGoogle'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';

function Login() {
    let navigate = useNavigate()


    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')

    const logar = async (evt) => {
        evt.preventDefault(); //previne o comportamento padrão do fomulario de atualizar a página quando se envia ele (submit)
        const infoDoLogin = { username: username, password: senha };
        //fazendo uma requisição pro endpoint de login que retorna um token
        try {
            const res = await axios.post('http://localhost:8000/auth/token/login/', infoDoLogin);
            localStorage.setItem('token', res.data.auth_token);
            navigate("/homepage")
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'E-mail ou senha incorretos',
                confirmButtonText: 'Tentar novamente',
                confirmButtonColor: '#D51317',
            });
        }
    }

    const esqueciSenha = () => {
        console.log('esqueci minha senha')
    }

    const logandoGoogle = () => {
        let timerInterval
        Swal.fire({
        title: 'Redirecionando...',
        html: 'Você será redirecionado para realizar o login',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        })
    }

    return (
        <>
            <div className="imgBackground">
                <Voltar />
                <p className='paragrafos max-w-xs mt-20'>Insira suas informações para realizar o login!</p>
                <form onSubmit={logar} className='cardInicio'>
                    <input type="text" placeholder='Nome de usuário' className='inputs' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <div className='flex items-end flex-col'>
                        <input type="password" placeholder='Password' className='inputs' value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <a href="javascript:void(0)" className='esqueciSenha' onClick={esqueciSenha} >Esqueci a senha</a>
                    </div>
                    <Botao texto='Logar' />
                    <BotaoGoogle onClick={logandoGoogle} texto='Entrar com Google' />
                </form>
            </div>

        </>
    );
}

export default Login;