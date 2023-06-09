import axios from "axios"

const http = axios.create({
    baseURL: "https://signlingo.azurewebsites.net/api/",
})

export class UserApiService{

    getAll(){
        return http.get("User/");
    }

    getUserById(id){
        return http.get(`User/${id}`);
    }
    CreateUser(){
        return http.post('User',user)
    }
}