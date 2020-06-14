import React,{useEffect} from 'react' 

const Profile = ()=>{

	useEffect(()=>{

		fetch('/mypost',{
			headers:{
				"Authorization":"Bearer "+localStorage.getItem("jwt")
			}
		}).then(res=>res.json())
		.then(result=>{
			console.log(result)
		})
	},[])

	return(
		<div style={{maxWidth:"550px" ,margin: "0px auto"}}>
			<div style= {{
				display: "flex",
				justifyContent:"space-around",
				margin:"18px 0px",
				borderBottom:"1px solid grey"
			}}>
				<div>
					<img style={{width:"160px",height:"160px", borderRadius:"80px"}} 
					src = "https://avatars0.githubusercontent.com/u/23629478?s=400&v=4"	
					/>
				</div>
					<div>
					<h4>Prachal Patel</h4>
						<div style= {{display:"flex", justifyContent:"space-between", width:"108%"}}>
						<h6>40 posts</h6>
						<h6>1005 followers</h6>
						<h6>1209 following</h6>

						</div>
					</div>
			</div>

			<div className = "gallery"> 
			<img className = "item" src = "https://pbs.twimg.com/profile_images/1082126625334906883/0WRfVM0E_400x400.jpg"/>
			<img className = "item" src = "https://pbs.twimg.com/profile_images/1082126625334906883/0WRfVM0E_400x400.jpg"/>
			<img className = "item" src = "https://pbs.twimg.com/profile_images/1082126625334906883/0WRfVM0E_400x400.jpg"/>
			<img className = "item" src = "https://pbs.twimg.com/profile_images/1082126625334906883/0WRfVM0E_400x400.jpg"/>
			<img className = "item" src = "https://pbs.twimg.com/profile_images/1082126625334906883/0WRfVM0E_400x400.jpg"/>
			<img className = "item" src = "https://pbs.twimg.com/profile_images/1082126625334906883/0WRfVM0E_400x400.jpg"/>
			<img className = "item" src = "https://pbs.twimg.com/profile_images/1082126625334906883/0WRfVM0E_400x400.jpg"/>
			<img className = "item" src = "https://pbs.twimg.com/profile_images/1082126625334906883/0WRfVM0E_400x400.jpg"/>
			<img className = "item" src = "https://pbs.twimg.com/profile_images/1082126625334906883/0WRfVM0E_400x400.jpg"/>

			</div>
		
		</div>
		)
}

export default Profile