import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import "./news.css"

function News() {
  const location = useLocation();
  const user = location.state?.user || {}
  const [data, setBlogList] = useState([]);


  useEffect(() => {
    
    axios.get('https://apitest.reachstar.io/blog/list')
      .then((response) => {
        setBlogList(response.data);
       
      })
      .catch((error) => {
        console.error('Error fetching blog list:', error);
       
      });
  }, []);

  
  const navigate = useNavigate();
  useEffect(() => {
      if ( !localStorage.getItem('success')) {
            navigate('/');
      }
  })
  
  const handleLogout = () => {
   
   
    window.localStorage.removeItem("success");
   

    console.log("Logged out");
    alert("Logged out");
    navigate('/')
  }

  const BlogCliCk = (blog) => {
 
 
  const { id, title, description } = blog;
  const newWindow = window.open(`/news/${id}`, '_blank');

   axios.get(`https://apitest.reachstar.io/blog/get/${id}`)
    .then((response) => {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="path/to/your/styles.css">
          <title>${title}</title>
          <style>
         }
         .main-container{
            height: 100vh;
            display:flex;
            flex-direction: column;
            
            align-items: center;
          
          
          }
          .comment-flexbox{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
          }
          .coment-text{
            margin:12px 0;
            font-weight:700;
          }
          .input-text{
            height:75px;
            width:400px;
            background-color:white;
           
        
          }
          .comment-button{
            height:40px;
            width:80px;
            background-color:blueviolet;
            color:white;
            border-radius:5px;
            border-style:none;
            cursor:pointer;
            margin-top:10px;
         
        
          }
          .comment-container {
            height:75px;
            width:400px;
            background-color:white;
            border-radius:5px;
            margin:10px 0;
            word-break:break-all;
          }
          .delete{
            height:30px;
            width:150px;
            background-color:red;
            color:white;
            cursor:pointer;
            border-radius:5px;
            border-style:none;
            font-weight:500;
          }
          .footer {
   
            height: 90px;
            background-color: blueviolet;
            position: fixed;
            width: 100%;
            bottom: 0;
            color: aliceblue;
        
        }
        .text1{
          text-align:center;
          display:flex;
          justify-content:center;
          align-item:center;
        }
          </style>
        </head>
        <body>
        <Navbar >
          <div class="container">
          <div class="row">
          <div class="col-12">
          
        


          <h2 >${title}</h2> 
          <div>
          <button onclick={delete(${id}) class="delete"}>პოსტის წაშლა</button>
          </div>

          <div>
         
          <p >${description}</p>
         
          
        <div class="main-container" id="commentContainer"></div>
        <div class="comment-flexbox">
          <h3 class="coment-text">კომენტარი</h3>
          <textarea class="input-text" id="commentInput"></textarea>
          <button onclick="submitComment()" class="comment-button">Submit</button>
        </div>

        <div class="footer">
           
            <p class="text1">&copy; 2024 .Created by Naira</p>
          </div>
        </body>
        <script>
       
        function deleteNews(id) {
         
          axios.delete(\`https://apitest.reachstar.io/blog/delete/\${id}\`)
            .then((response) => {
              console.log('წარმატებით წაიშალა', response.data);
             
            })
            .catch((error) => {
              console.error('Error deleting news:', error);
            });
        }
        

        function submitComment() {
            const commentInput = document.getElementById('commentInput');
            const commentContainer = document.getElementById('commentContainer');

            const comment = commentInput.value;
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-container';
            commentDiv.textContent = comment;

            commentContainer.appendChild(commentDiv);

           

            commentInput.value = ''; 
          }

        
       
      </script>
        </html>
      `);

      newWindow.document.close();
    })
    .catch((error) => {
      console.error('Error fetching blog content:', error);
    });
};


  return (
   <div className='container'>
    <div className='row'>
        <div className='col-md-12 col-sm-4'>
         <div className='main'>  
            <h1 className='mt-5'>ახალი ამბები </h1>
            <div>
           
            <button onClick={handleLogout} className='btn3'> გასვლა</button>
            </div>
  
            {data.map(item => (
            <div key={item.id} className='div1'>
              <h1>{item.title}</h1>
              <p className='text1'>{item.description}</p>
              <button onClick={() => BlogCliCk(item)} className='bt2'>
                უფრო დაწვრილებით
              </button>
            </div>
          ))}
         
       
            </div>
        </div>
    </div>
    </div>
  
   
  );
};

export default News;
