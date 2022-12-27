import axios from "axios"


export async function callBackEndApi(method, url,data, params){


    return await axios({
        url:  url,
        method,
        data,
        
        params,
      });
   



}