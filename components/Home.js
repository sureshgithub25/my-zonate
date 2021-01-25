import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import food1 from './food1.png';
import user from './user.png';
import { AppBar,Button, Typography ,TextField,Toolbar,Link,Avatar} from '@material-ui/core'



  
class Home extends Component {

   

    state = {
        name: null
    }
    handlechange = (e) =>{
        this.setState({
            name : e.target.value 
        })
    }
    handlesubmit = (e) =>{
        e.preventDefault();
        console.log(this.props)
        console.log(this.state.name)
         let res = this.props.restaurants.find( restaurant => restaurant.name === this.state.name)
         
         if(res){  this.props.history.push('/'+res.id) }
         else {alert("no restaurant available of this name");}
        }
    
             
        
    
    handleLogout = () =>{
        alert("button working")
         this.props.deleteUser(1)
    }
    
    render(){
       
        const {restaurants} =this.props;
        
        const resList=  restaurants.map(restaurant=>{
                return(
                    <div  >
                        <Typography variant="h5" color="inherit">{restaurant.name}</Typography>
                        
                    </div>
                )
            })
        
        return(
            
            <div className="container">
              <AppBar position="static">
              <Toolbar>
              <Typography  variant="h6">my Zonate</Typography>
              
              
            
              <form onSubmit={this.handlesubmit}>
               <TextField  className="text" id="standard-basic" label="your Res." onChange={this.handlechange}/>
               </form>
               <Button className="button" color="inherit" onClick={this.handlesubmit} >search</Button>
               <Typography><Link href="/Login" color="inherit"> LOGIN </Link></Typography>
               <Button onClick={this.handleLogout} color="inherit">Logout</Button> 
               <Avatar src={user}>{this.props.names}</Avatar>
                
               
                </Toolbar>
              </AppBar>
              <span className="food"><img src={food1} alt="not found"/>
              <Typography className="left" variant="h6">{resList}</Typography>
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