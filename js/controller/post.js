import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function pushData() {
    let data = {
        pasienName: getValue("pasienName"),
        gender: getValue("gender"),
        ttl: getValue("ttl"),
        status: getValue("status"),
        phonenumber: getValue("phoneNumber"),
        alamat: getValue("alamat"),
        doctor: {
            name: getValue("name"),
        },
        medicalRecord: {
            diagnosa: getValue("diagnosis"),
        }
    };
    postData(urlPOST, data, AmbilResponse);
}

onClick("submitButton", pushData);
