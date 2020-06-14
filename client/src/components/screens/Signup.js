import React,{useState} from 'react' 
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css' 
const Signin = ()=>{
  const history = useHistory()
  const [name,setName]= useState("")
  const [password,setPassword]= useState("")
  const [email,setEmail]= useState("")
  const PostData= ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
){
      M.toast({html: "Invalid email", classes:"#fc2837 red darken-3"})

      return
    }
    fetch("http://localhost:5000/signup",
    {
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
             M.toast({html: data.error, classes:"#fc2837 red darken-3"})
      }
      else{
        M.toast({html:data.message, classes:"#3cd611 green darken-2"})
        history.push('/signin')

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
        		placeholder = "name"
            value = {name}
            onChange = {(e)=>setName(e.target.value)}
        		/>        		

        		<input 
        		type = "text"
        		placeholder = "email"
            value = {email}
            onChange = {(e)=>setEmail(e.target.value)}
        		/>

        		<input 
        		type = "password"
        		placeholder = "password"
            value = {password}
            onChange = {(e)=>setPassword(e.target.value)}
        		/>

        		  <button class="btn waves-effect waves-light #64b5f6 blue darken-1" 
              onClick = {()=>PostData()}
               >
              
        		  Signup
                  
                  </button>

                  <h5>
                  	<Link to="/signin">Already have an account ?  </Link>
                  </h5>
     		</div>

		</div>
		)
}

export default Signin