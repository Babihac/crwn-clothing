import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action'

import {connect} from 'react-redux';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);

    
    }

    handlechange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {googleSignInStart} = this.props;
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
                        <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart} type="button"
                        name="form">Sign In with Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);