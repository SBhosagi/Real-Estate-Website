import axios from "axios";

const api=axios.create({
    baseURL:"https://real-estate-api-production-755d.up.railway.app/"
});


//get method
export const getPost=()=>{
    return api.get("/auth/login");
};

//delete method
export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`);
};

//post method
export const postData=(post)=>{
    return api.post("/posts",post);
};

//put method
export const update =(id,post)=>{
    return api.put(`/posts/${id}`,post);
}