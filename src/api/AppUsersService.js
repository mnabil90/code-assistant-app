import { API_URL } from "../Constants";
import axios from "axios";
class AppUsersService{

    reterieveAll(){
        return axios.get(API_URL+'/appuser/getList');
    }
}

export default new AppUsersService();