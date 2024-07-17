import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put.js";


function pushData(){
    
    let data = {
        pasienName : getValue("pasienName"),
        gender : getValue("gender"),
        usia : getValue("usia"),
        phonenumber : getValue("phonenumber"),
        alamat : getValue("alamat"),
        doctor : {
            name : getValue("doctorName"),
        },
        medicalRecord :{
            diagnosa : getValue("diagnosis"),
            
        }
    }
    putData(urlPUT, data, AmbilResponse);

}


onClick("submitButton", pushData);