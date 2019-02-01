import React, { Component } from "react";
import LoginForm from './signIn';
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        alert("It worked!")
    }

    render() {
        return (
            <div>
                <LoginForm onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}