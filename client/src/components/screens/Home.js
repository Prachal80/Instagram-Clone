import React from 'react' 

const Home = ()=>{

	return(
		<div className = "home">
			<div className = "card home-card">
			<h5>Prachal</h5>
				<div className = "card-image">
				<img src= "https://images.unsplash.com/photo-1542318421-1d7619edc046?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
				</div>

				<div className= "card-content">
				  <i className="material-icons" style={{color:"red"}}>favorite</i>
					<h6>title</h6>
					<p>This is a random post</p>
					<input type = "text" placeholder="add comment"/>
				</div>
			</div>	

			<div className = "card home-card">
			<h5>Prachal</h5>
				<div className = "card-image">
				<img src= "https://images.unsplash.com/photo-1542318421-1d7619edc046?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
				</div>

				<div className= "card-content">
				<i className="material-icons" style={{color:"red"}}>favorite</i>

					<h6>title</h6>
					<p>This is a random post</p>
					<input type = "text" placeholder="add comment"/>
				</div>
			</div>	

			<div className = "card home-card">
			<h5>Prachal</h5>
				<div className = "card-image">
				<img src= "https://images.unsplash.com/photo-1542318421-1d7619edc046?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"/>
				</div>

				<div className= "card-content">
				<i className="material-icons" style={{color:"red"}}>favorite</i>

					<h6>title</h6>
					<p>This is a random post</p>
					<input type = "text" placeholder="add comment"/>
				</div>
			</div>	


		</div>
		)
}

export default Home