import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

interface userDetails {
    name:string;
    email:string;
    password:string;
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

interface LogDetails{
    email:string
    password:string
}

export const login = async(logDetails:LogDetails)=>{
    try {
        const response = await instance.post('/login',logDetails)
        console.log(response.data);
    } catch (error) {
        console.log(error);
        
    }
   
    
}


