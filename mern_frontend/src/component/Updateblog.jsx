import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const [blog,setBlog]=useState({})
  const navigate=useNavigate()
  const {id}=useParams()

useEffect(()=>{
        axios.get(`http://localhost:4040/blog/blog/${id}`)
        .then((resp)=>setBlog(resp.data))
        .catch((err)=>console.log(err))
    },[])

    const handelUpdate=(e)=>{
      e.preventDefault()
       axios.put(`http://localhost:4040/blog/${id}`,blog)
        .then(()=>navigate(`/${id}`))
        .catch((err)=>console.log(err))
    }

  return (
   <>
        <div
        className="container mt-5"
    >
        <div
            className="row justify-content-center align-items-center g-2"
        >
            <div className="col">
                
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Update Blog</h4>
                        <form onSubmit={handelUpdate}>
                            <div className="mb-3 mx-5">
                                <label for="" className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    placeholder=""
                                    value={blog.title}
                                    onChange={(e)=>setBlog({...blog,title:e.target.value})}
                                />
                            </div>
                            <div className="mb-3 mx-5">
                                <label for="" className="form-label">Content</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    placeholder=""
                                    value={blog.content}
                                    onChange={(e)=>setBlog({...blog,content:e.target.value})}
                                />
                            </div>
                            <div className="mb-3 mx-5">
                                <label for="" className="form-label">imageUrl</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    placeholder=""
                                    value={blog.imageUrl}
                                    onChange={(e)=>setBlog({...blog,imageUrl:e.target.value})}
                                />
                            </div>
                            <div className="mb-3 mx-5">
                                <label for="" className="form-label">author</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    placeholder=""
                                    value={blog.author}
                                    onChange={(e)=>setBlog({...blog,author:e.target.value})}
                                />
                            </div>
                           <div
                            class="container text-center"
                           >
                             <button
                                type="submit"
                                className="btn btn-primary "
                            >
                                Update
                            </button>
                           </div>
                           
                            
                        </form>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
   </>
  )
}

export default Update
