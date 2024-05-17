import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

interface userDetails {
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
}

export const signup = async(userDetails:userDetails)=>{
    try {
        console.log("hello welcome");
        
        const response = await instance.post('/signup',userDetails)
        return response.data
    } catch (error) {
        console.log(error);
        
        
    }
}

