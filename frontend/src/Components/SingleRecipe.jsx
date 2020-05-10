/*
Recipe Page | Front End | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell, Maliq Taylor
*/

import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom'


class SingleRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            recipe: {}
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        this.setState({
            video: id
        })
    }

    displayRecipe = async (recipeId) => {
        try {
            let { recipe } = await axios.get(`/api/recipes/full/${recipeId}`)
            this.setState({
                recipe: recipe.payload
            })
        } catch (error) {
            console.log(error)
        }
    } 

    render() {
        return (
            <div className='recipe-page'>
                <div className='Recipe-header'>
                    <h1>test</h1>
                </div>

                <div className='Recipe-img'>

                </div>

                <div className='Recipe-ingredients'>

                </div>

                <div className='Recipe-steps'>

                </div>

                <div className='Recipe-hashtags'>

                </div>
            </div>
        )
    }
}

export default SingleRecipe;