import React, {Component, useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action'

import {connect} from 'react-redux';

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const {email, password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
    
        emailSignInStart(email, password);

    
    }

    const handlechange = event =>{
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    }

        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        handle={handlechange}
                        type="email" 
                        name="email" 
                        value={email} 
                        label="email"
                        required
                    />

                    <FormInput 
                    handle={handlechange}
                    type="password" 
                    name="password" 
                    value={password}
                    label = "password" 
                    required
                    />

                    <div className="buttons">
                        <CustomButton type="submit" name="form">Sign In</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart} type="button"
                        name="form">Sign In with Google</CustomButton>
                    </div>
                </form>

            </div>
        )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);