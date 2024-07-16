import { get } from "https://bukulapak.github.io/api/process.js"; 
import { isiTablePasien } from "./controller/get.js";
let urlAPI = "https://ws-rumahsakit-2e1eb71f14e2.herokuapp.com/pasien";
get(urlAPI,isiTablePasien);



