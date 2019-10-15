import React, {useRef} from 'react';
import axios from 'axios';

export default function Login(props) {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
        axios.post(`http://localhost:5000/api/login`, {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        })
            .then(response =>  {
                localStorage.setItem('token', response.data.token);

            })
            .catch(error => {
                alert(error.response.data.error)
            });
    };

    return (
        <div>
            <div>
                Username: <input ref={usernameRef} type='text' placeholder='username' />
                Password: <input ref={passwordRef} type='password' placeholder='password' />
            </div>
            <div>
                <button onClick={submit}>Login</button>
            </div>
        </div>
    )

}