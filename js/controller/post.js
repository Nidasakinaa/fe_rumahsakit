import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function pushData() {
    let data = {
        pasienName: getValue("pasienName"),
        gender: getValue("gender"),
        usia: getValue("usia"),
        phonenumber: getValue("phonenumber"),
        alamat: getValue("alamat"),
        doctor: {
            name: getValue("name"),
        },
        medicalRecord: {
            diagnosis: getValue("diagnosis"),
        },
    };
    postData(urlPOST, data, AmbilResponse);
}

onClick("submitButton", pushData);
