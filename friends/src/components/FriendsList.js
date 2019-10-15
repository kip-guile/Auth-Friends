import React, {useState} from 'react';

export default function FriendsList(props){
    const [friends, setFriends] = useState([]);


    return (
        <div>
            {
                friends.map(friend => {
                    <div>
                        <li>{friend.name}</li>
                        <li>{friend.age}</li>
                        <li>{friend.email}</li>
                    </div>
                })
            }
        </div>
    )
}