import React,{useState, useEffect} from 'react';



const Form = (props) => {
	return (
		<div className="container">

			<div className="form-group">
				Title: 
				<input type="text" name="memory_name" className="form-control" />
			</div> 	

			<div className="form-group">
				Description:
				<textarea className="form-control" name="details" rows="3"/>
			</div> 



			<button type="button" className="btn btn-primary">submit</button>


			</div>
			)
}

export default Form;
