import React, {Component} from 'react'
import { connect } from 'react-redux'

class Restaurants extends Component{
    
render(){
    
        console.log(this.props)
        const restaurant = this.props.restaurant? (
            
                <div className='post'>
                  <h4>{this.props.restaurant.name}</h4>
                  <h4>location : {this.props.restaurant.location}</h4>
                  <h4>rating : {this.props.restaurant.rating}</h4>
                </div>
             ):( <h1>data loading yep! :) </h1>)
        return(
            <div className="container">
                {restaurant}
            </div>       
        )
}}
const mapStateToProps = (state,ownProps) =>{
    let id= ownProps.match.params.restaurant_id;
    
    return { 
         restaurant : state.restaurants.find((restaurant) =>{ 
             console.log(restaurant.id)
             console.log(id)
             return restaurant.id == id
            })
    }
}
export default connect(mapStateToProps) (Restaurants)