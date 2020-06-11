import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {Link,useHistory} from 'react-router-dom'


const CreatePost = ()=>{
	const history = useHistory()
	const [title,setTitle] = useState("")
	const [body,setBody] = useState("")
	const [image,setImage] = useState("")
	const [url,setUrl] = useState("")
	useEffect(()=>{
		if(url){

			
	fetch("http://localhost:5000/createpost",
	    {
	      method:"post",
	      headers:{
	        "Content-Type":"application/json",
	        "Authorization":"Bearer "+localStorage.getItem("jwt")
	      },
	      body:JSON.stringify({
	       title,
	       body,
	       pic:url
	      })
	    }).then(res=>res.json())
	    .then(data=>{
	      
	      if(data.error){
	             M.toast({html: data.error, classes:"#fc2837 red darken-3"})
	      }
	      else{
	        M.toast({html:"Posted a few seconds ago", classes:"#3cd611 green darken-2"})
	        history.push('/')

      }
    }).catch(err=>{
      console.log(err)
    })

		}
	},[url])

	const postDetails= ()=>{
		const data = new FormData()
		data.append("file",image)
		data.append("upload_preset","insta-clone")
		data.append("cloud_name","dpz27maf4")
		fetch("https://api.cloudinary.com/v1_1/dpz27maf4/image/upload",{
			method:"post",
			body:data
		})
		.then(res=>res.json())
		.then(data=>
		{
			setUrl(data.url)
		}).catch(err=>{
			console.log(err)
		})
  }

return(

	<div className ="card input-field"
	style ={{
		margin:"30px auto",
		padding:"20px",
		maxWidth:"500px",
		textAlign:"center"
	 }}
	>

		<input
		 type="text" 
		 placeholder="title"
		 value = {title}
		 onChange = {(e)=>setTitle(e.target.value)}
		 />
		<input 
		type="text" 
		placeholder="body"
		value = {body}
		onChange = {(e)=>setBody(e.target.value)}
		/>

		  <div className="file-field input-field">
	      <div className="btn #03befc blue darken-1">
	      <span>Upload Image</span>
	       
	        <input type="file"
	        onChange = {(e)=>setImage(e.target.files[0])}/>
	        
	      </div>
	      <div className="file-path-wrapper">
	        <input className="file-path validate" type="text" />
	      </div>
	    </div>
    	<button className = "btn waves-effect waves-light #03befc blue darken-1 "
    	onClick={()=>postDetails()}
    	>
    	Submit Post
    	</button>
	</div>

	)

}




export default CreatePost