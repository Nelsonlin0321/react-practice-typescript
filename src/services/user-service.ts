import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserService{

    getAllUser() {

        const controller = new AbortController();
        
        const request = apiClient.get<User[]>("/users", {
        signal: controller.signal,
      })
        
        return {request,cancel:()=>controller.abort()};

    }
  
  getUser(id: number) {
    const controller = new AbortController();
    const request = apiClient.get<User>("/user/"+id, {
        signal: controller.signal,
    })
    
    return {request,cancel:()=>controller.abort()};
  }
  
  deleteUser(id: number) {
    const request = apiClient.delete("/users/"+id)
    return request
  }
  

  createUser(user: User) {
    console.log(user)
    const request = apiClient.post("/users", user);
    return request;
  }

  updateUser(user: User) {
    const request = apiClient.patch("/users/" + user.id, user);
    return request;
  }
}

export default new UserService();