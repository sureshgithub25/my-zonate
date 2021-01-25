import React,{Component} from 'react'
import {connect} from 'react-redux'
import {TextField,Typography,Button} from '@material-ui/core'
class Login extends Component{
    state= {
         name:null,
         email: null,
         password: null
    }
    handlechange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })}
    handleSubmit = (e) =>{
      e.preventDefault()
      let a =this.state
      console.log(a);
      if(a.name&&a.email&&a.password){
     this.props.addUser(this.state.name)
     this.props.history.push('/')}
     else{
         alert("enter valid login detail");
     }
    }
    render(){
        return(
            <div className='contain'>
            
                <Typography variant="h2" > Login </Typography> 
            
                <form   onSubmit={this.handleSubmit} >
                
                <TextField
                      variant="outlined"
                        margin="normal"
                       required
            
                      id="name"
                     label="Name"
                      name="name"
                    onChange={this.handlechange}
                   />
                <TextField
                      variant="outlined"
                        margin="normal"
                        required
                      
                      id="email"
                     label="Email Address"
                      name="email"
                    autoComplete="email"
                    onChange={this.handlechange}
                   />
                  <TextField
                     variant="outlined"
                     margin="normal"
                     required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handlechange}
                    />
                  <br></br>
                  <Button
                    type="submit"
                   
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                    >
                    Log In
                </Button>
                  

                  </form>
                  <label>new user?</label>
                  <Button className="red" >Sign in</Button>
                  
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