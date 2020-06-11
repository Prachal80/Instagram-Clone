import React,{useState,useContext} from 'react' 
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'

const Signin = ()=>{

  const {state,dispatch} = useContext(UserContext) 
  const history = useHistory()
  const [password,setPassword]= useState("")
  const [email,setEmail]= useState("")
  const PostData= ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
){
      M.toast({html: "Invalid email", classes:"#fc2837 red darken-3"})

      return
    }
    fetch("http://localhost:5000/signin",
    {
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        email,
        password
      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.error){
             M.toast({html: data.error, classes:"#fc2837 red darken-3"})
      }
      else{
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        dispatch({type:"USER",payload:data.user})
        M.toast({html:"sign in success", classes:"#3cd611 green darken-2"})
        history.push('/')

      }
    }).catch(err=>{
      console.log(err)
    })
  }
	return(
		<div className="mycard">
			<div className = "card auth-card input-field">
			
			
        		<h2>Instagram</h2>
        		  <input 
            type = "text"
            placeholder = "email"
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
            />

            <input 
            type = "text"
            placeholder = "password"
            value = {password}
            onChange = {(e)=>setPassword(e.target.value)}
            />

        		  <button class="btn waves-effect waves-light #64b5f6 blue lighten-2"  
              onClick={()=>PostData()}
              >
        		  Login
                  
                  </button>

                  <h5>
                  	<Link to="/signup">Create an an account </Link>
                  </h5>
     		</div>

		</div>
		)
}

export default Signin