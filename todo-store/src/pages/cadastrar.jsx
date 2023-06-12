import Voltar from '../components/setaVoltar'
import Botao from '../components/botaoLogin'
import BotaoGoogle from '../components/botaoGoogle'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import {ip} from './inicio'

function Cadastrar() {

    let navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')


    const cadastrar = async (evt) => {
        evt.preventDefault(); //previne o comportamento padrão do fomulario de atualizar a página quando se envia ele (submit)
        const infoDoCadastro = { username: username, password: senha, email: email };
        console.log('username/email:',username)
        console.log('email/nome completo:',email)
        if(senha.length < 8){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Senha deve ter no mínimo 8 caracteres, incluindo números e letras',
                confirmButtonText: 'Tentar novamente',
                confirmButtonColor: '#D51317',
            });
            return
        }else if (!email.includes("@")){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'O E-mail digitado não é válido!',
                confirmButtonText: 'Tentar novamente',
                confirmButtonColor: '#D51317',
            });
            return
        }else if (!username.includes("_") ){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Seu usuário deve conter underline: _',
                confirmButtonText: 'Tentar novamente',
                confirmButtonColor: '#D51317',
            });
            return
        }

        //fazendo uma requisição pro endpoint de cadastro
        try {
            await axios.post(`${ip}/auth/users/`, infoDoCadastro);
            navigate("/login")
        } catch (err) {
            console.log(err)
            console.log(JSON.stringify(err));
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Não foi possível cadastrar',
                confirmButtonText: 'Tentar novamente',
                confirmButtonColor: '#D51317',
            });
        }
    }

    const cadastrandoGoogle = ()=> {
        let timerInterval
        Swal.fire({
        title: 'Redirecionando...',
        html: 'Você será redirecionado para realizar o cadastro',
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
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        })
    }
  
    return ( 
        <>
        <div className="imgBackground">
        <Voltar/>
        <p className='paragrafos max-w-xs mt-10'>Preencha as informações para realizar o cadastro!</p>
            <form onSubmit={cadastrar} className='cardInicio'>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Nome único de usuário' className='inputs'/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' className='inputs'/>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha ' className='inputs'/>
                <Botao texto='Finalizar cadastro'/>
                
                <BotaoGoogle onClick={cadastrandoGoogle} texto='Cadastro com Google'/>
            </form>

        </div>
        
        </>
     );
}

export default Cadastrar;