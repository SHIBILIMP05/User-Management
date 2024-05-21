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
    id: string;
    name: string;
    email: string;
    phone: string;
    image: string | File;
    location: string;
}

export const updateDetails = async ({ name, email, phone, image, id, location }: updateDetails) => {

    try {
        const data = new FormData()
        data.append("id", id)
        data.append("name", name)
        data.append("emil", email)
        data.append("phone", phone)
        data.append("image", image)
        data.append("location", location)

        const config = {
            header: {
                "content-type": "multipart/form-data",
                userId: id,
            },
            withCredentials: true,
        };

        console.log("updateDetails==>", data);


        const response = await instance.post('/updateProfile', data, config)
        return response.data

    } catch (error) {
        console.log(error);

    }
}