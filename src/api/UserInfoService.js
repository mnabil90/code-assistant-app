import axios from "axios";

class UserInfoService{
    getUserInfo(){
        return axios({
         method: "GET",
         url: "http://localhost:8067/e-HRWelfare/getUserInfo"
       })
     }
}

export default new UserInfoService();