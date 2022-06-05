import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleConfirmPasswordChange = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`Name : ${this.state.username} 
Email/Phone: ${this.state.email} 
Password: ${this.state.password}`)
    }

    render() {
        const {username, email, password, confirmPassword} = this.state
        const style = {
            fontSize: '40px',
            textAlign: 'left',
            fontWeight: '600',
            padding: '80px 80px 10px 80px',
            margin: '0',
            secondHalf: {
                gridColumn: "2/3",
                gridRow: "1/3",
                background: 'url(https://images.unsplash.com/photo-1539213465191-6046fe072ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            },
            anchor: {
                color: 'rgb(0 169 244)',
                fontSize: '11px',
            },
            pMargin: {
                margin: '2px 0',
                textAlign: 'right',
            }
        }
        return (
            <div className='forms'>
                <form onSubmit={this.handleSubmit}>
                <p style={style}>Register</p>
                <div className='second-half' style={style.secondHalf}></div>

                    <div className='first-half'>
                        <div>
                            <label>Name*</label>
                            <input type='text' value={username} onChange={this.handleUsernameChange} />
                        </div>
                        <div>
                            <label>Email/Mobile*</label>
                            <input type='email/tel' value ={email} onChange={this.handleEmailChange}/>
                        </div>
                        <div>
                            <label>New Password*</label>
                            <input type='password' value={password} onChange={this.handlePasswordChange} />
                        </div>
                        <div>
                            <label>Confirm Password*</label>
                            <input type='password' value={confirmPassword} onChange={this.handleConfirmPasswordChange} />
                        </div>
                        <div className='submit'>
                            <button type='submit'>Submit</button>
                        </div>
                        <div>
                            <p style={style.pMargin}>
                                <Link to ='/signin' style={style.anchor}>
                                    Already have account?
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
