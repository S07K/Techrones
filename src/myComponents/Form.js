import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            email: '',
            phone: ''
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

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`Name : ${this.state.username} 
Email: ${this.state.email} 
Phone: ${this.state.phone}`)
    }

    render() {
        const {username, comments, email, phone} = this.state
        return (
            <div className='forms'>
                <p>Get In Touch</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='first-half'>
                        <div>
                            <label>Name</label>
                            <input type='text' value={username} onChange={this.handleUsernameChange} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='email' value ={email} onChange={this.handleEmailChange}/>
                        </div>
                        <div>
                            <label>Mobile</label>
                            <input type='tel' pattern="[0-9]{3}[0-9]{4}[0-9]{3}" value={phone} onChange={this.handlephoneChange} />
                        </div>
                    </div>
                    <div className='second-half'>
                        <div>
                            <label>Comments</label>
                            <textarea value={comments} onChange={this.handleCommentsChange} />
                        </div>
                        <div>
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
