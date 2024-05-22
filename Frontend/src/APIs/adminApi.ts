import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000'
})



export const getingUserData = async()=>{
    try {
        const UserData = await instance.get("/admin/getData") 
        
        return UserData.data
    } catch (error) {
        console.log(error);
        
    }
}


export const deleteData = async(id:string)=>{
    try {
        const Id = id
    console.log("id in admin secton",Id);

        const response = await instance.post(`/admin/delete/${Id}`)
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}