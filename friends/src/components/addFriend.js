import React, {useRef} from 'react';
import axios from 'axios';
import withAuth from '../axios'
import uuid from 'uuid';

export default function AddFriend(props) {
    const nameRef = useRef();
    const ageRef = useRef();
    const emailRef = useRef();

    const addEntry = () => {
        withAuth().post(`http://localhost:5000/api/friends`, {
            // id: uuid(),
            name: nameRef.current.value,
            age: ageRef.current.value,
            email: emailRef.current.value,
        })
            .then(response =>  {
                // nameRef = '';
                // ageRef = '';
                // emailRef = '';
            })
            .catch(error => {
                debugger
                alert(error.response.data.error)
            });
    };

    return (
        <div>
            <div>
                Name: <input ref={nameRef} type='text' placeholder='Name' />
                Age: <input ref={ageRef} type='text' placeholder='age' />
                Email: <input ref={emailRef} type='text' placeholder='email' />
            </div>
            <div>
                <button onClick={addEntry}>Add</button>
            </div>
        </div>
    )

}