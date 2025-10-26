import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, NavLink,useParams } from 'react-router-dom'

const Showblogs = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [blog,setBlog]=useState({})

  useEffect(()=>{
    axios.get(`http://localhost:4040/blog/blog/${id}`)
    .then((resp)=>setBlog(resp.data))
    .catch((err)=>console.log(err)
    )
    
  },[])
const handelDelete=()=>{
  axios.delete(`http://localhost:4040/blog/${id}`)
  .then(()=>navigate('/'))
    .catch((err)=>console.log(err))
}

  return (
   <>
   
        <div
      className="container"
    >
      <div
        className="row justify-content-center align-items-center g-2"
      >
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={blog.imageUrl} alt="Title" />
            <div className="card-body">
              <h4 className="card-title">{blog.title}</h4>
              <p className="card-text">{blog.content}</p>
              <p className="card-text">{blog.author}</p>
              <NavLink
                name=""
                id=""
                className="btn btn-primary"
                to={`/edit/${id}`}
                role="button"
                >Update</NavLink>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handelDelete}
                >
                  Delete
                </button>
                
              
            </div>
          </div>
          
        </div>
        
      </div>
      
    </div>
   

   
   </>
  )
}

export default Showblogs
