import React, { Component } from 'react'

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            // email: '',
            // phone: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    // handleEmailChange = event => {
    //     this.setState({
    //         email: event.target.value
    //     })
    // }

    // handlephoneChange = event => {
    //     this.setState({
    //         phone: event.target.value
    //     })
    // }

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
            paddingTop: '60px',
            fontSize: '40px',
            textAlign: 'left',
            fontWeight: '600',
            padding: '80px 80px 10px 80px',
            margin: '0',
            secondHalf: {
                gridRow: "1/3",
                // padding: '0',
                background: 'url(https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80)',
                backgroundPosition: 'center'
            },
            anchor: {
                color: 'rgb(0 169 244)'
            }
        }
        return (
            <div className='forms'>
                <form onSubmit={this.handleSubmit}>
                <div style={style.secondHalf} className='second-half'></div>
                <p style={style}>Sign In</p>

                    <div className='first-half'>
                        <div>
                            <label>Username</label>
                            <input type='text' placeholder='@Semuel' value={username} onChange={this.handleUsernameChange} />
                        </div>
                        {/* <div>
                            <label>Email</label>
                            <input type='email' value ={email} onChange={this.handleEmailChange}/>
                        </div> */}
                        <div>
                            <label>Password*</label>
                            <input type='password' value={password} onChange={this.handlePasswordChange} />
                        </div>
                        <div className='submit'>
                            <button type='submit'>Submit</button>
                        </div>
                        <div>
                            <a href='/' style={style.anchor}>New user?</a>
                        </div>
                        {/* <div>
                            <label>Mobile</label>
                            <input type='tel' pattern="[0-9]{3}[0-9]{4}[0-9]{3}" value={phone} onChange={this.handlephoneChange} />
                        </div> */}
                    </div>
                    
                </form>
            </div>
        )
    }
}
