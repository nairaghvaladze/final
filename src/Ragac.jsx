import React, {useState} from "react";
import axios from "axios";


function Ragac(){
  
  var [data, setdata]=useState([]);
    axios.get('https://jsonplaceholder.typicode.com/posts')

  .then(response => {


    console.log(response.data);
    setdata(response.data);
   
    
  })

  .catch(error => {

   

    console.error('Error:', error);

  });
  return(
    <div>

    <table className="table table-border">
        <thead>
            <tr>
                <th>id</th>
                <th>body</th>
                <th>title</th>
                <th>userid</th>
               
            </tr>
        </thead>
        <tbody>
            {data.map(item =>
            <tr>
                <td>{item.id}</td>
                <td>{item.body}</td>
                <td>{item.title}</td>
                <td>{item.userId}</td>

         
            </tr>)
            }
        </tbody>

    </table>
   
</div>
  ) 
}
export default Ragac()