import React,{Component} from 'react'
import {connect} from 'react-redux'
class Login extends Component{
    state= {
         name:null,
         number: null,
         password: null
    }
    handlechange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })}
    handleSubmit = (e) =>{
      e.preventDefault()
     this.props.addUser(this.state.name)
     this.props.history.push('/')
    }
    render(){
        return(
            <div className='container'>
                <h2 > Login </h2> 
            
                <form   onSubmit={this.handleSubmit} className="col s12">
                
                <label htmlFor="name">Name:</label>
                <input type='text' id="name" onChange={this.handlechange}/>
                 <label htmlFor="number"> mobile no:</label>
                  <input type='text' id="number" onChange={this.handlechange}/>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" onChange={this.handlechange}/>
                  <button>Submit</button>
                  <label>new user?</label>
                  <button className="red">Sign in</button>
                  
                  </form>
                
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addUser: (name) =>  {dispatch ({type:'ADD_USER' ,name:name })}
    }
}
export default connect(null,mapDispatchToProps)(Login)