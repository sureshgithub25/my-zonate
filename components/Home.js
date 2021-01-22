import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import food1 from './food1.png';
import user from './user.png';

class Home extends Component {
    state = {
        name: null
    }
    handlechange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value 
        })
    }
    handlesubmit = (e) =>{
        e.preventDefault();
        console.log(this.props)
        console.log(this.state.name)
         let res = this.props.restaurants.find( restaurant => restaurant.name === this.state.name)
         
         if(res){this.props.history.push('/'+res.id)}
        else {alert("no restaurant available of this name");}
         
        }
    
             
        
    
    handleLogout = () =>{
         this.props.deleteUser(1)
    }
    render(){
        const {restaurants} =this.props;
       
        const resList=  restaurants.map(restaurant=>{
                return(
                    <div  >
                        <h4 >{restaurant.name}</h4>
                        
                    </div>
                )
            })
        
        return(
            
            <div className="container">
              <nav className="nav-wrapper red darken-3">
              <div>
              <a className="brand-logo" href="/">my Zonate</a>
              <ul className="right">
              
              <li><NavLink to='/Login'> Login </NavLink>
                </li>
              <li><form onSubmit={this.handlesubmit}>
               <li><input type='text' id="name" onChange={this.handlechange}/></li>
               <button>search</button>
               </form></li>
               <li><button onClick={this.handleLogout}>Logout</button> </li>
               <span className="user"><img src={user} alt="not found"/>
               {this.props.names}</span>

              </ul> 
              </div>
              </nav>
              <span className="food"><img src={food1} alt="not found"/>
              <span className="left">{resList}</span>
              </span>
            
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
return {
    ...state ,
    restaurants: state.restaurants,
    names: state.name
}}
const mapDispatchToProps = (dispatch) => {
    return{
        deleteUser: (id) => { dispatch ({type:'DELETE_USER', id:id})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
