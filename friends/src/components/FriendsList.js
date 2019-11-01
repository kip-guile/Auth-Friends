import React, {useState, useEffect} from 'react';
import withAuth from '../axios'

export default function FriendsList(props){
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        withAuth().get('http://localhost:5000/api/friends')
            .then(response => {
                setFriends(response.data)
            })
            .catch(error => {
                alert(error.response.data.message)
            })
    }, [])


    return (
        <div>
            {
                friends.map(friend => (
                    <div>
                        <li>{friend.name}</li>
                        <li>{friend.age}</li>
                        <li>{friend.email}</li>
                    </div>
                ))
            }
        </div>
    )
}