import React from 'react';
import axios from 'axios';

export default function Login(props) {


    return (
        <div>
            <div>
                Username: <input ref={username} type='text' placeholder='username' />
                Password: <input ref={password} type='password' placeholder='password' />
            </div>
            <div>
                <button onClick={submit}>Submit</button>
            </div>
        </div>
    )

}