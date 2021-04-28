import React, {useState, useEffect} from 'react';

function Diary() {

const [data, setData] = useState([])

const apiGet = () =>{
	const apiUrl = 'http://localhost:8000/api/diaries';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
      	setData(json);
      });
      //.then((data) => console.log('This is your data', data));
}

useEffect(()=>{
	apiGet()
}, []);


  return (
    <div>
    	

    	
    	<p>
    		{JSON.stringify(data)}
    	</p>


    </div>
  )
}

export default Diary;