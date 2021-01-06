import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signInWithGoogle} from  '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handlechange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handle={this.handlechange}
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        label="email"
                        required
                    />

                    <FormInput 
                    handle={this.handlechange}
                    type="password" 
                    name="password" 
                    value={this.state.password}
                    label = "password" 
                    required
                    />

                    <div className="buttons">
                        <CustomButton type="submit" name="form">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle} type="submit"
                        name="form">Sign In with Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}


export default SignIn;