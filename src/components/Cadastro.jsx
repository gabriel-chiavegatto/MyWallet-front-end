import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from 'react';
import axios from "axios";

export default function Cadastro() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();

    function cadastrar() {
        if (confirmPass !== password) {
            alert('Confirme sua senha corretamente');
            return
        }
        const form = {
            name,
            email,
            password
        }
        try {
            axios.post('//localhost:5000/create-user', form);
            navigate('/');
        }
        catch {
            alert('Por favor confirme seus dados e tente novamente')
        }
    }

    return (
        <Align>
            <div>
                <h1>MyWallet</h1>
                <input placeholder='  Nome' type='text' value={name} onChange={e => setName(e.target.value)} />
                <input placeholder='  Email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder='  Senha' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <input placeholder='  Confirme a senha' type='password' value={confirmPass} onChange={e => setConfirmPass(e.target.value)} />
                <button onClick={cadastrar}>Cadastrar</button>
                <Link to='/'><p>Já tem uma conta? Entre agora!</p></Link>
            </div>
        </Align>
    )
}

const Align = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        width: 100%;
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        text-align: center;
        margin-bottom: 28px;
        color: #FFFFFF;
    }
    input{
        display: block;
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #000000;
        margin-bottom: 13px;
        font-size: 19.976px;
        line-height: 25px;
    }
    button{
        width: 303px;
        height: 45px;
        background: #A328D6;
        border-radius: 5px;
        color: #FFFFFF;
        border: none;
        font-size: 20.976px;
        line-height: 26px;
    }
    p{
        margin-top: 32px;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        color: #FFFFFF;
    }
`;