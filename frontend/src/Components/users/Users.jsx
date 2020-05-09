import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        try {
            let { data } = await axios.get('/users')
            console.log(data.payload)
            this.setState({
                users: data.payload
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            this.state.users.map((user, i) => {
                return (
                    <div className ='user-item' key={i}>
                        <p>id:{user.id} user:{user.username}</p>
                    </div>
                )
            })

        )
    }
}

export default Users;