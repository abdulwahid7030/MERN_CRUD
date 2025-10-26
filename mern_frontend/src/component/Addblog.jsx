import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Addblog = () => {
    const navigate=useNavigate()
    const [blog,setBlog]=useState({
        title:'',
        content:'',
        imageUrl:'',
        author:''
    })
    const handelSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4040/blog/add',blog)
        .then(()=> navigate('/'))
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
                        <div className="card-body">
                            <h4 className="card-title">Add Blog</h4>
                            <form onSubmit={handelSubmit}>

                                <div className="mb-3">
                                    <label for="" className="form-label">title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name=""
                                        id=""
                                        aria-describedby="helpId"
                                        placeholder=""
                                        onChange={(e)=>setBlog({...blog,title:e.target.value})}
                                    />
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">Content</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name=""
                                        id=""
                                        aria-describedby="helpId"
                                        placeholder=""
                                        onChange={(e)=>setBlog({...blog,content:e.target.value})}
                                    />
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">imageUrl</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name=""
                                        id=""
                                        aria-describedby="helpId"
                                        placeholder=""
                                        onChange={(e)=>setBlog({...blog,imageUrl:e.target.value})}
                                    />
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">author</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name=""
                                        id=""
                                        aria-describedby="helpId"
                                        placeholder=""
                                        onChange={(e)=>setBlog({...blog,author:e.target.value})}
                                    />
                                    <small id="helpId" className="form-text text-muted">Help text</small>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Add
                                </button>
                                
                                

                            </form>
                        </div>
                    </div>
                    
                </div>
               
            </div>
            
        </div>
        
    
    </>
  )
}

export default Addblog
