import { useEffect, useState } from "react";
import * as ccAPI from '../apis/ccAPIs/auth'
import { useNavigate } from "react-router-dom";
import './LoginPage.css'
function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    const [sendData, setSendData] = useState({})
    const [user, setUser] = useState({})

    const navigate = useNavigate()

    useEffect(() => {

        setSendData({
            email: email,
            password: password,
            name: name,
            number: number
        })
    }, [email, password, name, number])

    const registerUser = async (data) => {
        try {
            let response = await ccAPI.register(data)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    // const getMe = async () => {
    //     try {

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    const loginUser = async (data) => {
        try {
            let response = await ccAPI.login(data)
            console.log(response.data);
            setUser(response.data)
        } catch (error) {
            console.log(error);
        }
        console.log(user.status === "success");
        if (user.status === "success") {
            navigate('/todo')
        }
    }

    function clearAllInput() {
        setEmail("")
        setPassword("")
        setName("")
        setNumber("")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(sendData)

    }


    const handleRegister = () => {
        if (!isRegister) setIsRegister(true)
        else {
            registerUser(sendData);
            clearAllInput()
            setIsRegister(false)
        }
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);

    }
    const handleChangeName = (e) => {
        setName(e.target.value);

    }
    const handleChangeNumber = (e) => {
        setNumber(e.target.value);

    }


    return (
        <div className="LoginPage">
            <div>
                <h1>Welcome</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={handleChangeEmail} placeholder='Email' value={email} />
                <input onChange={handleChangePassword} placeholder='Password' value={password} />
                {isRegister ? <input onChange={handleChangeName} placeholder='Name' value={name} /> : null}
                {isRegister ? <input onChange={handleChangeNumber} placeholder='Number' value={number} /> : null}
                <br />
                <button type='submit'>Login</button>
                <button type='button' onClick={handleRegister}>Register</button>
            </form>

        </div>
    )
}

export default LoginPage    