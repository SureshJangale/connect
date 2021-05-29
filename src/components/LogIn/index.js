import React from 'react'
import { Button } from '@material-ui/core';

import './LogIn.css';

import { auth, provider } from '../../firebase'
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function LogIn() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => {
                alert(error.message);
            })
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fslack.com%2Fmedia-kit&psig=AOvVaw2b7HZzvJXlByrYZXir2Lwr&ust=1622215733714000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICcvdqW6vACFQAAAAAdAAAAABAJ" alt="" />
                <h1>
                    Sign in to Connect+
                </h1>
                <p>connect.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default LogIn
