const blogmodel = require('../model/model');

exports.addblog=async(req,resp)=>{
    const new_blog=new blogmodel(req.body);
    const result=await new_blog.save();
    resp.status(200).json(result);
}
exports.showblogs=async(req,resp)=>{
   const blogs=await blogmodel.find();
   if (blogs!=null) {
    resp.status(200).json(blogs)
   } else {
    resp.status(404).json({message:'error'});
   }
}
exports.showblog=async(req,resp)=>{
   const blog=await blogmodel.findById(req.params.id);
   if (blog!=null) {
    resp.status(200).json(blog)
   } else {
    resp.status(404).json({message:'error'});
   }
}
exports.updateblogs=async(req,resp)=>{
   const blog=await blogmodel.findById(req.params.id);
   if (blog!=null) {
    const result =await blogmodel.findByIdAndUpdate(req.params.id,req.body);
    resp.status(200).json(result)
   } else {
    resp.status(404).json({message:'erro'});
   }
}
exports.deleteblogs=async(req,resp)=>{
   const blog=await blogmodel.findByIdAndDelete(req.params.id);
   if (blog!=null) {
    resp.status(200).json({message:'data delete'});
   } else {
    resp.status(404).json({message:'errror'});
   }
}
