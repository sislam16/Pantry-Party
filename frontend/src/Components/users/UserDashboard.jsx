import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom'

const getRandomRecipeFromAPI = async () => {
    try {
    let randomRecipe = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        console.log(randomRecipe)
        this.setState({
            recipeAPI: randomRecipe
        })
        console.log(this.state)
    } catch (error) {
        console.log('err:', error)
    }
}
const getCookbookRecipes = async () => {

}

const getEvents = async () => {

}

class UserDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            recipeAPI: [],
            cookbookRecipe: [],
            events: []
        }
    }

    render() {
        return (
            <div className='user-dashboard'>
                <div className='dashboard-header'>
                    <h1>hey</h1>
                </div>

                <div className='dashboard-live'>

                </div>

                <div className='dashboard-suggestions'>

                </div>

                <div className='dashboard-cookbook'>

                </div>

                <div className='dashboard-events'>

                </div>
            </div>
        )
    }
}

export default UserDashboard;