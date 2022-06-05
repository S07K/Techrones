// import { textAlign } from '@mui/system';
import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`username : ${this.state.username} 
Password: ${this.state.password}`)
    }

    render() {
        const {username, password} = this.state
        const style = {
            fontSize: '40px',
            textAlign: 'left',
            fontWeight: '600',
            padding: '80px 80px 10px 80px',
            margin: '0',
            secondHalf: {
                gridRow: "1/3",
                background: 'url(https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80)',
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
                <div style={style.secondHalf} className='second-half'></div>
                <p style={style}>Sign In</p>

                    <div className='first-half'>
                        <div>
                            <label>Username*</label>
                            <input type='text' placeholder='@Semuel' value={username} onChange={this.handleUsernameChange} />
                        </div>
                        <div>
                            <label>Password*</label>
                            <input type='password' value={password} onChange={this.handlePasswordChange} />
                        </div>
                        <div className='submit'>
                            <button type='submit'>Submit</button>
                        </div>
                        <div>
                            <p style={style.pMargin}>
                                <Link to ='/register' style={style.anchor}>
                                    New user?
                                </Link>
                            </p>
                            <p style={style.pMargin}>
                                <Link to ='/' style={style.anchor}>
                                    forgot password?
                                </Link>
                            </p>
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}
