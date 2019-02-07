import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            pass: '',
            alert: ''
        }
    }

    updateName = (e) => {
        this.setState({name: e.target.value})
    }

    updatePass = e => {
        this.setState({pass: e.target.value})
    }

    submit = async () => {
        const {name, pass} = this.state;
        if(!name || !pass){
            this.setState({alert: 'Please fill in all fields'})
        }

        const resp = await axios.post('/api/login', name, pass)
    }
    render() {
        return (
            <div>
               <form>
                   <div>
                    <label>Name: </label>
                    <input 
                    placeholder='Name'
                    onChange = {(e) => this.updateName(e)}
                    type = 'text'
                    value = {this.state.name}
                    required
                    />
                   </div>
                   <div>
                    <label>Pass: </label>
                    <input 
                    placeholder='Pass'
                    type = 'email'
                    onChange = {(e) => this.updatePass(e)}
                    value = {this.state.pass}
                    required
                    />
                   </div>
                   <button
                   onClick={() => this.submit()}
                   >Submit</button>
               </form>
            </div>
        );
    }
}

export default Login;