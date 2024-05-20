import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

interface userDetails {
    name: string;
    email: string;
    password: string;
}

export const signup = async (userDetails: userDetails) => {
    try {
        console.log("hello welcome");

        const response = await instance.post('/signup', userDetails)

        return response.data

    } catch (error) {
        console.log(error);


    }
}

interface LogDetails {
    email: string
    password: string
}

export const login = async (logDetails: LogDetails) => {
    try {
        const response = await instance.post('/login', logDetails)
        return response.data
    } catch (error) {
        console.log(error);

    }

}

interface updateDetails {
    name: string
    phone: string
    email: string
    location: string
    image:File|null
}

export const updateDetails = async (updateDetails: updateDetails)=>{

    try {

        const response = await instance.post('/updateProfile', updateDetails)
        return response.data

    } catch (error) {
        console.log(error);

    }
}