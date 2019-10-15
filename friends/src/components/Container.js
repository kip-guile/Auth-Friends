import React from 'react';
import {Route, NavLink, withRouter, Redirect} from 'react-router-dom'
import Login from './Login';
import FriendsList from './FriendsList';
import AddFriend from './addFriend';

export function Container (props){

    const onLogout = () => {
        localStorage.clear()
        // props.history.push('/');
    };


    return (
        <div>
            <nav>
                <span>
                    <NavLink exact to ='/'>Login</NavLink>
                </span>
                <span>
                    <NavLink to='/friends'>Friends</NavLink>
                </span>
                <span>
                    <NavLink to='/form'>Add Friend</NavLink>
                </span>

                <button onClick={onLogout}>Logout</button>
            </nav>

            <main>
                <Route exact path='/' component={Login}/>
                <Route exact path='/form' render={props => withAthCheck(AddFriend, props)}/>
                <Route exact path='/friends' render={props => withAthCheck(FriendsList, props)}/>
                {/* <Route exact path='/friends' component={FriendsList}/> */}
            </main>
        </div>
    );
}

function withAthCheck(Component, props) {
    if (localStorage.getItem('token')){
        return <Component {...props}/>
    }
    return <Redirect to='/' />;
}

export default withRouter(Container)