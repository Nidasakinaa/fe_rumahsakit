import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put.js";


function pushData(){
    
    let data = {
        pasienName : getValue("pasienName"),
        gender : getValue("gender"),
        ttl : getValue("ttl"),
        status : getValue("status"),
        phonenumber : getValue("phoneNumber"),
        alamat : getValue("alamat"),
        doctor : {
            name : getValue("doctorName"),
        },
        medicalRecord :{
            diagnosis : getValue("diagnosis"),
            
        }
    }
    putData(urlPUT, data, AmbilResponse);

}


onClick("submitButton", pushData);