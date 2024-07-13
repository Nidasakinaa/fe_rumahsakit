import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post.js";


function pushData(){
    let data = {
        namaPasien : getValue("pasienName"),
        gender : getValue("gender"),
        ttl : getValue("ttl"),
        status : getValue("status"),
        phone_number : getValue("phonenumber"),
        alamat : getValue("alamat"),
        doctor : {
            namaDokter : getValue("nama"),
            speciality : getValue("speciality"),
            contact : getValue("contact"),
        },
        medicalRecord :{
            visitDate : getValue("visitdate"),
            diganosis : getValue("diagnosis"),
            treatment : getValue("treatment"),
            notes : getValue("notes"),
        }
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);