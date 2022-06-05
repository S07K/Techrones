import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            phone: '',
            username: '',
            password: '',
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

    handlephoneChange = event => {
        this.setState({
            phone: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`Name : ${this.state.username} 
Email: ${this.state.email} 
Phone: ${this.state.phone}`)
    }

    render() {
        const {username, password, email, phone} = this.state
        const style = {
            paddingTop: "60px"
        }
        return (
            <div className='forms'>
                <p style={style}>Register</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='first-half'>
                        <div>
                            <label>Name</label>
                            <input type='text' value={username} onChange={this.handleUsernameChange} />
                        </div>
                        <div>
                            <label>Email*</label>
                            <input type='email' value ={email} onChange={this.handleEmailChange}/>
                        </div>
                        <div>
                            <label>Password*</label>
                            <input type='password' value={password} onChange={this.handlePasswordChange} />
                        </div>
                        <div className='submit'>
                            <button type='submit'>Submit</button>
                        </div>
                        <div>
                            <label>Mobile</label>
                            <input type='tel' pattern="[0-9]{3}[0-9]{4}[0-9]{3}" value={phone} onChange={this.handlephoneChange} />
                        </div>
                    </div>
                    <div className='second-half'>
                        
                    </div>
                </form>
            </div>
        )
    }
}
