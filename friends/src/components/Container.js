import React from 'react';
import {Route, NavLink} from 'react-router-dom'
import Login from './Login';
import FriendsList from './FriendsList';

export function Container (props){



    return (
        <div>
            <nav>
                <span>
                    <NavLink exact to ='/'>Login</NavLink>
                    <NavLink to='/friends'>Friends</NavLink>
                </span>
            </nav>

            <main>
                <Route exact path='/' component={Login}/>
                <Route exact path='/friends' component={FriendsList}/>
            </main>
        </div>
    )
}